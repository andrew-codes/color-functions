import {expect} from 'chai';
import toHslaString from './toHslaString';

suite('convert colors to hsla strings', () => {
    test('short and long hex color strings can be converted to a hsla string', () => {
        const shortHexActual = toHslaString('#fff');
        expect(shortHexActual).to.equal('hsla(0,0%,100%,1)');

        const longHexActual = toHslaString('#ffffff');
        expect(longHexActual).to.equal('hsla(0,0%,100%,1)');
    });

    test('rgb and rbga strings can be converted to a hsla string', () => {
        const rgbStringActual = toHslaString('rgb(255,255,255)');
        expect(rgbStringActual).to.equal('hsla(0,0%,100%,1)');

        const rgbaStringActual = toHslaString('rgba(255,255,255,1)');
        expect(rgbaStringActual).to.equal('hsla(0,0%,100%,1)');
    });

    test('hsl and hsla strings can be converted to a hsla string', () => {
        const hslStringActual = toHslaString('hsla(0,0%,100%)');
        expect(hslStringActual).to.equal('hsla(0,0%,100%,1)');

        const hslaStringActual = toHslaString('hsla(0,0%,100%,1)');
        expect(hslaStringActual).to.equal('hsla(0,0%,100%,1)');
    });

    test('rgba can be converted to a hsla string', () => {
        const rgba = toHslaString(getWhiteRgba());
        expect(rgba).to.equal('hsla(0,0%,100%,1)');
    });

    test('hsla can be converted to a hsla string', () => {
        const hsla = toHslaString(getWhiteHsla());
        expect(hsla).to.equal('hsla(0,0%,100%,1)');
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
