import Layout from '../components/Layout';
import Cabecalho from '../components/Cabecalho';

export default function Exemplo() {
  return (
    <Layout titulo='Usando Componentes'>
      <Cabecalho titulo='Fundamentos de Next.js & React' />
      <Cabecalho titulo='Aprende Next na prática' />
    </Layout>
  );
}
