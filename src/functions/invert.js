
import toHex from './../conversionFunctions/toHex';

function padZero(str, len) {
    const length = len || 2;
    const zeros = new Array(length).join('0');
    return (zeros + str).slice(-length);
}

export default (hexString) => {
    const hex = toHex(hexString).slice(1);
    const r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16);
    const g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16);
    const b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    return `#${padZero(r)}${padZero(g)}${padZero(b)}`;
};