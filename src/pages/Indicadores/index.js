import './indicadores.css'
import Header from '../../components/Header'
import Title from '../../components/Title'

import { BiBarChartSquare } from 'react-icons/bi'

export default function Indicadores() {
  return (
    <div>
      <Header />

      <div className="content">
        <Title name="Indicadores">
          <BiBarChartSquare size={27} />
        </Title>
      </div>
    </div>
  )
}
