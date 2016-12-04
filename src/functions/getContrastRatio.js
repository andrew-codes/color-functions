import getLuminance from './getLuminance';

const allowedContrastRatioDecimalPlaces = 2;

export default (color1, color2) => {
    const lum1 = getLuminance(color1);
    const lum2 = getLuminance(color2);
    const contrastRatio = (Math.max(lum1, lum2) + 0.05) / (Math.min(lum1, lum2) + 0.05);

    return Number(contrastRatio.toFixed(allowedContrastRatioDecimalPlaces));
};
