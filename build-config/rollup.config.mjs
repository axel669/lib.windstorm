import path from "node:path"

import { minify } from "csso"
import fs from "fs-jetpack"
import del from "rollup-plugin-delete"
import sassc from "sass"
import terser from "@rollup/plugin-terser"
import yaml from "js-yaml"

const componentList = {
    resolveId(id) {
        if (id !== "$$css") {
            return
        }
        return id
    },
    load(id) {
        if (id !== "$$css") {
            return
        }

        const files = fs.find(
            "lib",
            { matching: ["**/*.sass", "!**/$*"] }
        )
        const styles = []
        for (const file of files) {
            styles.push({
                name: path.basename(file, path.extname(file)),
                style: minify(sassc.compile(file).css).css,
                // style: sassc.compile(file).css,
            })
        }

        return `export default ${JSON.stringify(styles)}`
    },
}
const simpleFuncs = {
    load(id) {
        if (id.endsWith(".yml") === false) {
            return
        }

        const simple = yaml.load(
            fs.read(id, "utf8")
        )
        const lines =
            Object.entries(simple.funcs)
            .map(
                ([name, prop]) => {
                    if (Array.isArray(prop) === true) {
                        const args = prop.map(
                            prop => `prop("${prop}", def)`
                        )
                        return `"${name}": (def) => rules(${args.join(",")})`
                    }
                    return `"${name}": (def) => prop("${prop}", def)`
                }
            )
        return `
            import { prop, rules } from "./css-gen.mjs"

            export default {
                ${lines.join(",\n")}
            }
        `
    }
}

export default {
    input: "lib/main.mjs",
    output: [
        {
            file: "dist/browser.js",
            format: "iife",
            name: "ws"
        },
        {
            file: ".ipsen/static/windstorm.js",
            format: "iife",
            name: "ws"
        },
        {
            file: "dist/module.mjs",
            format: "esm",
        },
    ],
    plugins: [
        del({ targets: "dist/*" }),
        componentList,
        simpleFuncs,
        terser(),
    ]
}
