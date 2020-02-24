import React from 'react'
import './Drawer.scss'
import { ReactComponent as Dashboard } from '../../../images/sidenav/dashboard.svg'
import { ReactComponent as Operations } from '../../../images/sidenav/operations.svg'
import { ReactComponent as Records } from '../../../images/sidenav/records.svg'
import { ReactComponent as SupplyStore } from '../../../images/sidenav/supplystore.svg'
import { ReactComponent as MarketPlace } from '../../../images/sidenav/marketplace.svg'
import { ReactComponent as Forums } from '../../../images/sidenav/forums.svg'

const Drawer = () => {
  const iconstyle = { height: '20px', width: '20px' }
  return (
    <div className="drawer">
      <ul>
        <li>
          <a href="#">
            <div className="icon">
              <Dashboard style={iconstyle} />
            </div>
            <div className="desc">Dashboard</div>
          </a>
          <div className="line"></div>
        </li>
        <li>
          <a href="#">
            <div className="icon">
              <Operations style={iconstyle} />
            </div>
            <div className="desc">Operations</div>
          </a>
          <div className="line"></div>
        </li>
        <li>
          <a href="#">
            <div className="icon">
              <Records style={iconstyle} />
            </div>
            <div className="desc">Record</div>
          </a>
          <div className="line"></div>
        </li>
        <li>
          <a href="#">
            <div className="icon">
              <SupplyStore style={iconstyle} />
            </div>
            <div className="desc">Supply Store</div>
          </a>
          <div className="line"></div>
        </li>
        <li>
          <a href="#">
            <div className="icon">
              <MarketPlace style={iconstyle} />
            </div>
            <div className="desc">Market Place</div>
          </a>
          <div className="line"></div>
        </li>
        <li>
          <a href="#">
            <div className="icon">
              <Forums style={iconstyle} />
            </div>
            <div className="desc">Forums</div>
          </a>
          <div className="line"></div>
        </li>
        <li className="drawer-settings">
          <a href="#">
            <div className="icon">
            <i className="fas fa-cog" style={{fontSize:'20px'}}></i>
            </div>
            <div className="desc">Settings</div>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Drawer
