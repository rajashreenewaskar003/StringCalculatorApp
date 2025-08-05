export function add(numbers) {
  if (numbers === "") {
    return 0;
  }

   // Replace literal "\n" with actual newline if needed
  const sanitized = numbers.replace(/\\n/g, '\n');

  let delimiter = /[,\n]/; // default delimiters
  let numberSection = sanitized;

  // Check for custom delimiter
  if (sanitized.startsWith("//")) {
    const delimiterMatch = sanitized.match(/^\/\/(.+)\n/);
    if (delimiterMatch?.[1]) {
      const customDelimiter = delimiterMatch[1];
      delimiter = new RegExp(`[${customDelimiter}]`);
      numberSection = sanitized.slice(delimiterMatch[0].length);
    } else {
      // No valid delimiter found, fallback to default
      numberSection = sanitized.replace(/^\/\/\n/, '');
    }
  }

  return numberSection
    .split(delimiter)
    .map(n => Number(n.trim()))
    .reduce((sum, n) => sum + n, 0);
}
