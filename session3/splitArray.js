var array = [1, 2, 3, 1, 2, 4, 2, 3];

function SplitOddandEvenNumber(array) {
    const evenNumber =  array.filter(e => e % 2 === 0);
    const oddNumber =  array.filter(e => e % 2 !== 0);
    return [[...evenNumber], [...oddNumber]];
}

console.log(SplitOddandEvenNumber(array));