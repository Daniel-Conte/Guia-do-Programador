import { useState } from 'react';

import Cliente from '../core/Cliente';
import Botao from './Botao';
import Entrada from './Entrada';

interface FormularioProps {
  cliente: Cliente;
  clienteMudou?: (cliente: Cliente) => void;
  cancelado?: () => void;
}

export default function Formulario(props: FormularioProps) {
  const codigo = props.cliente?.codigo;
  const [nome, setNome] = useState(props.cliente?.nome ?? '');
  const [idade, setIdade] = useState(props.cliente?.idade ?? '');

  return (
    <div>
      {!!codigo && <Entrada texto='Código' tipo='number' valor={codigo} className='mb-5' />}
      <Entrada texto='Nome' valor={nome} valorMudou={setNome} className='mb-5' />
      <Entrada texto='Idade' tipo='number' valor={idade} valorMudou={setIdade} />

      <div className='flex justify-end mt-7'>
        <Botao
          cor='blue'
          className='mr-2'
          onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, codigo))}>
          {!!codigo ? 'Alterar' : 'Salvar'}
        </Botao>
        <Botao onClick={props.cancelado}>Cancelar</Botao>
      </div>
    </div>
  );
}
