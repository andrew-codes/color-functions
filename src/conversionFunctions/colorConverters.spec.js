import {expect} from 'chai';
import {
    convertHslaToRgba,
    convertLongHexToRgba,
    convertRgbaToHex,
    convertRgbStringToRgba,
    convertRgbaToHsl,
    convertShortHexToLongHex,
    hueToRgb
} from './colorConverters';

suite('convertShortHexToLongHex', () => {
    test('colors other than short hex will pass through', () => {
        const longHexActual = convertShortHexToLongHex('#fffffff');
        expect(longHexActual).to.equal('#fffffff');
        const rgbStringActual = convertShortHexToLongHex('rgb(1,1,1)');
        expect(rgbStringActual).to.equal('rgb(1,1,1)');
        const rgbaStringActual = convertShortHexToLongHex('rgba(1,1,1,1)');
        expect(rgbaStringActual).to.equal('rgba(1,1,1,1)');
        const rgbaActual = convertShortHexToLongHex(getWhiteRgba());
        expect(rgbaActual).to.deep.equal(getWhiteRgba());
        const hslStringActual = convertShortHexToLongHex('hsl(0,0%,0%)');
        expect(hslStringActual).to.equal('hsl(0,0%,0%)');
        const hslaStringActual = convertShortHexToLongHex('hsla(0,0%,0%,1)');
        expect(hslaStringActual).to.equal('hsla(0,0%,0%,1)');
        const hslaActual = convertShortHexToLongHex(getBlueHsla());
        expect(hslaActual).to.deep.equal(getBlueHsla());
    });
    test('a short hex color value can be converted to a long hex color value', () => {
        const actual = convertShortHexToLongHex('#fff');
        expect(actual).to.equal('#ffffff');
    });
});

suite('convertLongHexToRgba', () => {
    test('colors other than long hex will pass through', () => {
        const shortHexActual = convertLongHexToRgba('#fff');
        expect(shortHexActual).to.equal('#fff');
        const rgbStringActual = convertLongHexToRgba('rgb(1,1,1)');
        expect(rgbStringActual).to.equal('rgb(1,1,1)');
        const rgbaStringActual = convertLongHexToRgba('rgbaActual(1,1,1,1)');
        expect(rgbaStringActual).to.equal('rgbaActual(1,1,1,1)');
        const rgbaActual = convertLongHexToRgba(getWhiteRgba());
        expect(rgbaActual).to.deep.equal(getWhiteRgba());
        const hslStringActual = convertLongHexToRgba('hsl(0,0%,0%)');
        expect(hslStringActual).to.equal('hsl(0,0%,0%)');
        const hslaStringActual = convertLongHexToRgba('hsla(0,0%,0%,1)');
        expect(hslaStringActual).to.equal('hsla(0,0%,0%,1)');
        const hslaActual = convertLongHexToRgba(getBlueHsla());
        expect(hslaActual).to.deep.equal(getBlueHsla());
    });
    test('a long hex color value can be converted to a rgba color object', () => {
        const actual = convertLongHexToRgba('#ffffff');
        expect(actual).to.deep.equal(getWhiteRgba());
    });
});

suite('convertRgbStringToRgba', () => {
    test('colors other than an rgb or rgba string will pass through', () => {
        const shortHexActual = convertRgbStringToRgba('#fff');
        expect(shortHexActual).to.equal('#fff');
        const longHexActual = convertRgbStringToRgba('#ffffff');
        expect(longHexActual).to.equal('#ffffff');
        const hslStringActual = convertRgbStringToRgba('hsl(0,0%,0%)');
        expect(hslStringActual).to.equal('hsl(0,0%,0%)');
        const hslaStringActual = convertRgbStringToRgba('hsla(0,0%,0%,1)');
        expect(hslaStringActual).to.equal('hsla(0,0%,0%,1)');
        const hsla = convertRgbStringToRgba(getBlueHsla());
        expect(hsla).to.deep.equal(getBlueHsla());
    });
    test('a rgb string can be converted to a rgba color', () => {
        const whiteRgbaActual = convertRgbStringToRgba('rgb(255,255, 255)');
        expect(whiteRgbaActual).to.deep.equal(getWhiteRgba());

        const blackRgbaActual = convertRgbStringToRgba('rgb(0,0, 0)');
        expect(blackRgbaActual).to.deep.equal(getBlackRgba());
    });
    test('a rgba string can be converted to a rgba color', () => {
        const actual = convertRgbStringToRgba('rgba(255,255, 255,0.5)');
        expect(actual).to.deep.equal(getWhiteRgba(0.5));
    });
});

