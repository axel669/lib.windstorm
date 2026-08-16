export default (l1, l2, l3) => `
    @l1: ${l1};
    @l2: ${l2};
    @l3: ${l3};
    @c1: hsl(@color, @l1);
    @c2: hsl(@color, @l2);
    @c3: hsl(@color, @l3);

    @fill: var(--fill-color, transparent);
    @text: var(--text-color, @c1);
    @border: var(--border-color, @c3);
    @active: @text;
`
