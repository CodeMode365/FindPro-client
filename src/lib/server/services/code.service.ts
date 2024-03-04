export const generateCode = (digit: number = 6): string => {
  let x = "";
  while (true) {
    x += String(Math.round(Math.random() * 9));
    if (x.length >= digit) {
      break;
    }
  }
  return x;
};
