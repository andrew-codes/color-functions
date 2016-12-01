import {
    isValidColor
} from './colorValidityChecks';
import {
    convertHslStringToHsla,
    convertLongHexToRgba,
    convertRgbaToHsl,
    convertRgbStringToRgba,
    convertShortHexToLongHex
} from './colorConverters';

export default (color) => {
    if (!isValidColor(color)) {
        throw new Error('Color is not a string or a valid color object');
    }
    return [
        convertShortHexToLongHex,
        convertLongHexToRgba,
        convertRgbStringToRgba,
        convertRgbaToHsl,
        convertHslStringToHsla
    ]
        .reduce((convertedColorValue, converter) => converter(convertedColorValue), color);
};
