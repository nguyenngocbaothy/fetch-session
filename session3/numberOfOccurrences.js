var array = [1, 2, 3, 1, 2, 4, 2, 3];

function CountNumber(array) {
    return array.reduce((a, b) => {
        if (b in a) {
            a[b]++;
        } else {
            a[b] = 1;
        }

        return a; 
    }, {})
}

console.log(CountNumber(array));