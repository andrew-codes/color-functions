import toRgba from './../conversionFunctions/toRgba';

export default (color1, color2, amount) => {
    const w = amount * 2 - 1;
    const rgba1 = toRgba(color1);
    const rgba2 = toRgba(color2);
    const a = rgba1.alpha - rgba2.alpha;
    const w1 = (((w * a === -1)
            ? w
            : (w + a) / (1 + w * a)) + 1) / 2.0;
    const w2 = 1 - w1;
    const r = Math.round(rgba1.r * w1 + rgba2.r * w2);
    const g = Math.round(rgba1.g * w1 + rgba2.g * w2);
    const b = Math.round(rgba1.b * w1 + rgba2.b * w2);
    const alpha = rgba1.alpha * amount + rgba2.alpha * (1 - amount);
    return {
        alpha,
        b,
        g,
        r,
        type: 'rgba'
    };
};
