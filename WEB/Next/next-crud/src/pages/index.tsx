import { useState } from 'react';

import type { NextPage } from 'next';

import Botao from '../components/Botao';
import Formulario from '../components/Formulario';
import Layout from '../components/Layout';
import Tabela from '../components/Tabela';
import Cliente from '../core/Cliente';

const Home: NextPage = () => {
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela');

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 45, '2'),
    new Cliente('Carlos', 23, '3'),
    new Cliente('Pedro', 54, '4'),
  ];

  function clienteSelecionado(cliente: Cliente) {}

  function salvarCliente(cliente: Cliente) {}

  function clienteExcluido(cliente: Cliente) {}

  return (
    <div className='flex h-screen justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white'>
      <Layout titulo='Cadastro Simples'>
        {visivel === 'tabela' ? (
          <>
            <div className='flex justify-end'>
              <Botao className='mb-4' cor='green' onClick={() => setVisivel('form')}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            />
          </>
        ) : (
          <Formulario
            cliente={clientes[1]}
            cancelado={() => setVisivel('tabela')}
            clienteMudou={salvarCliente}
          />
        )}
      </Layout>
    </div>
  );
};

export default Home;
