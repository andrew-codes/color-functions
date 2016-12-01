import {
    isValidColor
} from './colorValidityChecks';
import {
    convertHslaToRgba,
    convertHslStringToHsla,
    convertLongHexToRgba,
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
        convertHslStringToHsla,
        convertHslaToRgba,
        convertRgbStringToRgba
    ]
        .reduce((convertedColorValue, converter) => converter(convertedColorValue), color);
};
