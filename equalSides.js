function findEvenIndex(arr) {
  let leftArr = 0;
  let rightArr = arr.slice(1, arr.length);

  let n = -1;
  if (!rightArr.length) {
    rightArr = [0];
  }
  if (leftArr === rightArr.reduce((acc, val) => acc + val)) {
    n = 0;
  } else {
    for (let i = 1; i < arr.length; i++) {
      leftArr = arr.slice(0, i);

      rightArr = arr.slice(i + 1, arr.length);
      if (!rightArr.length) {
        rightArr = [0];
      }
      if (
        leftArr.reduce((acc, val) => acc + val) ===
        rightArr.reduce((acc, val) => acc + val)
      ) {
        n = i;
        break;
      }
    }
  }
  return n;
}

console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]));
