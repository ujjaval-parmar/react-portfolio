import React from 'react'

const About = ({ activeSection }) => {
  return (
    <section className={`about ${activeSection==='about' ? 'active-section' : ''}`} id='about'>
        <h2 className="heading">
          About <span>Me</span> <span className="animate scroll" style={{ "--i": 1 }}></span>
        </h2>

        <div className="about-img">
          <img src="./images/my-main.jpg" alt="image" />
          <span className="circle-spin"></span>
          <span className="animate scroll" style={{ "--i": 2 }}></span>
        </div>

        <div className="about-content">
          <h3>Frontend Developer! <span className="animate scroll" style={{ "--i": 3 }}></span></h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ad magni debitis nemo reprehenderit magnam quae? A labore dignissimos provident exercitationem eius modi, sapiente possimus. Sequi, provident iusto! Quibusdam, vero.
          <span className="animate scroll" style={{ "--i": 4 }}></span>
          </p>
        </div>

        <div className="btn-box btns">
          <a href="#" className='btn'>Read More</a>
          <span className="animate scroll" style={{ "--i": 5 }}></span>
        </div>


    </section>
  )
}

export default About