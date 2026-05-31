export function Display({ valor }) {
  const getExpression = () => {
    if (valor.includes('Error') || valor.includes('Infinity')) {
      return 'sad'
    }
    if (valor === '0') {
      return 'neutral'
    }
    return 'happy'
  }

  const expression = getExpression()

  return (
    <div className="display">
      <div className={`display-face display-face--${expression}`}>
        <div className="face-eye face-eye--left"></div>
        <div className="face-eye face-eye--right"></div>
        <div className="face-mouth"></div>
      </div>
      <div className="display-result">{valor}</div>
    </div>
  )
}
