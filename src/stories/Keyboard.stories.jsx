import { useState } from 'react'
import { Keyboard } from '../components/Keyboard'

export default {
  title: 'Components/Keyboard',
  component: Keyboard,
  argTypes: {
    alClickearBoton: { action: 'botón clickeado' }
  }
}

export function KeyboardDefault() {
  return <Keyboard alClickearBoton={() => {}} />
}

export function KeyboardInteractiva() {
  const [ultimoBoton, setUltimoBoton] = useState('')
  return (
    <>
      <Keyboard alClickearBoton={(boton) => setUltimoBoton(boton)} />
      <p>Último botón presionado: {ultimoBoton || 'ninguno'}</p>
    </>
  )
}
