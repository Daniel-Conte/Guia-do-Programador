import Layout from '../../../components/Layout';
import { useRouter } from 'next/router';

// Para tornar a página dinâmica, basta envolver o nome do arquivo com "[]"(colchetes)
// Assim qualquer valor adicionado no path da url(iniciando com '/cliente/<dinâmico>') será válido e não dará 404
// Acessar a raiz não cairá na página dinâmica ('/clientes' vai tentar acessar o index.jsx)
// Cuidado, essas páginas dinâmicas são consideradas estáticas pelo Next e geradas no server side, podendo ocorrer erros de usar coisas do client side no server side

// É possível também criar pastas dinâmicas na mesma lógica dos arquivos, assim podendo passar mais valores dinâmicos

// Se não passar todos os valores dinâmicos para a página que deseja dará erro 404
// Neste caso usamos 2 valores dinâmicos
// /clientes/rs-2  -- 404 --
// /clientes/rs-2/321 -- Certo --

// Para acessar o valor dinâmico na url, é preciso usar o hook "useRouter" acessando a query e o nome da pagina/pasta
// router.query.<nomeDoArquivo/pasta>
// router.query.codigo (neste caso)
// router.query.filial (neste caso)

export default function ClientePorCodigo() {
  const router = useRouter();

  return (
    <Layout titulo='Navegação Dinâmica'>
      <div>Código = {router.query.codigo}</div>
      <div>Filial = {router.query.filial}</div>
    </Layout>
  );
}
