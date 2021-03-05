import { Link } from 'react-router-dom'

interface Props {
    href: string
    title: string
    icon: string
}

const NavItem: React.FC<Props> = props =>
    <Link to={props.href}>
        <i className={`fa fa-${props.icon}`} /> {props.title}
    </Link>

export default NavItem