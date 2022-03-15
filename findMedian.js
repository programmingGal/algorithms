const arr = [4, 5, 0, 6, 2, 1, 3]

const findMedian = (arr) => {
    arr.sort((a, b) => a - b)
    return arr[Math.floor(arr.length / 2)]
}

console.log(findMedian(arr))