// Card immagine riutilizzabile.
// Riceve via props la sorgente dell'immagine (src) e il testo alternativo (alt).
function Card({ src, alt }) {
  return (
    <div className="card">
      <img src={src} alt={alt} className="card-img" />
    </div>
  )
}

export default Card
