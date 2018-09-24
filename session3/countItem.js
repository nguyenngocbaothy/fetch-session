var array = [1, 3, 4, 5];

function CountItems(array){
    return array.reduce((a) => {
        return a += 1;
    })
}

console.log(CountItems(array));  