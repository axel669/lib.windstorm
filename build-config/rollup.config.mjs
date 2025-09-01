import path from "node:path"

import { minify } from "csso"
import fs from "fs-jetpack"
import del from "rollup-plugin-delete"
import sassc from "sass"
import terser from "@rollup/plugin-terser"

const packageInfo = fs.read("package.json", "json")

fs.write(
    "readme.md",
    fs.read("docs/index.md").replaceAll("$VERSION", packageInfo.version)
)
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
const libVersion = {
    resolveId(id) {
        if (id !== "$package") {
            return
        }
        return id
    },
    load(id) {
        if (id !== "$package") {
            return
        }
        const libInfo = {
            version: packageInfo.version,
            ...packageInfo.windSettings,
        }
        return `export default ${JSON.stringify(libInfo)}`
    }
}

export default {
    input: "lib/main.mjs",
    output: [
        {
            file: "dist/ws-esm.js",
            format: "esm",
        },
        {
            file: "dist/ws-standalone.js",
            format: "iife",
            name: "ws",
        },
        {
            file: "docs/windstorm.js",
            format: "iife",
            name: "ws",
            sourcemap: true,
        },
    ],
    plugins: [
        del({ targets: "dist/*" }),
        componentList,
        libVersion,
        terser(),
    ]
}
