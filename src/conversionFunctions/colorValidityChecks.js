const isString = color => typeof color === 'string';
export const isHex = color => isString(color) && color.indexOf('#') === 0;
export const isShortHex = color => isHex(color) && color.length === 4;
export const isLongHex = color => isHex(color) && color.length === 7;
export const isRgbString = color => isString(color) && color.startsWith('rgb');
export const isRgbaColorObject = color => color.type === 'rgba';
export const isHslString = color => isString(color) && color.startsWith('hsl');
export const isHslaColorObject = color => color.type === 'hsla';
export const isColorObject = color => isHslaColorObject(color) || isRgbaColorObject(color);
export const isValidColor = color => isColorObject(color) || (
    isString(color) && (isHex(color) || isRgbString(color) || (isHslString(color)))
);
