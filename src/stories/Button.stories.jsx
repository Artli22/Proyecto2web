import { Button } from '../components/Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    etiqueta: { control: 'text' },
    alClickear: { action: 'clicked' }
  },
  parameters: {
    docs: {
      description: {
        component: 'Botones de la calculadora con tres estilos: números (amarillo), operadores (rojo) y especiales (verde)'
      }
    }
  }
}

export function ButtonGallery() {
  const botones = [
    { etiqueta: '7', tipo: 'número' },
    { etiqueta: '8', tipo: 'número' },
    { etiqueta: '9', tipo: 'número' },
    { etiqueta: '4', tipo: 'número' },
    { etiqueta: '5', tipo: 'número' },
    { etiqueta: '6', tipo: 'número' },
    { etiqueta: '1', tipo: 'número' },
    { etiqueta: '2', tipo: 'número' },
    { etiqueta: '3', tipo: 'número' },
    { etiqueta: '0', tipo: 'número' },
    { etiqueta: '+', tipo: 'operador' },
    { etiqueta: '-', tipo: 'operador' },
    { etiqueta: '*', tipo: 'operador' },
    { etiqueta: '%', tipo: 'operador' },
    { etiqueta: 'C', tipo: 'especial' },
    { etiqueta: '=', tipo: 'especial' }
  ]

  return (
    <div style={{ padding: '20px' }}>
      <h2>Galería de Botones</h2>
      <div style={{ marginBottom: '20px' }}>
        <h3>Números (Amarillo)</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {botones.filter(b => b.tipo === 'número').map(b => (
            <Button key={b.etiqueta} etiqueta={b.etiqueta} alClickear={() => {}} />
          ))}
        </div>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <h3>Operadores (Rojo)</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {botones.filter(b => b.tipo === 'operador').map(b => (
            <Button key={b.etiqueta} etiqueta={b.etiqueta} alClickear={() => {}} />
          ))}
        </div>
      </div>
      <div>
        <h3>Especiales (Verde)</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {botones.filter(b => b.tipo === 'especial').map(b => (
            <Button key={b.etiqueta} etiqueta={b.etiqueta} alClickear={() => {}} />
          ))}
        </div>
      </div>
    </div>
  )
}

ButtonGallery.parameters = {
  docs: { description: { story: 'Galería completa de todos los botones organizados por tipo' } }
}

export function NumeroButton() {
  return <Button etiqueta="5" alClickear={() => {}} />
}

export function OperacionButton() {
  return <Button etiqueta="+" alClickear={() => {}} />
}

export function ModuloButton() {
  return <Button etiqueta="%" alClickear={() => {}} />
}

export function ClearButton() {
  return <Button etiqueta="C" alClickear={() => {}} />
}

export function IgualButton() {
  return <Button etiqueta="=" alClickear={() => {}} />
}
