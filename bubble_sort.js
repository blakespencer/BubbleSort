swap =  (i, arr) => {
  [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
};

const bubbleSort = (arr) => {
  let switchedNum = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] < arr[i]) {
      swap(i, arr);
      switchedNum = true;
    }
  }
  if (switchedNum) {
    return bubbleSort(arr);
  }
  return arr;
};


// const bubbleSort = (arr, limit = 1) => {
//   let switchedNum = false;
//   for (let i = 0; i < arr.length - limit; i++) {
//     console.log(i)
//     if (arr[i + 1] < arr[i]) {
//       const num = arr[i + 1];
//       arr[i + 1] = arr[i];
//       arr[i] = num;
//       switchedNum = true;
//     }
//   }
//   if (switchedNum) {
//     return bubbleSort(arr, limit + 1);
//   }
//   return arr;
// };


// const bubbleSort = function(arr) {
//   let times1 = 0;
//   return (function inner (arr) {
//     console.log(times1);
//     let switchedNum = false;
//     for (let i = 0; i < arr.length - times1; i++) {
//       if (arr[i + 1] < arr[i]) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//         switchedNum = true;
//       }
//     }
//     if (switchedNum) {
//       times1++;
//       return inner(arr);
//     }
//     return arr;
//   })(arr);
// };

