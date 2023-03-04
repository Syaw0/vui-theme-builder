type Rgb = { r: number; g: number; b: number };

const rgbToHex = (rgb: Rgb) => {
  const { r, g, b } = rgb;
  let result = "#";
  result += r.toString(16);
  result += g.toString(16);
  result += b.toString(16);

  return result;
};

export default rgbToHex;