suite('convertRgbaToHsl', () => {
    test('colors other than rgba will pass through', () => {
        const shortHexActual = convertRgbaToHsl('#fff');
        expect(shortHexActual).to.equal('#fff');
        const longHexActual = convertRgbaToHsl('#ffffff');
        expect(longHexActual).to.equal('#ffffff');
        const rgbStringActual = convertRgbaToHsl('rgb(255,255,255)');
        expect(rgbStringActual).to.equal('rgb(255,255,255)');
        const rbgStringActual = convertRgbaToHsl('rgba(255,255,255,1)');
        expect(rbgStringActual).to.equal('rgba(255,255,255,1)');
        const hslStringActual = convertRgbaToHsl('hsl(0,0%,0%)');
        expect(hslStringActual).to.equal('hsl(0,0%,0%)');
        const hslaStringActual = convertRgbaToHsl('hsla(0,0%,0%,1)');
        expect(hslaStringActual).to.equal('hsla(0,0%,0%,1)');
        const hsla = convertRgbaToHsl(getBlueHsla());
        expect(hsla).to.deep.equal(getBlueHsla());
    });
    test('a white rgba color can be converted to a hsla color', () => {
        const actual = convertRgbaToHsl(getWhiteRgba());
        expect(actual).to.deep.equal(getWhiteHsla());
    });
    test('a red rgba color can be converted to a hsla color', () => {
        const actual = convertRgbaToHsl(getRedRgba(0.5));
        expect(actual).to.deep.equal(getRedHsla(0.5))
    });
    test('a green rgba color can be converted to a hsla color', () => {
        const actual = convertRgbaToHsl(getGreenRgba(0.5));
        expect(actual).to.deep.equal(getGreenHsla(0.5))
    });
    test('a blue rgba color can be converted to a hsla color', () => {
        const actual = convertRgbaToHsl(getBlueRgba(0.5));
        expect(actual).to.deep.equal(getBlueHsla(0.5))
    });
    test('a rgba color can be converted to a hsla color', () => {
        const actual = convertRgbaToHsl(getWhiteRgba());
        expect(actual).to.deep.equal(getWhiteHsla());
    });
});

suite('convertHslaToRgba', () => {
    test('colors other than a hsla will pass through', () => {
        const shortHexActual = convertHslaToRgba('#fff');
        expect(shortHexActual).to.equal('#fff');
        const longHexActual = convertHslaToRgba('#ffffff');
        expect(longHexActual).to.equal('#ffffff');
        const rgbStringActual = convertHslaToRgba('rgb(255,255,255)');
        expect(rgbStringActual).to.equal('rgb(255,255,255)');
        const rbgStringActual = convertHslaToRgba('rgba(255,255,255,1)');
        expect(rbgStringActual).to.equal('rgba(255,255,255,1)');
        const hslStringActual = convertHslaToRgba('hsl(0,0%,0%)');
        expect(hslStringActual).to.equal('hsl(0,0%,0%)');
        const hslaStringActual = convertHslaToRgba('hsla(0,0%,0%,1)');
        expect(hslaStringActual).to.equal('hsla(0,0%,0%,1)');
    });
    test('a hsla color with no saturation can be converted to a rgba color', () => {
        const actual = convertHslaToRgba(getWhiteHsla(0.5));
        expect(actual).to.deep.equal(getWhiteRgba(0.5));
    });
    test('a light hsla color can be converted to a rgba color', () => {
        const actual = convertHslaToRgba(getBlueHsla(0.5));
        expect(actual).to.deep.equal(getBlueRgba(0.5));
    });
    test('a dark hsla color can be converted to a rgba color', () => {
        const actual = convertHslaToRgba(getDarkBlueHsa(0.5));
        expect(actual).to.deep.equal(getDarkBlueRgba(0.5));
    });
});

