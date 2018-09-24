var array =  [1, 2, 3, 4, 5, 6];

function RemoveItemsDivisible3(array) {
    return array.filter(e => e % 3 !== 0)
}

console.log(RemoveItemsDivisible3(array));