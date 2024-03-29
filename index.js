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
// console.log(traverseTreeBF(tree));

const unbalancedStr = '(df(s{a[1[]123]]';
const balancedStr = '(df(s{a[1[]]})ii)';
function balanceBrackets(str) {
    const bracketPairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    const closingBrackets = ')}]';
    const stack = [];
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (bracketPairs[char]) {
            stack.push(bracketPairs[char]);
        } else if (closingBrackets.includes(char) && char !== stack.pop()) {
            return false;
        }
    }
    return !stack.length;
}
// console.log(balanceBrackets(unbalancedStr));
// console.log(balanceBrackets(balancedStr));

// нечетные и предыдущие primes
function isPrime(num, primes) {
    if (num < 2) return false;
    if (primes.length) {
        for (let i = 0; i < primes.length; i++) {
            if (num % primes[i] === 0) {
                return false;
            }
        }
    }
    return true;
}
function getPrimes(n) {
    const primes = [];
    for (let i = 2; i <= n; i++) {
        if (i !== 2 && i % 2 === 0) continue;
        if (isPrime(i, primes)) {
            primes.push(i);
        }
    }
    return primes;
}
console.log(getPrimes(1000));
console.log(getPrimes(2));
console.log(getPrimes(1000).length);

const sortedArr = [1,2,3,4,5,6,7,9];
const emptyArr = [];
function binarySearch(arr, num) {
    if (!arr.length) return -1;
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        const middle = Math.floor((start + end)/2);
        if (num < arr[middle]) {
            end = middle - 1;
        } else if (num > arr[middle]) {
            start = middle + 1;
        } else {
            return middle;
        }
    }
    return -1;
}
console.log(binarySearch(sortedArr, 1));
console.log(binarySearch(sortedArr, 9));
console.log(binarySearch(sortedArr, 10));
console.log(binarySearch(emptyArr, 10));