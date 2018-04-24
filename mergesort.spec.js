const array = [1, 2, 3, 4];

describe('Split Array function', function() {
  it('it is able to split array into two halves even', function() {

    expect(split(array)).toEqual([[1, 2],[3, 4]]);
  });
  it('it is able to split array into two halves odd', function() {
    expect(split([1, 2, 3, 4, 5])).toEqual([[1, 2],[3, 4, 5]]);
  });
});

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    expect(merge([1, 3], [2, 4])).toEqual([1, 2, 3, 4]);
  });
  it('is able to merge two sorted arrays into one sorted array even different', function() {
    expect(merge([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
  });
  it('is able to merge two sorted arrays into one sorted array odd good', function() {
    expect(merge([1, 2], [4, 5, 6])).toEqual([1, 2, 4, 5, 6]);
  });
  it('is able to merge two sorted arrays into one sorted array, odd different', function() {
    expect(merge([1, 3], [2, 4, 6])).toEqual([1, 2, 3, 4, 6]);
  });
});


describe('mergeSort', function() {
  it('while loop hack', function(){
    expect(mergeSort([1, 8, 3, 5])).toEqual([1, 3, 5, 8]);
  });
  it('while loop hack odd', function(){
    expect(mergeSort([1, 8, 3, 5, 4])).toEqual([1, 3, 4, 5, 8]);
  });
});
