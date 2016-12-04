import {expect} from 'chai';
import getLuminance from './getLuminance';

suite('getLuminance', () => {
    test('the luminance of a dark color can be calculated', () => {
        const actual = getLuminance('#333');
        expect(actual).to.equal(0.2);
    });
    test('the luminance of a light color can be calculated', () => {
        const actual = getLuminance('#ccc');
        expect(actual).to.equal(0.8);
    });
});
