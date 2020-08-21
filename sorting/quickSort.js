/*
arrays of 0 or 1 element are always sorted
select a pivot
move all elements smaller than pivot to the left and greater to the right
keep track of number of elements smaller of pivot to swap pivot to correct spot
this will put the pivot in the right spot in the array
order of elements on either side of pivot doesn't matter since we will recursively sort each side
repeat this process
 */

/*
choosing pivotIdx to be 0 every time would give a worst case time complexity of O(n^2)
best and average case time complexity are O(n*log n)
space complexity: O(log n)
*/

const pivot = (
  arr,
  start = Math.floor(Math.random() * arr.length),
  end = arr.length - 1
) => {
  let pivotIdx = start;
  const pivotElem = arr[start];
  let i = start + 1;
  let j = start - 1;

  while (i <= end) {
    const currElem = arr[i];
    if (pivotElem > currElem) {
      pivotIdx++;
      swap(arr, i, pivotIdx);
    }
    i++;
  }

  swap(arr, start, pivotIdx);
  start = pivotIdx;

  while (j >= 0) {
    const currElem = arr[j];
    if (pivotElem < currElem) {
      pivotIdx--;
      swap(arr, j, pivotIdx);
    }
    j--;
  }
  swap(arr, start, pivotIdx);
  return pivotIdx; // returns the index of the pivot element - this is its correct spot!
};

const swap = (arr, idx1, idx2) => {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left >= right) return arr;
  const idx = pivot(arr, left, right);
  quickSort(arr, left, idx - 1);
  quickSort(arr, idx + 1, right);
  return arr;
};

module.exports = quickSort;
