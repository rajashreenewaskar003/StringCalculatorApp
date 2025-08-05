export function add(numbers) {
  if (numbers === "") {
    return 0;
  }

  // Replace literal "\n" with actual newline if needed
  const sanitized = numbers.replace(/\\n/g, '\n');

  // Split by comma or newline
  const parts = sanitized.split(/[\n,]/);

  // Convert to numbers and sum
  return parts
    .map(n => Number(n.trim()))
    .reduce((sum, n) => sum + n, 0);
}
