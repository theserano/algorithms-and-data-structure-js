export const LinearSearch = (arr, n) => {
    for(let i = 0; i < arr.length; i++){
        if(n === arr[i]){
            return i;
        }
    }
    return -1;
}

// Big O - O(n)