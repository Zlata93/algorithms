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
// console.log(selectionSort(unsortedArr));

function insertionSort(arr) {
    let j;
    for (let i = 1; i < arr.length; i++) {
        let valToInsert = arr[i];
        for (j = i-1; j < arr.length && valToInsert > arr[j] && j >= 0; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = valToInsert;
    }
    return arr;
}
// console.log(insertionSort(unsortedArr));

const tree = {
    root: {
        val: 1,
        children: [
            {
                val: 2,
                children: [
                    {
                        val: 4
                    },
                    {
                        val: 5
                    }
                ]
            },
            {
                val: 3,
                children: [
                    {
                        val: 6,
                    },{
                        val: 7,
                        children: []
                    },{
                        val: 8,
                        children: []
                    }
                ]
            }
        ]
    }
};

function traverseTreeDF(tree) {
    let nodes = [tree.root];
    const values = [];
    while (nodes.length) {
        const node = nodes.shift();
        if (node.children) {
            nodes.unshift(...node.children);
        }
        values.push(node.val);
    }
    return values;
}
// console.log(traverseTreeDF(tree));

function traverseTreeBF(tree) {
    let nodes = [tree.root];
    const values = [];
    while (nodes.length) {
        const node = nodes.shift();
        if (node.children) {
            nodes.push(...node.children);
        }
        values.push(node.val);
    }
    return values;
}
console.log(traverseTreeBF(tree));
