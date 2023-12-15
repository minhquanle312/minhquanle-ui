// Libraries
import { ColorResult } from 'react-color';

export const isDarkColor = (hexcolor: any, alpha?: number) => {
  if (alpha) {
    if (alpha < 0.5) {
      return false;
    }

    return true;
  }

  const r = parseInt(hexcolor.substr(1, 2), 16);
  const g = parseInt(hexcolor.substr(3, 2), 16);
  const b = parseInt(hexcolor.substr(4, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  return yiq < 155;
};

export const hexWithAlpha = (color: ColorResult) => {
  if (color.hex === 'transparent') {
    return 'transparent';
  }

  let alpha = Math.round((color.rgb.a || 0) * 255).toString(16);

  if (alpha.length < 2) alpha = `0${alpha}`;

  const hexWithAlpha = color.hex + (alpha === 'ff' ? '' : alpha);

  return hexWithAlpha;
};

/**
 * Converts a hexadecimal color code to its corresponding RGB values.
 * @param {string} hexCode - The hexadecimal color code to convert.
 * @returns {Array} An array containing the RGB values.
 * @throws {Error} If the input is an invalid hexadecimal color code.
 */
export const hexToRgb = (hexCode: string): [number, number, number] => {
  let hex = hexCode.replace('#', '');
  const hexLen = hex.length;

  if (hexLen !== 3 && hexLen !== 6) {
    throw new Error('Invalid hexadecimal color code');
  }

  if (hexLen === 3) {
    hex = hex
      .split('')
      .map(char => char + char)
      .join('');
  }

  try {
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return [r, g, b];
  } catch (error) {
    throw new Error('Invalid hexadecimal color code');
  }
};

export const generateHeatMapColor = (
  value: number,
  maxValue: number,
  rgbColor: [number, number, number],
) => {
  // Normalize the value between 0.05 and 1
  const normalizedValue = value / maxValue + 0.05;

  // Set the base color components
  const baseRed = rgbColor[0];
  const baseGreen = rgbColor[1];
  const baseBlue = rgbColor[2];

  // Return the RGBA color as a string
  return `rgba(${baseRed},${baseGreen},${baseBlue},${normalizedValue})`;
};
