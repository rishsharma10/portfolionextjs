import React from 'react'
import { DataStructure } from 'src/interfaces'

const EducationExperience = (props:DataStructure["edu_exp"]) => {
    return (
        <div className="item scroll-animation"
            data-animation="fade_from_right">
            <span className="date">{props.start_date} - {props.end_date}</span>
            <h2 className='text-uppercase'>{props.role}</h2>
            <p className='fw-bold text-uppercase'>{props?.company}</p>
        </div>
    )
}

export default EducationExperience