const input = `3
2 1
10 10
-10 1
0 33
4
-1000 -1000
-1000 -1000
0 0
-2000 -10000
-999 -1001
0`

var lines = input.split('\n');

function location() {
    const K = parseInt(lines.shift());
    var division;
    if(lines[0]) {
        division = lines.shift().split(' ');
    } else {
        return;
    }
    const N = parseInt(division.shift());
    const M = parseInt(division.shift());

    for(var i = 0; i < K; i++) {
        const x = parseInt(lines[0].split(' ')[0]);
        const y = parseInt(lines[0].split(' ')[1]);
    
        if(x == N || y == M) {
            console.log('divisa')
        } else if(x < N && y > M) {
            console.log('NO');
        } else if(x > N && y > M) {
            console.log('NE');
        } else if(x > N && y < M) {
            console.log('SE');
        } else if(x < N && y < M) {
            console.log('SO');
        }
        lines.shift()
    }
    location()
}

location()