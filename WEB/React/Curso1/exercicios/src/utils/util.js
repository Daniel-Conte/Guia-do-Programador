import React from 'react'

/*
    - Se for só 1 filho, "React.cloneElement() já basta"
    - Se for mais do que 1, precisa usar o ".map()"
*/
export function childrenWithProps(props) {
    return React.Children.map(props.children, child => {
        /*
            - O ".map()" do React é diferente do padrão Array
                - .map(<qualArrayUsar>, <callback>)
            - "props.children" é um array que contém os filhos do componente
        */
        return React.cloneElement(child, { ...props, ...child.props })
            /*
                - "React.cloneElement(<elemento>, <propriedades>)" Retorna um novo elemento com as mesmas propriedas ou modificadas
                    - Só pode clonar 1 elemento por vez, por isso é usado o ".map()"
                    - "...props" -> Clonando as propriedas do pai
                    - "...child.props" -> Pegando as propriedades do filho e jogando no novo elemento
                        - Se tiverem propriedades com o mesmo nome, serão substituidas pelo último props(nesse caso "child.props"), senão serão juntadas
            */
    })
}