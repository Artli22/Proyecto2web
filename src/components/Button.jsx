const BUTTON_LABELS = { '+': 'sumar', '-': 'restar', '*': 'multiplicar', '%': 'módulo', '=': 'igual', 'C': 'limpiar' }

export function Button({ etiqueta, alClickear }) {
  const isOperator = ['+', '-', '*', '%'].includes(etiqueta)
  const isSpecial = ['C', '='].includes(etiqueta)
  const className = isOperator ? 'btn btn-operator' : isSpecial ? 'btn btn-special' : 'btn btn-number'
  const ariaLabel = BUTTON_LABELS[etiqueta] || `número ${etiqueta}`

  return (
    <button className={className} onClick={() => alClickear(etiqueta)} aria-label={ariaLabel}>
      {etiqueta}
    </button>
  )
}
