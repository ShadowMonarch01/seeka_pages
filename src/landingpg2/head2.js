import React from 'react'
import { Link } from 'react-router-dom'
import logo from './l2images/Logo.png'
import avatar from './l2images/avatar.png'
import './head2.css'

const Head2 = () => {
  return (
    <header className='header-2'>
      <div>
        <Link href="/">
            <img className="bar-logo" src={logo} alt=""/>
        </Link>
      </div>
      

      <div className="top-btn-wrapper2">
            <Link to='/' className="top-btn2">
                <p className="top-btn-txt2">Home</p>
            </Link>

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
        </div>
    </header>
  )
}

export default Head2