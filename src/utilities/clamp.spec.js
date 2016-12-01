import {expect} from 'chai';
import clamp from './clamp';

suite('clamp', () => {
    test('values over the max return the max value', () => {
        const actual = clamp(8, 0, 5);
        expect(actual).to.equal(5);
    });
    test('values under the min return the min value', () => {
        const actual = clamp(-1, 0, 5);
        expect(actual).to.equal(0);
    });
    test('values between the min and max return the same value', () => {
        const actual = clamp(1, 0, 5);
        expect(actual).to.equal(1);
    });
});
