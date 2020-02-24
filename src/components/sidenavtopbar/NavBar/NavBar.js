import React from 'react'
import './NavBar.scss'
import { ReactComponent as Logo } from '../../../images/topnav/logo.svg'
import { ReactComponent as Magnify } from '../../../images/topnav/magnify.svg'
import { ReactComponent as Mail } from '../../../images/topnav/mail.svg'
import { ReactComponent as Cart } from '../../../images/topnav/cart.svg'
import notif from '../../../images/topnav/notif.png'
import avatar from '../../../images/topnav/avatar.png'

const NavBar = () => {
  const iconstyle = {height: '20px', width: '20px'}
  return (
    <header className="header">
      <div className="logo">
        <Logo style={{width:'130px', height: '40px'}} />
      </div>
      <nav className="nav-item">
        <ul>
          <li><div className="line"></div><Magnify style={iconstyle} /></li>
          <li><div className="line"></div><Mail style={iconstyle} /><span>Message</span></li>
          <li><div className="line"></div><Cart style={iconstyle} /><span>Market Place</span></li>
          <li><div className="line"></div><img src={notif} alt="notif" style={iconstyle} /><span>Notifications</span></li>
          <li className="avatar"><div className="line"></div><div><img src={avatar} alt='avatar' style={{width: '40px', height:'40px', borderRadius:'50%' }} /><div style={{textAlign:'center'}}>Me</div></div></li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
