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
      <Navegador destino='/navegacao' texto='Navegação #01' cor='green' />
      <Navegador destino='/cliente/rs-2/321' texto='Navegação #02' cor='blue' />
      <Navegador destino='/estado' texto='Componente com estado' cor='#a45b71' />
      <Navegador destino='/integracao_1' texto='Integracao com API #01' cor='#42a9a9' />
    </div>
  );
}
