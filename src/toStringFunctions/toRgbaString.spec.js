import {expect} from 'chai';
import toRgbaString from './toRgbaString';

suite('convert colors to hsla strings', () => {
    test('short and long hex color strings can be converted to a hsla string', () => {
        const shortHexActual = toRgbaString('#fff');
        expect(shortHexActual).to.equal('rgba(255,255,255,1)');

        const longHexActual = toRgbaString('#ffffff');
        expect(longHexActual).to.equal('rgba(255,255,255,1)');
    });

    test('rgb and rbga strings can be converted to a hsla string', () => {
        const rgbStringActual = toRgbaString('rgb(255,255,255)');
        expect(rgbStringActual).to.equal('rgba(255,255,255,1)');

        const rgbaStringActual = toRgbaString('rgba(255,255,255,1)');
        expect(rgbaStringActual).to.equal('rgba(255,255,255,1)');
    });

    test('hsl and hsla strings can be converted to a hsla string', () => {
        const hslStringActual = toRgbaString('hsla(0,0%,100%)');
        expect(hslStringActual).to.equal('rgba(255,255,255,1)');

        const hslaStringActual = toRgbaString('hsla(0,0%,100%,1)');
        expect(hslaStringActual).to.equal('rgba(255,255,255,1)');
    });

    test('rgba can be converted to a hsla string', () => {
        const rgba = toRgbaString(getWhiteRgba());
        expect(rgba).to.equal('rgba(255,255,255,1)');
    });

    test('hsla can be converted to a hsla string', () => {
        const hsla = toRgbaString(getWhiteHsla());
        expect(hsla).to.equal('rgba(255,255,255,1)');
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
function getWhiteHsla(alpha = 1) {
    return {
        alpha,
        hue: 0,
        luminance: 1,
        saturation: 0,
        type: 'hsla'
    }
}
