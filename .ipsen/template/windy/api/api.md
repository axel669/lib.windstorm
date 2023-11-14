{| "#".repeat($.depth) |} {| $.info.name |}

{|^ if $.info.type.base === "function" |}
{|@ "function.md" |}
{|: else |}
{|@ "other.md" |}
{||}
