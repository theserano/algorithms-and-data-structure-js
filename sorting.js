

export const InsertionSort = (arr) => {
    // use a for loop to iterate through the unsorted part of the array 
    // It is assumed that the first element of the array is sorted so the index is 1
    for(let i = 1; i < arr.length; i++){
        // store the number to insert in each iteration
        let numberToInsert = arr[i];
        let j = i - 1;
        // compare the sorted elements in the array with the nti trying to find the index where the insertion has to happen 
        while(j >= 0 && arr[j] > numberToInsert){
            arr[j + 1] = arr[j]
            j = j - 1
        }
        // insert the number to the right of the index
        arr[j + 1] = numberToInsert
    }
    return arr;
}

// Big O = O(n^2)


export const QuickSort = (arr) => {

    // base case for the recursive algorithm
    // because an array with one length is considered sorted
    if(arr.length < 2){
        return arr;
    }

    // pick a pivot element(usually the last)
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    // loop through the array to check if an element is greater or less than the pivot element and assign them to the required array
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else {
            right.push(arr[i])
        }
    }

    // spread the left and right array with the pivot element at the middle
    return [...QuickSort(left), pivot, ...QuickSort(right)]
}

// Worst case - Big O = O(n^2)
// Average case - O(nlogn)


export const MergeSort = (arr) => {
    if(arr.length < 2){
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);
    return merge(MergeSort(leftArr), MergeSort(rightArr))
}

const merge = (leftArr, rightArr) => {
    const sortedArr = []

    while (leftArr.length && rightArr.length) {
        if(leftArr[0] <= rightArr[0]){
            sortedArr.push(leftArr.shift())
        } else {
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr];
}