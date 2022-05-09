export function average(list: number[]) {
  let total = 0;
  for (const number of list) {
    total += number;
  }
  return total / list.length;
}