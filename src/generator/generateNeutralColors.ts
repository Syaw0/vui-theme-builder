type Hsl = { h: number; s: number; l: number };

const weights = [
  0, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100,
] as const;

const generateNeutralColors = (hsl: Hsl) => {
  const { h, s, l } = hsl;
  const neutral: any = {};
  const neutralVariant: any = {};

  weights.forEach((w) => {
    neutral["neutral" + w] = `hsl(${h},5%,${w}%)`;
    neutralVariant["neutralVariant" + w] = `hsl(${h},10%,${w}%)`;
  });
  return { neutral, neutralVariant };
};

export default generateNeutralColors;
