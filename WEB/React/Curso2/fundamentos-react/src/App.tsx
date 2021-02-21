import './App.css'

import Mega from './components/mega/Mega'
import Contador from './components/contador/Contador'
import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import Usuario from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import Primeiro from './components/basic/Primeiro'
import ComParametro from './components/basic/ComParametro'
import Fragmento from './components/basic/Fragmento'
import Aleatorio from './components/basic/Aleatorio'
import Card from './components/layouts/Card'
import Familia from './components/basic/Familia'
import FamiliaMembro from './components/basic/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'

const App = (_: any) => (
    // "_" é uma convenção pra quando o componente não recebe nenhum props
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card title="#13 - Desafio Mega Sena" color="#B9006E">
                <Mega />
            </Card>

            <Card title="#12 - Contador" color="#424242">
                <Contador numeroInicial={10} passoInicial={5} />
            </Card>

            <Card title="#11 - Componente Controlado (input)" color="#E45F56">
                <Input />
            </Card>

            <Card title="#10 - Comunicação Indireta" color="#8BAD39">
                <IndiretaPai />
            </Card>

            <Card title="#9 - Comunicação Direta" color="#59323C">
                <DiretaPai />
            </Card>

            <Card title="#8 - Renderização Condicional" color="#982395">
                <ParOuImpar numero={4} />
                <ParOuImpar numero={5} />
                <Usuario usuario={{ nome: 'Fernando' }} />
                <Usuario />
            </Card>

            <Card title="#7 - Desafio Repetição" color="#3A9AD9">
                <TabelaProdutos />
            </Card>

            <Card title="#6 - Repetição" color="#FF4C65">
                <ListaAlunos />
            </Card>

            <Card title="#5 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>

            <Card title="#4 - Desafio Aleatório" color="#FA6900">
                <Aleatorio
                    min={10}
                    max={0}
                />
            </Card>

            <Card title="#3 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>

            <Card title="#2 - Com Parâmetro" color="#E8B71A">
                <ComParametro
                    titulo="Situação do Aluno"
                    nome="Pedro"
                    nota={9.3}
                />
            </Card>
            
            <Card title="#1 - Primeiro Componente">
                <Primeiro />
            </Card>
        </div>
    </div>
)

export default App