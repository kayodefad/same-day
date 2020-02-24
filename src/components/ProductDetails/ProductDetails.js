import React from 'react'
import './ProductDetails.scss'
import Front from '../../images/shirts/front.png'
import Back from '../../images/shirts/back.png'
import Side from '../../images/shirts/side.png'
import { Link } from 'react-router-dom'

const ProductDetails = () => {
  return (
    <div className="productDetails">
      <div className="productDetailsHeader">
        <div className="p-left">
          <div className="product">Product Details</div>
          <div className="line"></div>
          <div>History / Notes</div>
        </div>
        <ul className="right">
          <li>
            <select id="cars">
              <option value="volvo">Worksheet</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </li>
          <li className="print">Print</li>
          <li className="addNote">Add Note</li>
          <li>
            <select id="completeProd">
              <option value="volvo">Complete Production</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </li>
        </ul>
      </div>
      <div>
        <ul className="productDetailsBody">
          <li style={{ fontWeight: 'bold' }}>Product</li>
          <li className="downloadArtwork">Download Artwork</li>
        </ul>
      </div>
      <div className="shirts">
        <figure>
          <img src={Front} alt="front" />
          <figcaption style={{ fontWeight: 'bold', textAlign: 'center' }}>
            Front
          </figcaption>
        </figure>
        <figure>
          <img src={Back} alt="back" />
          <figcaption style={{ fontWeight: 'bold', textAlign: 'center' }}>
            Back
          </figcaption>
        </figure>
        <figure>
          <img src={Side} alt="side" />
          <figcaption style={{ fontWeight: 'bold', textAlign: 'center' }}>
            Side
          </figcaption>
        </figure>
        <figure>
          <img src={Back} alt="back" />
          <figcaption style={{ fontWeight: 'bold', textAlign: 'center' }}>
            Back
          </figcaption>
        </figure>
      </div>

      {/* Table */}
      <div className="table">
        <table>
          <tr>
            <th className="order">
              <input type="checkbox" id="order" />
              <label for="order">Item #</label>
            </th>
            <th>Details</th>
            <th>
              Print<div>Type</div>
            </th>
            <th>Colors</th>
            <th>Qty</th>
            <th>Paid</th>
          </tr>

          {/* tablebody */}

          <tr>
            <td>
              <input type="checkbox" />
              #232JODJSDKN2
            </td>
            <td className="details">
              <img src={Front} alt="front" />
              <span>
                No Minimum - More Color Available - Gildan unisex ultra cotton
                T-shirt (NY1)
              </span>
            </td>
            <td>
              <p className="print-type">DTG Print</p>
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
              <p><i class="fas fa-check"></i>Paid in full</p>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default ProductDetails
