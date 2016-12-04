import clamp from './../utilities/clamp';
import toHsla from './../conversionFunctions/toHsla';
import toRgba from './../conversionFunctions/toRgba';

export default (color, amount) => {
    const hsla = toHsla(color);
    hsla.luminance += amount;
    hsla.luminance = clamp(hsla.luminance, 0, 1);
    return toRgba(hsla);
};
