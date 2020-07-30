const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.')) //Executa em qualquer requisicao(use). Vai servir os arquivos estaticos pra quem fez a chamada. '.' vai servir todos os arquivos estaticos da pasta onde fica este arquivo
app.use(bodyParser.urlencoded({ extended: true })) //Se vier uma requisicao com um submit de formulario, vai transformar em objeto
app.use(bodyParser.json()) //Se vier um JSON na requisicao, vai transformar em objeto

app.get('/teste', (req, res) => res.send('Ok')) //Quando receber uma requisicao do tipo "get" com a url "/teste" vai enviar de volta "Ok"

const multer = require('multer') // Serve para lidar com form-data e upload de arquivos

const storage = multer.diskStorage({ // "diskStorage()" recebe um object para configurar o diretorio do arquivo que foi feito upload e o seu nome
    destination: function(req, file, callback) { // Define o diretorio para armazenar o arquivo
        callback(null, './upload') // (erro, diretorio). "." significa "nesta pasta onde está este arquivo aqui"
    },
    filename: function(req, file, callback) { // Define o nome do arquivo
        callback(null, `${Date.now()}_${file.originalname}`) // (erro, nome do arquivo). "Date.now()" retorna a data atual em milisegundos(vai ser usado aqui para que nenhum arquivo fique com o mesmo nome). "file.originalname" retorna o nome original do arquivo
    }
})

const upload = multer({ storage }).single('arquivo') // "storage" vai passar as configurações definidas para o destino e nome do arquivo. ".single(nome do arquivo)" aceita 1 arquivo associado com o nome (o nome "arquivo" é o valor do atributo "name" dentro do "input" no html (xmlHttpRequest2))

app.post('/upload', (req, res) => {
    upload(req, res, err => { // Executa quando for feita uma requisicao. O arquivo e seu "name" que serão usados no ".single()" virão nessa requisicao
        if (err) { // Tratamento de erro
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluido com sucesso.')
    })
})

// Fetch2.html
app.post('/formulario', (req, res) => { // "/formulario" é a url(action) do formulario no HTML
    res.send({ //Manda de volta
        ...req.body, // Espalha(Spread) o corpo da requisicao na resposta
        id:7
    })
})

//axios2.html
app.get('/parOuImpar', (req, res) => {
    // req.body -> pega os dados no corpo da requisicao. "POST"
    // req.query -> pega os dados na url. "/parOuImpar?numero=4". "GET"
    // req.params -> pega os dados na url. "/parOuImpar/4". "GET"

    //const par = parseInt(req.query.numero) % 2 === 0
    //const par = parseInt(req.params.numero) % 2 === 0 //Tem que usar "/:numero" na url
    const par = parseInt(req.query.numero) % 2 === 0

    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.listen(8080, () => console.log('Executando...'))