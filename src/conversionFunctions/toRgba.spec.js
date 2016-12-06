import {expect} from 'chai';
import toRgba from './toRgba';

suite('toRgba', () => {
    test('parameters other than color strings or color objects throw an error', () => {
        const objFn = () => toRgba({});
        expect(objFn).to.throw('Color is not a string or a valid color object');

        const numberFn = () => toRgba(1);
        expect(numberFn).to.throw('Color is not a string or a valid color object');

        const booleanFn = () => toRgba(true);
        expect(booleanFn).to.throw('Color is not a string or a valid color object');

        const invalidStringFunction = () => toRgba('444');
        expect(invalidStringFunction).to.throw('Color is not a string or a valid color object');
    });

    test('a long/short hex string can be converted into an rgba color', () => {
        const longHexWhiteActual = toRgba('#ffffff');
        expect(longHexWhiteActual).to.deep.equal(getWhiteRgba());

        const shortHexWhiteActual = toRgba('#fff');
        expect(shortHexWhiteActual).to.deep.equal(getWhiteRgba());
    });

    test('a rgb/rbga string can be converted into an rgba color', () => {
        const whiteRgbaActual = toRgba('rgb(255,255, 255)');
        expect(whiteRgbaActual).to.deep.equal(getWhiteRgba());

        const blackRgbaActual = toRgba('rgb(0,0, 0)');
        expect(blackRgbaActual).to.deep.equal(getBlackRgba());

        const rgbaActual = toRgba('rgba(255, 255,255, 0.5)');
        expect(rgbaActual).to.deep.equal(getWhiteRgba(0.5));
    });

    test('a hsl/hsla string can be converted into an rgba color', () => {
        const hslActual = toRgba('hsl(0,0%,100%)');
        expect(hslActual).to.deep.equal(getWhiteRgba());

        const hslaActual = toRgba('hsla(0,0%,100%,0.15)');
        expect(hslaActual).to.deep.equal(getWhiteRgba(0.15));
    });

    test('a hsla color can be converted into a rgba color', () => {
        const hslaActual = toRgba(getWhiteHsla(0.5));
        expect(hslaActual).to.deep.equal(getWhiteRgba(0.5));
    });

    test('a rgba color returns itself', () => {
        const rgbaActual = toRgba(getWhiteRgba(0.5));
        expect(rgbaActual).to.deep.equal(getWhiteRgba(0.5));
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

function getWhiteHsla(alpha = 1) {
    return {
        alpha,
        hue: 0,
        saturation: 0,
        luminance: 1,
        type: 'hsla'
    }
}
