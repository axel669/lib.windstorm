import { minify } from "csso"
import fs from "fs-jetpack"
import del from "rollup-plugin-delete"
import sassc from "sass"

const componentList = {
    resolveId(id) {
        if (id !== "$$components") {
            return
        }
        return id
    },
    buildEnd() {
        const files = fs.find(
            "src",
            { matching: ["**/*.sass", "!**/$*"] }
        )
        for (const file of files) {
            this.emitFile({
                type: "asset",
                fileName: `${file.slice(8, -4)}css`,
                source: sassc.compile(file).css
            })
        }
    }
}

export default {
    input: "src/main.mjs",
    output: {
        file: "dist/windstorm.mjs",
        format: "esm"
    },
    plugins: [
        del({ targets: "dist/*" }),
        componentList,
    ]
}