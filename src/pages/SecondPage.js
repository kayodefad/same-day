import React from 'react'
import SectOnePageTwo from '../components/SectOnePageTwo/SectOnePageTwo'
import OrderSummary from '../components/OrderSummary/OrderSummary'
import OrderInfo from '../components/OrderInfo/OrderInfo'
import ProductDetails from '../components/ProductDetails/ProductDetails'

const SecondPage = () => {
  return (
    <div>
      <SectOnePageTwo />
      <OrderSummary />
      <OrderInfo />
      <ProductDetails />
    </div>
  )
}

export default SecondPage
