const saudacao = nome => {
  // Tudo o que colocar neste escopo irá ser executado quando o back inicia

  console.log('uma vez');

  // Deve retornar um middleware
  return (req, res, next) => {
    // Tudo o que colocar neste escopo irá ser executado nas requisições (middlware normal)

    console.log(`Bem vindo ${nome}`);

    next();
  };
};

module.exports = saudacao;
