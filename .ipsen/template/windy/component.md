## Preview
<label ws-x="$control $color[primary] w[100%]">
    <span ws-x="$text">Preview Theme</span>
    <select>
        <option value="dark">Dark</option>
        <option value="tron">Tron</option>
        <option value="light">Light</option>
    </select>
</label>
<iframe ws-x="h[350px]"
srcdoc="{| `<html><head></head><body ws-x="@theme:dark">
    <script src="/windstorm.js"></script>
    <ws-flex ws-x='[p 8px]'>
    ${$.info}
    </ws-flex>
    <script src='/preview.mjs'></script>
    </body></html>`.replace(/\r?\n/g, "") |}
">
</iframe>
<script>
    const frame = document.querySelector("iframe")
    document.querySelector("select").addEventListener(
        "input",
        (evt) => frame.contentWindow.postMessage(evt.target.value)
    )
</script>

## Example

```html
{|* $.info |}
```