suite('convertRgbaToHex', () => {
    test('colors other than a hsla will pass through', () => {
        const shortHexActual = convertRgbaToHex('#fff');
        expect(shortHexActual).to.equal('#fff');
        const longHexActual = convertRgbaToHex('#ffffff');
        expect(longHexActual).to.equal('#ffffff');
        const rgbStringActual = convertRgbaToHex('rgb(255,255,255)');
        expect(rgbStringActual).to.equal('rgb(255,255,255)');
        const rbgStringActual = convertRgbaToHex('rgba(255,255,255,1)');
        expect(rbgStringActual).to.equal('rgba(255,255,255,1)');
        const hslStringActual = convertRgbaToHex('hsl(0,0%,0%)');
        expect(hslStringActual).to.equal('hsl(0,0%,0%)');
        const hslaStringActual = convertRgbaToHex('hsla(0,0%,0%,1)');
        expect(hslaStringActual).to.equal('hsla(0,0%,0%,1)');
    });
    test('a rgba color can be converted to a hex color string', () => {
        const actual = convertRgbaToHex(getWhiteRgba(0.5));
        expect(actual).to.equal('#ffffff');
    });
});

suite('hueToRgb', () => {
    test('a blue hue can be converted to rgb single value when the calculated hue percentage is less than 0%', () => {
        const actual = hueToRgb(0.399, 0.8, -0.195);
        expect(actual).to.equal(102);
    });
    test('a red hue can be converted to rgb single value when the hue percentage is less than 16.667%', () => {
        const actual = hueToRgb(0.399, 0.8, 0.138);
        expect(actual).to.equal(186);
    });
    test('a hue can be converted to rgb single value when the calculated hue percentage is between 16.667% than 50%', () => {
        const actual = hueToRgb(0.399, 0.8, 0.45);
        expect(actual).to.equal(204);
    });
    test('a hue can be converted to rgb single value when the calculated hue percentage is between 50% and 66.667%', () => {
        const actual = hueToRgb(0.399, 0.8, 0.6);
        expect(actual).to.equal(143);
    });
    test('a hue can be converted to rgb single value when the calculated hue percentage is greater than 100%', () => {
        const actual = hueToRgb(0.399, 0.8, 1.333);
        expect(actual).to.equal(204);
    });
});

function getWhiteRgba(alpha = 1) {
    return {
        alpha,
        b: 255,
        g: 255,
        r: 255,
        type: 'rgba'
    }
}
function getBlackRgba(alpha = 1) {
    return {
        alpha,
        b: 0,
        g: 0,
        r: 0,
        type: 'rgba'
    }
}
function getRedRgba(alpha = 1) {
    return {
        alpha,
        b: 102,
        g: 182,
        r: 204,
        type: 'rgba'
    }
}
function getGreenRgba(alpha = 1) {
    return {
        alpha,
        b: 102,
        g: 204,
        r: 182,
        type: 'rgba'
    }
}
function getBlueRgba(alpha = 1) {
    return {
        alpha,
        b: 204,
        g: 102,
        r: 182,
        type: 'rgba'
    }
}
function getDarkBlueRgba(alpha = 1) {
    return {
        alpha,
        b: 153,
        g: 51,
        r: 131,
        type: 'rgba'
    }
}
function getWhiteHsla(alpha = 1) {
    return {
        alpha,
        hue: 0,
        luminance: 1,
        saturation: 0,
        type: 'hsla'
    }
}
function getRedHsla(alpha = 1) {
    return {
        alpha,
        hue: 47,
        luminance: 0.6,
        saturation: 0.5,
        type: 'hsla'
    }
}
function getGreenHsla(alpha = 1) {
    return {
        alpha,
        hue: 73,
        luminance: 0.6,
        saturation: 0.5,
        type: 'hsla'
    }
}
function getBlueHsla(alpha = 1) {
    return {
        alpha,
        hue: 287,
        luminance: 0.6,
        saturation: 0.5,
        type: 'hsla'
    }
}
function getDarkBlueHsa(alpha = 1) {
    return {
        alpha,
        hue: 287,
        luminance: 0.4,
        saturation: 0.5,
        type: 'hsla'
    }
}
