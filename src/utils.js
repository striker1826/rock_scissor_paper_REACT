import { wins } from "config";

export const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const calculateHand = (a, b) => {
  if (wins[a] === b) return 1;
  if (wins[b] === a) return -1;
  else return 0;
};
