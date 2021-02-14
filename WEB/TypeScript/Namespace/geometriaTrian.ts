// Mesmo já existindo namespaces com esses nomes, não irá gerar erro
// Todos os namespaces com o mesmo nome serão agrupados em 1 só, então é possível separar as funcionalidades em arquivos diferentes

namespace Geometria {
    export namespace Area {
        export function triangulo(base: number, altura: number): number {
            return (base * altura) / 2
        }
    }
}