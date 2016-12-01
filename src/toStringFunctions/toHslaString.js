import toHsla from './../conversionFunctions/toHsla';

export default (color) => {
    const hsla = toHsla(color);
    return `hsla(${hsla.hue},${hsla.saturation * 100}%,${hsla.luminance * 100}%,${hsla.alpha})`;
}

