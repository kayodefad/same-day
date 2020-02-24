import React from 'react'
import './Footer.scss'
import { ReactComponent as Apple } from '../../images/social/apple.svg'
import { ReactComponent as PlayStore } from '../../images/social/playstore.svg'
import { ReactComponent as Twitter } from '../../images/social/twitter.svg'
import { ReactComponent as FaceBook } from '../../images/social/facebook.svg'
import { ReactComponent as Instagram } from '../../images/social/instagram.svg'

const Footer = () => {
  const style = { width: '12px', height: '12px', background:'#7a7575' }
  const socialStyle = { width: '20px', height: '20px'}
  return (
    <div className="footer">
      <div className="download">
        <p>Download App</p>
        <span style={{marginRight: '15px'}}><Apple style={style} /></span>
        <span><PlayStore style={style} /></span>
      </div>
      <div className="lorem">
        <p className="lorem-p">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A minus hic
          illum nemo nisi rem magni, animi ab ratione ea! Nostrum sapiente nisi
          ipsam molestiae veniam alias ad at impedit in ullam. Dignissimos
          accusamus tempore dolor, repellendus ad quas, similique, vitae maxime
          veniam voluptates qui. Numquam alias quasi ea earum!
        </p>
        <div className="lorem-links">
          <p>Lorem, ipsum dolor sit</p>
          <p>Lorem, ipsum dolor sit</p>
          <p>Lorem, ipsum dolor sit</p>
        </div>
      </div>
      <div className="connect">
        <p>Connect with Us</p>
        <div className="social">
          <span>
            <Twitter style={socialStyle} />
          </span>
          <span>
            <FaceBook style={socialStyle} />
          </span>
          <span>
            <Instagram style={socialStyle} />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
