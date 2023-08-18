import React from 'react'
import './accountComp.css'
import { Link } from 'react-router-dom'

const AccountComp = ({visibility}) => {
  return (
    <div className={`${visibility}`}>
        <Link to='/pg2' className="top-btn">
            <p className="top-btn-txt">Have an account?</p>
        </Link>

        <button className="top-btn1-cl">
            <p className="top-btn-txt">SIGN IN</p>
        </button>
    </div>
  )
}

export default AccountComp;