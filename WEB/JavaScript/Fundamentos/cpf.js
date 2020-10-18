var input = `000.000.000-00
111.111.111-11
888.888.888-88
048.856.829-63
733.184.680-96
227.518.471-08
09284484286
098.447.895-5t
123.456.789-00`

var format = input.replace(/[^\d\n]/g, '');
var lines = format.split('\n');


for(let i = 0; i < lines.length; i++) {
    var cpf = lines[i].split('');

    const equal = cpf.filter(num => num === cpf[0]);
    const test = equal.length === 11 || cpf.length !== 11;

    const verifier2 = parseInt(cpf.pop());
    const verifier1 = parseInt(cpf.pop());
    //cpf.reverse();
    var b1 = 0;
    var b2 = 0;

    for(var j = 0; j < cpf.length; j++) {
        b1 += parseInt(cpf[j]) * (j + 1);
        b2 += parseInt(cpf[j]) * (9 - j);
    }

    b1 = b1 % 11;
    b2 = b2 % 11;

    /* for(var j = 0; j < cpf.length; j++) {
        b1 += parseInt(cpf[j]) * (9 - (j % 10));
        b2 += parseInt(cpf[j]) * (9 - ((j + 1) % 10));
    }

    b1 = (b1 % 11) % 10;
    b2 += b1 * 9;
    b2 = (b2 % 11) % 10; */
    console.log(b1, b2)
    console.log(verifier1, verifier2)
    
    if(test) {
        console.log('CPF invalido');
    } else if(verifier1 === b1 && verifier2 === b2) {
        console.log('CPF valido');
    } else {
        console.log('CPF invalido');
    }
}