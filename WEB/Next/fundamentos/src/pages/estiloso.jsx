import styles from '../styles/estiloso.module.css';
// O módulo CSS deve ser importado e usado como um objeto

export default function Estiloso() {
  return (
    <div className={styles.roxo}>
      <h1>Estilo usando CSS Módulos</h1>
    </div>
  );
}
