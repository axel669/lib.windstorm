**function**
{|^ if $.info.type.tags.length > 0 |}
*{| $.info.type.tags.join(", ") |}*
{||}

{|* $.info.desc |}

{|^ if $.info.args.length === 0 |}
Function does not take any arguments
{|: else |}

{| "#".repeat($.depth + 1) |} Arguments

<ws-flex ws-x="p[0px]">
{|@ "function/args.md" # args: $.info.args |}
</ws-flex>

{||}
