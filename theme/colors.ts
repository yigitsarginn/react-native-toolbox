export const colors = {
  black: '#000000',
  white: '#FFFFFF',
  dark: '#121212',
  lightGrey: '#A7A7A7',
};

export const rgba = (color: Colors, alpha: number): string => {
  const themeColor = colors[color];
  const hex = themeColor.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
};

export type Colors = keyof typeof colors;
