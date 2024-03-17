import React, { useEffect, useRef, useState } from 'react'

const Home = ({ activeSection }) => {

  return (
    <section className={`home ${activeSection === 'home' ? 'active-section' : ''}`} id='home' >
      <div className="home-content">
        <h1>Hi, I'm <span>Ujjaval Parmar</span> <span className="animate" style={{ "--i": 2 }}></span></h1>

        <div className="text-animate">
          <h3>Frontend Developer</h3>
          <span className="animate" style={{ "--i": 3 }}></span>
        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorum tenetur sint pariatur unde dicta ab labore, possimus eos, quia voluptas voluptatum esse, odit a. Minus, vitae.
          <span className="animate" style={{ "--i": 4 }}></span>
        </p>

        <div className="btn-box">
          <a href="#" className='btn'>Hire Me</a>
          <a href="#" className='btn'>Let's Talk</a>
          <span className="animate" style={{ "--i": 5 }}></span>
        </div>

      </div>

      <div className="home-sci">
        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
        <a href="#"><i className="fa-brands fa-twitter"></i></a>
        <a href="#"><i className="fa-brands fa-square-github"></i></a>
        <span className="animate" style={{ "--i": 6 }}></span>
      </div>

      <div className="home-imgHover">
      <span className="animate home-img" style={{ "--i": 7 }}></span>

      </div>


    </section>
  )
}

export default Home