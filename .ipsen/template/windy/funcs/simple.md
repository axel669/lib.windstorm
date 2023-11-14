<table ws-x="$color[primary]">
    <thead>
        <th>Wind Function</th>
        <th>CSS Properties</th>
    </thead>
    <tbody>
        {|^ for Object.entries($.info) -> pair |}
        <tr>
            <td>{| pair[0] |}</td>
            <td>
                {|^ if Array.isArray(pair[1]) === false |} {| pair[1] |} {|: else |} {|* pair[1].join("<br />") |} {||}
            </td>
        </tr>
        {||}
</table>
