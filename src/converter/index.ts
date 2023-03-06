import hexToHsl from "./hexToHsl";

const hexRegex = /^#[a-f\d]{3}$|^#[a-f\d]{6}$/i;

const converter = (color: string) => {
  if (hexRegex.test(color)) {
    return hexToHsl(color);
  }
  throw new Error(
    `No scheme match this ${color}\nplease use valid color scheme`
  );
};
export default converter;
