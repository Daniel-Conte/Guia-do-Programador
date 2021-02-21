import { cloneElement, ReactElement } from 'react'

interface IFamilia {
    sobrenome: string,
    children: ReactElement[]
}

const Familia = (props: IFamilia) => {
    return (
        <div>
            {/* Clonando o "props" do componente pai(Familia) para os componentes filhos(FamiliaMembro), assim não precisando passar o sobrenome para todos os filhos de forma manual */}
            {props.children.map((child: ReactElement, i: number) => {
                return cloneElement(child, { ...props, key: i})
            })}
        </div>
    )
}

export default Familia