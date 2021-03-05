import Main from '../components/template/Main'

const Home: React.FC = () =>
    <Main
        title="Início"
        subtitle="Projeto Cadastro de Usuário"
        icon="home"
    >
        <div className="display-4">Bem Vindo!</div>
        <hr/>
        <p className="mb-0">
            Sistema para exemplificar a construção de um cadastro de usuário desenvolvido em React-TypeScript e Redux-Saga!
        </p>
    </Main>

export default Home