import React, {Component} from "react";
import {Link } from "react-router-dom";
export class HeaderClient extends Component{
    render(){
        return(
            <div>
            {/* MOBILE MENU */}
            <section>
                <div className="ed-mob-menu">
                    <div className="ed-mob-menu-con">
                        <div className="ed-mm-left">
                            <div className="wed-logo">
                                <Link to="../">
                                    <img src={require("../assets/images/logo.png")} alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="ed-mm-right">
                            <div className="ed-mm-menu">
                                <Link to="../#!" className="ed-micon"><i className="fa fa-bars" /></Link>
                                <div className="ed-mm-inn">
                                    <Link to="../#!" className="ed-mi-close"><i className="fa fa-times" /></Link>
                                    <h4>All Courses</h4>
                                    <ul>
                                        <li><Link to="../course-details">Accounting/Finance</Link></li>
                                        <li><Link to="../course-details">civil engineering</Link></li>
                                        <li><Link to="../course-details">Art/Design</Link></li>
                                        <li><Link to="../course-details">Marine Engineering</Link></li>
                                        <li><Link to="../course-details">Business Management</Link></li>
                                        <li><Link to="../course-details">Journalism/Writing</Link></li>
                                        <li><Link to="../course-details">Physical Education</Link></li>
                                        <li><Link to="../course-details">Political Science</Link></li>
                                        <li><Link to="../course-details">Sciences</Link></li>
                                        <li><Link to="../course-details">Statistics</Link></li>
                                        <li><Link to="../course-details">Web Design/Development</Link></li>
                                        <li><Link to="../course-details">SEO</Link></li>
                                        <li><Link to="../course-details">Google Business</Link></li>
                                        <li><Link to="../course-details">Graphics Design</Link></li>
                                        <li><Link to="../course-details">Networking Courses</Link></li>
                                        <li><Link to="../course-details">Information technology</Link></li>
                                    </ul>
                                    <h4>User Account</h4>
                                    <ul>
                                        <li><Link to="../#!" data-toggle="modal" data-target="#modal1">Sign In</Link></li>
                                        <li><Link to="../#!" data-toggle="modal" data-target="#modal2">Register</Link></li>
                                    </ul>
                                    <h4>All Pages</h4>
                                    <ul>
                                        <li><Link to="../">Home</Link></li>
                                        <li><Link to="../about">About us</Link></li>
                                        <li><Link to="../admission">Admission</Link></li>
                                        <li><Link to="../all-courses">All courses</Link></li>
                                        <li><Link to="../course-details">Course details</Link></li>
                                        <li><Link to="../awards">Awards</Link></li>
                                        <li><Link to="../seminar">Seminar</Link></li>
                                        <li><Link to="../events">Events</Link></li>
                                        <li><Link to="../event-details">Event details</Link></li>
                                        <li><Link to="../event-register">Event register</Link></li>
                                        <li><Link to="../contact-us">Contact us</Link></li>
                                    </ul>
                                    <h4>User Profile</h4>
                                    <ul>
                                        <li><Link to="../dashboard">User profile</Link></li>
                                        <li><Link to="../db-courses">Courses</Link></li>
                                        <li><Link to="../db-exams">Exams</Link></li>
                                        <li><Link to="../db-profile">Prfile</Link></li>
                                        <li><Link to="../db-time-line">Time line</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*HEADER SECTION*/}
            <section>
                {/* TOP BAR */}
                <div className="ed-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="ed-com-t1-left">
                                    <ul>
                                        <li>
                                            <Link to="../#">Contact: Lake Road, Suite 180 Farmington Hills, U.S.A.</Link>
                                        </li>
                                        <li>
                                            <Link to="../#">Phone: +101-1231-1231</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="ed-com-t1-right">
                                    <ul>
                                        <li>
                                            <Link to="../#!" data-toggle="modal" data-target="#modal1">Sign In</Link>
                                        </li>
                                        <li>
                                            <Link to="../#!" data-toggle="modal" data-target="#modal2">Sign Up</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="ed-com-t1-social">
                                    <ul>
                                        <li>
                                            <Link to="../#"><i className="fa fa-facebook" aria-hidden="true" /></Link>
                                        </li>
                                        <li>
                                            <Link to="../#"><i className="fa fa-google-plus" aria-hidden="true" /></Link>
                                        </li>
                                        <li>
                                            <Link to="../#"><i className="fa fa-twitter" aria-hidden="true" /></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* LOGO AND MENU SECTION */}
                <div className="top-logo" data-spy="affix" data-offset-top={250}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="wed-logo">
                                    <Link to="../">
                                        <img src={require("../assets/images/logo.png")} alt="" />
                                    </Link>
                                </div>
                                <div className="main-menu">
                                    <ul>
                                        <li>
                                            <Link to="../">Home</Link>
                                        </li>
                                     
