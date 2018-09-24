var sizeY = 8,
    sizeX = 4;
var emty = ' #',
    grid = '# ';

for (x = 0; x < sizeY; x++) {
    if (x % 2) {
        console.log(emty.repeat(sizeX))
    } else {
        console.log(grid.repeat(sizeX))
    }
}