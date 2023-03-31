import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'

const pagina2 = () => {
  return (
    <>
    <Cabecalho/>
      <div className='bg-secondary text-white py-3 text-center margin-bottom mb-3'>
         <h1>pagina2</h1>
      </div>
    <Container>
      <h1>Hello Word!</h1>
      <p>Qualquer texto</p>
      <p>Qualquer texto</p>
      <p>Qualquer texto</p>
    <Rodape/>
    </Container>
    </>
  )
}

export default pagina2