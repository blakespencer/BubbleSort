function split(wholeArray) {
  let half = Math.round((wholeArray.length - 1) / 2);
  let firstHalf = wholeArray.slice(0, half);
  let secondHalf = wholeArray.slice(half,wholeArray.length);
  return [firstHalf, secondHalf];
}

function merge(nestedArr) {
  const output = [];
  let left = nestedArr[0];
  let right = nestedArr[1];
  while (nestedArr[0].length && nestedArr[1].length) {
    if (left[0] < right[0]) {
      output.push(left.shift());
    } else {
      output.push(right.shift());
    }
    left = nestedArr[0];
    right = nestedArr[1];
  }
  if (right) {
    output.push(...right);
  } else if (left) {
    output.push(...left);
  } return output;
}

