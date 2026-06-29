import reactLogo from './assets/react.svg'
import Button from './components/Button'
import Card from './components/Card'
import './App.css'

function App() {
  // Layout dello screenshot: bottone, due card immagine identiche, bottone.
  // I componenti Button e Card sono riutilizzati cambiando solo le props.
  return (
    <main className="page">
      <Button label="CLICK ME PLEASE!" />
      <Card src={reactLogo} alt="Logo React" />
      <Card src={reactLogo} alt="Logo React" />
      <Button label="I'M ANOTHER BUTTON" variant="accent" />
    </main>
  )
}

export default App
