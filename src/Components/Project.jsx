import React from 'react'
import './Project.css'
import { FiExternalLink } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

const Project = ({left, img, name, link, glink}) => {
  return (
    <div className='proj'>
        <div className={left === true ? "proj__containerl" : "proj__container"}>
            <div className="proj__left">
                <img src={img} alt="" className="proj__img" />
            </div>

            <div className="proj__right">
                <div className="proj__heading">
                    {name}
                </div>

                <div className="proj__text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci et sint eveniet cupiditate quos porro magni laboriosam fuga minima suscipit! Impedit sit rem minus, quo fuga delectus similique vitae! Id.
                </div>

                <div className="proj__social">
                    <ul className="proj__link">
                        <li className="proj__link">Git</li>
                        <li className="proj__link">React</li>
                        <li className="proj__link">NodeJs</li>
                        <li className="proj__link">MongooDB</li>
                        <li className="proj__link">TailwindCSS</li>
                    </ul>
                </div>

                <div className="proj__visits">
                    <ul className="proj__link">
                        <li className="proj__link">
                            <a href={link} target="_blank" rel="noreferrer">
                                <FiExternalLink/>
                            </a>
                        </li>

                        <li className="proj__link">
                            <a href={glink} target="_blank" rel="noreferrer">
                                <FiGithub/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project