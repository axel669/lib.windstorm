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
        // if (id.endsWith(".sass") === false) {
        //     return
        // }
        if (id !== "$$css") {
            return
        }

        const files = fs.find(
            "src",
            { matching: ["**/*.sass", "!**/$*"] }
        )
        const styles = []
        for (const file of files) {
            styles.push(
                minify(sassc.compile(file).css).css
            )
            // this.emitFile({
            //     type: "asset",
            //     fileName: `${file.slice(8, -4)}css`,
            //     // source: sassc.compile(file).css
            //     source: minify(sassc.compile(file).css).css
            // })
        }

        return `export default ${JSON.stringify(styles)}`
    },
    // buildEnd() {
    //     const files = fs.find(
    //         "src",
    //         { matching: ["**/*.sass", "!**/$*"] }
    //     )
    //     for (const file of files) {
    //         this.emitFile({
    //             type: "asset",
    //             fileName: `${file.slice(8, -4)}css`,
    //             // source: sassc.compile(file).css
    //             source: minify(sassc.compile(file).css).css
    //         })
    //     }
    // }
}

export default {
    input: "src/main.mjs",
    output: [
        {
            file: "dist/windstorm.js",
            format: "iife",
            name: "windstorm"
        },
        {
            file: "dist/windstorm.mjs",
            format: "esm",
        },
    ],
    plugins: [
        del({ targets: "dist/*" }),
        componentList,
        // terser()
    ]
}
