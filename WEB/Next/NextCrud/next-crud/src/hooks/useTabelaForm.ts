import { useState } from 'react';

const useTabelaForm = () => {
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela');

  const mostrarTabela = () => setVisivel('tabela');

  const mostrarFormulario = () => setVisivel('form');

  return {
    formulatioVisivel: visivel === 'form',
    tabelaVisivel: visivel === 'tabela',
    mostrarTabela,
    mostrarFormulario,
  };
};

export default useTabelaForm;
