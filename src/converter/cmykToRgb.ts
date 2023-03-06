type Cmyk = { c: number; m: number; y: number; k: number };
const cmykToRgb = (cmyk: Cmyk) => {
  let { c, m, y, k } = cmyk;
  c /= 100;
  m /= 100;
  y /= 100;
  k /= 100;
  const r = 255 * (1 - c) * (1 - k);
  const g = 255 * (1 - m) * (1 - k);
  const b = 255 * (1 - y) * (1 - k);
  return { r, g, b };
};

export default cmykToRgb;

console.log(cmykToRgb({ c: 70, m: 0, y: 51, k: 34 }));
