import path from "node:path"

import { minify } from "csso"
import fs from "fs-jetpack"
import del from "rollup-plugin-delete"
import sassc from "sass"
import terser from "@rollup/plugin-terser"
import yaml from "js-yaml"

const componentList = {
    resolveId(id) {
        if (id !== "$$component-css") {
            return
        }
        return id
    },
    load(id) {
        if (id !== "$$component-css") {
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
                    const key = name.replace(/\./g, "\\\\.")
                    if (Array.isArray(prop) === true) {
                        const parts = prop.map(prop => `"${prop}: {$}"`)
                        return `--${key}: ${parts.join(" ")};`
                    }
                    return `--${key}: "${prop}: {$}";`
                }
            )
        return `export default \`${lines.join("")}\``
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
