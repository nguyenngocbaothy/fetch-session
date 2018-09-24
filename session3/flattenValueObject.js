var object = { 'a': [1, 2], 'b': [3, 4], 'c': [5, 6]};

function Flatten(object) {
    return Object.keys(object).reduce((accumulator, current) => {
        return [...accumulator, ...object[current]];
    }, []);
}

console.log(Flatten(object));