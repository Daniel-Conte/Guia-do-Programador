interface IIf {
    test: boolean
    children: any | any[]
}

const If = (props: IIf) => {
    const elseChild = props.children.filter((child: any) => {
        return child.type && child.type.name === 'Else'
    })[0]

    const ifChildren = props.children.filter((child: any) => {
        return child !== elseChild
    })
    
    if(props.test) {
        return ifChildren
    } else if(elseChild) {
        return elseChild
    } else {
        return false
    }
}

const Else = (props: any) => props.children

export default If
export { Else }