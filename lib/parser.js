const nomatch = Symbol("no match")

const parse = (str, options) => {

    const strmatch = (source) => {
        const l = source.length
        return () => {
            if (source === str.substr(parseIndex, l)) {
                parseIndex += l
                return source
            }
            return nomatch
        }
    }
    const regmatch = (reg) => {
        return () => {
            const c = str.charAt(parseIndex)
            if (reg.test(c) !== false) {
                parseIndex += 1
                return c
            }
            return nomatch
        }
    }
    let lastRule = null

    const $0 = strmatch("@")
    const $1 = strmatch(":")
    const $2 = regmatch(/[^;]/)
    const $3 = strmatch(";")
    const $4 = strmatch("*")
    const $5 = regmatch(/[a-z0-9_\-]/i)
    const $6 = strmatch("!")
    const $7 = regmatch(/[^{]/)
    const $8 = strmatch("{")
    const $9 = strmatch("}")
    const $10 = regmatch(/[a-zA-Z0-9\.\-_#\^\$\/]/)
    const $11 = strmatch("#")
    const $12 = regmatch(/[^;#]/)
    const $13 = regmatch(/[\s]/m)
    const seq$0 = () => {
        const indexReset = parseIndex
        let seq$0$0 = null
        let seq$0$1 = null
        if ((seq$0$0 = rule__()) === nomatch) { parseIndex = indexReset; return nomatch }
        if ((seq$0$1 = rule_rule()) === nomatch) { parseIndex = indexReset; return nomatch }

        return [seq$0$0, seq$0$1]
    }
    const join$0 = () => {
        const indexReset = parseIndex

        const rep$1 = parseIndex
        while ($2() !== nomatch) { }
        if (parseIndex - rep$1 === 0) { return nomatch }

        return str.slice(indexReset, parseIndex)
    }
    const join$1 = () => {
        const indexReset = parseIndex

        const rep$2 = parseIndex
        while ($2() !== nomatch) { }
        if (parseIndex - rep$2 === 0) { return nomatch }

        return str.slice(indexReset, parseIndex)
    }
    const join$2 = () => {
        const indexReset = parseIndex

        const rep$3 = parseIndex
        while ($5() !== nomatch) { }
        if (parseIndex - rep$3 === 0) { return nomatch }

        return str.slice(indexReset, parseIndex)
    }
    const join$3 = () => {
        const indexReset = parseIndex

        const rep$4 = parseIndex
        while ($7() !== nomatch) { }
        if (parseIndex - rep$4 === 0) { return nomatch }

        return str.slice(indexReset, parseIndex)
    }
    const join$4 = () => {
        const indexReset = parseIndex

        const rep$5 = parseIndex
        while ($10() !== nomatch) { }
        if (parseIndex - rep$5 === 0) { return nomatch }

        return str.slice(indexReset, parseIndex)
    }
    const seq$1 = () => {
        const indexReset = parseIndex
        let seq$1$0 = null
        let seq$1$1 = null
        let seq$1$2 = null
        if ((seq$1$0 = $1()) === nomatch) { parseIndex = indexReset; return nomatch }
        if ((seq$1$1 = rule__()) === nomatch) { parseIndex = indexReset; return nomatch }
        if ((seq$1$2 = rule_macroValue()) === nomatch) { parseIndex = indexReset; return nomatch }

        return [seq$1$0, seq$1$1, seq$1$2]
    }
    const join$5 = () => {
        const indexReset = parseIndex

        const rep$7 = parseIndex
        while ($12() !== nomatch) { }
        if (parseIndex - rep$7 === 0) { return nomatch }

        return str.slice(indexReset, parseIndex)
    }
    const seq$2 = () => {
        const indexReset = parseIndex
        let seq$2$0 = null
        let seq$2$1 = null
        if ((seq$2$0 = $11()) === nomatch) { parseIndex = indexReset; return nomatch }
        if ((seq$2$1 = join$5()) === nomatch) { parseIndex = indexReset; return nomatch }

        return [seq$2$0, seq$2$1]
    }
    const join$6 = () => {
        const indexReset = parseIndex

        const rep$9 = parseIndex
        while ($2() !== nomatch) { }
        if (parseIndex - rep$9 === 0) { return nomatch }

        return str.slice(indexReset, parseIndex)
    }

    const action_$ = (value) => value
    const rule_$ = () => {
        lastRule = "$"
        let indexReset = parseIndex
        let arg0 = null
        if ((arg0 = rule_rules()) === nomatch) { parseIndex = indexReset; return nomatch }

        const value = action_$(arg0)
        return value
    }
    const action_rules = (rules) => {
        return rules.map(rule => rule[1])

    }

    const rule_rules = () => {
        lastRule = "rules"
        let indexReset = parseIndex
        let arg0 = null
        const rep$0 = []
        let rep$0$part = null
        while ((rep$0$part = seq$0()) !== nomatch) { rep$0.push(rep$0$part) }
        arg0 = rep$0
        if (rule__() === nomatch) { parseIndex = indexReset; return nomatch }

        const value = action_rules(arg0)
        return value
    }
    const rule_rule = () => {
        let result = null

        if ((result = rule_rule$0()) !== nomatch) { return result }
        if ((result = rule_rule$1()) !== nomatch) { return result }
        if ((result = rule_rule$2()) !== nomatch) { return result }
        if ((result = rule_rule$3()) !== nomatch) { return result }

        return nomatch
    }

    const action_rule$0 = (value) => value
    const rule_rule$0 = () => {
        lastRule = "rule$0"
        let indexReset = parseIndex
        let arg0 = null
        if ((arg0 = rule_variable()) === nomatch) { parseIndex = indexReset; return nomatch }

        const value = action_rule$0(arg0)
        return value
    }

    const action_rule$1 = (value) => value
    const rule_rule$1 = () => {
        lastRule = "rule$1"
        let indexReset = parseIndex
        let arg0 = null
        if ((arg0 = rule_css()) === nomatch) { parseIndex = indexReset; return nomatch }

        const value = action_rule$1(arg0)
        return value
    }

    const action_rule$2 = (value) => value
    const rule_rule$2 = () => {
        lastRule = "rule$2"
        let indexReset = parseIndex
        let arg0 = null
        if ((arg0 = rule_subrule()) === nomatch) { parseIndex = indexReset; return nomatch }

        const value = action_rule$2(arg0)
        return value
    }

    const action_rule$3 = (value) => value
    const rule_rule$3 = () => {
        lastRule = "rule$3"
        let indexReset = parseIndex
        let arg0 = null
        if ((arg0 = rule_macro()) === nomatch) { parseIndex = indexReset; return nomatch }

        const value = action_rule$3(arg0)
        return value
    }
    const action_variable = (name, value) => {
        return { type: "var", name, value }

    }

    const rule_variable = () => {
        lastRule = "variable"
        let indexReset = parseIndex
        let arg1 = null
        let arg4 = null
        if ($0() === nomatch) { parseIndex = indexReset; return nomatch }
        if ((arg1 = rule_cssName()) === nomatch) { parseIndex = indexReset; return nomatch }
        if ($1() === nomatch) { parseIndex = indexReset; return nomatch }
        if (rule__() === nomatch) { parseIndex = indexReset; return nomatch }
        if ((arg4 = join$0()) === nomatch) { parseIndex = indexReset; return nomatch }
        if ($3() === nomatch) { parseIndex = indexReset; return nomatch }

        const value = action_variable(arg1, arg4)
        return value
    }
    const action_css = (name, value) => {
        return { type: "css", name, value }

    }

    const rule_css = () => {
        lastRule = "css"
        let indexReset = parseIndex
        let arg1 = null
        let arg4 = null
        if ($4() === nomatch) { parseIndex = indexReset; return nomatch }
        if ((arg1 = rule_cssName()) === nomatch) { parseIndex = indexReset; return nomatch }
        if ($1() === nomatch) { parseIndex = indexReset; return nomatch }
        if (rule__() === nomatch) { parseIndex = indexReset; return nomatch }
        if ((arg4 = join$1()) === nomatch) { parseIndex = indexReset; return nomatch }
        if ($3() === nomatch) { parseIndex = indexReset; return nomatch }

        const value = action_css(arg1, arg4)
        return value
    }
    const action_cssName = (value) => value
    const rule_cssName = () => {
        lastRule = "cssName"
        let indexReset = parseIndex
        let arg0 = null
        if ((arg0 = join$2()) === nomatch) { parseIndex = indexReset; return nomatch }

        const value = action_cssName(arg0)
        return value
    }
    const action_subrule = (selector, rules) => {
        return { type: "alt", selector: selector.trim(), rules }

    }

    const rule_subrule = () => {
        lastRule = "subrule"
        let indexReset = parseIndex
        let arg2 = null
        let arg4 = null
        if ($6() === nomatch) { parseIndex = indexReset; return nomatch }
        if (rule__() === nomatch) { parseIndex = indexReset; return nomatch }
        if ((arg2 = join$3()) === nomatch) { parseIndex = indexReset; return nomatch }
        if ($8() === nomatch) { parseIndex = indexReset; return nomatch }
        if ((arg4 = rule_rules()) === nomatch) { parseIndex = indexReset; return nomatch }
        if ($9() === nomatch) { parseIndex = indexReset; return nomatch }

        const value = action_subrule(arg2, arg4)
        return value
    }
    const action_macro = (name, value) => {
        return { type: "macro", name, value: value?.[2] }

    }

    const rule_macro = () => {
        lastRule = "macro"
        let indexReset = parseIndex
        let arg0 = null
        let arg1 = null
        if ((arg0 = join$4()) === nomatch) { parseIndex = indexReset; return nomatch }
        const rep$6 = seq$1()
        arg1 = (rep$6 === nomatch) ? null : rep$6
        if ($3() === nomatch) { parseIndex = indexReset; return nomatch }

        const value = action_macro(arg0, arg1)
        return value
    }
    const rule_macroValue = () => {
        let result = null

        if ((result = rule_macroValue$0()) !== nomatch) { return result }
        if ((result = rule_macroValue$1()) !== nomatch) { return result }

        return nomatch
    }

    const action_macroValue$0 = (args) => {
        const val = args.map(
            arg => arg[1].trim()
        )
        val.arg = val.join(" ")
        return val

    }

    const rule_macroValue$0 = () => {
        lastRule = "macroValue$0"
        let indexReset = parseIndex
        let arg0 = null
        const rep$8 = []
        let rep$8$part = null
        while ((rep$8$part = seq$2()) !== nomatch) { rep$8.push(rep$8$part) }
        if (rep$8.length === 0) { return nomatch }
        arg0 = rep$8

        const value = action_macroValue$0(arg0)
        return value
    }

    const action_macroValue$1 = (value) => {
        const val = [value.trim()]
        val.arg = value
        return val

    }

    const rule_macroValue$1 = () => {
        lastRule = "macroValue$1"
        let indexReset = parseIndex
        let arg0 = null
        if ((arg0 = join$6()) === nomatch) { parseIndex = indexReset; return nomatch }

        const value = action_macroValue$1(arg0)
        return value
    }
    const action__ = () => undefined
    const rule__ = () => {
        lastRule = "_"
        let indexReset = parseIndex

        while ($13() !== nomatch) { }

        const value = action__()
        return value
    }

    let parseIndex = 0
    const result = rule_$()
    if (parseIndex !== str.length) {
        console.log("last", lastRule)
        console.log("@", parseIndex)
        console.log(str.slice(parseIndex - 10, parseIndex + 10))
        return new Error("End of input not found")
    }
    return result
}

export { parse }
