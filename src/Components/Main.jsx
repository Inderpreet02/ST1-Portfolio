import React from 'react'
import './Main.css'

const Main = () => {

  const handleSubmit = (e) => {

    alert("Arigato I have been caontacted");
    e.preventDefault();
  }
  return (
    <div className='main'>
        <div className="main__container">
          <div className="main__h1">
            Hi, my name is
          </div>
          <div className="main__h2">
            Inderpreet Singh.
          </div>
          <div className="main__h3">
            I build web apps and services
          </div>

          <div className="main__text">
          </div>

          <a href="#contact">
            <div className="main__btn" onClick={handleSubmit}>
              Contact Me!
            </div>
          </a>
        </div>
    </div>
  )
}

export default Main