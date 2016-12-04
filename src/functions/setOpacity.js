import toRgba from './../conversionFunctions/toRgba';
import clamp from './../utilities/clamp';

export default (color, alpha) => {
    const rgba = toRgba(color);
    rgba.alpha = clamp(alpha, 0, 1);
    return rgba;
};
