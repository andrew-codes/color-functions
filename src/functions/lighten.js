import toHsla from './../conversionFunctions/toHsla';
import toRgba from './../conversionFunctions/toRgba';

export default (color, amount) => {
    const hsla = toHsla(color);
    hsla.luminance += amount;
    return toRgba(hsla);
};
