import React from 'react'
import './Navbar.css'

const Navbar = () => {

  return (
    <div className='nav'>
        <div className="nav__container">
            <div className="nav__left">
              <div className="nav__logo">
                IS
              </div>
            </div>

            <div className="nav__right">
              <div className="nav__items">
                <div className="nav__item">
                  <a href="#about" className="nav__num1" >
                    <span className="nav__num">01.</span> About
                  </a>
                </div>
                <div className="nav__item">
                  <a href="#exp" className="nav__num1">
                    <span className="nav__num">02.</span> Experience
                  </a>
                </div>
                <div className="nav__item">
                  <a href="#work" className="nav__num1">
                    <span className="nav__num">03.</span> Work
                  </a>
                </div>
                <div className="nav__item">
                  <a href="#contact" className="nav__num1">
                    <span className="nav__num">04.</span> Contact
                  </a>
                </div>
                <div className="nav__item">
                  <a href={require("./Inderpreet.pdf")} download="Inderpreet">
                    <div className="nav__btn">
                      Resume
                    </div>
                  </a>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar