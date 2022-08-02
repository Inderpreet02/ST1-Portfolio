import React from 'react'
import Project from './Project'
import './Projects.css'

const Projects = () => {
  return (
    <div className='projs' id='work'>
        <div className="projs__container">
            <div className="projs__heading">
                <div className="g__h3">
                    Projects I've worked on
                </div>
            </div>

            <div className="projs__item">
                <Project img={require("./Zipanier.jpg")} name={"Zipanier"} link={"https://clone-f3ad6.web.app/"} glink={"https://github.com/Inderpreet02?tab=repositories"}/>
                <Project img={require("./Linkedin.jpg")} name={"LinkedIn Clone"} link={"https://linkedin-clone-43f48.web.app/"} glink={"https://github.com/Inderpreet02?tab=repositories"}/>
                <Project img={require("./Slack.jpg")} name={"Slacks Clone"} link={"https://slack-clone-c0074.web.app/"} glink={"https://github.com/Inderpreet02?tab=repositories"}/>
                <Project img={require("./Amazon.jpg")} name={"Amazon Clone"} link={"https://clone-f3ad6.web.app/"} glink={"https://github.com/Inderpreet02?tab=repositories"}/>
                {/* <Project img={"Zipanier.jpg"} name={"Zipanier"}/> */}
            </div>
        </div>
    </div>
  )
}

export default Projects