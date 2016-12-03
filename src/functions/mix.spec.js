import {expect} from 'chai';
import mix from './mix';

suite('mixing two colors', () => {
    test('mixing two colors by 0% amount produces the second color', () => {
        const mixedColor = mix('#000', '#333', 0);
        expect(mixedColor).to.deep.equal(getGrayRgba());
    });
    test('mixing two colors by 0% amount produces the second color', () => {
        const mixedColor = mix('rgba(0,0,0,1)', 'rgba(51,51,51,0)', 0);
        expect(mixedColor).to.deep.equal(getGrayRgba(0));
    });
    test('mixing two colors by 100% amount produces the first color', () => {
        const mixedColor = mix('#000', '#333', 1);
        expect(mixedColor).to.deep.equal(getBlackRgba());
    });
    test('two colors can be mixed by a percentage amount', () => {
        const mixedColor = mix('#36dd66', 'rgba(51,51,51)', 0.5);
        expect(mixedColor).to.deep.equal(getDarkGreen());
    });
    test('two colors, each with an alpha value, can be mixed by a percentage amount', () => {
        const mixedColor = mix('#36dd66', 'rgba(51,51,51,0.5)', 0.5);
        expect(mixedColor).to.deep.equal(getLighterGreen(0.75));
    });
});

function getGrayRgba(alpha = 1) {
    return {
        alpha,
        b: 51,
        g: 51,
        r: 51,
        type: 'rgba'
    }
}
function getBlackRgba(alpha = 1) {
    return {
        alpha,
        b: 0,
        g: 0,
        r: 0,
        type: 'rgba'
    }
}
function getDarkGreen(alpha = 1) {
    return {
        alpha,
        b: 77,
        g: 136,
        r: 53,
        type: 'rgba'
    };
}
function getLighterGreen(alpha = 1) {
    return {
        alpha,
        b: 89,
        g: 179,
        r: 53,
        type: 'rgba'
    };
}
