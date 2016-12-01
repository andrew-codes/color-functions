import {expect} from 'chai';
import toHsla from './toHsla';

suite('toHsla', () => {
    test('parameters other than color strings or color objects throw an error', () => {
        const objFn = () => toHsla({});
        expect(objFn).to.throw('Color is not a string or a valid color object');

        const numberFn = () => toHsla(1);
        expect(numberFn).to.throw('Color is not a string or a valid color object');

        const booleanFn = () => toHsla(true);
        expect(booleanFn).to.throw('Color is not a string or a valid color object');

        const invalidStringFunction = () => toHsla('444');
        expect(invalidStringFunction).to.throw('Color is not a string or a valid color object');
    });

    test('a long/short hex string can be converted into an hsla color object', () => {
        const longHexWhiteActual = toHsla('#ffffff');
        expect(longHexWhiteActual).to.deep.equal(getWhiteHsla());

        const shortHexWhiteActual = toHsla('#fff');
        expect(shortHexWhiteActual).to.deep.equal(getWhiteHsla());
    });

    test('a rgb/rbga string can be converted into an hsla color object', () => {
        const rgbActual = toHsla('rgb(255,255, 255)');
        expect(rgbActual).to.deep.equal(getWhiteHsla());

        const rgbaActual = toHsla('rgba(255, 255,255, 0.5)');
        expect(rgbaActual).to.deep.equal(getWhiteHsla(0.5));
    });

    test('a hsl/hsla string can be converted into an hsla color object', () => {
        const hslActual = toHsla('hsl(0,0%,100%)');
        expect(hslActual).to.deep.equal(getWhiteHsla());

        const hslaActual = toHsla('hsla(0,0%,100%,0.15)');
        expect(hslaActual).to.deep.equal(getWhiteHsla(0.15));
    });

    test('a rgba color can be converted to a hsla color', () => {
        const hslaActual = toHsla(getWhiteRgba(0.5));
        expect(hslaActual).to.deep.equal(getWhiteHsla(0.5));
    });

    test('a hsla color returns itself', () => {
        const rgbaActual = toHsla(getWhiteHsla(0.5));
        expect(rgbaActual).to.deep.equal(getWhiteHsla(0.5));
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
        saturation: 0,
        luminance: 1,
        type: 'hsla'
    }
}
