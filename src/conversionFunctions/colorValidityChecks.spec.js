import {expect} from 'chai';
import {
    isColorObject,
    isHex,
    isHslaColorObject,
    isHslString,
    isLongHex,
    isRgbaColorObject,
    isRgbString,
    isShortHex,
    isValidColor
} from './colorValidityChecks';

suite('is a color valid?', () => {
    test('a valid color can be determined to if it is valid', () => {
        const shortHex = isValidColor('#fff');
        expect(shortHex).to.be.true;
        const longHex = isValidColor('#ffffff');
        expect(longHex).to.be.true;
        const rgb = isValidColor('rgb(255, 255,255)');
        expect(rgb).to.be.true;
        const rgba = isValidColor('rgb(255, 255,255,0.25)');
        expect(rgba).to.be.true;
        const hsl = isValidColor('hsl(0, 0%, 100%)');
        expect(hsl).to.be.true;
        const hsla = isValidColor('hsl(0, 0%, 100%, 0.25)');
        expect(hsla).to.be.true;
    });
    test('an invalid color can be determined to if it is valid', () => {
        const invalidString = isValidColor('444');
        expect(invalidString).to.be.false;
        const invalidObject = isValidColor({});
        expect(invalidObject).to.be.false;
        const booleanValue = isValidColor(true);
        expect(booleanValue).to.be.false;
        const numericValue = isValidColor(5);
        expect(numericValue).to.be.false;
    });
    test('a color can be determined to a valid short hex color string', () => {
        const shortHex = isShortHex('#fff');
        expect(shortHex).to.be.true;
        const longHex = isShortHex('#ffffff');
        expect(longHex).to.be.false;
        const rgb = isShortHex('rgb(255, 255,255)');
        expect(rgb).to.be.false;
        const rgba = isShortHex('rgb(255, 255,255,0.25)');
        expect(rgba).to.be.false;
        const hsl = isShortHex('hsl(0, 0%, 100%)');
        expect(hsl).to.be.false;
        const hsla = isShortHex('hsl(0, 0%, 100%, 0.25)');
        expect(hsla).to.be.false;
        const invalidString = isShortHex('444');
        expect(invalidString).to.be.false;
        const invalidObject = isShortHex({});
        expect(invalidObject).to.be.false;
        const booleanValue = isShortHex(true);
        expect(booleanValue).to.be.false;
        const numericValue = isShortHex(5);
        expect(numericValue).to.be.false;
    });
    test('a color can be determined to a valid long hex color string', () => {
        const longHex = isLongHex('#ffffff');
        expect(longHex).to.be.true;
        const shortHex = isLongHex('#fff');
        expect(shortHex).to.be.false;
        const rgb = isLongHex('rgb(255, 255,255)');
        expect(rgb).to.be.false;
        const rgba = isLongHex('rgb(255, 255,255,0.25)');
        expect(rgba).to.be.false;
        const hsl = isLongHex('hsl(0, 0%, 100%)');
        expect(hsl).to.be.false;
        const hsla = isLongHex('hsl(0, 0%, 100%, 0.25)');
        expect(hsla).to.be.false;
        const invalidString = isLongHex('444');
        expect(invalidString).to.be.false;
        const invalidObject = isLongHex({});
        expect(invalidObject).to.be.false;
        const booleanValue = isLongHex(true);
        expect(booleanValue).to.be.false;
        const numericValue = isLongHex(5);
        expect(numericValue).to.be.false;
    });
    test('a color can be determined to a valid hex color string', () => {
        const shortHex = isHex('#fff');
        expect(shortHex).to.be.true;
        const longHex = isHex('#ffffff');
        expect(longHex).to.be.true;
        const rgb = isHex('rgb(255, 255,255)');
        expect(rgb).to.be.false;
        const rgba = isHex('rgb(255, 255,255,0.25)');
        expect(rgba).to.be.false;
        const hsl = isHex('hsl(0, 0%, 100%)');
        expect(hsl).to.be.false;
        const hsla = isHex('hsl(0, 0%, 100%, 0.25)');
        expect(hsla).to.be.false;
        const invalidString = isHex('444');
        expect(invalidString).to.be.false;
        const invalidObject = isHex({});
        expect(invalidObject).to.be.false;
        const booleanValue = isHex(true);
        expect(booleanValue).to.be.false;
        const numericValue = isHex(5);
        expect(numericValue).to.be.false;
    });
    test('a color can be determined to a valid rgb or rbga color string', () => {
        const rgb = isRgbString('rgb(255, 255,255)');
        expect(rgb).to.be.true;
        const rgba = isRgbString('rgba(255, 255,255,0.25)');
        expect(rgba).to.be.true;
        const shortHex = isRgbString('#fff');
        expect(shortHex).to.be.false;
        const longHex = isRgbString('#ffffff');
        expect(longHex).to.be.false;
        const hsl = isRgbString('hsl(0, 0%, 100%)');
        expect(hsl).to.be.false;
        const hsla = isRgbString('hsl(0, 0%, 100%, 0.25)');
        expect(hsla).to.be.false;
        const invalidString = isRgbString('444');
        expect(invalidString).to.be.false;
        const invalidObject = isRgbString({});
        expect(invalidObject).to.be.false;
        const booleanValue = isRgbString(true);
        expect(booleanValue).to.be.false;
        const numericValue = isRgbString(5);
        expect(numericValue).to.be.false;
    });
    test('a color can be determined to a valid hsl or hsla color string', () => {
        const hsl = isHslString('hsl(0, 0%, 100%)');
        expect(hsl).to.be.true;
        const hsla = isHslString('hsl(0, 0%, 100%, 0.25)');
        expect(hsla).to.be.true;
        const shortHex = isHslString('#fff');
        expect(shortHex).to.be.false;
        const longHex = isHslString('#ffffff');
        expect(longHex).to.be.false;
        const rgb = isHslString('rgb(255, 255,255)');
        expect(rgb).to.be.false;
        const rgba = isHslString('rgb(255, 255,255,0.25)');
        expect(rgba).to.be.false;
        const invalidString = isHslString('444');
        expect(invalidString).to.be.false;
        const invalidObject = isHslString({});
        expect(invalidObject).to.be.false;
        const booleanValue = isHslString(true);
        expect(booleanValue).to.be.false;
        const numericValue = isHslString(5);
        expect(numericValue).to.be.false;
    });
    test('a color can be determined to a valid hsla color object', () => {
        const hslaObject = isHslaColorObject({type: 'hsla'});
        expect(hslaObject).to.be.true;
        const hsl = isHslaColorObject('hsl(0, 0%, 100%)');
        expect(hsl).to.be.false;
        const hsla = isHslaColorObject('hsl(0, 0%, 100%, 0.25)');
        expect(hsla).to.be.false;
        const shortHex = isHslaColorObject('#fff');
        expect(shortHex).to.be.false;
        const longHex = isHslaColorObject('#ffffff');
        expect(longHex).to.be.false;
        const rgb = isHslaColorObject('rgb(255, 255,255)');
        expect(rgb).to.be.false;
        const rgba = isHslaColorObject('rgb(255, 255,255,0.25)');
        expect(rgba).to.be.false;
        const invalidString = isHslaColorObject('444');
        expect(invalidString).to.be.false;
        const invalidObject = isHslaColorObject({});
        expect(invalidObject).to.be.false;
        const booleanValue = isHslaColorObject(true);
        expect(booleanValue).to.be.false;
        const numericValue = isHslaColorObject(5);
        expect(numericValue).to.be.false;
    });
    test('a color can be determined to a valid rgba color object', () => {
        const hslaObject = isRgbaColorObject({type: 'rgba'});
        expect(hslaObject).to.be.true;
        const hsl = isRgbaColorObject('hsl(0, 0%, 100%)');
        expect(hsl).to.be.false;
        const hsla = isRgbaColorObject('hsl(0, 0%, 100%, 0.25)');
        expect(hsla).to.be.false;
        const shortHex = isRgbaColorObject('#fff');
        expect(shortHex).to.be.false;
        const longHex = isRgbaColorObject('#ffffff');
        expect(longHex).to.be.false;
        const rgb = isRgbaColorObject('rgb(255, 255,255)');
        expect(rgb).to.be.false;
        const rgba = isRgbaColorObject('rgb(255, 255,255,0.25)');
        expect(rgba).to.be.false;
        const invalidString = isRgbaColorObject('444');
        expect(invalidString).to.be.false;
        const invalidObject = isRgbaColorObject({});
        expect(invalidObject).to.be.false;
        const booleanValue = isRgbaColorObject(true);
        expect(booleanValue).to.be.false;
        const numericValue = isRgbaColorObject(5);
        expect(numericValue).to.be.false;
    });
    test('a color can be determined to a valid color object', () => {
        const rgbaObject = isColorObject({type: 'rgba'});
        expect(rgbaObject).to.be.true;
        const hslaObject = isColorObject({type: 'rgba'});
        expect(hslaObject).to.be.true;
        const hsl = isRgbaColorObject('hsl(0, 0%, 100%)');
        expect(hsl).to.be.false;
        const hsla = isRgbaColorObject('hsl(0, 0%, 100%, 0.25)');
        expect(hsla).to.be.false;
        const shortHex = isRgbaColorObject('#fff');
        expect(shortHex).to.be.false;
        const longHex = isRgbaColorObject('#ffffff');
        expect(longHex).to.be.false;
        const rgb = isRgbaColorObject('rgb(255, 255,255)');
        expect(rgb).to.be.false;
        const rgba = isRgbaColorObject('rgb(255, 255,255,0.25)');
        expect(rgba).to.be.false;
        const invalidString = isRgbaColorObject('444');
        expect(invalidString).to.be.false;
        const invalidObject = isRgbaColorObject({});
        expect(invalidObject).to.be.false;
        const booleanValue = isRgbaColorObject(true);
        expect(booleanValue).to.be.false;
        const numericValue = isRgbaColorObject(5);
        expect(numericValue).to.be.false;
    });
});
