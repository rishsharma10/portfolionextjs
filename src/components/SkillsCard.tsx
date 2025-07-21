import React from 'react'

const SkillsCard = (props:any) => {
  return (
    <div className="col-md-3 scroll-animation"
    data-animation="fade_from_left">
    <div className="skill">
        <div className="skill-inner">
            {/* <img decoding="async"
                src="https://wpriverthemes.com/drake/wp-content/uploads/2023/03/figma.png"
                alt="Figma" /> */}
            <h1 className="percent">{props.percent}%</h1>
        <p className="name text-uppercase fw-bold">{props.name}</p>
        </div>
    </div>
</div>
  )
}

export default SkillsCard