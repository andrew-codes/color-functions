import {expect} from 'chai';
import darken from './darken';

suite('darken', () => {
    test('a color can be darkened by a percentage amount', () => {
        const darkenedColor = darken('#333', 0.5);
        expect(darkenedColor).to.deep.equal({
            alpha: 1,
            b: 0,
            g: 0,
            r: 0,
            type: 'rgba'
        });
    });
});
