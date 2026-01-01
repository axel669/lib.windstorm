export default (core, alt) => `
    @core: ${core};
    @alt: ${alt};
    @core-color: hsl(@color, @core);
    @alt-color: hsl(@color, @alt);

    @fill: var(--fill-color, transparent);
    @text: var(--text-color, @core-color);
    @active: @text;
`
