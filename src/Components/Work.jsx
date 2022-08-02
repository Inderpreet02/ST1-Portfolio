import React, { useState } from 'react'
import './Work.css'

const Work = () => {

    
    const work1 = {
        role: "CTO",
        comapnyName: "Zipanier",
        date: "May 2022 - Present",
        desc: [
            "Working on Zipanier's website to provide a seemless UX/UI",
            "Created an API to fulfill the requirements and to minimise the manual human work required",
            "Created an admin pannel for sellers to manage and add products with minimum effort"
        ]
    }
    
    const work2 = {
        role: "Member",
        comapnyName: "IEI",
        date: "Jan 2021 - Jan 2022",
        desc: [
            "Lorem ipsum adadadadad dolor sit amet consectetur adipisicing elit. Nam, placeat!",
            "Lorem ipsum adadadadadadadadadadadd dolor sit amet consectetur adipisicing elit. Nam, placeat!",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, placeat!"
        ]
    }
    
    const work3 = {
        role: "Member",
        comapnyName: "Kubernetes",
        date: "Jan 2021 - Jan 2022",
        desc: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, placeat!",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, placeat!",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, placeat!",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, placeat!",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, placeat!"
        ]
    }
    const [active, setActive] = useState(1);
    const [work, setWork] = useState(work1)

    console.log(work);
  return (
    <div className='work' id='exp'>
        <div className="g__h2">Where I've Worked</div>
        <div className="work__container">
            <div className="work__line">
                <div className={`work__lineGreen tag__${active}`}>

                </div>
            </div>
            <div className="work__nav">
                <button className={active === 1 ? "work__tag green__text" : "work__tag"} onClick={() => {setActive(1); setWork(work1)}}>Zipanier</button>
                <button className={active === 2 ? "work__tag green__text" : "work__tag"} onClick={() => {setActive(2); setWork(work2)}}>IEI</button>
                <button className={active === 3 ? "work__tag green__text" : "work__tag"} onClick={() => {setActive(3); setWork(work3)}}>Kubernetes</button>
            </div>
            <div className="work__text">
                
                <div className="work__heading">
                    {work.role} <span>@{work.comapnyName}</span>
                </div>
                <div className="work__date">
                    {work.date}
                </div>
                <ul className="work__desc">
                    {
                        work.desc.map((item, key)=>(
                            <li className='work__list' key={key}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Work