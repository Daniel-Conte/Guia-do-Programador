import If, { Else } from './If'

interface IUsuarioInfo {
    usuario?: { nome?: string }
}

const Usuario = (props: IUsuarioInfo) => {
    const usuario = props.usuario || {}
    
    return (
        <div>
            <If test={!!usuario && !!usuario.nome?.trim()}>
                Seja bem vindo <strong>{usuario.nome}</strong>!
                <Else>
                    Seja bem vindo <strong>Amigão</strong>!
                </Else>
            </If>
        </div>
    )
}

export default Usuario