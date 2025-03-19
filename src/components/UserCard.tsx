import React from 'react'
import { DataStructure } from 'src/interfaces'

const UserCard = (props:DataStructure["user_details"]) => {
  return (
    <div className="left-sidebar mt-2 overflow-auto">
                    <div className="sidebar-header d-flex align-items-center justify-content-between">
                        {/* <img src="https://wpriverthemes.com/drake/wp-content/themes/drake/assets/images/logo.png" alt="Logo" /> */}
                        <h5 className="email">{props?.name}</h5>
                        <span className="designation">{props?.role}</span>
                    </div>
                    <img className="me" src="https://wpriverthemes.com/drake/wp-content/themes/drake/assets/images/me.jpg" alt="Me" />
                    <h5 className="email">{props?.email}</h5>
                    <h6 className="address">{props?.address}</h6>
                    {/* <p className="copyright">&copy; 2022 Drake. All Rights Reserved</p> */}
                    <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
                        <li>
                            <a href="#"><i className="lab la-instagram"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="lab la-twitter"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="lab la-dribbble"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="lab la-github"></i></a>
                        </li>
                    </ul>
                    <a href="#contact" className="theme-btn">
                        <i className="las la-envelope"></i> Hire Me!
                    </a>
                </div>
  )
}

export default UserCard