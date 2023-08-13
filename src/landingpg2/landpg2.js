import React from 'react'
import Head2 from './head2'
import './landpg2.css'

import google from './l2images/googleplay.png'
import apple from './l2images/appleic.png'

import comboImg1 from './l2images/fcombo1.png'
import comboImg2 from './l2images/fcombo2.png'
import comboImg3 from './l2images/fcombo3.png'

import leftArrow from './l2images/arLeft.png'
import rightArrow from './l2images/arRight.png'

import aboutUsImg from './l2images/aboutimg.png'
import aboutUsDot from './l2images/aboutusdot.png'
import aboutUsFrame from './l2images/aboutusframe.png'

const Landpg2 = () => {
  return (
    <div className='mainContainer2'>
      <Head2/>
      <div className='navbarholder'> 
      </div>

      <section className='topcontainer'>
        <div className='positiontopImages'>
          <div>
            <p className='topbigtxt-1'>
              Night Trips
            </p>
          </div>

          <div>
            <p className='topbigtxt-2'>
              WE GOT THRILLS FOR THE DEVIANT IN YOU
            </p>
          </div>

          <div className='topform-container'>
            <div className='tp-1'>
              <div className='choose-1'>
                <div className='selfOthers'>
                  <p>I am</p>
                </div>

                <div className='row-choose'>
                  <input
                    type="radio"
                    name="topping"
                    value="Regular"
                    id="regular"
                    className='radiobutton'
                  />

                  <p>A Woman</p>
                </div>

                <div className='row-choose'>
                  <input
                    type="radio"
                    name="topping"
                    value="Regular"
                    id="regular"
                    className='radiobutton'
                  />

                  <p>A Man</p>
                </div>
              </div>

              <div className='choose-1'>
                <div className='selfOthers'>
                  <p>I am Looking for</p>
                </div>

                <div className='row-choose'>
                  <input
                    type="radio"
                    name="topping"
                    value="Regular"
                    id="regular"
                    className='radiobutton'
                  />

                  <p>A Woman</p>
                </div>

                <div className='row-choose'>
                  <input
                    type="radio"
                    name="topping"
                    value="Regular"
                    id="regular"
                    className='radiobutton'
                  />

                  <p>A Man</p>
                </div>
              </div>
            </div>

            <div className='tp-2'>
              <button>
                  <p>JOIN NOW</p>
              </button>
            </div>
          </div>
        </div>
        
      </section>

      <section className='dwnbtn-section'>
        <div className='rowbtns-2'>
                  <button className='dnwbtn-2 b1-1'>
                    <img className="gplay-2" src={google} alt=""/>
                    <div className='inbtncl-2'>
                      <p className='btnsm-2'>Get it on</p>
                      <p className='btnbd-2'>Google Play</p>
                    </div>
                  </button>

                  <button className='dnwbtn-2 b2-2'>
                    <img className="apic-2" src={apple} alt=""/>
                    <div className='inbtncl-2'>
                      <p className='btnsm-2'>Download on the</p>
                      <p className='btnbd-2'>App Store</p>
                    </div>
                  </button>
          </div>

          <div className='below-dwnbtns'>
            <div>
              <p className='btgTrip'>Pick your trip</p>
            </div>

            <div>
              <p className='smallWritupz'>
                Our team put together some trips to you to discover,<br/>
                feel free to discover each of them.
              </p>
            </div>
          </div>
      </section>

      <section className='thirdpic-section'>

        <div className='flex-imgs-txts'>

          <div className='all-images-holder'>
            {/* <div className='image-h1'></div> */}
            <img className="image-h1" src={comboImg1} alt=""/>

            {/* <div className='image-h2'></div> */}
            <img className="image-h2" src={comboImg2} alt=""/>

            {/* <div className='image-h3'></div> */}
            <img className="image-h3" src={comboImg3} alt=""/>

            <div className='image-h4'>
              <p className='zero-pg'>01</p>
              <p className='one-pg'>
                SILKY<br/>
                SHEETS<br/>
                AND X
              </p>
            </div>

            <div className='image-h5'>
              <div className='arrbt1'>
                <img className="arr-ow" src={leftArrow} alt=""/>
              </div>
              <div className='arrbt1'>
                <img className="arr-ow" src={rightArrow} alt=""/>
              </div>
            </div>
          </div>

          <div className='right-txt-container'>
            <p className='chilAdven'>Chill Adventure</p>

            <p className='chillAd2'>
              Ornare vivamus molestie pellentesque nunc. Sed sapien erat ultrices curabitur. Erat id fringilla arcu condimentum fames.<br/>
              <br/> 
              Aliquet dictum aliquet faucibus cursus turpis. Suspendisse cum rutrum sit ut sociis. Pellentesque neque orci adipiscing pharetra lacus, dignissim pharetra ipsum blandit. Feugiat quis quam consectetur lectus id quis tortor vel, mattis.
            </p>

            <div className='chill-btn'>
              <button>
                  <p>SEE OUR LATEST OFFER</p>
              </button>
            </div>
          </div>

        </div>

      
      </section>

      <section className='fourth-section'>
        <p className='ab-us'>About us</p>
        <br/>
        <br/>
        <p className='ab-us-fulltxt'>
          We’re a team of four passioned people.<br/>
          <br/>
          <br/> 
          We’re ready to take the world by storm and<br/>
          let you find new LOVE and companionships.<br/>
          <br/>
          <br/>
          Our everyday task is to make sure that you satisfied with the services<br/>
          and products that we provide.<br/>
          <br/>
          <br/>
          With 💖 from Amsterdam, Netherlands.
        </p>

        <div className='ly-images'>
          
          {/* <div className='ly-img-1'></div> */}
          <img className="ly-img-1" src={aboutUsImg} alt=""/>

          {/* <div className='ly-img-2'></div> */}
          <img className="ly-img-2" src={aboutUsDot} alt=""/>

          {/* <div className='ly-img-3'></div> */}
          <img className="ly-img-3" src={aboutUsFrame} alt=""/>
        </div>

        <div className='chill-btn-2'>
              <button>
                  <p>READ ABOUT US</p>
              </button>
        </div>
        

      </section>
    </div>
  )
}

export default Landpg2