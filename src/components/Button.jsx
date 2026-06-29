// Bottone riutilizzabile.
// Riceve via props il testo (label) e, opzionalmente, una variante grafica (variant)
// che applica una classe CSS modificatrice. È solo grafico: nessuna logica al click.
function Button({ label, variant }) {
  // Classe base sempre presente; il modificatore (es. "ui-button--accent") si aggiunge solo se variant è definita
  let classes = "ui-button";
  if (variant) classes += ` ui-button--${variant}`;

  return (
    <button type="button" className={classes}>
      {label}
    </button>
  );
}

export default Button;
