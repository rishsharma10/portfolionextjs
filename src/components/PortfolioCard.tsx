import { Button, Carousel } from "antd";
import Link from "next/link";
import React from "react";
import { PHONE_NUMBER_LINK } from "src/context/Provider";
import { DataStructure } from "src/interfaces";

const PortfolioCard = (props: DataStructure["portfolio"]) => {
  const redirect = `https://api.whatsapp.com/send/?phone=${PHONE_NUMBER_LINK}&text=Hi, contact us regarding ${props.name} portfolio!&type=phone_number&app_absent=0`;

  return (
    <div className="col-md-12 scroll-animation mb-4" data-animation="fade_from_bottom">
      <div className="portfolio-item rounded overflow-hidden" style={{ border: 'none' }}>
        <div className="portfolio-item-inner">

          {/* Image Carousel */}
          <Carousel arrows={true} dots={true} autoplay={true}>
            {Array.isArray(props.image) &&
              props.image.map((img: string, index: number) => (
                <div key={index} className="position-relative" style={{ height: "500px", width: "400px" }}>
                  <a
                    href={img}
                    data-lightbox="example-1"
                    className="d-block w-100 h-100"
                  >
                    <img
                      decoding="async"
                      src={img}
                      alt={`Portfolio ${props.name} - ${index}`}
                      width={400}
                      height={500}
                      style={{
                        objectFit: "cover",
                        display: "block",
                        width: "800px",
                        height: "500px",
                      }}
                    />
                  </a>
                </div>
              ))}
          </Carousel>

          {/* Tech used tags */}
          {Array.isArray(props.tech_used) && props.tech_used.length > 0 && (
            <ul className="portfolio-categories list-inline mt-3 mb-2 ps-3">
              {props.tech_used.map((tech, index) => (
                <li key={index} className="list-inline-item me-2">
                  <span className="badge bg-secondary">{tech}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Title & Button */}
        <div className="d-flex justify-content-between align-items-start px-3 pb-3" style={{ minHeight: '80px', gap: '32px' }}>
          <div className="d-flex align-items-center">
          <h2 className="text-white mb-0 mt-0">
            <a href={`https://${props?.name}.com`} target="_blank" className="text-white text-decoration-none">{props?.name}</a>
          </h2>
          </div>
          <div className="col-md-12 d-flex justify-content-end">
            <div className="input-group submit-btn-wrap">
              <p style={{ marginBottom: 0 }}><Link target='_blank' href={redirect} className="theme-btn">Contact Us</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
