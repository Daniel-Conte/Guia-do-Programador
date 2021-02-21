import './Menu.css'
import { Link } from 'react-router-dom'

const Menu = (_: any) => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Início</Link>
                    {/* A tag "Link" irá gerar uma tag "a" no html final, então não tem problema em referenciar a tag "a" no css */}
                </li>
                <li>
                    <Link to="/param/123">Param #1</Link>
                </li>
                <li>
                    <Link to="/param/legal">Param #2</Link>
                </li>
                <li>
                    <Link to="/about">Sobre</Link>
                </li>
                <li>
                    <Link to="/naoExiste">Não Existe</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu