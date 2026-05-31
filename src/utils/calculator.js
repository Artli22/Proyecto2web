
export const longitudValida = (numeroSTR) => {
  return numeroSTR.replace(/[^\d]/g, '').length <= 9
}

export const esNegativo = (numero) => {
  return numero < 0
}

export const esMuyGrande = (numero) => {
  return numero > 999999999
}

export const configResultado = (numero) => {
  if (isNaN(numero) || !isFinite(numero)) {
    return 'ERROR'
  }
  if (esNegativo(numero)) {
    return 'ERROR'
  }
  if (esMuyGrande(numero)) {
    return 'ERROR'
  }
  return String(numero)
}

export const calcular = (operadorIzq, operation, operadorDer) => {
  const num1 = Number(operadorIzq)
  const num2 = Number(operadorDer)

  let resultado

  switch (operation) {
    case '+':
      resultado = num1 + num2
      break
    case '-':
      resultado = num1 - num2
      break
    case '*':
      resultado = num1 * num2
      break
    case '%':
      resultado = num1 % num2
      break
    case '=':
      resultado = num2
      break
    default:
      return null
  }

  return configResultado(resultado)
}

export const agregarDigito = (displayActual, digito) => {
  const displaySinError = displayActual === 'ERROR' ? '' : displayActual
  const nuevoDisplay = displaySinError + digito

  if (nuevoDisplay.length > 9) {
    return displaySinError
  }

  return nuevoDisplay
}

export const limpiarDisplay = () => {
  return ''
}
