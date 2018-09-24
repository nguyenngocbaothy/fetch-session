var array = [1, 3, 4, 5];

function Sum(array) {
    return array.reduce((a, b) => a + b, 0)
}

console.log(Sum(array));