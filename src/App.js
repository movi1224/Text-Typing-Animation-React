import './styles.css'
import Typer from './Typer'

export default function App() {
  return (
    <div className="App">
      <h1>Text Typing Effect React</h1>
      <p>Simple, lightweight, no external libraries or hooks</p>
      <Typer heading="I am..." dataText={[' a Software Engineer', ' a Web Developer']} />
    </div>
  )
}
