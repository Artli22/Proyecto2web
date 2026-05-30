import { Display } from './Display'
import { Keyboard } from './Keyboard'
import { useCalculatorEngine } from '../hooks/useCalculatorEngine'
import './Calculator.css'
import './Display.css'
import './Button.css'
import './Keyboard.css'

export function Calculator() {
  const { pantalla, manejadorClickBoton } = useCalculatorEngine()

  return (
    <div className="calculator">
      <Display valor={pantalla} />
      <Keyboard alClickearBoton={manejadorClickBoton} />
    </div>
  )
}

