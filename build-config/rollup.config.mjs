import fs from "fs-jetpack"
import del from "rollup-plugin-delete"
import terser from "@rollup/plugin-terser"
import resolve from "@rollup/plugin-node-resolve"
import * as path from "node:path"

const packageInfo = fs.read("package.json", "json")

fs.write(
    "readme.md",
    fs.read("docs/index.md").replaceAll("$VERSION", packageInfo.version)
)

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
    },
    transform(code, id) {
        const dir = path.basename(
            path.dirname(id)
        )
        const file = path.basename(id)
        // console.log(dir !== "components" && file !== "built-in-macro.js", id)
        if (dir !== "components" && file !== "built-in-macro.js") {
            return code
        }
        const modified = code.replace(
            /`(.|\n)+?`/g,
            (match) => match.replace(/\n */g, " ").replace(/: +/g, ":")
        )
        // console.log(modified)
        return modified
    },
}

export default [
    {
        input: "lib/nc.js",
        output: [
            {
                file: "dist/ws-nc-esm.js",
                format: "esm",
            },
            {
                file: "dist/ws-nc-es5.js",
                format: "iife",
                name: "ws",
            }
        ],
        plugins: [
            del({ targets: "dist/*" }),
            resolve(),
            libVersion,
            terser(),
        ]
    },
    {
        input: "lib/full.js",
        output: [
            {
                file: "dist/ws-esm.js",
                format: "esm",
            },
            {
                file: "docs/ws-esm.js",
                format: "esm",
            },
            {
                file: "dist/ws-es5.js",
                format: "iife",
                name: "ws",
            },
        ],
        plugins: [
            resolve(),
            libVersion,
            terser(),
        ]
    },
    {
        input: "lib/full.js",
        output: [
            {
                file: "docs/ws-es5.js",
                format: "iife",
                name: "ws",
                sourcemap: true
            },
        ],
        plugins: [
            resolve(),
            libVersion,
            terser()
        ]
    },
]
