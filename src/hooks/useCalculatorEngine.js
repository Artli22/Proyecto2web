import { useState } from 'react'
import { calcular, agregarDigito } from '../utils/calculator'

const NUMEROS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const OPERADORES = ['+', '-', '*', '%']

const handleClear = (setPantalla, setNumeroAnterior, setOperacion, setDeberíaLimpiarPantalla) => {
  setPantalla('0')
  setNumeroAnterior(null)
  setOperacion(null)
  setDeberíaLimpiarPantalla(false)
}

const handleNumero = (
  boton,
  pantalla,
  deberíaLimpiarPantalla,
  setPantalla,
  setDeberíaLimpiarPantalla
) => {
  const nuevaPantalla = deberíaLimpiarPantalla
    ? boton
    : agregarDigito(pantalla === '0' ? '' : pantalla, boton) || '0'
  setPantalla(nuevaPantalla)
  setDeberíaLimpiarPantalla(false)
}

const handleOperacion = (
  boton,
  numeroAnterior,
  operacion,
  pantalla,
  setNumeroAnterior,
  setOperacion,
  setPantalla,
  setDeberíaLimpiarPantalla,
  deberíaLimpiarPantalla
) => {
  if (operacion && !deberíaLimpiarPantalla && pantalla !== '0') {
    const resultado = calcular(numeroAnterior, operacion, pantalla)
    setPantalla(resultado)
    setNumeroAnterior(resultado)
  } else {
    setNumeroAnterior(pantalla)
  }
  setOperacion(boton)
  setDeberíaLimpiarPantalla(true)
}

export function useCalculatorEngine() {
  const [pantalla, setPantalla] = useState('0')
  const [numeroAnterior, setNumeroAnterior] = useState(null)
  const [operacion, setOperacion] = useState(null)
  const [deberíaLimpiarPantalla, setDeberíaLimpiarPantalla] = useState(false)

  const manejadorClickBoton = (boton) => {
    if (boton === 'C') {
      return handleClear(setPantalla, setNumeroAnterior, setOperacion, setDeberíaLimpiarPantalla)
    }
    if (NUMEROS.includes(boton)) {
      return handleNumero(boton, pantalla, deberíaLimpiarPantalla, setPantalla, setDeberíaLimpiarPantalla)
    }
    if (OPERADORES.includes(boton)) {
      return handleOperacion(
        boton,
        numeroAnterior,
        operacion,
        pantalla,
        setNumeroAnterior,
        setOperacion,
        setPantalla,
        setDeberíaLimpiarPantalla,
        deberíaLimpiarPantalla
      )
    }
    if (boton === '=' && operacion && numeroAnterior) {
      const resultado = calcular(numeroAnterior, operacion, pantalla)
      setPantalla(resultado)
      setNumeroAnterior(null)
      setOperacion(null)
      setDeberíaLimpiarPantalla(true)
    }
  }

  return { pantalla, manejadorClickBoton }
}
