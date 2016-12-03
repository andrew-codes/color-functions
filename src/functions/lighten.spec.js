import {expect} from 'chai';
import lighten from './lighten';

suite('lighten', () => {
    test('a color can be darkened by a percentage amount', () => {
        const darkenedColor = lighten('#36dd66', 0.5);
        expect(darkenedColor).to.deep.equal({
            alpha: 1,
            b: 255,
            g: 255,
            r: 255,
            type: 'rgba'
        });
    });
    test('a color can be darkened by a percentage amount', () => {
        const darkenedColor = lighten('#36dd66', 0.25);
        expect(darkenedColor).to.deep.equal({
            alpha: 1,
            b: 185,
            g: 239,
            r: 163,
            type: 'rgba'
        });
    });
});
