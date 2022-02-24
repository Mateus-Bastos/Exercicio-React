import { Link } from 'react-router-dom'
import './exit.css'

export default function () {
  return (
    <div className="exit">
      <h1>VOCE SAIU DA PLATAFORMA</h1>
      <button>
        <Link to="/"> Voltar a plataforna</Link>
      </button>
    </div>
  )
}
