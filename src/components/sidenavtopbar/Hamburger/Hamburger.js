import React from 'react'
import './Hamburger.scss'

const Hamburger = props => {
  let hamburger = 'hamburger'
  let lineam = 'line-ham'
  if (props.show) {
    hamburger = 'hamburger open'
    lineam = 'line-ham close'
  }
  return (
    <div>
      <div className="fixed-ham">
        <div className={hamburger} onClick={props.click}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      <div className={lineam}></div>
      </div>
    </div>
  )
}

export default Hamburger
