import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
        <div className="contact__container">
            <div className="g__h3">Contact Me</div>
            
            <input type="text" className="contact__input" placeholder='Name'/>
            {/* <input type="text" className="contact__input" placeholder='Contact Me'/> */}
            <textarea name="" id="" cols="30" rows="10" className='contact__input' placeholder='Drop a message!!'></textarea>

            <button className="contact__submit">Contact Me</button>
        </div>
    </div>
  )
}

export default Contact