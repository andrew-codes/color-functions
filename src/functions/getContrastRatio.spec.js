import {expect} from 'chai';
import getContrastRatio from './getContrastRatio';

suite('getting a color\'s contrast ratio', () => {
    test('the contrast ratio between black and white is the maximum contrast ratio of 21', () =>{
        const actual = getContrastRatio('#fff', '#000');
        expect(actual).to.equal(21);
    });
    test('the contrast ratio between two colors can be calculated', () =>{
        const actual = getContrastRatio('#ccc', '#333');
        expect(actual).to.equal(3.4);
    });
});
