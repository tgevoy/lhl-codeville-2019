/*
We'll complete a function festivalColours() that calculates the split complementary
colours for a given colour. We'll be working with a special colour system called HSL,
which stands for Hue, Saturation, and Lightness.

The function will receive an H(Hue) value, and must return an array of the values for
the two split complementary colours. The smaller number should be the first element, and
the larger number should be the second element.

You can take a peek at this website for the formula you'll need to use to calculate the
split complementary colours.
*/

const festivalColours = color1 => {
  /*
  formula: H1 = |(H0 + 150 degrees) - 360 degrees|
  formula: H2 = |(H0 + 210 degrees) - 360 degrees|
  */

  let hue = color1;

  let compColorVal1 = Math.abs(hue + 150 - 360);
  let saturation = Math.abs(compColorVal1 - 360);

  let compColorVal2 = Math.abs(hue + 210 - 360);
  let lightness = Math.abs(compColorVal2 - 360);

  return [saturation, lightness];
};