                                        <li><Link to="../allcourses"> Courses</Link></li>
                                        <li className="dashboard-menu">
                                            <Link to="../dashboard" className="mm-arr">User Dashboard</Link>
                                            {/* MEGA MENU 1 */} 
                                             <div className="mm-pos">
                                                <div className="dashboard-mm m-menu">
                                                    <div className="m-menu-inn">
                                                        <div className="mm1-com mm1-s1">
                                                            <div className="ed-course-in">
                                                                <Link className="course-overlay menu-about" to="../admission">
                                                                    <img src={require("../assets/images/h-about.jpg")} alt="" />
                                                                    <span>Academics</span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="mm1-com mm1-s2">
                                                            <p>Want to change the world? At Berkeley we’re doing just that. When you join the Golden Bear community, you’re part of an institution that shifts the global conversation every single day.</p>
                                                            <Link to="../about" className="mm-r-m-btn">Read more</Link>
                                                        </div>
                                                        <div className="mm1-com mm1-s3">
                                                        <ul>
                                                        <li><Link to="../dashboard">Student profile</Link></li>
                                                        <li><Link to="../dbcourses">Dashboard courses</Link></li>
                                                        <li><Link to="../dbexams">Dashboard exams</Link></li>
                                                        <li><Link to="../dbprofile">Dashboard profile</Link></li>
                                                        <li><Link to="../dbtimeline">Dashboard timeline</Link></li>
                                                        </ul>
                            
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <Link to="../events">Events</Link>
                                        </li>
                                        
                               
                                        {/*
                                        <li><Link class='dropdown-button ed-sub-menu' href='#' data-activates='dropdown1'>Courses</Link></li>*/}
                                        <li className="admi-menu">
                                            <Link to="../#" className="mm-arr">Contact & Admission</Link>
                                            {/* MEGA MENU 1 */}
                                            <div className="mm-pos">
                                                <div className="admi-mm m-menu">
                                                    <div className="m-menu-inn">
                                                        <div className="mm2-com mm1-com mm1-s1">
                                                            <div className="ed-course-in">
                                                                <Link className="course-overlay" to="../awards">
                                                                    <img src={require("../assets/images/h-about1.jpg")} alt="" />
                                                                    <span>History and Award</span>
                                                                </Link>
                                                            </div>
                                                            <p>Donec lacus libero, rutrum ac sollicitudin sed, mattis non eros. Vestibulum congue nec eros quis lacinia. Mauris non tincidunt lectus. Nulla mollis, orci vitae accumsan rhoncus.</p>
                                                            <Link to="../awards" className="mm-r-m-btn">Read more</Link>
                                                        </div>
                                                        <div className="mm2-com mm1-com mm1-s1">
                                                            <div className="ed-course-in">
                                                                <Link className="course-overlay" to="../about">
                                                                    <img src={require("../assets/images/h-adm1.jpg")} alt="" />
                                                                    <span>About US</span>
                                                                </Link>
                                                            </div>
                                                            <p>Donec lacus libero, rutrum ac sollicitudin sed, mattis non eros. Vestibulum congue nec eros quis lacinia. Mauris non tincidunt lectus. Nulla mollis, orci vitae accumsan rhoncus.</p>
                                                            <Link to="../about" className="mm-r-m-btn">Read more</Link>
                                                        </div>
                                                        <div className="mm2-com mm1-com mm1-s1">
                                                            <div className="ed-course-in">
                                                                <Link className="course-overlay" to="../contactus">
                                                                    <img src={require("../assets/images/h-cam1.jpg")} alt="" />
                                                                    <span>Contact US</span>
                                                                </Link>
                                                            </div>
                                                            <p>Donec lacus libero, rutrum ac sollicitudin sed, mattis non eros. Vestibulum congue nec eros quis lacinia. Mauris non tincidunt lectus. Nulla mollis, orci vitae accumsan rhoncus.</p>
                                                            <Link to="../contactus" className="mm-r-m-btn">Read more</Link>
                                                        </div>
                                                
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                      
                                   
                                    </ul>
                                </div>
                            </div>
                            <div className="all-drop-down-menu">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="search-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="search-form">
                                    <form>
                                        <div className="sf-type">
                                            <div className="sf-input">
                                                <input type="text" id="sf-box" placeholder="Search course and discount courses" />
                                            </div>
                                            <div className="sf-list">
                                                <ul>
                                                    <li><Link to="../course-details">Accounting/Finance</Link></li>
                                                    <li><Link to="../course-details">civil engineering</Link></li>
                                                    <li><Link to="../course-details">Art/Design</Link></li>
                                                    <li><Link to="../course-details">Marine Engineering</Link></li>
                                                    <li><Link to="../course-details">Business Management</Link></li>
                                                    <li><Link to="../course-details">Journalism/Writing</Link></li>
                                                    <li><Link to="../course-details">Physical Education</Link></li>
                                                    <li><Link to="../course-details">Political Science</Link></li>
                                                    <li><Link to="../course-details">Sciences</Link></li>
                                                    <li><Link to="../course-details">Statistics</Link></li>
                                                    <li><Link to="../course-details">Web Design/Development</Link></li>
                                                    <li><Link to="../course-details">SEO</Link></li>
                                                    <li><Link to="../course-details">Google Business</Link></li>
                                                    <li><Link to="../course-details">Graphics Design</Link></li>
                                                    <li><Link to="../course-details">Networking Courses</Link></li>
                                                    <li><Link to="../course-details">Information technology</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="sf-submit">
                                            <input type="submit" defaultValue="Search Course" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*END HEADER SECTION*/}
            </div>
        );
        
    };
}