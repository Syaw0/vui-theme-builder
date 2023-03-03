const hexToRgb = (color: string) => {
  const c = color.slice(1, color.length);
  let result = { r: 0, g: 0, b: 0 };
  if (c.length === 3) {
    result.r = parseInt(c.substring(0, 1), 16);
    result.g = parseInt(c.substring(1, 2), 16);
    result.b = parseInt(c.substring(2, 3), 16);
  } else {
    result.r = parseInt(c.substring(0, 2), 16);
    result.g = parseInt(c.substring(2, 4), 16);
    result.b = parseInt(c.substring(4, 6), 16);
  }
  return result;
};

export default hexToRgb;
