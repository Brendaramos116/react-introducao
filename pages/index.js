import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Pagina from '../components/Pagina';

export default function Home() {
  return (
    <>
      <Pagina titulo="Página 1">
        <h1>Hello Word!</h1>
        <p>Qualquer texto</p>
        <p>Qualquer texto</p>
        <p>Qualquer texto</p>
      </Pagina>
    </>
  )
}
