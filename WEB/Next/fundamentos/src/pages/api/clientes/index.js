export default function handler(req, res) {
  if (req.method === 'GET') {
    handleGet(req, res);
  } else {
    // Sempre envie uma resposta, senão quem fez a request fica esperando infinitamente
    res.status(405).send();
    // Status code "405" significa "Método não suportado"
  }
}

function handleGet(req, res) {
  res.status(200).json({
    id: 3,
    nome: 'Maria',
    email: 'mariamariamaria@xcfmail.com',
  });
}
