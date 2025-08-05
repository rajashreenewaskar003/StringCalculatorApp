export function add(numbers) {
  if (numbers === "") {
    return 0;
  } else {
    const parts = numbers.split(",");
    return parts.map(Number).reduce((sum, n) => sum + n, 0);
  }
}
