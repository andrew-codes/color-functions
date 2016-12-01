import toRgba from './../conversionFunctions/toRgba';

export default (color) => {
    const rgba = toRgba(color);
    return `rgba(${rgba.r},${rgba.g},${rgba.b},${rgba.alpha})`;
}
