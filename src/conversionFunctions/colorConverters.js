import clamp from './../utilities/clamp';
import {
    isHslaColorObject,
    isHslString,
    isLongHex,
    isRgbaColorObject,
    isRgbString,
    isShortHex
} from './colorValidityChecks';

const roundHslValue = value => (Math.round(value * 100) / 100);

const getNonAlphaDigits = colorString => colorString
    .match(/\d+/g)
    .slice(0, 3)
    .map(value => parseInt(value, 10));

const getAlpha = (colorString) => {
    const alphaString = colorString.match(/([01]?\.\d*)/);
    if (!alphaString) {
        return 1;
    }
    return parseFloat(alphaString);
};

export const convertShortHexToLongHex = (color) => {
    if (!isShortHex(color)) {
        return color;
    }
    const longHex = [];
    color
        .substr(1)
        .split('')
        .forEach((hexDigit) => {
            longHex.push(hexDigit);
            longHex.push(hexDigit);
        });
    return `#${longHex.join('')}`;
};

export const convertLongHexToRgba = (color) => {
    if (!isLongHex(color)) {
        return color;
    }
    const rgb = color.substr(1)
        .match(/.{2}/g)
        .map(colorNumber => parseInt(colorNumber, 16));
    return {
        alpha: 1,
        b: rgb[2],
        g: rgb[1],
        r: rgb[0],
        type: 'rgba'
    };
};

export const convertRgbStringToRgba = (color) => {
    if (!isRgbString(color)) {
        return color;
    }
    const values = getNonAlphaDigits(color);
    const alpha = getAlpha(color);
    return {
        alpha,
        b: values[2],
        g: values[1],
        r: values[0],
        type: 'rgba'
    };
};

export const convertRgbaToHsl = (color) => {
    if (!isRgbaColorObject(color)) {
        return color;
    }
    const rgbaToConvert = {
        ...color,
        b: color.b / 255,
        g: color.g / 255,
        r: color.r / 255
    };
    const rgb = [rgbaToConvert.r, rgbaToConvert.g, rgbaToConvert.b];
    const max = Math.max(...rgb);
    const min = Math.min(...rgb);
    const luminance = roundHslValue((max + min) / 2);
    if (max === min) {
        return {
            alpha: color.alpha,
            hue: 0,
            luminance,
            saturation: 0,
            type: 'hsla'
        };
    }
    const d = max - min;
    const saturation = roundHslValue(luminance > 0.5 ? d / (2 - max - min) : d / (max + min));
    let hue;
    switch (max) {
        case rgbaToConvert.r:
            hue = ((rgbaToConvert.g - rgbaToConvert.b) / d)
                + (rgbaToConvert.g < rgbaToConvert.b ? 6 : 0);
            break;
        case rgbaToConvert.g:
            hue = ((rgbaToConvert.b - rgbaToConvert.r) / d) + 2;
            break;
        default:
            hue = ((rgbaToConvert.r - rgbaToConvert.g) / d) + 4;
            break;
    }
    hue *= 60;
    hue = Math.round(hue);
    return {
        alpha: color.alpha,
        hue,
        luminance,
        saturation,
        type: 'hsla'
    };
};

export const hueToRgb = (p, q, t) => {
    let newT = t;
    let outputValue;
    if (newT < 0) {
        newT += 1;
    }
    else if (newT > 1) {
        newT -= 1;
    }
    if (newT < 1.0 / 6.0) {
        outputValue = p + ((q - p) * (6 * newT));
    }
    else if (newT < 1.0 / 2.0) {
        outputValue = q;
    }
    else if (newT < 2.0 / 3.0) {
        outputValue = p + (((q - p) * ((2.0 / 3.0) - newT)) * 6);
    }
    else {
        outputValue = p;
    }
    return clamp(Math.round(outputValue * 255), 0, 255);
};

export const convertHslaToRgba = (color) => {
    if (!isHslaColorObject(color)) {
        return color;
    }
    if (color.saturation === 0) {
        return {
            alpha: color.alpha,
            b: 255,
            g: 255,
            r: 255,
            type: 'rgba'
        };
    }
    const q = color.luminance < 0.5
        ? color.luminance * (1 + color.saturation)
        : (color.luminance + color.saturation) - (color.luminance * color.saturation);
    const p = (2 * color.luminance) - q;
    const hueAsPercentage = color.hue / 360;
    return {
        alpha: color.alpha,
        b: hueToRgb(p, q, hueAsPercentage - (1.0 / 3.0)),
        g: hueToRgb(p, q, hueAsPercentage),
        r: hueToRgb(p, q, hueAsPercentage + (1.0/3.0)),
        type: 'rgba'
    };
};

export const convertHslStringToHsla = (color) => {
    if (!isHslString(color)) {
        return color;
    }
    const digits = getNonAlphaDigits(color);
    const alpha = getAlpha(color);
    return {
        type: 'hsla',
        hue: digits[0],
        saturation: roundHslValue(digits[1] / 100),
        luminance: roundHslValue(digits[2] / 100),
        alpha
    };
};

export const convertRgbaToHex = (color) => {
    if (!isRgbaColorObject(color)) {
        return color;
    }
    return `#${color.r.toString(16)}${color.g.toString(16)}${color.b.toString(16)}`;
};
