var array = [
    {'age': 1, 'name': 'Alice'},
    {'age': 3, 'name': 'Bob'},
    {'age': 3, 'name': 'Clark'}
]

function GroupItem(array, property) {
    return array.reduce((a, b) => {
        var key = b[property];
        if (!a[key]) {
            a[key] = [];
        }
        a[key].push(b);
        
        return a;
    }, {})
} 

console.log(GroupItem(array, 'age'));