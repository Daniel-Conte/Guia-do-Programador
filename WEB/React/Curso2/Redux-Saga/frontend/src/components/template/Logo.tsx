import './Logo.css'
import logo from '../../assets/img/logo.png'

const Logo: React.FC = () => 
    <aside className="logo">
        <a href="/" className="logo">
            <img src={logo} alt="logo"/>
        </a>
    </aside>

export default Logo