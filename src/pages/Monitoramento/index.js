import './monitoramento.css'
import Header from '../../components/Header'
import Title from '../../components/Title'

import { BiDesktop } from 'react-icons/bi'

export default function Monitoramento() {
  return (
    <div>
      <Header />

      <div className="content">
        <Title name="Monitoramento">
          <BiDesktop size={27} />
        </Title>
      </div>
    </div>
  )
}
