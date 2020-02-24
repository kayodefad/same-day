import React from 'react'
import './Sec1_FirstPage.scss'
import { ReactComponent as Magnify } from '../../images/topnav/magnify.svg'
import { ReactComponent as ProdHouse } from '../../images/mainsecondlayer/prodhouse.svg'

const Sec1_FirstPage = () => {
  const iconstyle = { height: '22px', width: '22px', background: 'blue', padding:'0 1px' }
  return (
    <div className="first-page">
      <div className="prodhouse">
        <span style={{marginRight: '0.7rem'}}>
          <ProdHouse style={iconstyle} />
        </span>
        <h3 className="prod">Production House</h3>
      </div>
      <div className="select-search">
        <select id="cars">
          <option value="volvo">Categories</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <div className="search">
          <input type="text" />
          <span className="magnify">
            <Magnify style={{ height: '10px', width: '10px' }} />
          </span>
          <span className="clear">X</span>
        </div>
      </div>
    </div>
  )
}

export default Sec1_FirstPage
