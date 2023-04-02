import path from "node:path"

import { minify } from "csso"
import fs from "fs-jetpack"
import del from "rollup-plugin-delete"
import sassc from "sass"
import terser from "@rollup/plugin-terser"

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
            "src",
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

export default {
    input: "src/main.mjs",
    output: [
        {
            file: "dist/browser.js",
            format: "iife",
            name: "windstorm"
        },
        {
            file: "dist/module.mjs",
            format: "esm",
        },
    ],
    plugins: [
        del({ targets: "dist/*" }),
        componentList,
        terser(),
    ]
}
