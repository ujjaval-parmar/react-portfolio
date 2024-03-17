import React from 'react'

const Skills = ({ activeSection }) => {
  return (
    <section className={`skills ${activeSection === 'skills' ? 'active-section' : ''}`} id='skills'>

      <h2 className="heading">My <span>Skills</span><span className="animate scroll" style={{ "--i": 1 }}></span> </h2>

      <div className="skills-row">

        <div className="skills-column skills-frontend">
          <h3 className="title">Frontend  <span className="animate scroll" style={{ "--i": 2 }}></span></h3>

          <div className="skills-box">
            <div className="skills-content">

              <div className="progress">
                <h3>HTML <span>80%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>CSS <span>70%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>Javascript <span>70%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>React <span>70%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>Bootstrap <span>70%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>Tailwind CSS <span>80%</span></h3>
                <div className="bar"><span></span></div>
              </div>

            </div>
            <span className="animate scroll" style={{ "--i": 4 }}></span>
          </div>

         

        </div>

        <div className="skills-column skills-backend">
          <h3 className="title">Backend  <span className="animate scroll" style={{ "--i": 3 }}></span></h3>

          <div className="skills-box">
            <div className="skills-content">

              <div className="progress">
                <h3>NodeJS <span>60%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>Express js <span>60%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>Mongodb <span>60%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>Mongoose <span>60%</span></h3>
                <div className="bar"><span></span></div>
              </div>

            </div>
            <span className="animate scroll" style={{ "--i": 4 }}></span>
          </div>

          
        </div>

      </div>


    </section>
  )
}

export default Skills