function maxSum(arr) {
    let maxArrSum = 0
    let currentSum = 0

    for(let i = 0; i < arr.length; i++) {
        currentSum = Math.max(0, currentSum + arr[i])
        maxArrSum = Math.max(currentSum, maxArrSum)
    }
    return maxArrSum
}

console.log(maxSum([1,2,3]));
console.log(maxSum([4,6,-3,5,-2,1]));
