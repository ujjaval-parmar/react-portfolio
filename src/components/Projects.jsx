import React from 'react'

const PROJECTS = [
  {
    name: 'MERN-Job-Portal',
    desc: 'Job Portal: MERN app that let you find and create jobs with filtering functionality. Built with React, Nodejs, Express, Redux, JWT Authentication.',
  },
  {
    name: 'React-World-Wise',
    desc: 'React app that allow use to add Marks on World-map and add notes about places where user have travelled  or wan’t to Travel',
  },
  {
    name: 'React-usePopcorn',
    desc: 'Little React app for Search and Rate Movies made with React Custom  Hooks.',
  },
  {
    name: 'React-Fast-Pizaa',
    desc: 'Little pizza delivery app with Cart functionality made with Redux in React.',
  },
  {
    name: 'MERN-CRUD-Redux',
    desc: 'Little CRUD app made with React, Express, Node, Mongoose and Redux.',
  },
  {
    name: 'Javascript-Pig-Game',
    desc: 'Pig Game made with vanila JS.',
  }
]

const Projects = ({ activeSection }) => {
  return (
    <section className={`projects ${activeSection === 'projects' ? 'active-section' : ''}`} id='projects'>

      <h2 className="heading">
        My <span>Projects</span>
        <span className="animate scroll" style={{ "--i": 1 }}></span>
      </h2>

      <div className="projects-container">
        {PROJECTS.map((project, i) => {
          return (

            <div className="project-box" key={project.name}>
              <div className="project-content">
                <div className="content">
                  <h3>{project.name}</h3>
                  <p>{project.desc}</p>
                </div>
              </div>
              <span className="animate scroll" style={{ "--i": i + 2 }}></span>
            </div>

          )
        })}
      </div>

    </section>
  )
}

export default Projects