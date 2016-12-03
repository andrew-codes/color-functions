import {expect} from 'chai';
import darken from './darken';

suite('darken', () => {
    test('a color can be darkened by a percentage amount', () => {
        const darkenedColor = darken('#36dd66', 0.5);
        expect(darkenedColor).to.deep.equal({
            alpha: 1,
            b: 7,
            g: 17,
            r: 3,
            type: 'rgba'
        });
    });
});
