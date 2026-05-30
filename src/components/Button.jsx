export function Button({ etiqueta, alClickear }) {
  return (
    <button className="btn" onClick={() => alClickear(etiqueta)}>
      {etiqueta}
    </button>
  )
}
