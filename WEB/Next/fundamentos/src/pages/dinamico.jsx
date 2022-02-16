import Layout from '../components/Layout';

// "getServerSideProps" é uma função do Next que é usada para gerar conteúdo no lado do servidor (antes de chegar no client)
// Ela será executada sempre que fizer a requisição da página
// Deve ser exportada e retornar um objeto
// Um dos atributos deste objeto é a "props" que será passada para o componente default desta página

export function getServerSideProps() {
  return {
    props: {
      numero: Math.random(),
    },
  };
}

// As props deste componente vem do retorno do "getServerSideProps"
export default function Dinamico(props) {
  return (
    <Layout titulo='Conteúdo Dinâmico'>
      <div>{props.numero}</div>
    </Layout>
  );
}
