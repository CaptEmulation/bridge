export const suitMap = {
  club: '♣',
  diamond: '♦',
  heart: '♥',
  spade: '♠',
};

export const colorMap = {
  '♣': 'black',
  '♦': 'red',
  '♥': 'red',
  '♠': 'black',
};

export function suitToColor(suit) {
  return colorMap[suit] || 'black';
}
