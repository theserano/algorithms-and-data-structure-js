// This algorithm is used with a sorted array
export const BinarySearch = (arr, target) => {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if(target === arr[middleIndex]){
            return middleIndex
        }
        if(target < arr[middleIndex]){
            rightIndex = middleIndex - 1;
        }else{
            leftIndex = middleIndex + 1;
        }
    }
    return -1
}

// Big O - O(log n)
// The input size is always reduced by  half 


// Recursive Binary search
export const RecursiveBinarySearch = (arr, target) => {
    return search(arr, target, 0, arr.length - 1);
}

const search  = (arr, target, leftIndex, rightIndex) => {
    if(leftIndex > rightIndex) return -1;

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if(target === arr[middleIndex]){
        return middleIndex;
    }

    if(target < arr[middleIndex]){
        return search(arr, target, leftIndex, middleIndex - 1);
    }else{
        return search(arr, target, middleIndex + 1, rightIndex);
    }
}