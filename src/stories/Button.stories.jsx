import { Button } from '../components/Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    etiqueta: { control: 'text' },
    alClickear: { action: 'clicked' }
  }
}

export function NumeroButton() {
  return <Button etiqueta="5" alClickear={() => {}} />
}

export function OperacionButton() {
  return <Button etiqueta="+" alClickear={() => {}} />
}

export function ClearButton() {
  return <Button etiqueta="C" alClickear={() => {}} />
}

export function IgualButton() {
  return <Button etiqueta="=" alClickear={() => {}} />
}

export function CeroButton() {
  return <Button etiqueta="0" alClickear={() => {}} />
}
