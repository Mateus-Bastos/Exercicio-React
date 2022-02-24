import './cadastros.css'
import Header from '../../components/Header'
import Title from '../../components/Title'

import { BiDetail } from 'react-icons/bi'

export default function Cadastros() {
  return (
    <div>
      <Header />

      <div className="content">
        <Title name="Cadastros">
          <BiDetail size={27} />
        </Title>
      </div>
    </div>
  )
}
