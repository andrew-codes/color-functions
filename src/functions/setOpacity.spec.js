import {expect} from 'chai';
import setOpacity from './setOpacity';

suite('setOpacity', () => {
    test('the opacity of a color can be set', () => {
        const actual = setOpacity('#000', 0.5);
        expect(actual).to.deep.equal({
            alpha: 0.5,
            b: 0,
            g: 0,
            r: 0,
            type: 'rgba'
        });
    });
    test('the opacity of a color will not exceed 1 (100%)', () => {
        const actual = setOpacity('#000', 2.5);
        expect(actual).to.deep.equal({
            alpha: 1,
            b: 0,
            g: 0,
            r: 0,
            type: 'rgba'
        });
    });
    test('the opacity of a color will be at least 0 (0%)', () => {
        const actual = setOpacity('#000', -0.5);
        expect(actual).to.deep.equal({
            alpha: 0,
            b: 0,
            g: 0,
            r: 0,
            type: 'rgba'
        });
    });
});
