const { sin, cos, PI } = Math

const p = (r, t) => {
    const a = (2 * PI * t) - PI / 2
    const x = cos(a) * r / 2 + 50
    const y = sin(a) * r / 2 + 50
    return `${x.toFixed(2)}% ${y.toFixed(2)}%`
}

console.log(
    [
        ...Array.from(
            { length: 7 },
            (_, i) => p(100, i / 6)
        ),
        ...Array.from(
            { length: 7 },
            (_, i) => p(90, i / 6)
        ).reverse(),
        ...Array.from(
            { length: 7 },
            (_, i) => p(80, i / 6)
        ),
        ...Array.from(
            { length: 7 },
            (_, i) => p(70, i / 6)
        ).reverse(),
    ].join(", ")
)
