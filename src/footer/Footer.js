import React from 'react'
import './Footer.css'
import instagram from './instagram.png'
import facebook from './facebook.png'
import twitter from './twitter.png'
import btmlogo from './btmdimg.png'

const Footer = ({dBcakground}) => {

    const About = ['Our Mission', 'Terms', 'Copyrights'];

    const Faq = ['Rules', 'Tickets', 'Editions', 'Contribute'];

    const Events = ['Star Gazing', 'Desert Mania', 'Dunes Madness', 'Spooky Land']

    const Contactus = ['hellow@example.com', '(405) 555-0128', '(253) 555-0126'];

  return (
    <div className={`section3 ${dBcakground}`}>
        <div className='btmcontainer'>
          {/* A section */}
          <div className='tabsection'>
            <p className='stitle'>ABOUT</p>
            <div className='tbdata'>
              {
                About.map((item,index)=>(
                  <p key={index}>{item}</p>
                ))
              }
            </div>
          </div>

          {/* A section */}
          <div className='tabsection'>
            <p className='stitle'>FAQ</p>
            <div className='tbdata'>
              {
                Faq.map((item,index)=>(
                  <p key={index}>{item}</p>
                ))
              }
            </div>
          </div>

          {/* A section */}
          <div className='tabsection'>
            <p className='stitle'>EVENTS</p>
            <div className='tbdata'>
              {
                Events.map((item,index)=>(
                  <p key={index}>{item}</p>
                ))
              }
            </div>
          </div>

          {/* A section */}
          <div className='tabsection'>
            <p className='stitle'>CONTACT US</p>
            <div className='tbdata'>
              {
                Contactus.map((item,index)=>(
                  <p key={index}>{item}</p>
                ))
              }
            </div>
          </div>

          {/* A section */}
          <div className='tabsection'>
            <p className='stitle'>FOLLOW US</p>
            <div className='tbdata cntrdata'>
              <div className='structic'>
              <div className='iconsContainer'>
                <img className="btmicons" src={instagram} alt=""/>
                <img className="btmicons" src={facebook} alt=""/>
                <img className="btmicons" src={twitter} alt=""/>
              </div>
              <img className="btmic" src={btmlogo} alt=""/>
              </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Footer;