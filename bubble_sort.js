swap =  (i, arr) => {
  const num = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = num;
};

const bubbleSort = (arr) => {
  let switchedNum = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] < arr[i]) {
      // const num = arr[i + 1];
      // arr[i + 1] = arr[i];
      // arr[i] = num;
      swap(i, arr);
      switchedNum = true;
    }
  }
  if (switchedNum) {
    return bubbleSort(arr);
  }
  return arr;
};
