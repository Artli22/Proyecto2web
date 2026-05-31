export function Button({ etiqueta, alClickear }) {
  const getButtonClass = () => {
    if (['+', '-', '*', '/'].includes(etiqueta)) {
      return 'btn btn-operator'
    }
    if (['C', '='].includes(etiqueta)) {
      return 'btn btn-special'
    }
    return 'btn btn-number'
  }

  return (
    <button className={getButtonClass()} onClick={() => alClickear(etiqueta)}>
      {etiqueta}
    </button>
  )
}
