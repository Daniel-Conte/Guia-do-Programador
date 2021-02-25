type Props = {
    name: string
    small: string
}

const PageHeader: React.FC<Props> = props => {
    return (
        <header className="page-header">
            <h2>
                {props.name} <small>{props.small}</small>
            </h2>
        </header>
    )
}

export default PageHeader