console.log('Hi');

const unsortedArr = [5,1,9,0,2,-1,7];
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                const smaller = arr[j];
                arr[j] = arr[i];
                arr[i] = smaller;
            }
        }
    }
    return arr;
}
console.log(bubbleSort(unsortedArr));