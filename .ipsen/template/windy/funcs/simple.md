<table ws-x="$color[primary]">
    <thead>
        <th>Macro</th>
        <th>CSS Properties</th>
    </thead>
    <tbody>
        {|^ for Object.entries($.info) -> pair |}
        <tr>
            <td><code>[{| pair[0] |} $]</code></td>
            <td>
                {|^ if Array.isArray(pair[1]) === false |} {| pair[1] |} {|: else |} {|* pair[1].join("<br />") |} {||}
            </td>
        </tr>
        {||}
</table>
