var str = '';
for (var i = 1; i <= 7; i++) {
    for (var j = 1; j < i; j++) {
        str = str + '*';        
    }
    console.log(str, str.length);
    str='';  
}