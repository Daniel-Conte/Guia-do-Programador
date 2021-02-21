import './Card.css'

interface ICard {
    title: string,
    children: any,
    color?: string
}

const Card = (props: ICard) => {

    // É possível criar um objeto com nome e valor das propriedades CSS e jogar na prop "style" pra aplicar de forma inline
        // Assim é possível aplicar estilo de forma dinâmica e deixa o código mais limpo
    const cardStyle = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00'
    }

    return (
        <div className="Card" style={cardStyle}>
            {/* Aplicando estilo inline */}
            <div className="Title">{props.title}</div>
            <div className="Content">{props.children}</div>
        </div>
    )
}

export default Card