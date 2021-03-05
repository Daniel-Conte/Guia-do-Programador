import './Nav.css'

import NavItem from '../NavItem'

const Nav: React.FC = () =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem href="/" title="Início" icon="home" />
            <NavItem href="/users" title="Usuários" icon="users" />
        </nav>
    </aside>

export default Nav