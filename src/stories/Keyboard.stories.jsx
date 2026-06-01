import { useState } from 'react'
import { Calculator } from '../components/Calculator'
import { Keyboard } from '../components/Keyboard'

export default {
  title: 'Components/Keyboard',
  component: Keyboard,
  argTypes: {
    alClickearBoton: { action: 'botón clickeado' }
  },
  parameters: {
    docs: {
      description: {
        component: 'Teclado interactivo de la calculadora con todas las funciones'
      }
    }
  }
}

export function KeyboardDefault() {
  return <Keyboard alClickearBoton={() => {}} />
}

KeyboardDefault.parameters = {
  docs: { description: { story: 'Vista estándar del teclado' } }
}

export function CalculadoraCompleta() {
  return <Calculator />
}

CalculadoraCompleta.parameters = {
  docs: { description: { story: 'Calculadora funcional completa con display e interactividad real' } }
}

export function SecuenciaCalculo() {
  const [secuencia, setSecuencia] = useState([])

  const registrarBoton = (boton) => {
    setSecuencia(prev => [...prev, boton])
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Secuencia de Cálculo</h2>
      <Keyboard alClickearBoton={registrarBoton} />
      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
        <h3>Pasos:</h3>
        <div style={{ fontSize: '18px', fontFamily: 'monospace' }}>
          {secuencia.length === 0 ? 'Presiona botones...' : secuencia.join(' → ')}
        </div>
        <button onClick={() => setSecuencia([])} style={{ marginTop: '10px', padding: '8px 16px' }}>
          Limpiar
        </button>
      </div>
    </div>
  )
}

SecuenciaCalculo.parameters = {
  docs: { description: { story: 'Visualiza la secuencia de botones presionados paso a paso' } }
}
