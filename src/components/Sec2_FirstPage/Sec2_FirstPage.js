import React from 'react'
import './Sec2_FirstPage.scss'

const Sec2_FirstPage = () => {
  return (
    <div className="table-top">
      <div className="left-table-top">
          <div className="lined productions">
            All Productions <span className="prod-number">192</span>
          </div>
        <div className="line"></div>
        <div className="lined">
          Awaiting Production<span className="notif">19</span>
        </div>
        <div className="line"></div>
        <div>Completed</div>
      </div>
      <ul>
        <li className="print-work">
          <p>Print worksheet</p>
        </li>
        <li className="complete">
          <select id="cars">
            <option value="volvo">Mark as Complete</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </li>
        <li className="save">
          <p>Save</p>
        </li>
      </ul>
    </div>
  )
}

export default Sec2_FirstPage
