import React from 'react'
import { DataStructure } from 'src/interfaces'

const PortfolioCard = (props:DataStructure["portfolio"]) => {
    return (
        <div className="col-md-12 scroll-animation"
            data-animation="fade_from_bottom">
            <div className="portfolio-item portfolio-full">
                <div className="portfolio-item-inner">
                    <a href="https://wpriverthemes.com/drake/wp-content/uploads/2023/03/portfolio1.jpg"
                        data-lightbox="example-1">
                        <img decoding="async"
                            src="https://wpriverthemes.com/drake/wp-content/uploads/2023/03/portfolio1.jpg"
                            alt="Portfolio" />
                    </a>

                    <ul className="portfolio-categories">
                        <li>
                            <a href="">Figma</a>
                        </li>
                        <li>
                            <a href="">Framer</a>
                        </li>
                        <li>
                            <a href="">WordPress</a>
                        </li>
                    </ul>
                </div>
                <h2><a href="">{props?.name}</a></h2>
            </div>
        </div>
    )
}

export default PortfolioCard