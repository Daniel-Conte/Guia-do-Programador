import { useEffect, useState } from 'react';

import type { NextPage } from 'next';

import Botao from '../components/Botao';
import Formulario from '../components/Formulario';
import Layout from '../components/Layout';
import Tabela from '../components/Tabela';
import Cliente from '../core/Cliente';
import ColecaoCliente from '../core/ColecaoCliente';

const Home: NextPage = () => {
  const apiClientes = new ColecaoCliente();

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela');
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(obterClientes, []);

  function obterClientes() {
    apiClientes.obterTodos().then(resp => {
      setClientes(resp.data);
      setVisivel('tabela');
    });
  }

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente);
    setVisivel('form');
  }

  function novoCliente() {
    setCliente(Cliente.vazio());
    setVisivel('form');
  }

  async function salvarCliente(cliente: Cliente) {
    await apiClientes.salvar(cliente);
    obterClientes();
  }

  async function clienteExcluido(cliente: Cliente) {
    await apiClientes.excluir(cliente);
    obterClientes();
  }

  return (
    <div className='flex h-screen justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white'>
      <Layout titulo='Cadastro Simples'>
        {visivel === 'tabela' ? (
          <>
            <div className='flex justify-end'>
              <Botao className='mb-4' cor='green' onClick={() => novoCliente()}>
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
            cliente={cliente}
            cancelado={() => setVisivel('tabela')}
            clienteMudou={salvarCliente}
          />
        )}
      </Layout>
    </div>
  );
};

export default Home;
