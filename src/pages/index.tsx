import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from 'src/styles/Home.module.css'
import UserCard from 'src/components/UserCard'
import EducationExperience from 'src/components/EducationExperience'
import ServicesCard from 'src/components/ServicesCard'
import PortfolioCard from 'src/components/PortfolioCard'
import userData from 'src/utils/demo.json'
import { useState } from 'react'
import ecommercehome from "src/imageassests/ecommerce/banner.jpeg"
import ecommercesignin from "src/imageassests/ecommerce/signin.jpeg"
import ecommerceoffers from "src/imageassests/ecommerce/offers.jpeg"
import ecommercelayout1 from "src/imageassests/ecommerce/layout1.jpeg"
import ecommercelayout2 from "src/imageassests/ecommerce/layout2.jpeg"
import ecommercedetails from "src/imageassests/ecommerce/details.jpeg"

import abundish1 from "src/imageassests/abundish/img1.png"
import abundish2 from "src/imageassests/abundish/img2.png"
import abundish3 from "src/imageassests/abundish/img3.png"
import abundish4 from "src/imageassests/abundish/img4.png"

import interview1 from "src/imageassests/intervieweasy/img1.png"
import interview2 from "src/imageassests/intervieweasy/img2.png"
import interview3 from "src/imageassests/intervieweasy/img3.png"
import interview4 from "src/imageassests/intervieweasy/img4.png"

import kunfirm1 from "src/imageassests/kunfirm/img1.png"
import kunfirm2 from "src/imageassests/kunfirm/img2.png"
import kunfirm3 from "src/imageassests/kunfirm/img3.png"
import kunfirm4 from "src/imageassests/kunfirm/img4.png"

