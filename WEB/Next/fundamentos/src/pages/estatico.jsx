import Layout from '../components/Layout';

// "getStaticProps" é uma função do Next que é usada para gerar conteúdo estático
// Ela será executada somente uma vez na hora do build, mas é possível passar um "revalidate" pra executar de novo após tanto tempo
// Deve ser exportada e retornar um objeto
// Um dos atributos deste objeto é a "props" que será passada para o componente default desta página

// !!!! Só vai funcionar de forma correta em build de produção !!!!

export function getStaticProps() {
  return {
    props: {
      numero: Math.random(),
    },
  };
}

// As props deste componente vem do retorno do "getStaticProps"
export default function Estatico(props) {
  return (
    <Layout titulo='Conteúdo Estático'>
      <div>{props.numero}</div>
    </Layout>
  );
}
