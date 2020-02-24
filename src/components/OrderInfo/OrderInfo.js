import React from 'react'
import './OrderInfo.scss'

const OrderInfo = () => {
  return (
    <div className="orderInfo">
      <div>
        <p><i className="fas fa-shopping-cart"></i>Order Value</p>
        <p className="blue-color">$40,000</p>
      </div>
      <div className="line"></div>
      <div>
        <p>Order Date</p>
        <p className="blue-color">25 - June - 2017</p>
      </div>
      <div className="line"></div>
      <div>
        <p>Order Value</p>
        <p className="blue-color">
          Pickup Order{' '}
          <span>
            <select id="cars">
              <option value="volvo">Can Edit</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </span>
        </p>
      </div>
      <div className="line"></div>
      <div>
        <p>Rush Option</p>
        <p className="blue-color"><i class="fas fa-check"></i>Rush</p>
      </div>
      <div className="line"></div>
      <div>
        <p>Status</p>
        <p className="blue-color">Pending</p>
      </div>
      <div className="line"></div>
      <div>
        <p>Requested By</p>
        <p className="blue-color">25 - June - 2017</p>
        <p className="requestedBy"><span className="time-left">Time Left</span><span className="time">10:00:00</span></p>
      </div>
      <div className="line"></div>
      <div>
        <p>Shipped or</p>
        <p>Picked Date</p>
        <p className="blue-color">25 - June - 2017</p>
      </div>
    </div>
  )
}

export default OrderInfo
