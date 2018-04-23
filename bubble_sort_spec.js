describe("Bubble sort", function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it('it works with an odd length', function() {
    expect(bubbleSort([1, 3, 2])).toEqual([1, 2, 3]);
  });
  it('it works with even length', function(){
    expect(bubbleSort([1,2,4,3])).toEqual([1,2,3,4]);
  });
  it('it works with duplicate values', function() {
    expect(bubbleSort([1,2,3,2,2,2])).toEqual([1,2,2,2,2,3]);
  });
  it('it should swap it the right amount of times', function() {
    spyOn(window, 'swap').and.callThrough();
    bubbleSort([4, 6, 5, 1]);
    expect(swap.calls.count()).toEqual(4);
  });
});

