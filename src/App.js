import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Routes from './routes'

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export default App
