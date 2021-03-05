import './Header.css'

interface Props {
    title: string
    subtitle: string
    icon: string
}

const Header: React.FC<Props> = props =>
    <header className="header d-none d-sm-flex flex-column">
        <h1 className="mt-3">
            <i className={`fa fa-${props.icon}`} />
            {props.title}
        </h1>
        <p className="lead text-muted">{props.subtitle}</p>
    </header>

export default Header