import React from 'react'
import './head1.css'
import { Link } from 'react-router-dom'

const Head1 = () => {
  return (
    <header>
      <div>
        <Link href="/">
            <img class="bar-logo" src="./Logo.png" alt=""/>
        </Link>
      </div>
      

      <div class="top-btn-wrapper">
            <Link to='/' class="top-btn">
                <p class="top-btn-txt">Have an account?</p>
            </Link>

            <button class="top-btn1">
                <p class="top-btn-txt">Sign in</p>
            </button>
        </div>
    </header>
  )
}

export default Head1