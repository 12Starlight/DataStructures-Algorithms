class MaxHeap {
  constructor() {
    this.array = [null];
  }

  getParent(idx) {
    return Math.floor(idx / 2);
  }

  getLeftChild(idx) {
    return idx * 2;
  }

  getRightChild(idx) {
    return idx * 2 + 1;
  }

  insert(val) {
    this.array.push(val);
    this.siftUp(this.array.length - 1);
  }

  siftUp(idx) {
    if (idx === 1) return;
    let parent = this.getParent(idx);

    if (this.array[idx] > this.array[parent]) {
      [this.array[parent], this.array[idx]] = [this.array[idx], this.array[parent]];
      this.siftUp(parent);
    }
  }

  deleteMax() {
    if (this.array.length === 2) return this.array.pop();
    if (this.array.length === 1) return null;

    let max = this.array[1];
    this.array[1] = this.array.pop();
    this.siftDown(1);

    return max;
  }

  siftDown(idx) {
    let arr = this.array;
    let leftIdx = this.getLeftChild(idx);
    let rightIdx = this.getRightChild(idx);
    let leftVal = arr[leftIdx];
    let rightVal = arr[rightIdx];

    if (leftVal === undefined) leftVal = -Infinity;
    if (rightVal === undefined) rightVal = -Infinity;

    if (arr[idx] > rightVal && arr[idx] > leftVal) return;

    let swapIdx;
    if (rightVal > leftVal) {
      swapIdx = rightIdx;
    } else {
      swapIdx = leftIdx
    }
    [arr[idx], arr[swapIdx]] = [arr[swapIdx], arr[idx]];
    this.siftDown(swapIdx);
  }
}

// const findKthLargest = (nums, k) => {
//   let sorted = nums.sort((a, b) => a - b);
//   return sorted[nums.length - k];
// };

const findKthLargest = (num, k) => {
  let heap = new MaxHeap();
  nums.forEach(num => heap.insert(num));

  for (let i = 1; i < k; i++) heap.deleteMax();
  return heap.deleteMax();
}