console.log('Hi');

const unsortedArr = [5,1,9, 0,2,-1, 7];
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j+1]) {
                const bigger = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = bigger;
            }
        }
    }
    return arr;
}
// console.log(bubbleSort(unsortedArr));

function selectionSort(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        let indexOfMax = i;
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > arr[indexOfMax]) {
                indexOfMax = j;
            }
        }
        if (i !== indexOfMax) {
            const bigger = arr[indexOfMax];
            arr[indexOfMax] = arr[i];
            arr[i] = bigger;
        }
    }
    return arr;
}
console.log(selectionSort(unsortedArr));