import { Switch } from 'react-router-dom'
import Route from './Route'

import Dashboard from '../pages/Dashboard'
import Monitoramento from '../pages/Monitoramento'
import Exit from '../pages/Exit'
import Cadastros from '../pages/Cadastros'
import Relatorios from '../pages/Relatorios'
import Indicadores from '../pages/Indicadores'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/monitoramento" component={Monitoramento} />
      <Route exact path="/indicadores" component={Indicadores} />
      <Route exact path="/relatorios" component={Relatorios} />
      <Route exact path="/cadastros" component={Cadastros} />
      <Route exact path="/exit" component={Exit} />
    </Switch>
  )
}
