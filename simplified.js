function findEvenIndex(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (
      arr.slice(0, i).reduce((a, b) => a + b) ===
      arr.slice(i + 1).reduce((a, b) => a + b)
    ) {
      return i;
    }
  }
  return -1;
}

console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]));
