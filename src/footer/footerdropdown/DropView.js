import React, {useState} from 'react'
import './DropView.css'

import OpenIc from './open_ic.png'
import CloseIc from './close_ic.png'

const DropView = ({idx, DropDownName, DropDownData}) => {

    const [isOpen, setIsOpen] = useState(false);

    const ArrData =[...DropDownData]

    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
    <React.Fragment>
        <div key={idx} className='faq'>
            <div className='flex-faq question' onClick={toggle}>
                <p className='drop-title'>{DropDownName}</p>

                <div>
                    {
                        isOpen ?
                        <img className='ic-img' src={CloseIc} alt=''/> :
                        <img className='ic-img' src={OpenIc} alt=''/>
                    }
                </div>
            </div>

            <div className={isOpen ? 'answer-active':'answer'}>
                {
                    ArrData.map((item,index)=>(
                        <p key={index}>{item.dt}</p>
                    ))
                }
                {/* <p>Company</p>
                <p>Conditions</p>
                <p>Contact</p>
                <p>Social</p> */}
            </div>
        </div>
    </React.Fragment>
  )
}

export default DropView;