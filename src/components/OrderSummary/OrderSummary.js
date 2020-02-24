import React from 'react'
import './OrderSummary.scss'

const OrderSummary = () => {
  return (
    <div>
      <div className="order-id">Order: #ADJ2322434D</div>
      <div className="order-summary">
          <div className="acct-setup">Account Setup > Delivery Method</div>
          <div>
            <span className="prod-status">Production Status</span>{' '}
            <span className="running">Running 2 of 4</span>
          </div>
      </div>
    </div>
  )
}

export default OrderSummary
