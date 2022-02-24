import './title.css'
import { BiLogOut } from 'react-icons/bi'
import avatar from '../../assets/avatar.png'
import { Link } from 'react-router-dom'

export default function Title({ children, name }) {
  return (
    <div>
      <Link to="/exit">
        <input type="checkbox" id="logout" />
        <label for="logout">
          <BiLogOut color="black" size={30} className="logout" />
        </label>
      </Link>

      <div className="imgtitle">
        <img src={avatar} />
      </div>

      <div className="title">
        {children}
        <span>{name}</span>
      </div>
    </div>
  )
}
