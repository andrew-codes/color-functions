import toHsla from './../conversionFunctions/toHsla';

export default (color) => {
    return toHsla(color).luminance;
};
