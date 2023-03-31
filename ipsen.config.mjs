import fs from "node:fs"

fs.copyFileSync("dist/browser.js", "test/browser.js")

export default {
    title: "Windstorm Docs",
    source: {
        dir: "src",
        readme: "main.mjs",
        patterns: [
            "!examples/*",
            "!frames/*",
            // "**/*.sass",
        ],
    },
    dest: {
        clear: true,
        dir: "site",
        readme: ".",
    },
    site: {
        index: "main.mjs",
        defaultTheme: "dark",
    },
    examples: "test/comp",
    frames: "test",
}
