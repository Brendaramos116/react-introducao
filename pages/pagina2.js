import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import Pagina from '../components/Pagina'

const pagina2 = () => {
  return (
    <>
      <Pagina titulo="Página 2">
        <h1>Hello Word!</h1>
        <p>Qualquer texto</p>
        <p>Qualquer texto</p>
        <p>Qualquer texto</p>
      </Pagina>
    </>
  )
}

export default pagina2