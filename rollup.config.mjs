import sass from "rollup-plugin-sass"
import { minify } from "csso"

export default {
    input: "src/main.mjs",
    output: {
        file: "dist/windstorm.mjs",
        format: "esm"
    },
    plugins: [
        sass({
            output: false,
            // processor: css => minify(css).css
        })
    ]
}
