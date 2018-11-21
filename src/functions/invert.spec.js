import {expect} from 'chai';
import invert from './invert';

suite('invert', () => {
    test('a color can be inverted producing the opposite color', () => {
        const oppositeColor = invert('#fff');
        expect(oppositeColor).to.equal('#000000');
    });
});
