import { Button } from './Button'

export function Keyboard({ alClickearBoton }) {
  const botones = [
    ['7', '8', '9', '-'],
    ['4', '5', '6', '+'],
    ['1', '2', '3', '*'],
    ['0', '=', 'C', '%']
  ]

  return (
    <div className="keyboard">
      {botones.map((fila, indice) => (
        <div key={indice} className="keyboard-row">
          {fila.map((boton) => (
            <Button
              key={boton}
              etiqueta={boton}
              alClickear={alClickearBoton}
            />
          ))}
        </div>
      ))}
    </div>
  )
}