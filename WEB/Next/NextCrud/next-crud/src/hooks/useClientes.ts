import { useEffect, useState } from 'react';

import Cliente from '../core/Cliente';
import ColecaoCliente from '../core/ColecaoCliente';
import useTabelaForm from './useTabelaForm';

const useClientes = () => {
  const apiClientes = new ColecaoCliente();

  const { mostrarTabela, mostrarFormulario, tabelaVisivel } = useTabelaForm();
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(obterClientes, []);

  function obterClientes() {
    apiClientes.obterTodos().then(resp => {
      setClientes(resp.data);
      mostrarTabela();
    });
  }

  function selecionarCliente(cliente: Cliente) {
    setCliente(cliente);
    mostrarFormulario();
  }

  function novoCliente() {
    setCliente(Cliente.vazio());
    mostrarFormulario();
  }

  async function salvarCliente(cliente: Cliente) {
    await apiClientes.salvar(cliente);
    obterClientes();
  }

  async function excluirCliente(cliente: Cliente) {
    await apiClientes.excluir(cliente);
    obterClientes();
  }

  return {
    cliente,
    clientes,
    salvarCliente,
    novoCliente,
    excluirCliente,
    selecionarCliente,
    tabelaVisivel,
    mostrarTabela,
  };
};

export default useClientes;
