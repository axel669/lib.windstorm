{|^ for $.args -> arg |}
<ws-paper ws-x="@outline b-w[2px] m-l[16px]">
    <ws-flex>
        <div>
            <strong>{| arg.name |}</strong>
        </div>
        {|^ if arg.type |}
        <div>
        {| arg.type.base |}
        {|^ if arg.type.tags.length > 0 |}
        <em>{| arg.type.tags.join(", ") |}</em>
        {||}
        </div>
        {||}
        <div>{|md arg.desc |}</div>
        {|@ "args.md" # args: arg.props |}</ws-flex>
</ws-paper>
{||}
