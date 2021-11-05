const salvar = (req, res) => {
  res.send('Usuario > salvar');
};

const obter = (req, res) => {
  res.send('Usuario > obter');
};

module.exports = { salvar, obter };
