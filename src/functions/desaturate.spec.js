import {expect} from 'chai';
import desaturate from './desaturate';

suite('saturate a color', () => {
    test('a color can be saturated by a percentage amount', () => {
        const saturatedColor = desaturate('#36dd66', 0.25);
        expect(saturatedColor).to.deep.equal({
            alpha: 1,
            b: 114,
            g: 192,
            r: 84,
            type: 'rgba'
        });
    });
});

