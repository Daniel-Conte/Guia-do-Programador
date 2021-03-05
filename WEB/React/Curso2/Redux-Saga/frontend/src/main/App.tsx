import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css';

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Home from '../views/Home'
import Footer from '../components/template/Footer'
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="App">
        <BrowserRouter>
            <Logo />
            <Nav />
            <Home />
            <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
