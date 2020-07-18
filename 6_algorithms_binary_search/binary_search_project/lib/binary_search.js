const binarySearch = (array, target) => {
    if (array.length === 0) return false;

    let midIdx = Math.floor(array.length / 2);
    let leftHalf = array.slice(0, midIdx);
    let rightHalf = array.slice(midIdx + 1);

    if (target < array[midIdx]) {
        return binarySearch(leftHalf, target);
    } else if (target > array[midIdx]) {
        return binarySearch(rightHalf, target);
    } else {
        return true;
    }
}

// The array that we consider goes from array.slice(low, high + 1);
const binarySearchIndex = (array, target, low = 0, high = array.length - 1) => {
    if (low === high) return -1;

    let midIdx = Math.floor((low + high) / 2);

    if (target < array[midIdx]) {
        return binarySearchIndex(array, target, low, midIdx);
    } else if (target > array[midIdx]) {
        return binarySearchIndex(array, target, midIdx + 1, high);
    } else {
        return midIdx;
    }
}

console.log(binarySearchIndex([5, 10, 12, 15, 20, 30, 70], 12, 1, 1));


module.exports = {
    binarySearch,
    binarySearchIndex
};