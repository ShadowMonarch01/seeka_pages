import React from 'react'
import './head1.css'
import { Link } from 'react-router-dom'

import logo from './l1images/Logo.png'

const Head1 = () => {
  return (
    <header>
      <div>
        <Link href="/">
            <img className="bar-logo" src={logo} alt=""/>
        </Link>
      </div>
      

      <div className="top-btn-wrapper">
            <Link to='/pg2' className="top-btn">
                <p className="top-btn-txt">Have an account?</p>
            </Link>

            <button className="top-btn1">
                <p className="top-btn-txt">Sign in</p>
            </button>
        </div>
    </header>
  )
}

export default Head1