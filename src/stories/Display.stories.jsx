import { Display } from '../components/Display'

export default {
  title: 'Components/Display',
  component: Display,
  argTypes: {
    valor: { control: 'text' }
  },
  parameters: {
    docs: {
      description: {
        component: 'Display muestra tres estados diferentes: neutral (0), feliz (números ingresados) y triste (errores)'
      }
    }
  }
}

export function DisplayNeutral() {
  return <Display valor="0" />
}

DisplayNeutral.parameters = {
  docs: { description: { story: 'Estado inicial - cara neutral con valor 0' } }
}

export function DisplayFeliz() {
  return <Display valor="123" />
}

DisplayFeliz.parameters = {
  docs: { description: { story: 'Estado feliz - cuando el usuario ingresa números' } }
}

export function DisplayNumeroGrande() {
  return <Display valor="999999999" />
}

DisplayNumeroGrande.parameters = {
  docs: { description: { story: 'Número al máximo permitido (9 dígitos)' } }
}

export function DisplayError() {
  return <Display valor="ERROR" />
}

DisplayError.parameters = {
  docs: { description: { story: 'Estado triste - cuando hay un error (resta negativa, resultado muy grande, etc)' } }
}
