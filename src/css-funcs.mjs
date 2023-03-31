/*md
[@] API

# Wind CSS Functions
Windstorm provides a function for toggling the ws-x values, and will eventually
have an api to add custom functions to it (but I'm lazy for this version).
*/

const cssvalue = (value) =>
    (value.startsWith("&") === true)
        ? `var(--${value.slice(1)})`
        : value
const cssprop = (name, value) =>
    (value === undefined)
        ? ""
        : `${name}: ${cssvalue(value)}`
const simple = (name) =>
    (value) => [cssprop(name, value)]
const multi = (...names) =>
    (value) => names.map(
        (name) => cssprop(name, value)
    )

/*md
## wsx(object)
The wsx function takes an object where each key is a wind shorthand and each
value determines if it is used and what the argument is.
- Keys where the value is `null`, `undefined`, or `false` are ignored.
- Keys where the value is `true` are included without the argument syntax
- Keys with any other value are added as key[value]

```js
import { wsx } from "where-windstorm-is"

let colorVariable = "primary"
const wsxAttr = wsx({
    "@flat": true,
    "$color": colorVariable
})
// "@flat $color[primary]"
```
*/
const wsx = (obj) =>
    Object.entries(obj)
        .reduce(
            (list, [key, value]) => {
                if (value === null || value === undefined || value === false) {
                    return list
                }
                const part = (value === true) ? key : `${key}[${value}]`
                list.push(part)
                return list
            },
            []
        )
        .join(" ")

export { cssprop, simple, multi, wsx }
