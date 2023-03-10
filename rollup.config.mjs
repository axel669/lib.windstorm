import css from "rollup-plugin-import-css"

export default {
    input: "src/main.mjs",
    output: {
        file: "dist/windstorm.mjs",
        format: "esm"
    },
    plugins: [css()]
}
