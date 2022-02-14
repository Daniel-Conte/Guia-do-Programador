// Páginas dinâmicas também podem ser usadas com as APIs
export default function handler(req, res) {
  const codigo = req.query.codigo;

  res.status(200).json({
    id: codigo,
    nome: `Maria ${codigo}`,
    email: `mariamariamaria${codigo}@xcfmail.com`,
  });
}
