var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function GroupArray(array, numberItems) {
    return array.reduce((a, b) => {
        return [...a, array.splice(0, numberItems)]
    }, []);
}

console.log(GroupArray(array, 3));