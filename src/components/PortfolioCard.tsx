import { Button, Carousel } from 'antd'
import Link from 'next/link'
import React from 'react'
import { PHONE_NUMBER_LINK, WHATSPP_LINK } from 'src/context/Provider'
import { DataStructure } from 'src/interfaces'

const PortfolioCard = (props:DataStructure["portfolio"]) => {
        const redirect = `https://api.whatsapp.com/send/?phone=${PHONE_NUMBER_LINK}&text=Hi,contact us reagrding ${props.name} portfolio!&type=phone_number&app_absent=0`
    return (
        <div className="col-md-12 scroll-animation"
            data-animation="fade_from_bottom">
            <div className="portfolio-item portfolio-full">
                <div className="portfolio-item-inner">
                <Carousel arrows={true} dots={true} autoplay={true} slidesToScroll={1}>
                    {Array.isArray(props.image) && props.image.map((img:any,index:number) => <a key={index} href={img}
                        data-lightbox="example-1">
                        <img decoding="async" className='object-fit-cover h-100 w-100'
                            src={img}
                            alt="Portfolio" />
                    </a>)}

                    
                </Carousel>

                    <ul className="portfolio-categories">
                        {Array.isArray(props.tech_used) && props.tech_used.map((res:any,index:number) => <li key={index}>
                            <a href="">{res}</a>
                        </li>)}
                        
                    </ul>
                </div>
                <div className='d-flex gap-3 align-items-center'>
                <h2><a href="">{props?.name}</a></h2>
                <Link target='_blank' href={redirect} className="theme-btn">
                         Book for Demo
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard