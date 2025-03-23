import React from 'react'
import { DataStructure } from 'src/interfaces'
import image from "src/imageassests/profile/userimg.png"
import { GITHUB_LINK, INSTAGRAM_LINK, WHATSPP_LINK } from 'src/context/Provider'

const UserCard = (props:DataStructure["user_details"]) => {
  return (
    <div className="left-sidebar mt-2 overflow-auto">
                    <div className="sidebar-header d-flex align-items-center justify-content-between">
                        {/* <img src="https://wpriverthemes.com/drake/wp-content/themes/drake/assets/images/logo.png" alt="Logo" /> */}
                        <h5 className="email">{props?.name}</h5>
                        
                    </div>
                    <img className="me" src={image.src} alt="Me" />
                    <h5 className="designation text-uppercase">{props?.role}</h5>
                    <h5 className="email">{props?.email}</h5>
                    <h6 className="address">{props?.address}</h6>
                    
                    {/* <p className="copyright">&copy; 2022 Drake. All Rights Reserved</p> */}
                    <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
                        <li>
                            <a rel="noreferrer" target='_blank' href={INSTAGRAM_LINK}><i className="lab la-instagram"></i></a>
                        </li>
                        {/* <li>
                            <a rel="noreferrer" href="#"><i className="lab la-twitter"></i></a>
                        </li> */}
                        <li>
                            <a rel="noreferrer" target='_blank' href={WHATSPP_LINK}><i className="lab la-whatsapp"></i></a>
                        </li>
                        <li>
                            <a rel="noreferrer" target='_blank' href={GITHUB_LINK}><i className="lab la-github"></i></a>
                        </li>
                    </ul>
                    <a href="#contact" className="theme-btn">
                        <i className="las la-envelope"></i> Hire Me!
                    </a>
                </div>
  )
}

export default UserCard