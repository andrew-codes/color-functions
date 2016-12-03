import {expect} from 'chai';
import saturate from './saturate';

suite('saturate a color', () => {
    test('a color can be saturated by a percentage amount', () => {
        const saturatedColor = saturate('#36dd66', 0.25);
        expect(saturatedColor).to.deep.equal({
            alpha: 1,
            b: 89,
            g: 250,
            r: 25,
            type: 'rgba'
        });
    });
});
