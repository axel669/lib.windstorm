{
	const prep = (value) => value?.replace(
    	/@([a-zA-Z0-9\-_]+)/g,
        (_, name) => `var(--${name})`
    )
}

Rules
	= rules:(_ Rule)* _ {
    	return rules.map(rule => rule[1])
    }

Rule = Variable / CSS / SubRule / Macro

Variable
	= "@" name:CSSName ":" _ value:$([^;]+) ";" {
    	return { type: "var", name, value: prep(value) }
    }
CSS
	= "*" name:CSSName ":" _ value:$([^;]+) ";" {
    	return { type: "css", name, value: prep(value) }
    }
CSSName
	= $([a-zA-Z0-9\-_]+)

SubRule
	= "!" _ selector:$([^{]+) _ "{" rules:Rules "}" {
    	return { type: "alt", selector: selector.trim(), rules }
    }

Macro
	= name:$([a-zA-Z0-9\.\-_#^]+) value:(":" _ $([^;]+))? ";" {
    	return { type: "macro", name, value: prep(value?.[2]) }
    }

_ "whitespace"
  = [ \t\n\r]*
