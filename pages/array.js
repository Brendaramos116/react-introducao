import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Pagina from '../components/Pagina'
import { Container } from 'react-bootstrap'

const array = () => {
  const carros = ['Opala', 'Classic', 'Ka', 'Omega', 'Fuscão']
  return (
    <>
      <Pagina titulo="Array">
        <ol>
          {carros.map(item => (

            <li>{item}</li>


          ))}
        </ol>
      </Pagina>
    </>
  )
}

export default array