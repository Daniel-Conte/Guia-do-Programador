module.exports = (app, texto) => {
  // Outro método para separar módulos

  const salvar = (req, res) => {
    res.send('Produto > salvar > ' + texto);
  };

  const obter = (req, res) => {
    res.send('Produto > obter > ' + texto);
  };

  app.post('/produto', salvar);
  app.get('/produto', obter);
};
