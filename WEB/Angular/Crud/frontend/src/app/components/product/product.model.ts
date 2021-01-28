// "interface" é um modelo para criar objetos, ou seja, para criar um objeto do tipo desta interface, o objeto precisa seguir a estrutura da interface
// A interface pode ser usada como tipo(type) ou implementada em uma classe
export interface Product {
    id?: number // "?" significa que este atributo é opcional
    name: string // Atributo obrigatório
    price: number
}