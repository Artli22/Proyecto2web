import { Display } from '../components/Display'

export default {
  title: 'Estados/ERROR',
  component: Display
}

export function ErrorResultadoNegativo() {
  return (
    <div>
      <h3>Error: Resultado Negativo (5 - 10)</h3>
      <Display valor="ERROR" />
    </div>
  )
}

export function ErrorNumeroMuyGrande() {
  return (
    <div>
      <h3>Error: Número Mayor a 999999999</h3>
      <Display valor="ERROR" />
    </div>
  )
}

export function ErrorDesdeCalculadora() {
  return (
    <div>
      <h3>Estado Error en Pantalla</h3>
      <Display valor="ERROR" />
    </div>
  )
}
