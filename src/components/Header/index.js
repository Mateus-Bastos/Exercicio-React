import './header.css'
import avatar from '../../assets/avatar.png'
import './header.css'
import {
  BiDesktop,
  BiBarChartSquare,
  BiLibrary,
  BiDetail,
  BiMenu
} from 'react-icons/bi'

import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <input type="checkbox" id="checkbox" />
      <label for="checkbox">
        <BiMenu color="black" size={30} className="menuicon" />
      </label>

      <div className="sidebar">
        <div className="img">
          <img src={avatar} />
        </div>

        <div className="barra">
          <Link to="/monitoramento">
            <BiDesktop color="#000" size={24} />
            Monitoramento
          </Link>
          <Link to="/indicadores">
            <BiBarChartSquare color="#000" size={24} />
            Indicadores
          </Link>
          <Link to="/relatorios">
            <BiLibrary color="#000" size={24} />
            Relatórios
          </Link>
          <Link to="/cadastros">
            <BiDetail color="#000" size={24} />
            Cadastros
          </Link>
        </div>
      </div>
    </div>
  )
}
