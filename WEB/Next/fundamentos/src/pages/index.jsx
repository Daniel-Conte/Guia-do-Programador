import Navegador from '../components/Navegador';

export default function Inicio() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexWrap: 'wrap',
      }}>
      <Navegador destino='/estiloso' texto='Estiloso' />
      <Navegador destino='/exemplo' texto='Exemplo' cor='#9400d3' />
      <Navegador destino='/jsx' texto='JSX' cor='crimson' />
    </div>
  );
}
