import {expect} from 'chai';
import toHex from './toHex';

suite('toHex', () => {
    test('parameters other than color strings or color objects throw an error', () => {
        const objFn = () => toHex({});
        expect(objFn).to.throw('Color is not a string or a valid color object');

        const numberFn = () => toHex(1);
        expect(numberFn).to.throw('Color is not a string or a valid color object');

        const booleanFn = () => toHex(true);
        expect(booleanFn).to.throw('Color is not a string or a valid color object');

        const invalidStringFunction = () => toHex('444');
        expect(invalidStringFunction).to.throw('Color is not a string or a valid color object');
    });

    test('a long/short hex string can be converted into a hex color string', () => {
        const longHexWhiteActual = toHex('#ffffff');
        expect(longHexWhiteActual).to.deep.equal('#ffffff');

        const shortHexWhiteActual = toHex('#fff');
        expect(shortHexWhiteActual).to.deep.equal('#ffffff');
    });

    test('a rgb/rbga string can be converted into a hex color string', () => {
        const rgbActual = toHex('rgb(255,255, 255)');
        expect(rgbActual).to.deep.equal('#ffffff');

        const rgbaActual = toHex('rgba(255, 255,255, 0.5)');
        expect(rgbaActual).to.deep.equal('#ffffff');
    });

    test('a hsl/hsla string can be converted into a hex color string', () => {
        const hslActual = toHex('hsl(0,0%,100%)');
        expect(hslActual).to.deep.equal('#ffffff');

        const hslaActual = toHex('hsla(0,0%,100%,0.15)');
        expect(hslaActual).to.deep.equal('#ffffff');
    });

    test('a hsla color can be converted into a hex color string', () => {
        const hslaActual = toHex(getWhiteHsla(0.5));
        expect(hslaActual).to.deep.equal('#ffffff');
    });

    test('a rgba color can be converted into a hex color string', () => {
        const hslaActual = toHex(getWhiteRgba(0.5));
        expect(hslaActual).to.deep.equal('#ffffff');
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
