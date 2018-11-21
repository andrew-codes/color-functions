import {expect} from 'chai';

import {
    clamp,
    darken,
    desaturate,
    getContrastRatio,
    getLuminance,
    invert,
    lighten,
    mix,
    saturate,
    setOpacity,
    shade,
    tint,
    toHex,
    toHexString,
    toHsla,
    toHslaString,
    toRgba,
    toRgbaString
} from './';

suite('color-functions index', () => {
    test('clamp function is exported', () => {
        expect(clamp).to.be.a('function');
    });
    test('toHsla function is exported', () => {
        expect(toHsla).to.be.a('function');
    });
    test('toRgba function is exported', () => {
        expect(toRgba).to.be.a('function');
    });
    test('toHex function is exported', () => {
        expect(toHex).to.be.a('function');
    });
    test('toHslaString function is exported', () => {
        expect(toHslaString).to.be.a('function');
    });
    test('toRgbaString function is exported', () => {
        expect(toRgbaString).to.be.a('function');
    });
    test('toHexString function is exported', () => {
        expect(toHexString).to.be.a('function');
    });
    test('mix function is exported', () => {
        expect(mix).to.be.a('function');
    });
    test('shade function is exported', () => {
        expect(shade).to.be.a('function');
    });
    test('tint function is exported', () => {
        expect(tint).to.be.a('function');
    });
    test('invert function is exported', () => {
        expect(invert).to.be.a('function');
    });
    test('lighten function is exported', () => {
        expect(lighten).to.be.a('function');
    });
    test('darken function is exported', () => {
        expect(darken).to.be.a('function');
    });
    test('saturate function is exported', () => {
        expect(saturate).to.be.a('function');
    });
    test('desaturate function is exported', () => {
        expect(desaturate).to.be.a('function');
    });
    test('getContrastRatio function is exported', () => {
        expect(getContrastRatio).to.be.a('function');
    });
    test('getLuminance function is exported', () => {
        expect(getLuminance).to.be.a('function');
    });
    test('setOpacity function is exported', () => {
        expect(setOpacity).to.be.a('function');
    });
});
