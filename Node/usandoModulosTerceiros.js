const _ = require('lodash') // "_" é a forma padrao pra referenciar o lodash. Vai chamar o "index" dentro da pasta lodash
setInterval(() => console.log(_.random(1, 10)), 2000)