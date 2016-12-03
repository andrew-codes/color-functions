import {expect} from 'chai';
import tint from './tint';

suite('shading colors', () => {
    test('shading a color will mix black with it by a specified percentage amount', () => {
        const shadedColor = tint('#36dd66', 0.5);
        expect(shadedColor).to.deep.equal({
            alpha: 1,
            b: 179,
            g: 238,
            r: 155,
            type: 'rgba'
        });
    });
});
