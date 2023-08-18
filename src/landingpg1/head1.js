import React from 'react'
import './head1.css'
import { Link } from 'react-router-dom'

import logo from './l1images/Logo.png'
import AccountComp from './accountComp';

const Head1 = () => {
  return (
    <header>
      <div>
        <Link href="/">
            <img className="bar-logo" src={logo} alt=""/>
        </Link>
      </div>
      

      

      <AccountComp
        visibility={'top-btn-wrapper'}
      />
    </header>
  )
}

export default Head1