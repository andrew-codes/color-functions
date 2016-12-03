import {expect} from 'chai';
import shade from './shade';

suite('shading colors', () => {
    test('shading a color will mix black with it by a specified percentage amount', () => {
        const shadedColor = shade('#36dd66', 0.5);
        expect(shadedColor).to.deep.equal({
            alpha: 1,
            b: 51,
            g: 111,
            r: 27,
            type: 'rgba'
        });
    });
});
