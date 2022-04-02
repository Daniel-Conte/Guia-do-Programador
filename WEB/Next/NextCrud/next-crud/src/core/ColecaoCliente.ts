import Cliente from './Cliente';
import ClienteRepositorio from './ClienteRepositorio';
import { apiUrl } from '../config/api';

const makeHeaders = () => {
  const headers = new Headers();

  headers.append('Accept', 'application/json');
  headers.append('Content-Type', 'application/json');

  return headers;
};

const parseCliente = (cliente: Cliente) => ({
  codigo: cliente.codigo,
  nome: cliente.nome,
  idade: cliente.idade,
});

export default class ColecaoCliente implements ClienteRepositorio {
  async salvar(cliente: Cliente): Promise<Cliente> {
    if (cliente?.codigo) {
      return fetch(`${apiUrl}/cliente/${cliente.codigo}`, {
        method: 'PUT',
        headers: makeHeaders(),
        body: JSON.stringify(parseCliente(cliente)),
      }).then(resp => resp.json());
    } else {
      return fetch(`${apiUrl}/cliente`, {
        method: 'POST',
        headers: makeHeaders(),
        body: JSON.stringify(parseCliente(cliente)),
      }).then(resp => resp.json());
    }
  }

  async excluir(cliente: Cliente): Promise<void> {
    return fetch(`${apiUrl}/cliente/${cliente.codigo}`, {
      method: 'DELETE',
      headers: makeHeaders(),
    }).then(resp => resp.json());
  }

  async obterTodos(): Promise<{ data: Cliente[] }> {
    return fetch(`${apiUrl}/cliente`, {
      method: 'GET',
      headers: makeHeaders(),
    }).then(resp => resp.json());
  }
}
