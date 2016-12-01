import {expect} from 'chai';

import {
    clamp,
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
});
