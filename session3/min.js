var array = [1, 3, 4 ,5 , 6];

function Min(array) {
    return array.reduce((a, b) => {
        return a < b ? a : b;
    });
}

console.log(Min(array));