import type { NextPage } from 'next';

import Botao from '../components/Botao';
import Formulario from '../components/Formulario';
import Layout from '../components/Layout';
import Tabela from '../components/Tabela';
import useClientes from '../hooks/useClientes';

const Home: NextPage = () => {
  const {
    cliente,
    clientes,
    excluirCliente,
    novoCliente,
    salvarCliente,
    selecionarCliente,
    tabelaVisivel,
    mostrarTabela,
  } = useClientes();

  return (
    <div className='flex h-screen justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white'>
      <Layout titulo='Cadastro Simples'>
        {tabelaVisivel ? (
          <>
            <div className='flex justify-end'>
              <Botao className='mb-4' cor='green' onClick={() => novoCliente()}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (
          <Formulario
            cliente={cliente}
            cancelado={() => mostrarTabela()}
            clienteMudou={salvarCliente}
          />
        )}
      </Layout>
    </div>
  );
};

export default Home;
