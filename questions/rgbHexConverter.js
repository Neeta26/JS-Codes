/**
 * The function takes three arguments corresponding to R,G and B values.
 * The function converts these values to corresponding HEX color code
 */
const rgbToHexConversion = (...rgbValues) => {
  let str = "";
  if (rgbValues.length > 3) {
    throw Error("Invalid Input");
  } else {
    let dpcolor;
    rgbValues.forEach((color) => {
      if (color > 255) {
        throw Error("Invalid Input");
      } else if (typeof color === "number") {
        color = color.toString(16);
        color.length === 1
          ? (dpcolor = "0" + color.toString())
          : (dpcolor = color.toString());
        str = str + dpcolor;
      } else {
        throw Error("Invalid Input");
      }
    });
  }
  return `#${str}`;
};
module.exports = rgbToHexConversion;
