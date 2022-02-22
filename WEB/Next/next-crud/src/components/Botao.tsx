interface BotaoProps {
  cor?: 'green' | 'blue' | 'gray';
  className?: string;
  children: any;
}

export default function Botao(props: BotaoProps) {
  const cor = props.cor ?? 'gray';

  function getCoresGradienteFrom400(cor: 'green' | 'blue' | 'gray') {
    switch (cor) {
      case 'blue':
        return 'from-blue-400';
      case 'gray':
        return 'from-gray-400';
      case 'green':
        return 'from-green-400';
    }
  }

  function getCoresGradienteTo700(cor: 'green' | 'blue' | 'gray') {
    switch (cor) {
      case 'blue':
        return 'to-blue-700';
      case 'gray':
        return 'to-gray-700';
      case 'green':
        return 'to-green-700';
    }
  }

  return (
    <button
      // Tailwind tem problemas com classes "quebradas" com nomes dinâmicos e elas não irão funcionar
      // Para resolver, faça a dinâmica com o nome completo da classe(Bem chato isso)
      className={`
        bg-gradient-to-r 
        ${getCoresGradienteFrom400(cor)} 
        ${getCoresGradienteTo700(cor)} 
      text-white px-4 py-2 rounded-md 
        ${props.className}
      `}>
      {props.children}
    </button>
  );
}
