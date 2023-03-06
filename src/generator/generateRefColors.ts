import hslToRgb from "../converter/hslToRgb";
import colorWeight from "./colorWeight";

type Hsl = { h: number; s: number; l: number };

const weights = [5, 10, 20, 30, 40, 50, 60, 70, 80, 90] as const;
const aWeights = [10, 20, 40, 70] as const;

const generateRefColors = (
  hsl: Hsl,
  contrastThreshold: number = 0.5,
  name: string
) => {
  const { h, s, l } = hsl;
  const colors: any = {};
  weights.forEach((w) => {
    const key = w as typeof weights[number];
    const hue = h;
    let saturation;
    let lightness;
    if (key === 50) {
      saturation = s * 0.01;
      lightness = l * 0.01;
    } else if (key < 50) {
      saturation =
        ((s - colorWeight.lightS) * colorWeight[`sat${key}`] +
          colorWeight.lightS) *
        0.01;
      lightness =
        ((l - colorWeight.lightL) * colorWeight[`light${key}`] +
          colorWeight.lightL) *
        0.01;
    } else {
      saturation =
        ((1 - colorWeight[`sat${key}`]) * 100 + colorWeight[`sat${key}`] * s) *
        0.01;
      lightness =
        (((1 - colorWeight[`light${key}`]) * l * l) / 100 +
          colorWeight[`light${key}`] * l) *
        0.01;
    }

    const rgb = hslToRgb({ h: hue, s: saturation * 100, l: lightness * 100 });
    const color = `hsl(${hue},${saturation * 100}%,${lightness * 100}%)`;
    let contrastLight: number =
      rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114 > 150 ? 0 : 100;
    // if(key===50){
    //   contrastLight = l * 0.01
    // }else if (key<50){
    //   contrastLight = (((1-colorWeight[`light${key}`])*100 + colorWeight[`light${key}`]*l)*0.01 - contrastThreshold) *-100
    // }else{
    //   contrastLight = (((((1-colorWeight[`light${key}`]) * l * l/100+colorWeight[`light${key}`] * l )*0.01)-contrastThreshold)*-100)
    // }

    const contrastColor = `hsl(0,0%,${contrastLight}%)`;
    colors[name + key] = color;
    colors["on" + name + key] = contrastColor;
  });
  aWeights.forEach((w) => {
    const key = w as typeof aWeights[number];
    const hue = h * colorWeight[`hueA${key}`];
    let saturation = colorWeight[`satA${key}`] * 100;
    let lightness = colorWeight[`lightA${key}`] * 100;

    const rgb = hslToRgb({ h: hue, s: saturation, l: lightness });
    const color = `hsl(${hue},${saturation}%,${lightness}%)`;
    let contrastLight: number =
      rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114 > 150 ? 0 : 100;

    const contrastColor = `hsl(0,0%,${contrastLight}%)`;
    colors[name + "A" + key] = color;
    colors["on" + name + "A" + key] = contrastColor;
  });
  return colors;
};

export default generateRefColors;
