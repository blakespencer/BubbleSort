function split (wholeArray) {
  let half = wholeArray.length / 2;
  let firstHalf = wholeArray.slice(0, half);
  let secondHalf = wholeArray.slice(half);
  return [firstHalf, secondHalf];
}

function merge(left, right) {
  let output = [],
      leftInx = 0,
      rightInx = 0;
  while (leftInx < left.length && rightInx < right.length) {
    if (left[leftInx] < right[rightInx]) {
      output.push(left[leftInx]);
      leftInx++;
    } else {
      output.push(right[rightInx]);
      rightInx++
    }
  }
  for (;leftInx < left.length; leftInx++) output.push(left[leftInx]);
  for (;rightInx < right.length; rightInx++) output.push(right[rightInx]);
  return output;
}


function mergeSort(arr) {
  // let output = split(arr);
  // let left = output[0];
  // let right = output[1];
  // if (left.length !== 1 && right.length !== 1) {
  //   left = mergeSort(left);
  //   right = mergeSort(right);
  // } else if (right.length !== 1) {
  //   right = mergeSort(right);
  // } else if (left.length !== 1){
  //   left = mergeSort(left);
  // }
  // let final = merge([left, right]);

  // return final;
  if (arr.length < 2) {
    return arr;
  }
  let splits = split(arr);
  return merge(mergeSort(splits[0]), mergeSort(splits[1]));
}
