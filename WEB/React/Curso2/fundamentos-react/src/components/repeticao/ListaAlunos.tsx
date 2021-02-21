import alunos from '../../data/alunos'

const ListaAlunos = (_: any) => {    
    return (
        <div>
            <ul style={{ listStyle: 'none' }}>
                {/* "listStyle" é um shorthand de estilo para listas */}
                {alunos.map(aluno => {
                    return (
                        <li key={aluno.id}>
                            {aluno.id}) {aluno.nome} {'->'} {aluno.nota}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ListaAlunos