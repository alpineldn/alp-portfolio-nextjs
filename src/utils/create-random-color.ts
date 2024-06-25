const clr = [
  '#F0F0F0', // Light Gray
  '#D9D9D9', // Medium Gray
  '#A6A6A6', // Dark Gray
  '#8C8C8C', // Charcoal
  '#B3C6D1', // Light Blue
  '#6D9BC3', // Medium Blue
  '#345678', // Dark Blue
];

export function getRandomColor(): string {
  const randomIndex = Math.floor(Math.random() * clr.length);
  return clr[randomIndex];
}
