export function genArray(length, amount) {
  const array = Array.from({ length }, () => false);
  let count = 0;
  while (count < amount) {
    const randomIndex = Math.floor(Math.random() * length);
    if (!array[randomIndex]) {
      array[randomIndex] = true;
      count++;
    }
  }
  return array;
}