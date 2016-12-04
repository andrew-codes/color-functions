import {expect} from 'chai';
import saturate from './saturate';

suite('saturate', () => {
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
    test('a color can be desaturated by a maximum of 100%', () => {
        const saturatedColor = saturate('#36dd66', 2.25);
        expect(saturatedColor).to.deep.equal({
            alpha: 1,
            b: 87,
            g: 255,
            r: 20,
            type: 'rgba'
        });
    });
    test('a color can be desaturated by a minimum of 0%', () => {
        const saturatedColor = saturate('#36dd66', -2.25);
        expect(saturatedColor).to.deep.equal({
            alpha: 1,
            b: 138,
            g: 138,
            r: 138,
            type: 'rgba'
        });
    });
});
