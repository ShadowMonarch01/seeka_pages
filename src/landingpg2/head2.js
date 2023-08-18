import React,{useRef} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import logo from './l2images/Logo.png'
import avatar from './l2images/avatar.png'
import './head2.css'

const Head2 = () => {

  const navRef = useRef();

  const showNavbar = () =>{
      navRef.current.classList.toggle('responsive_nav');
  }

  let navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };
  
  return (
    <header className='header-2'>
      <div>
        <div onClick={goHome}>
            <img className="bar-logo" src={logo} alt=""/>
        </div>
      </div>
      

      <nav ref={navRef} className="top-btn-wrapper2">
            <div onClick={goHome} className="top-btn2 addPointer">
                <p className="top-btn-txt2">Home</p>
            </div>

            <Link to='/' className="top-btn2">
                <p className="top-btn-txt2">About</p>
            </Link>

            <Link to='/' className="top-btn2">
                <p className="top-btn-txt2">Community</p>
            </Link>

            <button className="top-btn3">
                <p className="top-btn-txt2">Sign in</p>
                <img className="" src={avatar} alt=""/>
            </button>

            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes/>
            </button>
        </nav>

        <button className='nav-btn little-shift' onClick={showNavbar}>
            <FaBars/>
        </button>
    </header>
  )
}

export default Head2