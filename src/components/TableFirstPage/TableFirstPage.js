import React from 'react'
import { Link } from 'react-router-dom'
import './TableFirstPage.scss'
import shirt from '../../images/firstpagetable/shirt.png'
import { ReactComponent as Clock } from '../../images/firstpagetable/clock.svg'

const TableFirstPage = () => {
  const iconstyle = { height: '18px', width: '18px' }
  return (
    <div className="first-page-table">
      <table>
        <tr>
          <th className="order">
            <input type="checkbox" id="order" />
            <label for="order">Order #</label>
          </th>
          <th>Item #</th>
          <th>Details</th>
          <th>Colors</th>
          <th>Qty</th>
          <th>
            Print<div>Type</div>
          </th>
          <th>
            Delivery<div>Method</div>
          </th>
          <th>Delivery Time</th>
          <th>
            Production<div>Status</div>
          </th>
        </tr>
        <tr>
          <td>
            <input type="checkbox" />
            #232JODJSDKN2
          </td>
          <td>#232JODJSDKN2</td>
          <td className="details">
            <img src={shirt} alt="shirt" />
            <span>
              No Minimum - More Color Available - Gildan unisex ultra cotton
              T-shirt (NY1)
            </span>
          </td>
          <td>
            <Link to="/page_two">
              <button className="colors">Royal</button>
            </Link>
          </td>
          <td>
            <p className="qty">L X 4</p>
          </td>
          <td>
            <p className="print-type">DTG Print</p>
          </td>
          <td className="clock">
            <Clock style={iconstyle} />
            <span>
              <p>Rush</p>
              <p>Shipping</p>
            </span>
          </td>
          <td>
            <p className="date">23 - June - 2019</p>
            <p>
              <span className="time-left">Time Left</span>
              <span className="time">10:00:00</span>
            </p>
          </td>
          <td className="prod-status">
            <p style={{ marginBottom: '3px' }}>Running</p>
            <p style={{ marginLeft: '9px' }}>2 of 5</p>
          </td>
        </tr>

        <tr>
          <td>
            <input type="checkbox" />
            #232JODJSDKN2
          </td>
          <td>#232JODJSDKN2</td>
          <td className="details">
            <img src={shirt} alt="shirt" />
            <span>
              No Minimum - More Color Available - Gildan unisex ultra cotton
              T-shirt (NY1)
            </span>
          </td>
          <td>
            <Link to="/page_two">
              <button className="colors">Royal</button>
            </Link>
          </td>
          <td>
            <p className="qty">L X 4</p>
          </td>
          <td>
            <p className="print-type">DTG Print</p>
          </td>
          <td className="clock">
            <Clock style={iconstyle} />
            <span>
              <p>Rush</p>
              <p>Shipping</p>
            </span>
          </td>
          <td>
            <p className="date">23 - June - 2019</p>
            <p>
              <span className="time-left">Time Left</span>
              <span className="time">10:00:00</span>
            </p>
          </td>
          <td className="prod-status">
            <p style={{ marginBottom: '3px' }}>Running</p>
            <p style={{ marginLeft: '9px' }}>2 of 5</p>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default TableFirstPage
