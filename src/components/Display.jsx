export function Display({ valor }) {
  const expression = valor === 'ERROR' || valor.includes('Infinity') ? 'sad' : valor === '0' ? 'neutral' : 'happy'

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
