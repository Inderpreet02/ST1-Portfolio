import React from 'react'
import './FixedLeft.css'

import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

const FixedLeft = () => {
  return (
    <div className="fixed__left">
        <ul className="fixed__ul">
            <li className="fixed__li"><a href="https://github.com/Inderpreet02?tab=repositories" target="_blank" rel="noreferrer"><FiGithub/></a></li>
            <li className="fixed__li"><a href="https://github.com/Inderpreet02?tab=repositories" target="_blank" rel="noreferrer"><FiTwitter/></a></li>
            <li className="fixed__li"><a href="https://github.com/Inderpreet02?tab=repositories" target="_blank" rel="noreferrer"><FiInstagram/></a></li>
            <li className="fixed__li"><a href="https://www.linkedin.com/in/inderpreet-singh-4a74451b6/" target="_blank" rel="noreferrer"><FiLinkedin/></a></li>
        </ul>
  </div>
  )
}

export default FixedLeft