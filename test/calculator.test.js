import { describe, it, expect } from 'vitest'
import { calcular, agregarDigito, longitudValida } from '../src/utils/calculator'

describe('Calculator - Suma', () => {
  it('debe sumar correctamente dos números positivos', () => {
    const resultado = calcular('5', '+', '3')
    expect(resultado).toBe('8')
  })

  it('debe sumar números grandes sin exceder el límite', () => {
    const resultado = calcular('999999990', '+', '1')
    expect(resultado).toBe('999999991')
  })
})

describe('Calculator - Resta', () => {
  it('debe restar correctamente dos números positivos', () => {
    const resultado = calcular('10', '-', '4')
    expect(resultado).toBe('6')
  })
})

describe('Calculator - Multiplicación', () => {
  it('debe multiplicar correctamente dos números positivos', () => {
    const resultado = calcular('4', '*', '5')
    expect(resultado).toBe('20')
  })
})

describe('Calculator - Máximo 9 caracteres', () => {
  it('no debe permitir más de 9 dígitos en el display', () => {
    let display = ''
    display = agregarDigito(display, '1')
    display = agregarDigito(display, '2')
    display = agregarDigito(display, '3')
    display = agregarDigito(display, '4')
    display = agregarDigito(display, '5')
    display = agregarDigito(display, '6')
    display = agregarDigito(display, '7')
    display = agregarDigito(display, '8')
    display = agregarDigito(display, '9')
    display = agregarDigito(display, '0') 
    expect(display).toBe('123456789')
    expect(display.length).toBeLessThanOrEqual(9)
  })
})

describe('Calculator - Error con números negativos', () => {
  it('debe mostrar ERROR cuando el resultado es negativo', () => {
    const resultado = calcular('5', '-', '10')
    expect(resultado).toBe('ERROR')
  })
})
