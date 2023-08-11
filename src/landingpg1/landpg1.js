import React from 'react'
import Head1 from './head1';
import './landpg1.css'
import { Link } from 'react-router-dom';

import instagram from './l1images/instagram.png'
import facebook from './l1images/facebook.png'
import twitter from './l1images/twitter.png'
import google from './l1images/googleplay.png'
import apple from './l1images/appleic.png'
import btmlogo from './l1images/btmdimg.png'
import backgroundbg from './l1images/background1.png'

const Landpg1 = () => {
  const About = ['Our Mission', 'Terms', 'Copyrights'];

  const Faq = ['Rules', 'Tickets', 'Editions', 'Contribute'];

  const Events = ['Star Gazing', 'Desert Mania', 'Dunes Madness', 'Spooky Land']

  const Contactus = ['hellow@example.com', '(405) 555-0128', '(253) 555-0126'];
  return (
    <div className='mainContainer'>
      <Head1/>
      <div></div>

      {/* Section 1 */}
      <div className='section1'>
        <div className='sectionmain'>
          <div className='bgtxts'>
            <p className='ch1'>DATING FOR EVERY</p>
            <p className='ch2'>SINGLE PERSON</p>
          </div>
          
          <div className='clmnvw'>
            <p className='firsttxt'>
              Seeka is the only dating app that matches you<br/> 
              on what matters to you.<br/>
              You deserve to find who you’re looking for.<br/>
              Meet them today!
            </p>

            <p className='seconttxt'>
              By clicking Join, you agree to our<br/> 
              <Link to='/pg2'>Terms</Link>. Learn how we processs your<br/> 
              data in our <Link to='/'>Privacy Policy</Link>. and<br/>
              <Link to='/'>Cookies Policy.</Link>
            </p>

            <button className='joinbtn'>
              <p>JOIN SEEKA</p>
            </button>

            <div className='lowerbtns'>
              <p className='gtapp'>GET THE APP</p>

              <div className='rowbtns'>
                <button className='dnwbtn b1'>
                  <img className="gplay" src={google} alt=""/>
                  <div className='inbtncl'>
                    <p className='btnsm'>Get it on</p>
                    <p className='btnbd'>Google Play</p>
                  </div>
                </button>

                <button className='dnwbtn b2'>
                  <img className="apic" src={apple} alt=""/>
                  <div className='inbtncl'>
                    <p className='btnsm'>Download on the</p>
                    <p className='btnbd'>App Store</p>
                  </div>
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className='sectionimage'>
          <img className="bgimg1" src={backgroundbg} alt=""/>
        </div>
      </div>


      {/* Section 3 */}
      <div className='section3'>
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
    </div>
  )
}

export default Landpg1;