type Props = {
    hide?: boolean
    color: string
    icon: string
    onClick: () => void
}

const IconButton: React.FC<Props> = props => {
    return (
        <>
            {!props.hide && (
                <button
                    className={`btn btn-${props.color}`}
                    onClick={props.onClick}
                >
                    <i className={`fa fa-${props.icon}`}></i>
                </button>
            )}
        </>
    )
}

export default IconButton