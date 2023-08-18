import React from 'react'
import Head1 from './head1';
import Footer from '../footer/Footer';
import './landpg1.css'
import { Link } from 'react-router-dom';


import google from './l1images/googleplay.png'
import apple from './l1images/appleic.png'
import backgroundbg from './l1images/background1.png'
import AccountComp from './accountComp';
import MobileFooter from '../footer/MobileFooter';

const Landpg1 = () => {
  
  return (
    <div className='mainContainer'>
      <Head1/>

      {/* Section 1 */}
      <div className='section1'>
        <div className='sectionmain'>
          <div className='bgtxts'>
            <p className='ch1'>DATING FOR EVERY</p>
            <p className='ch2'>SINGLE PERSON</p>
          </div>
          
          <div className='clmnvw'>
            <p className='firsttxt'>
              Seeka is the only dating app that matches you<br className='desktopView'/> 
              on what matters to you.<br/>
              You deserve to find who you’re looking for.<br className='desktopView'/>
              Meet them today!
            </p>


            <p className='seconttxt'>
              By clicking Join, you agree to our<br className='desktopView'/> 
              <Link to='/'>Terms</Link>. Learn how we<br className='mobileView'/> processs your<br/> 
              data in our <Link to='/'>Privacy Policy</Link>. and<br className='desktopView'/>
              <Link to='/'>Cookies Policy.</Link>
            </p>

            <button className='joinbtn'>
              <p>JOIN SEEKA</p>
            </button>

            <AccountComp
              visibility={'flex-d-container'}
            />
            
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
      <Footer dBcakground={'section3-l1'}/>
      <MobileFooter/>
    </div>
  )
}

export default Landpg1;