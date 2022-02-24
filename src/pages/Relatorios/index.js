import './relatorios.css'
import Header from '../../components/Header'
import Title from '../../components/Title'

import { BiDesktop } from 'react-icons/bi'

export default function Relatorios() {
  return (
    <div>
      <Header />

      <div className="content">
        <Title name="Relatorios">
          <BiDesktop size={27} />
        </Title>
      </div>
    </div>
  )
}