import ecommercedetailslist from "src/imageassests/ecommerce/detailslist.jpeg"
import image from "src/imageassests/profile/userimg.png"
import SkillsCard from 'src/components/SkillsCard'
import Link from 'next/link'
import { PHONE_NUMBER_LINK } from 'src/context/Provider'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [userInfo, setUserInfo] = useState(userData.user_details)
    const [about, setAbout] = useState(userData.about)
    const [eduExp, setEduExp] = useState(userData.edu_exp)
    const [services, setServices] = useState(userData.services)
    const portfolio = [
        {
            "name": "Ecommerce",
            "class": "col-md-12",
            "image": [
                ecommercehome.src, ecommercesignin.src, ecommerceoffers.src, ecommercelayout1.src, ecommercelayout2.src, ecommercedetails.src, ecommercedetailslist.src
            ],
            "tech_used": ["Next.js", "Bootstrap", "Node.js", "MongoDB"]
        },
        {
            "name": "Abundish Store",
            "class": "col-md-12",
            "image": [
                abundish1.src, abundish2.src, abundish3.src, abundish4.src
            ],
            "tech_used": ["Next.js", "Antd", "Nodejs", "Expressjs", "MongoDB"]
        },
        {
            "name": "Interview Easy",
            "class": "col-md-12",
            "image": [
                interview1.src, interview2.src, interview3.src, interview4.src
            ],
            "tech_used": ["Next.js", "Talwind", "Supabase", "Clerk", "Bootstrap"]
        },
        {
            "name": "Kunfirm Loanhub",
            "class": "col-md-12",
            "image": [
                kunfirm1.src, kunfirm2.src, kunfirm3.src, kunfirm4.src
            ],
            "tech_used": ["Next.js", "Antd", "Nodejs", "Expressjs", "MongoDB"]
        }
    ]
    const skillsArr = [
        { name: "React.js", icon: "React", percent: 97 },
        { name: "Next.js", icon: "Box", percent: 99 },
        { name: "Typescript", icon: "FileType2", percent: 98 },
        { name: "Javascript", icon: "FileCode2", percent: 100 },
        { name: "Node js", icon: "NodeJs", percent: 96 },
        { name: "Express.js", icon: "Server", percent: 95 },
        { name: "Mongo DB", icon: "Database", percent: 97 },
        { name: "Html", icon: "FileTypeHtml", percent: 98 },
        { name: "Css", icon: "FileTypeCss", percent: 99 },
        { name: "Ant Design", icon: "Antenna", percent: 96 },
        { name: "Talwind Css", icon: "Wind", percent: 97 },
        { name: "Blockchain", icon: "Blocks", percent: 95 },
        { name: "Supabase", icon: "DatabaseZap", percent: 98 },
        { name: "Clerk", icon: "UserCheck2", percent: 97 },
        { name: "Firebase", icon: "Flame", percent: 99 },
        { name: "Stripe", icon: "CreditCard", percent: 100 },
        { name: "Paypal", icon: "Wallet", percent: 95 },
        { name: "Nestjs", icon: "CircleDot", percent: 96 },
        { name: "Shopify", icon: "ShoppingCart", percent: 98 },
        { name: "Postgress", icon: "Database", percent: 97 },
    ];
    const [skills, setSkills] = useState(skillsArr)
    const [contactUs, setContactUs] = useState({
        name: "",
        email: "",
        budget: 0,
        message: ""
    })
    const contact_us_link = `https://api.whatsapp.com/send/?phone=${PHONE_NUMBER_LINK}&text=Hi i am ${contactUs?.name} my email is ${contactUs?.email} ${contactUs?.budget ? `my budget for this project is ${contactUs?.budget}` : ""} ,project details ${contactUs?.message} Contactus!&type=phone_number&app_absent=0`
    return (
        <>
            <Head>
                <title>{userInfo?.name} | {userInfo?.role}</title>
                <meta name="description" content={about?.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href={image.src} />
            </Head>
            <main className={styles.main}>


                {/* <div className="page-loader">
        <div className="bounceball"></div>
    </div> */}
                <span className="icon-menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                </span>
                <div className="global-color">
                    {/* <span className="setting-toggle">
                        <i className="las la-cog"></i>
                    </span> */}
                    <div className="inner">
                        <div className="overlay"></div>
                        <div className="global-color-option">
                            <span className="close-settings">
                                <i className="las la-times"></i>
                            </span>
                            <h2>Configuration</h2>
                            <div className="global-color-option-inner">
                                <p>Colors</p>
                                {/* <div className="color-boxed">
                        <a href="#" className="clr-active" onclick="color1();"></a>
                        <a href="#" onclick="color2();"></a>
                        <a href="#" onclick="color3();"></a>
                        <a href="#" onclick="color4();"></a>
                        <a href="#" onclick="color5();"></a>
                        <a href="#" onclick="color6();"></a>
                        <a href="#" onclick="color7();"></a>
                        <a href="#" onclick="color8();"></a>
                    </div> */}

                                <p>THREE DIMENSIONAL SHAPES</p>
                                <ul className="themes">
                                    <li><a href="https://wpriverthemes.com/drake/earth-lines-sphere/">Earth Lines Sphere</a></li>
                                    <li><a href="https://wpriverthemes.com/drake/3d-abstract-ball/">3D Abstract Ball</a></li>
                                    <li><a href="https://wpriverthemes.com/drake/water-waves/">Water Waves</a></li>
                                    <li><a href="https://wpriverthemes.com/drake/liquids-wavy/">Liquids Wavy</a></li>
                                    <li><a href="https://wpriverthemes.com/drake/">Solid Color</a></li>
                                    <li><a href="https://wpriverthemes.com/drake/simple-strings/">Simple Strings</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="responsive-sidebar-menu">
                    <div className="overlay"></div>
                    <div className="sidebar-menu-inner">
                        <div className="menu-wrap">
                            <p>Menu</p>
                            <ul className="dmenu scroll-nav-responsive d-flex">
                                <li>
                                    <a className="scroll-to" href="#home">
                                        <i className="las la-home"></i> <span>Home</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="scroll-to" href="#about">
                                        <i className="lar la-user"></i> <span>About</span>
                                    </a>
                                </li>
                                {/* <li>
                                    <a className="scroll-to" href="#resume">
                                        <i className="las la-briefcase"></i> <span>Resume</span>
                                    </a>
                                </li> */}
                                <li>
                                    <a className="scroll-to" href="#services">
                                        <i className="las la-stream"></i> <span>Services</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="scroll-to" href="#skills">
                                        <i className="las la-shapes"></i> <span>Skills</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="scroll-to" href="#portfolio">
                                        <i className="las la-grip-vertical"></i> <span>Portfolio</span>
                                    </a>
                                </li>
                                {/* <li>
                                    <a className="scroll-to" href="#testimonial">
                                        <i className="lar la-comment"></i> <span>Testimonial</span>
                                    </a>
                                </li> */}
                                <li>
                                    <a className="scroll-to" href="#contact">
                                        <i className="las la-envelope"></i> <span>Contact</span>
                                    </a>
                                </li>
                            </ul>
                        </div>


                        <div className="sidebar-social">
                            <p>Social</p>
                            <ul className="social-links d-flex align-items-center">
                                <li>
                                    <a href="#"><i className="lab la-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="lab la-instagram"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="lab la-dribbble"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <ul className="dmenu scroll-nav d-flex">
                    <li>
                        <a className="scroll-to" href="#home">
                            <span>Home</span> <i className="las la-home"></i>
                        </a>
                    </li>
                    <li>
                        <a className="scroll-to" href="#about">
                            <span>About</span> <i className="lar la-user"></i>
                        </a>
                    </li>
                    {/* <li>
                        <a className="scroll-to" href="#resume">
                            <span>Resume</span> <i className="las la-briefcase"></i>
                        </a>
                    </li> */}
                    <li>
                        <a className="scroll-to" href="#services">
                            <span>Services</span> <i className="las la-stream"></i>
                        </a>
                    </li>
                    <li>
                        <a className="scroll-to" href="#skills">
                            <span>Skills</span> <i className="las la-shapes"></i>
                        </a>
                    </li>
                    <li>
                        <a className="scroll-to" href="#portfolio">
                            <span>Portfolio</span> <i className="las la-grip-vertical"></i>
                        </a>
                    </li>
                    {/* <li>
                        <a className="scroll-to" href="#testimonial">
                            <span>Testimonial</span> <i className="lar la-comment"></i>
                        </a>
                    </li> */}
                    <li>
                        <a className="scroll-to" href="#contact">
                            <span>Contact</span> <i className="las la-envelope"></i>
                        </a>
                    </li>
                </ul>

                <UserCard {...userInfo} />

                <main className="drake-main">
                    <div id="smooth-wrapper">
                        <div id="smooth-content">

                            <UserCard {...userInfo} />
                            <div data-elementor-type="wp-page" data-elementor-id="8" className="elementor elementor-8">
                                <section
                                    className="elementor-section elementor-top-section elementor-element elementor-element-4008bb0 elementor-section-full_width page-section scroll-to-page elementor-section-height-default elementor-section-height-default"
                                    data-id="4008bb0" data-element_type="section" id="home">
                                    <div className="elementor-container elementor-column-gap-no">
                                        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-56d535e"
                                            data-id="56d535e" data-element_type="column">
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                                <div className="elementor-element elementor-element-d8d1695 elementor-widget elementor-widget-drakehero"
                                                    data-id="d8d1695" data-element_type="widget"
                                                    data-widget_type="drakehero.default">
                                                    <div className="elementor-widget-container">

                                                        <section className="hero-section">

                                                            <div className="custom-container">
                                                                <div className="hero-content content-width">
                                                                    <div className="section-header">
                                                                        <h4 className="subtitle scroll-animation"
                                                                            data-animation="fade_from_bottom">
                                                                            <i className="las la-home"></i> INTRODUCE
                                                                        </h4>
                                                                        <h1 className="scroll-animation"
                                                                            data-animation="fade_from_bottom">Say Hi from
                                                                            <span> {userInfo?.name}</span>, Full Stack Wizard of the Web

                                                                        </h1>
                                                                    </div>
                                                                    <p className="scroll-animation" data-animation="fade_from_bottom">Crafting blazing-fast, scalable web solutions with React, Node.js, and Webflow. Let’s build something extraordinary! ✨</p>
                                                                    <a href="#portfolio"
                                                                        className="go-to-project-btn scroll-to scroll-animation"
                                                                        data-animation="rotate_up">
                                                                        <img decoding="async"
                                                                            src="https://wpriverthemes.com/drake/wp-content/uploads/2023/03/round-text.png"
                                                                            alt="Rounded Text" />
                                                                        <i className="las la-arrow-down"></i>
                                                                    </a>

                                                                    <div className="facts d-flex">

                                                                        <div className="left scroll-animation"
                                                                            data-animation="fade_from_left">
                                                                            <h1>{userInfo?.exp}+</h1>
                                                                            <p>Years of<br />Experience</p>
                                                                        </div>

                                                                        <div className="right scroll-animation"
                                                                            data-animation="fade_from_right">
                                                                            <h1>{userInfo?.projects}+</h1>
                                                                            <p>projects completed<br /></p>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section
                                    className="elementor-section elementor-top-section elementor-element elementor-element-51b78d5 elementor-section-full_width page-section scroll-to-page elementor-section-height-default elementor-section-height-default"
                                    data-id="51b78d5" data-element_type="section" id="about">
                                    <div className="elementor-container elementor-column-gap-no">
                                        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-0f928fc"
                                            data-id="0f928fc" data-element_type="column">
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                                <div className="elementor-element elementor-element-089591c elementor-widget elementor-widget-drakeabout"
                                                    data-id="089591c" data-element_type="widget"
                                                    data-widget_type="drakeabout.default">
                                                    <div className="elementor-widget-container">

                                                        <section className="about-area">
                                                            <div className="custom-container">
                                                                <div className="about-content content-width">
                                                                    <div className="section-header">
                                                                        <h4 className="subtitle scroll-animation"
                                                                            data-animation="fade_from_bottom">
                                                                            <i className="lar la-user"></i> About
                                                                        </h4>
                                                                        <h1 className="scroll-animation"
                                                                            data-animation="fade_from_bottom">{about.title}</h1>
                                                                    </div>
                                                                    <p className="scroll-animation" data-animation="fade_from_bottom">
                                                                        {about?.description}</p>
                                                                </div>
                                                            </div>
                                                        </section>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section
                                    className="elementor-section elementor-top-section elementor-element elementor-element-09e57b7 elementor-section-full_width page-section scroll-to-page elementor-section-height-default elementor-section-height-default"
                                    data-id="09e57b7" data-element_type="section" id="resume">
                                    <div className="elementor-container elementor-column-gap-no">
                                        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e656275"
                                            data-id="e656275" data-element_type="column">
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                                <div className="elementor-element elementor-element-813d5c5 elementor-widget elementor-widget-drakeresume"
                                                    data-id="813d5c5" data-element_type="widget"
                                                    data-widget_type="drakeresume.default">
                                                    <div className="elementor-widget-container">
                                                        <section className="resume-area">
                                                            <div className="custom-container">
                                                                <div className="resume-content content-width">
                                                                    <div className="section-header">
                                                                        <h4 className="subtitle scroll-animation"
                                                                            data-animation="fade_from_bottom">
                                                                            <i className="las la-briefcase"></i> resume
                                                                        </h4>
                                                                        <h1 className="scroll-animation"
                                                                            data-animation="fade_from_bottom">Education &
                                                                            <span> Experience</span>
                                                                        </h1>
                                                                    </div>

                                                                    <div className="resume-timeline mt-5">
                                                                        {Array.isArray(eduExp) && eduExp.map((res, index) => <EducationExperience {...res} key={index} />)}

                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </section>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section
                                    className="elementor-section elementor-top-section elementor-element elementor-element-e2fc89f elementor-section-full_width page-section scroll-to-page elementor-section-height-default elementor-section-height-default"
                                    data-id="e2fc89f" data-element_type="section" id="services">
                                    <div className="elementor-container elementor-column-gap-no">
                                        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-043c284"
                                            data-id="043c284" data-element_type="column">
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                                <div className="elementor-element elementor-element-cf421ee elementor-widget elementor-widget-drakeservices"
                                                    data-id="cf421ee" data-element_type="widget"
                                                    data-widget_type="drakeservices.default">
                                                    <div className="elementor-widget-container">

                                                        <section className="services-area">
                                                            <div className="custom-container">
                                                                <div className="services-content content-width">
                                                                    <div className="section-header">
                                                                        <h4 className="subtitle scroll-animation"
                                                                            data-animation="fade_from_bottom">
                                                                            <i className="las la-stream"></i> Services
                                                                        </h4>
                                                                        <h1 className="scroll-animation"
                                                                            data-animation="fade_from_bottom">My
                                                                            <span>Specializations</span>
                                                                        </h1>
                                                                    </div>

                                                                    <div className="services-items mt-5">
                                                                        {Array.isArray(services) && services.map((res, index) => <ServicesCard {...res} key={index} />)}
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </section>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section
                                    className="elementor-section elementor-top-section elementor-element elementor-element-a32fcf2 elementor-section-full_width page-section scroll-to-page elementor-section-height-default elementor-section-height-default"
                                    data-id="a32fcf2" data-element_type="section" id="skills">
                                    <div className="elementor-container elementor-column-gap-no">
                                        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-0fa9229"
                                            data-id="0fa9229" data-element_type="column">
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                                <div className="elementor-element elementor-element-319c9f1 elementor-widget elementor-widget-drakeskill"
                                                    data-id="319c9f1" data-element_type="widget"
                                                    data-widget_type="drakeskill.default">
                                                    <div className="elementor-widget-container">

                                                        <section className="skills-area">
                                                            <div className="custom-container">
                                                                <div className="skills-content content-width">
                                                                    <div className="section-header">
                                                                        <h4 className="subtitle scroll-animation"
                                                                            data-animation="fade_from_bottom">
                                                                            <i className="las la-shapes"></i> my skills
                                                                        </h4>
                                                                        <h1 className="scroll-animation mb-2"
                                                                            data-animation="fade_from_bottom">Technical Expertise & Core Skills

                                                                        </h1>
                                                                    </div>
                                                                    <div className="row skills text-center mt-5">
                                                                        {Array.isArray(skills) && skills.map((res, index) => <SkillsCard {...res} key={index} />)}


                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </section>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section
                                    className="elementor-section elementor-top-section elementor-element elementor-element-2090be3 elementor-section-full_width page-section scroll-to-page elementor-section-height-default elementor-section-height-default"
                                    data-id="2090be3" data-element_type="section" id="portfolio">
                                    <div className="elementor-container elementor-column-gap-no">
                                        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-77d49c0"
                                            data-id="77d49c0" data-element_type="column">
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                                <div className="elementor-element elementor-element-ab189bd elementor-widget elementor-widget-drakeportfolio"
                                                    data-id="ab189bd" data-element_type="widget"
                                                    data-widget_type="drakeportfolio.default">
                                                    <div className="elementor-widget-container">

                                                        <section className="portfolio-area">
                                                            <div className="custom-container">
                                                                <div className="portfolio-content content-width">
                                                                    <div className="section-header">
                                                                        <h4 className="subtitle scroll-animation"
                                                                            data-animation="fade_from_bottom">
                                                                            <i className="las la-grip-vertical"></i> portfolio
                                                                        </h4>
                                                                        <h1 className="scroll-animation"
                                                                            data-animation="fade_from_bottom">Project Highlights
                                                                        </h1>
                                                                    </div>

                                                                    <div className="row portfolio-items">
                                                                        {Array.isArray(portfolio) && portfolio.map((res, index) => <PortfolioCard {...res} key={index} />)}

                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </section>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/* <section
                                    className="elementor-section elementor-top-section elementor-element elementor-element-449627b elementor-section-full_width page-section scroll-to-page elementor-section-height-default elementor-section-height-default"
                                    data-id="449627b" data-element_type="section" id="testimonial">
                                    <div className="elementor-container elementor-column-gap-no">
                                        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-78a9b04"
                                            data-id="78a9b04" data-element_type="column">
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                                <div className="elementor-element elementor-element-09ec53b elementor-widget elementor-widget-draketestimonial"
                                                    data-id="09ec53b" data-element_type="widget"
                                                    data-widget_type="draketestimonial.default">
                                                    <div className="elementor-widget-container">

                                                        <section className="testimonial-area">
                                                            <div className="custom-container">
                                                                <div className="testimonial-content content-width">
                                                                    <div className="section-header">
                                                                        <h4 className="subtitle scroll-animation"
                                                                            data-animation="fade_from_bottom">
                                                                            <i className="lar la-comment"></i> testimonial
                                                                        </h4>
                                                                        <h1 className="scroll-animation"
                                                                            data-animation="fade_from_bottom">Trusted Clients
                                                                        </h1>
                                                                    </div>

                                                                    <div className="testimonial-slider-wrap scroll-animation"
                                                                        data-animation="fade_from_bottom">
                                                                        <div className="owl-carousel testimonial-slider owl-theme">
                                                                            <div className="testimonial-item">
                                                                                <div className="testimonial-item-inner">
                                                                                    <div className="author d-flex align-items-center">
                                                                                        <img decoding="async"
                                                                                            src="https://wpriverthemes.com/drake/wp-content/uploads/2023/03/testimonial-1.jpg"
                                                                                            alt="portfolio" />
                                                                                        <div className="right">
                                                                                            <h3>Paublo Dybala</h3>
                                                                                            <p className="designation">CEO of <span>IBM
                                                                                                Global</span></p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <p>“Drake - A Developer with the creativity,
                                                                                        professional and
                                                                                        master of code. Much more than what i&#039;m
                                                                                        expect.
                                                                                        High quality product &amp; flexiable price.
                                                                                        Recommended!.”</p>

                                                                                    <a href="" className="project-btn">Project</a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="testimonial-item">
                                                                                <div className="testimonial-item-inner">
                                                                                    <div className="author d-flex align-items-center">
                                                                                        <img decoding="async"
                                                                                            src="https://wpriverthemes.com/drake/wp-content/uploads/2023/03/testimonial-2.jpg"
                                                                                            alt="portfolio" />
                                                                                        <div className="right">
                                                                                            <h3>Christina Morillo</h3>
                                                                                            <p className="designation">Product
                                                                                                Management of <span>Invision App
                                                                                                    Inc</span></p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <p>“Drake was a real pleasure to work with and
                                                                                        we look
                                                                                        forward to working with him again. He&#039;s
                                                                                        definitely the kind of
                                                                                        designer that you can trust with any project
                                                                                        from A-Z.”</p>

                                                                                    <a href="" className="project-btn">Project</a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="testimonial-item">
                                                                                <div className="testimonial-item-inner">
                                                                                    <div className="author d-flex align-items-center">
                                                                                        <img decoding="async"
                                                                                            src="https://wpriverthemes.com/drake/wp-content/uploads/2023/03/testimonial-3.jpg"
                                                                                            alt="portfolio" />
                                                                                        <div className="right">
                                                                                            <h3>Phil Foden</h3>
                                                                                            <p className="designation">Director of
                                                                                                <span>Envato LLC</span>
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <p>“Extremely profressional and fast service!.
                                                                                        Drake is a master
                                                                                        of code and he also very creative. We done 3
                                                                                        projects with
                                                                                        him and certain will continue.”</p>

                                                                                    <a href="" className="project-btn">Project</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="testimonial-footer-nav">
                                                                            <div className="testimonial-nav d-flex align-items-center">
                                                                                <button className="prev"><i
                                                                                    className="las la-angle-left"></i></button>
                                                                                <div id="testimonial-slide-count"></div>
                                                                                <button className="next"><i
                                                                                    className="las la-angle-right"></i></button>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="clients-logos">
                                                                        <h4 className="scroll-animation"
                                                                            data-animation="fade_from_bottom">work with 60+ brands
                                                                            worldwide</h4>
                                                                        <div className="row align-items-center">
                                                                            <div className="col-md-3 scroll-animation"
                                                                                data-animation="fade_from_left">
                                                                                <img decoding="async"
                                                                                    src="https://wpriverthemes.com/drake/wp-content/uploads/2023/03/client-1.png"
                                                                                    alt="client" />
                                                                            </div>
                                                                            <div className="col-md-3 scroll-animation"
                                                                                data-animation="fade_from_bottom">
                                                                                <img decoding="async"
                                                                                    src="https://wpriverthemes.com/drake/wp-content/uploads/2023/03/client-2.png"
                                                                                    alt="client" />
                                                                            </div>
                                                                            <div className="col-md-3 scroll-animation"
                                                                                data-animation="fade_from_top">
                                                                                <img decoding="async"
                                                                                    src="https://wpriverthemes.com/drake/wp-content/uploads/2023/03/client-3.png"
                                                                                    alt="client" />
                                                                            </div>
                                                                            <div className="col-md-3 scroll-animation"
                                                                                data-animation="fade_from_right">
                                                                                <img decoding="async"
                                                                                    src="https://wpriverthemes.com/drake/wp-content/uploads/2023/03/client-4.png"
                                                                                    alt="client" />
                                                                            </div>
                                                                            <div className="col-md-3 scroll-animation"
                                                                                data-animation="fade_from_left">
                                                                                <img decoding="async"
                                                                                    src="https://wpriverthemes.com/drake/wp-content/uploads/2023/03/client-5.png"
                                                                                    alt="client" />
                                                                            </div>
                                                                            <div className="col-md-3 scroll-animation"
                                                                                data-animation="fade_from_bottom">
                                                                                <img decoding="async"
                                                                                    src="https://wpriverthemes.com/drake/wp-content/uploads/2023/03/client-6.png"
                                                                                    alt="client" />
                                                                            </div>
                                                                            <div className="col-md-3 scroll-animation"
                                                                                data-animation="fade_from_top">
                                                                                <img decoding="async"
                                                                                    src="https://wpriverthemes.com/drake/wp-content/uploads/2023/03/client-7.png"
                                                                                    alt="client" />
                                                                            </div>
                                                                            <div className="col-md-3 scroll-animation"
                                                                                data-animation="fade_from_right">
                                                                                <img decoding="async"
                                                                                    src="https://wpriverthemes.com/drake/wp-content/uploads/2023/03/client-8.png"
                                                                                    alt="client" />
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </section>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section> */}
                                {/* <section
                                    className="elementor-section elementor-top-section elementor-element elementor-element-74f9fe7 elementor-section-full_width page-section scroll-to-page elementor-section-height-default elementor-section-height-default"
                                    data-id="74f9fe7" data-element_type="section" id="pricing">
                                    <div className="elementor-container elementor-column-gap-no">
                                        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b698af7"
                                            data-id="b698af7" data-element_type="column">
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                                <div className="elementor-element elementor-element-687345c elementor-widget elementor-widget-drakepricing"
                                                    data-id="687345c" data-element_type="widget"
                                                    data-widget_type="drakepricing.default">
                                                    <div className="elementor-widget-container">

                                                        <section className="pricing-area">
                                                            <div className="custom-container">
                                                                <div className="pricing-content content-width">
                                                                    <div className="section-header">
                                                                        <h4 className="subtitle scroll-animation"
                                                                            data-animation="fade_from_bottom">
                                                                            <i className="las la-dollar-sign"></i> pricing
                                                                        </h4>
                                                                        <h1 className="scroll-animation"
                                                                            data-animation="fade_from_bottom">My
                                                                            <span>Pricing</span>
                                                                        </h1>
                                                                    </div>

                                                                    <div className="pricing-table-items">
                                                                        <div className="row">
                                                                            <div className="col-md-6 scroll-animation"
                                                                                data-animation="fade_from_left">
                                                                                <div className="pricing-table">
                                                                                    <div className="pricing-table-header">
                                                                                        <div
                                                                                            className="top d-flex justify-content-between align-items-start">
                                                                                            <h4>basic</h4>
                                                                                            <p className="text-right">Have design ready
                                                                                                to build?<br />or small budget</p>
                                                                                        </div>
                                                                                        <h1>$49 <span>/ hours</span></h1>
                                                                                    </div>
                                                                                    <ul className="feature-lists">
                                                                                        <li>Need your wireframe</li>

                                                                                        <li>Design with Figma, Framer</li>

                                                                                        <li>Implement with Webflow, React,
                                                                                            WordPress, Laravel/PHP</li>

                                                                                        <li>Remote/Online</li>

                                                                                        <li>Work in business days, no weekend.</li>

                                                                                        <li>Support 6 months</li>
                                                                                    </ul>
                                                                                    <a href="#contact" className="theme-btn">pick this
                                                                                        package</a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-6 scroll-animation"
                                                                                data-animation="fade_from_right">
                                                                                <div className="pricing-table">
                                                                                    <div className="pricing-table-header">
                                                                                        <div
                                                                                            className="top d-flex justify-content-between align-items-start">
                                                                                            <h4>premium</h4>
                                                                                            <p className="text-right">Not have any
                                                                                                design?<br /> Leave its for me</p>
                                                                                        </div>
                                                                                        <h1>$99 <span>/ hours</span></h1>
                                                                                    </div>
                                                                                    <ul className="feature-lists">
                                                                                        <li>Don&apost need wireframe or anything</li>

                                                                                        <li>Design with Figma, Framer from scratch
                                                                                        </li>
                                                                                        <li>Implement with Webflow, React,
                                                                                            WordPress, Laravel/PHP</li>
                                                                                        <li>Remote/Online</li>

                                                                                        <li>Work with both weekend</li>

                                                                                        <li>Support 12 months</li>

                                                                                        <li>Your project alway be priority</li>
                                                                                        <li>Customer care gifts</li>
                                                                                    </ul>
                                                                                    <a href="#contact" className="theme-btn">pick this
                                                                                        package</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <p className="info scroll-animation"
                                                                            data-animation="fade_from_bottom">
                                                                            Don&apost find any package match with your plan!<br /> Want to
                                                                            setup a new tailor-made package for only you?. <a
                                                                                href="#contact">Contact Us</a>
                                                                        </p>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </section>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section> */}
                                <section
                                    className="elementor-section elementor-top-section elementor-element elementor-element-ad41ad6 elementor-section-full_width page-section scroll-to-page elementor-section-height-default elementor-section-height-default"
                                    data-id="ad41ad6" data-element_type="section" id="contact">
                                    <div className="elementor-container elementor-column-gap-no">
                                        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a93c64b"
                                            data-id="a93c64b" data-element_type="column">
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                                <div className="elementor-element elementor-element-60dfddb elementor-widget elementor-widget-drakecontact"
                                                    data-id="60dfddb" data-element_type="widget"
                                                    data-widget_type="drakecontact.default">
                                                    <div className="elementor-widget-container">

                                                        <section className="contact-area">
                                                            <div className="custom-container">
                                                                <div className="contact-content content-width">
                                                                    <div className="section-header">
                                                                        <h4 className="subtitle scroll-animation"
                                                                            data-animation="fade_from_bottom">
                                                                            <i className="las la-dollar-sign"></i> contact
                                                                        </h4>
                                                                        <h1 className="scroll-animation"
                                                                            data-animation="fade_from_bottom">Let Work
                                                                            <span> Together!</span>
                                                                        </h1>
                                                                    </div>
                                                                    <h3 className="scroll-animation" data-animation="fade_from_bottom">
                                                                        {userInfo.email}</h3>
                                                                    <p id="required-msg">* Marked fields are required to fill.</p>


                                                                    <div className="wpcf7 no-js" id="wpcf7-f172-p8-o1" lang="en-US"
                                                                        dir="ltr">
                                                                        <div className="screen-reader-response">
                                                                            <p role="status" aria-live="polite" aria-atomic="true">
                                                                            </p>
                                                                            <ul></ul>
                                                                        </div>
                                                                        <form action="/drake/#wpcf7-f172-p8-o1" method="post"
                                                                            className="wpcf7-form init" aria-label="Contact form"
                                                                            data-status="init">
                                                                            <div style={{ display: "none" }}>
                                                                                <input type="hidden" name="_wpcf7" value="172" />
                                                                                <input type="hidden" name="_wpcf7_version"
                                                                                    value="5.7.5.1" />
                                                                                <input type="hidden" name="_wpcf7_locale"
                                                                                    value="en_US" />
                                                                                <input type="hidden" name="_wpcf7_unit_tag"
                                                                                    value="wpcf7-f172-p8-o1" />
                                                                                <input type="hidden" name="_wpcf7_container_post"
                                                                                    value="8" />
                                                                                <input type="hidden" name="_wpcf7_posted_data_hash"
                                                                                    value="" />
                                                                            </div>
                                                                            <div className="alert alert-success messenger-box-contact__msg"
                                                                                style={{ display: 'none' }} role="alert">
                                                                                <p>Your message was sent successfully.
                                                                                </p>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-md-6">
                                                                                    <div className="input-group">
                                                                                        <p><label htmlFor="full-name">full Name
                                                                                            <sup>*</sup></label><input
                                                                                                onChange={(e: any) => setContactUs({ ...contactUs, name: e.target.value })}
                                                                                                type="text" name="full-name"
                                                                                                id="full-name"
                                                                                                placeholder="Your Full Name" />
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-6">
                                                                                    <div className="input-group">
                                                                                        <p><label htmlFor="email">Email
                                                                                            <sup>*</sup></label><input
                                                                                                onChange={(e: any) => setContactUs({ ...contactUs, email: e.target.value })}
                                                                                                type="email" name="email" id="email"
                                                                                                placeholder="Your email adress" />
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                                {/* <div className="col-md-6">
                                                                                    <div className="input-group">
                                                                                        <p><label htmlFor="phone-number">phone
                                                                                            <span>(optional)</span></label><input
                                                                                                type="text" name="phone-number"
                                                                                                id="phone-number"
                                                                                                placeholder="Your number phone" />
                                                                                        </p>
                                                                                    </div>
                                                                                </div> */}
                                                                                {/* <div className="col-md-6">
                                                                                    <div className="input-group">
                                                                                        <p><label htmlFor="subject">subject
                                                                                            <sup>*</sup></label><select
                                                                                                name="subject" id="subject">
                                                                                                <option value="">Select a subject
                                                                                                </option>
                                                                                                <option value="subject1">Subject 1
                                                                                                </option>
                                                                                                <option value="subject2">Subject 2
                                                                                                </option>
                                                                                                <option value="subject3">Subject 3
                                                                                                </option>
                                                                                            </select>
                                                                                        </p>
                                                                                    </div>
                                                                                </div> */}
                                                                                <div className="col-md-6">
                                                                                    <div className="input-group">
                                                                                        <p><label htmlFor="budget">your budget
                                                                                            <span>(optional)</span></label><input
                                                                                                onChange={(e: any) => setContactUs({ ...contactUs, budget: e.target.value })}
                                                                                                type="number" name="budget"
                                                                                                id="budget"
                                                                                                placeholder="A range budget for your project" />
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-12">
                                                                                    <div className="input-group">
                                                                                        <p><label
                                                                                            htmlFor="message">message</label><textarea
                                                                                                onChange={(e: any) => setContactUs({ ...contactUs, message: e.target.value })}
                                                                                                name="message" id="message"
                                                                                                placeholder="Wrire your message here ..."></textarea>
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                                {/* <div className="col-md-12">
                                                                                    <div className="input-group upload-attachment">
                                                                                        <div>
                                                                                            <p><label htmlFor="upload-attachment"><i
                                                                                                className="las la-cloud-upload-alt"></i>
                                                                                                add an attachment<input
                                                                                                    type="file" name="file"
                                                                                                    id="upload-attachment" /></label>
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div> */}
                                                                                <div className="col-md-12">
                                                                                    <div className="input-group submit-btn-wrap">
                                                                                        <p><Link target='_blank' href={contact_us_link} className="theme-btn">send
                                                                                            message</Link>
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="wpcf7-response-output" aria-hidden="true">
                                                                            </div>
                                                                        </form>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </section>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>


                        </div>
                    </div>
                </main>
            </main>
        </>
    )
}
