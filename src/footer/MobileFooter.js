import React from 'react'
import './MobileFooter.css'
import DropView from './footerdropdown/DropView';
import { AllDropData } from './DropData';

import FooterAtImg from './footerat.png'

const MobileFooter = () => {
  return (
    <div className='mbf-container'>
        <div className='flex-faq lg-container'>
            <p>LANGUAGE</p>

            <div>
                <p>English</p>
            </div>
        </div>

        {
          AllDropData.map((item,index)=>(
            <DropView
              key={index}
              DropDownName={item.title}
              DropDownData={item.data}
            />
          ))
        }
        
        <div className='powered-by'>
          <img className='py-img' src={FooterAtImg} alt=''/>
          <p className='py-txt'>Seeka 2023</p>
        </div>
    </div>
  )
}

export default MobileFooter;