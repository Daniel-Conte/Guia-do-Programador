import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css';

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Main from '../components/template/Main'
import Footer from '../components/template/Footer'

const App: React.FC = () => {
  return (
    <div className="App">
        <Logo />
        <Nav />
        <Main
            title="Início"
            subtitle="Cadastro de usuário utilizando React e Redux-Saga"
            icon="home"
        />
        <Footer />
    </div>
  );
}

export default App;
