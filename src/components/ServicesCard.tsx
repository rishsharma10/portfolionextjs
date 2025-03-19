import React from 'react'
import { DataStructure } from 'src/interfaces'

const ServicesCard = (props:DataStructure["services"]) => {
    return (
        <div className="service-item scroll-animation"
            data-animation="fade_from_bottom">
            <i className="las la-bezier-curve"></i>
            <h2>{props?.title}</h2>
            <p>{props?.desc}</p>
            <span className="projects">{props?.project_count} Projects</span>
        </div>
    )
}

export default ServicesCard