import React from 'react'
import Head1 from './head1';
import './landpg1.css'
import { Link } from 'react-router-dom';

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
                  <img class="gplay" src="./googleplay.png" alt=""/>
                  <div className='inbtncl'>
                    <p className='btnsm'>Get it on</p>
                    <p className='btnbd'>Google Play</p>
                  </div>
                </button>

                <button className='dnwbtn b2'>
                  <img class="apic" src="./appleic.png" alt=""/>
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
          <img class="bgimg1" src="./background1.png" alt=""/>
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
                <img class="btmicons" src="./instagram.png" alt=""/>
                <img class="btmicons" src="./facebook.png" alt=""/>
                <img class="btmicons" src="./twitter.png" alt=""/>
              </div>
              <img class="btmic" src="./btmdimg.png" alt=""/>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Landpg1;