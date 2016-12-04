import {expect} from 'chai';
import desaturate from './desaturate';

suite('desaturate', () => {
    test('a color can be desaturated by a percentage amount', () => {
        const saturatedColor = desaturate('#36dd66', 0.25);
        expect(saturatedColor).to.deep.equal({
            alpha: 1,
            b: 114,
            g: 192,
            r: 84,
            type: 'rgba'
        });
    });
    test('a color can be desaturated by a maximum of 100%', () => {
        const saturatedColor = desaturate('#36dd66', 2.25);
        expect(saturatedColor).to.deep.equal({
            alpha: 1,
            b: 138,
            g: 138,
            r: 138,
            type: 'rgba'
        });
    });
    test('a color can be desaturated by a minimum of 0%', () => {
        const saturatedColor = desaturate('#36dd66', -2.25);
        expect(saturatedColor).to.deep.equal({
            alpha: 1,
            b: 87,
            g: 255,
            r: 20,
            type: 'rgba'
        });
    });
});

