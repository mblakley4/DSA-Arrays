function filter(arr) {
  let newFilteredArr = []

  if (!arr.length) {
      return []
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      newFilteredArr.push(arr[i])
    }
  }
  return newFilteredArr
}

console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
