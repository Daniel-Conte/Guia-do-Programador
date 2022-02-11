import Link from 'next/link';
import styles from '../styles/navegador.module.css';

export default function Navegador(props) {
  return (
    <div>
      <Link href={props.destino}>
        <div className={styles.navegador} style={{ backgroundColor: props.cor ?? 'dodgerblue' }}>
          {props.texto}
        </div>
      </Link>
    </div>
  );
}
