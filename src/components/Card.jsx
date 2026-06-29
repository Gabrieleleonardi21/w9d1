// Card immagine riutilizzabile.
// Riceve via props la sorgente dell'immagine (src) e il testo alternativo (alt).
import { Component } from 'react'

class Card extends Component {
  render() {
    // Estraggo le props dall'istanza della classe.
    const { src, alt } = this.props
    return (
      <div className="card">
        <img src={src} alt={alt} className="card-img" />
      </div>
    )
  }
}

export default Card
