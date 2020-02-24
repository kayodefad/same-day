import React from 'react'
import './SlideMenu.scss'
import {ReactComponent as Dashboard} from '../../../images/sidenav/dashboard.svg'
import {ReactComponent as Operations} from '../../../images/sidenav/operations.svg'
import {ReactComponent as Records} from '../../../images/sidenav/records.svg'
import {ReactComponent as SupplyStore} from '../../../images/sidenav/supplystore.svg'
import {ReactComponent as MarketPlace} from '../../../images/sidenav/marketplace.svg'
import {ReactComponent as Forums} from '../../../images/sidenav/forums.svg'

const SlideMenu = () => {
    const iconstyle = {height: '20px', width: '20px'}
  return (
    <div className="slide-menu">
      <ul>
        <li>
          <a href="#">
            <span className="icon"><Dashboard style={iconstyle} /></span>
            <span className="desc">Dashboard</span>
          </a>
          <div className="line"></div>
        </li>
        <li>
          <a href="#">
            <span className="icon"><Operations style={iconstyle}/></span>
            <span className="desc">Operations</span>
          </a>
          <div className="line"></div>
        </li>
        <li>
          <a href="#">
            <span className="icon"><Records style={iconstyle}/></span>
            <span className="desc">Records</span>
          </a>
          <div className="line"></div>
        </li>
        <li>
          <a href="#">
            <span className="icon"><SupplyStore style={iconstyle} /></span>
            <span className="desc">Supply Store</span>
          </a>
          <div className="line"></div>
        </li>
        <li>
          <a href="#">
            <span className="icon"><MarketPlace style={iconstyle} /></span>
            <span className="desc">Market Place</span>
          </a>
          <div className="line"></div>
        </li>
        <li>
          <a href="#">
            <span className="icon"><Forums style={iconstyle} /></span>
            <span className="desc">Forums</span>
          </a>
          <div className="line"></div>
        </li>
        <li className='settings'>
          <a href="#">
            <span className="icon"><i className="fas fa-cog" style={{fontSize:'20px'}}></i></span>
            <span className="desc">Settings</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SlideMenu
