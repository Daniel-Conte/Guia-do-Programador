// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Next suporta criar APIs direto no front
// Deve-se exportar padrão uma função com a request e response
// Para executar a função basta entrar na página pelo navegador
export default function handler(req, res) {
  res
    .status(200)
    .json({ name: 'John Doe', metodo: req.method, nome: req.query.nome, idade: +req.query.idade });
  // Para acessar os parâmetros na url da requisição: "req.query.<param>"
}
