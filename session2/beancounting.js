function countBs (str) {
    // var numUper = (str.match(/[B]/g) || []).length;
    // return numUper;

    var count = 0;
    for (var i = 0; i <= str.length; i++) {
        if (str.charAt(i) === 'B') {
            count ++;
        }
    }

    return count;
}

console.log(countBs('adfBsBeBBeT'));

function countChar (str, char) {
    var count = 0;
    for (var i = 0; i <= str.length; i++) {
        if (str.charAt(i) === char) {
            count ++;
        }
    }

    return count;
}

console.log(countChar('heLLOOOWorlD', 'O'));