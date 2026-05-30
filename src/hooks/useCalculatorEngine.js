import { useState } from 'react'
import { calcular, agregarDigito } from '../utils/calculator'

export function useCalculatorEngine() {
  const [pantalla, setPantalla] = useState('0')
  const [numeroAnterior, setNumeroAnterior] = useState(null)
  const [operacion, setOperacion] = useState(null)
  const [deberíaLimpiarPantalla, setDeberíaLimpiarPantalla] = useState(false)

  const manejadorClickBoton = (etiquetaBoton) => {
    if (etiquetaBoton === 'C') {
      setPantalla('0')
      setNumeroAnterior(null)
      setOperacion(null)
      setDeberíaLimpiarPantalla(false)
      return
    }

    const esNumero = ['0', '1', '2', '3', '4', '5', '6', '7',
      '8', '9'].includes(etiquetaBoton)
    if (esNumero) {
      const nuevaPantalla = deberíaLimpiarPantalla
        ? etiquetaBoton
        : agregarDigito(
          pantalla === '0' ? '' : pantalla,
          etiquetaBoton
        )
      setPantalla(nuevaPantalla || '0')
      setDeberíaLimpiarPantalla(false)
      return
    }

    const esOperacion = ['+', '-', '*'].includes(etiquetaBoton)
    if (esOperacion) {
      if (operacion && !deberíaLimpiarPantalla && pantalla !== '0') {
        const resultado = calcular(
          numeroAnterior,
          operacion,
          pantalla
        )
        setPantalla(resultado)
        setNumeroAnterior(resultado)
      } else {
        setNumeroAnterior(pantalla)
      }
      setOperacion(etiquetaBoton)
      setDeberíaLimpiarPantalla(true)
      return
    }

    if (etiquetaBoton === '=') {
      if (operacion && numeroAnterior) {
        const resultado = calcular(numeroAnterior, operacion, pantalla)
        setPantalla(resultado)
        setNumeroAnterior(null)
        setOperacion(null)
        setDeberíaLimpiarPantalla(true)
      }
    }
  }

  return { pantalla, manejadorClickBoton }
}
