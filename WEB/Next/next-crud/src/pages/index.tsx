import type { NextPage } from 'next';
import Botao from '../components/Botao';

import Layout from '../components/Layout';
import Tabela from '../components/Tabela';
import Cliente from '../core/Cliente';

const Home: NextPage = () => {
  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 45, '2'),
    new Cliente('Carlos', 23, '3'),
    new Cliente('Pedro', 54, '4'),
  ];

  function clienteSelecionado(cliente: Cliente) {}

  function clienteExcluido(cliente: Cliente) {}

  return (
    <div className='flex h-screen justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white'>
      <Layout titulo='Cadastro Simples'>
        <div className='flex justify-end'>
          <Botao className='mb-4' cor='green'>
            Novo Cliente
          </Botao>
        </div>
        <Tabela
          clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        />
      </Layout>
    </div>
  );
};

export default Home;
