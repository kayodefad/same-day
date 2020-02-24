import React from 'react'
import {Link} from 'react-router-dom'
import './SectOnePageTwo.scss'
import { ReactComponent as Production } from '../../images/mainsecondlayer/prodhouse.svg'

const SectOnePageTwo = () => {
  const style = { width: '20px', height: '20px' }
  return (
      <div className="pagetwosectone">
        <div className="back">
          <Link to='/'><i class="fas fa-arrow-left"></i></Link>
          <p>Back</p>
          <div className="line"></div>
        </div>
        <div className="product">
          <Production style={style} />
          <span>Production House</span>
        </div>
      </div>
  )
}

export default SectOnePageTwo
