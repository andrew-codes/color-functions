import {
    isValidColor
} from './colorValidityChecks';
import {
    convertHslaToRgba,
    convertHslStringToHsla,
    convertRgbaToHex,
    convertRgbStringToRgba,
    convertShortHexToLongHex
} from './colorConverters';

export default (color) => {
    if (!isValidColor(color)) {
        throw new Error('Color is not a string or a valid color object');
    }
    return [
        convertShortHexToLongHex,
        convertHslStringToHsla,
        convertHslaToRgba,
        convertRgbStringToRgba,
        convertRgbaToHex
    ]
        .reduce((convertedColorValue, converter) => converter(convertedColorValue), color);
};
