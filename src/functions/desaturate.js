import clamp from './../utilities/clamp';
import toHsla from './../conversionFunctions/toHsla';
import toRgba from './../conversionFunctions/toRgba';

export default (color, amount) => {
    const hsla = toHsla(color);
    hsla.saturation -= amount;
    hsla.saturation = clamp(hsla.saturation, 0, 1);
    return toRgba(hsla);
};
