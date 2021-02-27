import './Card.css'

type Colors = {
    red?: boolean
    blue?: boolean
    green?: boolean
    purple?: boolean
}

type Props = Colors & {
    title: string
}

function getColor(color: Colors): string {
    if(color.red) return "Red"
    if(color.blue) return "Blue"
    if(color.green) return "Green"
    if(color.purple) return "Purple"
    return ""
}

const Card: React.FC<Props> = props => {
    return (
        <div className={`Card ${getColor(props)}`}>
            <div className="Header">
                <span className="Title">{props.title}</span>
            </div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}

export default Card