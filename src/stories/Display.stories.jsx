import { Display } from '../components/Display'

export default {
  title: 'Components/Display',
  component: Display,
  argTypes: {
    valor: { control: 'text' }
  }
}

export function DisplayCero() {
  return <Display valor="0" />
}

export function DisplayNumeroCorto() {
  return <Display valor="5" />
}

export function DisplayNumerosMultiples() {
  return <Display valor="123456789" />
}

export function DisplayError() {
  return <Display valor="ERROR" />
}

export function DisplayResultado() {
  return <Display valor="42" />
}
