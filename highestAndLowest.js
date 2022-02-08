function highAndLow(numbers) {
  const numberArr = numbers.split(" ").map((item) => Number.parseInt(item));
  return `${Math.max(...numberArr)} ${Math.min(...numberArr)}`;
}