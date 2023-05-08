import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Home extends Component {
  render() {
    return (
      <div>
        {/* MOBILE MENU */}
        <section>
          <div className="ed-mob-menu">
            <div className="ed-mob-menu-con">
              <div className="ed-mm-left">
                <div className="wed-logo">
                  <Link to="./index">
                    <img src={require("./images/logo.png")} alt="" />
                  </Link>
                </div>
              </div>
              <div className="ed-mm-right">
                <div className="ed-mm-menu">
                  <Link to="./#!" className="ed-micon">
                    <i className="fa fa-bars" />
                  </Link>
                  <div className="ed-mm-inn">
                    <Link to="./#!" className="ed-mi-close">
                      <i className="fa fa-times" />
                    </Link>
                    <h4>All Courses</h4>
                    <ul>
                      <li>
                        <Link to="./course-details">Accounting/Finance</Link>
                      </li>
                      <li>
                        <Link to="./course-details">civil engineering</Link>
                      </li>
                      <li>
                        <Link to="./course-details">Art/Design</Link>
                      </li>
                      <li>
                        <Link to="./course-details">Marine Engineering</Link>
                      </li>
                      <li>
                        <Link to="./course-details">Business Management</Link>
                      </li>
                      <li>
                        <Link to="./course-details">Journalism/Writing</Link>
                      </li>
                      <li>
                        <Link to="./course-details">Physical Education</Link>
                      </li>
                      <li>
                        <Link to="./course-details">Political Science</Link>
                      </li>
                      <li>
                        <Link to="./course-details">Sciences</Link>
                      </li>
                      <li>
                        <Link to="./course-details">Statistics</Link>
                      </li>
                      <li>
                        <Link to="./course-details">Web Design/Development</Link>
                      </li>
                      <li>
                        <Link to="./course-details">SEO</Link>
                      </li>
                      <li>
                        <Link to="./course-details">Google Business</Link>
                      </li>
                      <li>
                        <Link to="./course-details">Graphics Design</Link>
                      </li>
                      <li>
                        <Link to="./course-details">Networking Courses</Link>
                      </li>
                      <li>
                        <Link to="./course-details">Information technology</Link>
                      </li>
                    </ul>
                    <h4>User Account</h4>
                    <ul>
                      <li>
                        <Link to="./#!" data-toggle="modal" data-target="#modal1">
                          Sign In
                        </Link>
                      </li>
                      <li>
                        <Link to="./#!" data-toggle="modal" data-target="#modal2">
                          Register
                        </Link>
                      </li>
                    </ul>
                    <h4>All Pages</h4>
                    <ul>
                      <li>
                        <Link to="./index">Home</Link>
                      </li>
                      <li>
                        <Link to="./about">About us</Link>
                      </li>
                      <li>
                        <Link to="./admission">Admission</Link>
                      </li>
                      <li>
                        <Link to="./all-courses">All courses</Link>
                      </li>
                      <li>
                        <Link to="./course-details">Course details</Link>
                      </li>
                      <li>
                        <Link to="./awards">Awards</Link>
                      </li>
                      <li>
                        <Link to="./seminar">Seminar</Link>
                      </li>
                      <li>
                        <Link to="./events">Events</Link>
                      </li>
                      <li>
                        <Link to="./event-details">Event details</Link>
                      </li>
                      <li>
                        <Link to="./event-register">Event register</Link>
                      </li>
                      <li>
                        <Link to="./contact-us">Contact us</Link>
                      </li>
                    </ul>
                    <h4>User Profile</h4>
                    <ul>
                      <li>
                        <Link to="./dashboard">User profile</Link>
                      </li>
                      <li>
                        <Link to="./db-courses">Courses</Link>
                      </li>
                      <li>
                        <Link to="./db-exams">Exams</Link>
                      </li>
                      <li>
                        <Link to="./db-profile">Prfile</Link>
                      </li>
                      <li>
                        <Link to="./db-time-line">Time line</Link>
                      </li>
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
                        <Link to="./#">
                          Contact: Lake Road, Suite 180 Farmington Hills, U.S.A.
                        </Link>
                      </li>
                      <li>
                        <Link to="./#">Phone: +101-1231-1231</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="ed-com-t1-right">
                    <ul>
                      <li>
                        <Link to="./#!" data-toggle="modal" data-target="#modal1">
                          Sign In
                        </Link>
                      </li>
                      <li>
                        <Link to="./#!" data-toggle="modal" data-target="#modal2">
                          Sign Up
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="ed-com-t1-social">
                    <ul>
                      <li>
                        <Link to="./#">
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </Link>
                      </li>
                      <li>
                        <Link to="./#">
                          <i className="fa fa-google-plus" aria-hidden="true" />
                        </Link>
                      </li>
                      <li>
                        <Link to="./#">
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </Link>
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
                    <Link to="./index">
                      <img src={require("./images/logo.png")} alt="" />
                    </Link>
                  </div>
                  <div className="main-menu">
                    <ul>
                      <li>
                        <Link to="./index">Home</Link>
                      </li>
                      <li className="about-menu">
                        <Link to="./about" className="mm-arr">
                          About us
                        </Link>
                        {/* MEGA MENU 1 */}
                        <div className="mm-pos">
                          <div className="about-mm m-menu">
                            <div className="m-menu-inn">
                              <div className="mm1-com mm1-s1">
                                <div className="ed-course-in">
                                  <Link
                                    className="course-overlay menu-about"
                                    to="./admission"
                                  >
                                    <img
                                      src={require("./images/h-about.jpg")}
                                      srcset="./images/h_about.jpg"
                                      alt=""
                                    />
                                    <span>Academics</span>
                                  </Link>
                                </div>
                              </div>
                              <div className="mm1-com mm1-s2">
                                <p>
                                  Want to change the world? At Berkeley we’re
                                  doing just that. When you join the Golden Bear
                                  community, you’re part of an institution that
                                  shifts the global conversation every single
                                  day.
                                </p>
                                <Link to="./about" className="mm-r-m-btn">
                                  Read more
                                </Link>
                              </div>
                              <div className="mm1-com mm1-s3">
                                <ul>
                                  <li>
                                    <Link to="./all-courses">All Courses</Link>
                                  </li>
                                  <li>
                                    <Link to="./course-details">
                                      Course details
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="./about">About</Link>
                                  </li>
                                  <li>
                                    <Link to="./admission">Admission</Link>
                                  </li>
                                  <li>
                                    <Link to="./awards">Awards</Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="mm1-com mm1-s4">
                                <ul>
                                  <li>
                                    <Link to="./dashboard">Student profile</Link>
                                  </li>
                                  <li>
                                    <Link to="./db-courses">
                                      Dashboard courses
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="./db-exams">Dashboard exams</Link>
                                  </li>
                                  <li>
                                    <Link to="./db-profile">
                                      Dashboard profile
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="./db-time-line">
                                      Dashboard timeline
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="admi-menu">
                        <Link to="./#" className="mm-arr">
                          Admission
                        </Link>
                        {/* MEGA MENU 1 */}
                        <div className="mm-pos">
                          <div className="admi-mm m-menu">
                            <div className="m-menu-inn">
                              <div className="mm2-com mm1-com mm1-s1">
                                <div className="ed-course-in">
                                  <Link
                                    className="course-overlay"
                                    to="./about"
                                  >
                                    <img
                                      src={require("./images/h-about1.jpg")}
                                      alt=""
                                    />
                                    <span>Academics</span>
                                  </Link>
                                </div>
                                <p>
                                  Donec lacus libero, rutrum ac sollicitudin
                                  sed, mattis non eros. Vestibulum congue nec
                                  eros quis lacinia. Mauris non tincidunt
                                  lectus. Nulla mollis, orci vitae accumsan
                                  rhoncus.
                                </p>
                                <Link to="./about" className="mm-r-m-btn">
                                  Read more
                                </Link>
                              </div>
                              <div className="mm2-com mm1-com mm1-s1">
                                <div className="ed-course-in">
                                  <Link
                                    className="course-overlay"
                                    to="./admission"
                                  >
                                    <img
                                      src={require("./images/h-adm1.jpg")}
                                      alt=""
                                    />
                                    <span>Admission</span>
                                  </Link>
                                </div>
                                <p>
                                  Donec lacus libero, rutrum ac sollicitudin
                                  sed, mattis non eros. Vestibulum congue nec
                                  eros quis lacinia. Mauris non tincidunt
                                  lectus. Nulla mollis, orci vitae accumsan
                                  rhoncus.
                                </p>
                                <Link to="./admission" className="mm-r-m-btn">
                                  Read more
                                </Link>
                              </div>
                              <div className="mm2-com mm1-com mm1-s1">
                                <div className="ed-course-in">
                                  <Link
                                    className="course-overlay"
                                    to="./awards"
                                  >
                                    <img
                                      src={require("./images/h-cam1.jpg")}
                                      alt=""
                                    />
                                    <span>History &amp; awards</span>
                                  </Link>
                                </div>
                                <p>
                                  Donec lacus libero, rutrum ac sollicitudin
                                  sed, mattis non eros. Vestibulum congue nec
                                  eros quis lacinia. Mauris non tincidunt
                                  lectus. Nulla mollis, orci vitae accumsan
                                  rhoncus.
                                </p>
                                <Link to="./awards" className="mm-r-m-btn">
                                  Read more
                                </Link>
                              </div>
                              <div className="mm2-com mm1-com mm1-s4">
                                <div className="ed-course-in">
                                  <Link
                                    className="course-overlay"
                                    to="./seminar"
                                  >
                                    <img
                                      src={require("./images/h-res1.jpg")}
                                      alt=""
                                    />
                                    <span>Seminar 2018</span>
                                  </Link>
                                </div>
                                <p>
                                  Donec lacus libero, rutrum ac sollicitudin
                                  sed, mattis non eros. Vestibulum congue nec
                                  eros quis lacinia. Mauris non tincidunt
                                  lectus. Nulla mollis, orci vitae accumsan
                                  rhoncus.
                                </p>
                                <Link to="./seminar" className="mm-r-m-btn">
                                  Read more
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link to="./all-courses">All Courses</Link>
                      </li>
                      {/*<li><Link class='dropdown-button ed-sub-menu' href='#' data-activates='dropdown1'>Courses</Link></li>*/}
                      <li className="cour-menu">
                        <Link to="./#!" className="mm-arr">
                          All Pages
                        </Link>
                        {/* MEGA MENU 1 */}
                        <div className="mm-pos">
                          <div className="cour-mm m-menu">
                            <div className="m-menu-inn">
                              <div className="mm1-com mm1-cour-com mm1-s3">
                                <h4>Frontend pages:1</h4>
                                <ul>
                                  <li>
                                    <Link to="./index">Home</Link>
                                  </li>
                                  <li>
                                    <Link to="./index-1">Home - 1</Link>
                                  </li>
                                  <li>
                                    <Link to="./all-courses">All Courses</Link>
                                  </li>
                                  <li>
                                    <Link to="./course-details">
                                      Course Details
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="./about">About us</Link>
                                  </li>
                                  <li>
                                    <Link to="./admission">admission</Link>
                                  </li>
                                  <li>
                                    <Link to="./awards">awards</Link>
                                  </li>
                                  <li>
                                    <Link to="./blog">blog</Link>
                                  </li>
                                  <li>
                                    <Link to="./blog-details">blog details</Link>
                                  </li>
                                  <li>
                                    <Link to="./contact-us">contact us</Link>
                                  </li>
                                  <li>
                                    <Link to="./departments">Departments</Link>
                                  </li>
                                  <li>
                                    <Link to="./events">events</Link>
                                  </li>
                                  <li>
                                    <Link to="./event-details">
                                      event details
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="./event-register">
                                      event register
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="mm1-com mm1-cour-com mm1-s3">
                                <h4>Frontend pages:2</h4>
                                <ul>
                                  <li>
                                    <Link to="./facilities">facilities</Link>
                                  </li>
                                  <li>
                                    <Link to="./facilities-detail">
                                      facilities detail
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="./research">research</Link>
                                  </li>
                                  <li>
                                    <Link to="./seminar">seminar</Link>
                                  </li>
                                  <li>
                                    <Link to="./gallery-photo">
                                      gallery photo
                                    </Link>
                                  </li>
                                </ul>
                                <h4 className="ed-dr-men-mar-top">
                                  User Dashboard
                                </h4>
                                <ul>
                                  <li>
                                    <Link to="./dashboard">Student profile</Link>
                                  </li>
                                  <li>
                                    <Link to="./db-courses">
                                      Dashboard courses
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="./db-exams">Dashboard exams</Link>
                                  </li>
                                  <li>
                                    <Link to="./db-profile">
                                      Dashboard profile
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="./db-time-line">
                                      Dashboard timeline
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="mm1-com mm1-cour-com mm1-s3">
                                <h4>Admin panel:1</h4>
                                <ul>
                                  <li>
                                    <Link to="./admin">admin</Link>
                                  </li>
                                  <li>
                                    <Link to="./admin-add-courses">
                                      Add new course
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="./admin-all-courses">
                                      All courses
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="./admin-student-details">
                                      Student details
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="./admin-user-add">
                                      Add new user
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="./admin-user-all">All users</Link>
                                  </li>
                                  <li>
                                    <Link to="./admin-panel-setting">
                                      Admin setting
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="./admin-event-add">event add</Link>
                                  </li>
                                  <li>
                                    <Link to="./admin-event-all">event all</Link>
                                  </li>
                                  <li>
                                    <Link to="./admin-setting">
                                      Admin Setting
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="./admin-slider">
                                      Slider setting
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="./admin-slider-edit">
                                      Slider edit
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="./admin-course-details">
                                      course details
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="./admin-login">admin login</Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="mm1-com mm1-cour-com mm1-s3">
                                <h4>Admin panel:2</h4>
                                <ul>
                                  <li>
                                    <Link to="./admin-event-edit">
                                      event edit
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="./admin-exam-add">exam add</Link>
                                  </li>
                                  <li>
                                    <Link to="./admin-exam-all">exam all</Link>
                                  </li>
                                  <li>
                                    <Link to="./admin-exam-edit">exam edit</Link>
                                  </li>
                                  <li>
                                    <Link to="./admin-export-data">
                                      export data
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="./admin-import-data">
                                      import data
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="./admin-job-add">
                                      Add new jobs
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="./admin-job-all">All jobs</Link>
                                  </li>
                                  <li>
                                    <Link to="./admin-job-edit">Edit job</Link>
                                  </li>
                                  <li>
                                    <Link to="./admin-main-menu">main menu</Link>
                                  </li>
                                  <li>
                                    <Link to="./admin-page-add">
                                      Add new page
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="./admin-page-all">All pages</Link>
                                  </li>
                                  <li>
                                    <Link to="./admin-page-edit">Edit page</Link>
                                  </li>
                                  <li>
                                    <Link to="./admin-forgot">
                                      forgot password
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="mm1-com mm1-cour-com mm1-s4">
                                <h4>Admin panel:3</h4>
                                <ul>
                                  <li>
                                    <Link to="./admin-quick-link">
                                      quick link
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="./admin-seminar-add">
                                      Add new seminar
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="./admin-seminar-all">
                                      All seminar
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="./admin-seminar-edit">
                                      Edit seminar
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="./admin-seminar-enquiry">
                                      Semester enquiry
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="./admin-all-enquiry">
                                      All enquiry
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="./admin-view-enquiry">
                                      All enquiry view
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="./admin-event-enquiry">
                                      event enquiry
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="./admin-admission-enquiry">
                                      Admission enquiry
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="./admin-common-enquiry">
                                      common enquiry
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="./admin-course-enquiry">
                                      course enquiry
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="./admin-all-menu">menu all</Link>
                                  </li>
                                  <li>
                                    <Link to="./admin-about-menu">
                                      Menu - About
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="./admin-admission-menu">
                                      Menu - admission
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link to="./events">Events</Link>
                      </li>
                      <li>
                        <Link to="./dashboard">Student</Link>
                      </li>
                      <li>
                        <Link to="./contact-us">Contact us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="all-drop-down-menu"></div>
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
                          <input
                            type="text"
                            id="sf-box"
                            placeholder="Search course and discount courses"
                          />
                        </div>
                        <div className="sf-list">
                          <ul>
                            <li>
                              <Link to="./course-details">
                                Accounting/Finance
                              </Link>
                            </li>
                            <li>
                              <Link to="./course-details">
                                civil engineering
                              </Link>
                            </li>
                            <li>
                              <Link to="./course-details">Art/Design</Link>
                            </li>
                            <li>
                              <Link to="./course-details">
                                Marine Engineering
                              </Link>
                            </li>
                            <li>
                              <Link to="./course-details">
                                Business Management
                              </Link>
                            </li>
                            <li>
                              <Link to="./course-details">
                                Journalism/Writing
                              </Link>
                            </li>
                            <li>
                              <Link to="./course-details">
                                Physical Education
                              </Link>
                            </li>
                            <li>
                              <Link to="./course-details">
                                Political Science
                              </Link>
                            </li>
                            <li>
                              <Link to="./course-details">Sciences</Link>
                            </li>
                            <li>
                              <Link to="./course-details">Statistics</Link>
                            </li>
                            <li>
                              <Link to="./course-details">
                                Web Design/Development
                              </Link>
                            </li>
                            <li>
                              <Link to="./course-details">SEO</Link>
                            </li>
                            <li>
                              <Link to="./course-details">Google Business</Link>
                            </li>
                            <li>
                              <Link to="./course-details">Graphics Design</Link>
                            </li>
                            <li>
                              <Link to="./course-details">
                                Networking Courses
                              </Link>
                            </li>
                            <li>
                              <Link to="./course-details">
                                Information technology
                              </Link>
                            </li>
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
        {/* SLIDER */}
        <section>
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            {/* Wrapper for slides */}
            <div className="carousel-inner">
              <div className="item slider1 active">
                <img src={require("./images/slider/1.jpg")} alt="" />
                <div className="carousel-caption slider-con">
                  <h2>
                    Welcome to <span>University</span>
                  </h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form
                  </p>
                  <Link to="./#" className="bann-btn-1">
                    All Courses
                  </Link>
                  <Link to="./#" className="bann-btn-2">
                    Read More
                  </Link>
                </div>
              </div>
              <div className="item">
                <img src={require("./images/slider/2.jpg")} alt="" />
                <div className="carousel-caption slider-con">
                  <h2>
                    Admission open <span>2018</span>
                  </h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form
                  </p>
                  <Link to="./#" className="bann-btn-1">
                    Admission
                  </Link>
                  <Link to="./#" className="bann-btn-2">
                    Read More
                  </Link>
                </div>
              </div>
              <div className="item">
                <img src={require("./images/slider/3.jpg")} alt="" />
                <div className="carousel-caption slider-con">
                  <h2>
                    Education <span>Master</span>
                  </h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form
                  </p>
                  <Link to="./#" className="bann-btn-1">
                    All Courses
                  </Link>
                  <Link to="./#" className="bann-btn-2">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            {/* Left and right controls */}
            <Link
              className="left carousel-control"
              to="./#myCarousel"
              data-slide="prev"
            >
              <i className="fa fa-chevron-left slider-arr" />
            </Link>
            <Link
              className="right carousel-control"
              to="./#myCarousel"
              data-slide="next"
            >
              <i className="fa fa-chevron-right slider-arr" />
            </Link>
          </div>
        </section>
        {/* QUICK LINKS */}
        <section>
          <div className="container">
            <div className="row">
              <div className="wed-hom-ser">
                <ul>
                  <li>
                    <Link
                      to="./awards"
                      className="waves-effect waves-light btn-large wed-pop-ser-btn"
                    >
                      <img src={require("./images/icon/h-ic1.png")} alt="" />{" "}
                      Academy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="./admission"
                      className="waves-effect waves-light btn-large wed-pop-ser-btn"
                    >
                      <img src={require("./images/icon/h-ic2.png")} alt="" />{" "}
                      Admission
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="./all-courses"
                      className="waves-effect waves-light btn-large wed-pop-ser-btn"
                    >
                      <img src={require("./images/icon/h-ic4.png")} alt="" />{" "}
                      Courses
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="./seminar"
                      className="waves-effect waves-light btn-large wed-pop-ser-btn"
                    >
                      <img src={require("./images/icon/h-ic3.png")} alt="" />{" "}
                      Seminar
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* DISCOVER MORE */}
        <section>
          <div className="container com-sp pad-bot-70">
            <div className="row">
              <div className="con-title">
                <h2>
                  Discover <span>More</span>
                </h2>
                <p>
                  Fusce id sem at ligula laoreet hendrerit venenatis sed purus.
                  Ut pellentesque maximus lacus, nec pharetra augue.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="ed-course">
                <div className="col-md-3 col-sm-4 col-xs-12">
                  <div className="ed-course-in">
                    <Link className="course-overlay" to="./about">
                      <img src={require("./images/h-about.jpg")} alt="" />
                      <span>Academics</span>
                    </Link>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 col-xs-12">
                  <div className="ed-course-in">
                    <Link className="course-overlay" to="./admission">
                      <img src={require("./images/h-adm1.jpg")} alt="" />
                      <span>Admission</span>
                    </Link>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 col-xs-12">
                  <div className="ed-course-in">
                    <Link className="course-overlay" to="./dashboard">
                      <img src={require("./images/h-cam.jpg")} alt="" />
                      <span>Students profile</span>
                    </Link>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 col-xs-12">
                  <div className="ed-course-in">
                    <Link className="course-overlay" to="./research">
                      <img src={require("./images/h-res.jpg")} alt="" />
                      <span>Research &amp; Education</span>
                    </Link>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 col-xs-12">
                  <div className="ed-course-in">
                    <Link className="course-overlay" to="./all-courses">
                      <img src={require("./images/h-about1.jpg")} alt="" />
                      <span>Couse</span>
                    </Link>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 col-xs-12">
                  <div className="ed-course-in">
                    <Link className="course-overlay" to="./db-time-line">
                      <img src={require("./images/h-adm.jpg")} alt="" />
                      <span>Exam Time Line</span>
                    </Link>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 col-xs-12">
                  <div className="ed-course-in">
                    <Link className="course-overlay" to="./seminar">
                      <img src={require("./images/h-cam1.jpg")} alt="" />
                      <span>Seminar 2018</span>
                    </Link>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 col-xs-12">
                  <div className="ed-course-in">
                    <Link className="course-overlay" to="./events">
                      <img src={require("./images/h-res1.jpg")} alt="" />
                      <span>Research &amp; Education</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* POPULAR COURSES */}
        <section className="pop-cour">
          <div className="container com-sp pad-bot-70">
            <div className="row">
              <div className="con-title">
                <h2>
                  Popular <span>Courses</span>
                </h2>
                <p>
                  Fusce id sem at ligula laoreet hendrerit venenatis sed purus.
                  Ut pellentesque maximus lacus, nec pharetra augue.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div>
                  {/*POPULAR COURSES*/}
                  <div className="home-top-cour">
                    {/*POPULAR COURSES IMAGE*/}
                    <div className="col-md-3">
                      {" "}
                      <img
                        src={require("./images/course/sm-1.jpg")}
                        alt=""
                      />{" "}
                    </div>
                    {/*POPULAR COURSES: CONTENT*/}
                    <div className="col-md-9 home-top-cour-desc">
                      <Link to="./course-details">
                        <h3>Aerospace Engineering</h3>
                      </Link>
                      <h4>Technology / Space / Aerospace</h4>
                      <p>
                        Classes started from coming friday(21 jun 2017),total
                        seats 72 and available seats 10
                      </p>{" "}
                      <span className="home-top-cour-rat">4.2</span>
                      <div className="hom-list-share">
                        <ul>
                          <li>
                            <Link to="./course-details">
                              <i
                                className="fa fa-bar-chart"
                                aria-hidden="true"
                              />{" "}
                              Book Now
                            </Link>{" "}
                          </li>
                          <li>
                            <Link to="./course-details">
                              <i className="fa fa-eye" aria-hidden="true" />
                              10 Aavailable
                            </Link>{" "}
                          </li>
                          <li>
                            <Link to="./course-details">
                              <i
                                className="fa fa-share-alt"
                                aria-hidden="true"
                              />{" "}
                              570
                            </Link>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*POPULAR COURSES*/}
                  <div className="home-top-cour">
                    {/*POPULAR COURSES IMAGE*/}
                    <div className="col-md-3">
                      {" "}
                      <img
                        src={require("./images/course/sm-2.jpg")}
                        alt=""
                      />{" "}
                    </div>
                    {/*POPULAR COURSES: CONTENT*/}
                    <div className="col-md-9 home-top-cour-desc">
                      <Link to="./course-details">
                        <h3>Agriculture Courses</h3>
                      </Link>
                      <h4>Technology / Space / Aerospace</h4>
                      <p>
                        Classes started from coming friday(21 jun 2017),total
                        seats 72 and available seats 10
                      </p>{" "}
                      <span className="home-top-cour-rat">4.2</span>
                      <div className="hom-list-share">
                        <ul>
                          <li>
                            <Link to="./course-details">
                              <i
                                className="fa fa-bar-chart"
                                aria-hidden="true"
                              />{" "}
                              Book Now
                            </Link>{" "}
                          </li>
                          <li>
                            <Link to="./course-details">
                              <i className="fa fa-eye" aria-hidden="true" />
                              40 Aavailable
                            </Link>{" "}
                          </li>
                          <li>
                            <Link to="./course-details">
                              <i
                                className="fa fa-share-alt"
                                aria-hidden="true"
                              />{" "}
                              320
                            </Link>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*POPULAR COURSES*/}
                  <div className="home-top-cour">
                    {/*POPULAR COURSES IMAGE*/}
                    <div className="col-md-3">
                      {" "}
                      <img
                        src={require("./images/course/sm-3.jpg")}
                        alt=""
                      />{" "}
                    </div>
                    {/*POPULAR COURSES: CONTENT*/}
                    <div className="col-md-9 home-top-cour-desc">
                      <Link to="./course-details">
                        <h3>Marine Engineering</h3>
                      </Link>
                      <h4>Technology / Ocean / Marine</h4>
                      <p>
                        Classes started from coming friday(21 jun 2017),total
                        seats 72 and available seats 10
                      </p>{" "}
                      <span className="home-top-cour-rat">4.2</span>
                      <div className="hom-list-share">
                        <ul>
                          <li>
                            <Link to="./course-details">
                              <i
                                className="fa fa-bar-chart"
                                aria-hidden="true"
                              />{" "}
                              Book Now
                            </Link>{" "}
                          </li>
                          <li>
                            <Link to="./course-details">
                              <i className="fa fa-eye" aria-hidden="true" />
                              04 Aavailable
                            </Link>{" "}
                          </li>
                          <li>
                            <Link to="./course-details">
                              <i
                                className="fa fa-share-alt"
                                aria-hidden="true"
                              />{" "}
                              1020
                            </Link>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*POPULAR COURSES*/}
                  <div className="home-top-cour">
                    {/*POPULAR COURSES IMAGE*/}
                    <div className="col-md-3">
                      {" "}
                      <img
                        src={require("./images/course/sm-4.jpg")}
                        alt=""
                      />{" "}
                    </div>
                    {/*POPULAR COURSES: CONTENT*/}
                    <div className="col-md-9 home-top-cour-desc">
                      <Link to="./course-details">
                        <h3>Building, Construction Management</h3>
                      </Link>
                      <h4>Technology / Construction / Building</h4>
                      <p>
                        Classes started from coming friday(21 jun 2017),total
                        seats 72 and available seats 10
                      </p>{" "}
                      <span className="home-top-cour-rat">4.2</span>
                      <div className="hom-list-share">
                        <ul>
                          <li>
                            <Link to="./course-details">
                              <i
                                className="fa fa-bar-chart"
                                aria-hidden="true"
                              />{" "}
                              Book Now
                            </Link>{" "}
                          </li>
                          <li>
                            <Link to="./course-details">
                              <i className="fa fa-eye" aria-hidden="true" />
                              32 Aavailable
                            </Link>{" "}
                          </li>
                          <li>
                            <Link to="./course-details">
                              <i
                                className="fa fa-share-alt"
                                aria-hidden="true"
                              />{" "}
                              124
                            </Link>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  {/*POPULAR COURSES*/}
                  <div className="home-top-cour">
                    {/*POPULAR COURSES IMAGE*/}
                    <div className="col-md-3">
                      {" "}
                      <img
                        src={require("./images/course/sm-5.jpg")}
                        alt=""
                      />{" "}
                    </div>
                    {/*POPULAR COURSES: CONTENT*/}
                    <div className="col-md-9 home-top-cour-desc">
                      <Link to="./course-details">
                        <h3>Fashion Technology</h3>
                      </Link>
                      <h4>Technology / Trends / Fashion</h4>
                      <p>
                        Classes started from coming friday(21 jun 2017),total
                        seats 72 and available seats 10
                      </p>{" "}
                      <span className="home-top-cour-rat">4.2</span>
                      <div className="hom-list-share">
                        <ul>
                          <li>
                            <Link to="./course-details">
                              <i
                                className="fa fa-bar-chart"
                                aria-hidden="true"
                              />{" "}
                              Book Now
                            </Link>{" "}
                          </li>
                          <li>
                            <Link to="./course-details">
                              <i className="fa fa-eye" aria-hidden="true" />
                              10 Aavailable
                            </Link>{" "}
                          </li>
                          <li>
                            <Link to="./course-details">
                              <i
                                className="fa fa-share-alt"
                                aria-hidden="true"
                              />{" "}
                              570
                            </Link>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*POPULAR COURSES*/}
                  <div className="home-top-cour">
                    {/*POPULAR COURSES IMAGE*/}
                    <div className="col-md-3">
                      {" "}
                      <img
                        src={require("./images/course/sm-6.jpg")}
                        alt=""
                      />{" "}
                    </div>
                    {/*POPULAR COURSES: CONTENT*/}
                    <div className="col-md-9 home-top-cour-desc">
                      <Link to="./course-details">
                        <h3>Agriculture Courses</h3>
                      </Link>
                      <h4>Technology / Space / Aerospace</h4>
                      <p>
                        Classes started from coming friday(21 jun 2017),total
                        seats 72 and available seats 10
                      </p>{" "}
                      <span className="home-top-cour-rat">4.2</span>
                      <div className="hom-list-share">
                        <ul>
                          <li>
                            <Link to="./course-details">
                              <i
                                className="fa fa-bar-chart"
                                aria-hidden="true"
                              />{" "}
                              Book Now
                            </Link>{" "}
                          </li>
                          <li>
                            <Link to="./course-details">
                              <i className="fa fa-eye" aria-hidden="true" />
                              40 Aavailable
                            </Link>{" "}
                          </li>
                          <li>
                            <Link to="./course-details">
                              <i
                                className="fa fa-share-alt"
                                aria-hidden="true"
                              />{" "}
                              320
                            </Link>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*POPULAR COURSES*/}
                  <div className="home-top-cour">
                    {/*POPULAR COURSES IMAGE*/}
                    <div className="col-md-3">
                      {" "}
                      <img
                        src={require("./images/course/sm-7.jpg")}
                        alt=""
                      />{" "}
                    </div>
                    {/*POPULAR COURSES: CONTENT*/}
                    <div className="col-md-9 home-top-cour-desc">
                      <Link to="./course-details">
                        <h3>Marine Engineering</h3>
                      </Link>
                      <h4>Technology / Ocean / Marine</h4>
                      <p>
                        Classes started from coming friday(21 jun 2017),total
                        seats 72 and available seats 10
                      </p>{" "}
                      <span className="home-top-cour-rat">4.2</span>
                      <div className="hom-list-share">
                        <ul>
                          <li>
                            <Link to="./course-details">
                              <i
                                className="fa fa-bar-chart"
                                aria-hidden="true"
                              />{" "}
                              Book Now
                            </Link>{" "}
                          </li>
                          <li>
                            <Link to="./course-details">
                              <i className="fa fa-eye" aria-hidden="true" />
                              04 Aavailable
                            </Link>{" "}
                          </li>
                          <li>
                            <Link to="./course-details">
                              <i
                                className="fa fa-share-alt"
                                aria-hidden="true"
                              />{" "}
                              1020
                            </Link>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*POPULAR COURSES*/}
                  <div className="home-top-cour">
                    {/*POPULAR COURSES IMAGE*/}
                    <div className="col-md-3">
                      {" "}
                      <img
                        src={require("./images/course/sm-8.jpg")}
                        alt=""
                      />{" "}
                    </div>
                    {/*POPULAR COURSES: CONTENT*/}
                    <div className="col-md-9 home-top-cour-desc">
                      <Link to="./course-details">
                        <h3>Building, Construction Management</h3>
                      </Link>
                      <h4>Technology / Construction / Building</h4>
                      <p>
                        Classes started from coming friday(21 jun 2017),total
                        seats 72 and available seats 10
                      </p>{" "}
                      <span className="home-top-cour-rat">4.2</span>
                      <div className="hom-list-share">
                        <ul>
                          <li>
                            <Link to="./course-details">
                              <i
                                className="fa fa-bar-chart"
                                aria-hidden="true"
                              />{" "}
                              Book Now
                            </Link>{" "}
                          </li>
                          <li>
                            <Link to="./course-details">
                              <i className="fa fa-eye" aria-hidden="true" />
                              32 Aavailable
                            </Link>{" "}
                          </li>
                          <li>
                            <Link to="./course-details">
                              <i
                                className="fa fa-share-alt"
                                aria-hidden="true"
                              />{" "}
                              124
                            </Link>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* UPCOMING EVENTS */}
        <section>
          <div className="container com-sp pad-bot-0">
            <div className="row">
              <div className="col-md-4">
                {/*<div class="ho-ex-title">
                              <h4>Upcoming Event</h4>
                          </div>*/}
                <div className="ho-ev-latest ho-ev-latest-bg-1">
                  <div className="ho-lat-ev">
                    <h4>Upcoming Event</h4>
                    <p>
                      Nulla at velit convallis, venenatis lacus quis, efficitur
                      lectus.
                    </p>
                  </div>
                </div>
                <div className="ho-event ho-event-mob-bot-sp">
                  <ul>
                    <li>
                      <div className="ho-ev-date">
                        <span>07</span>
                        <span>jan,2018</span>
                      </div>
                      <div className="ho-ev-link">
                        <Link to="./events">
                          <h4>Latinoo College Expo 2018</h4>
                        </Link>
                        <p>
                          Nulla at velit convallis, venenatis lacus quis,
                          efficitur lectus.
                        </p>
                        <span>9:15 am – 5:00 pm</span>
                      </div>
                    </li>
                    <li>
                      <div className="ho-ev-date">
                        <span>12</span>
                        <span>jan,2018</span>
                      </div>
                      <div className="ho-ev-link">
                        <Link to="./events">
                          <h4>Training at Team Fabio Clemente</h4>
                        </Link>
                        <p>Nulla at velit convallis venenatis.</p>
                        <span>9:15 am – 5:00 pm</span>
                      </div>
                    </li>
                    <li>
                      <div className="ho-ev-date">
                        <span>26</span>
                        <span>jan,2018</span>
                      </div>
                      <div className="ho-ev-link">
                        <Link to="./events">
                          <h4>Nulla at velit convallis</h4>
                        </Link>
                        <p>
                          Nulla at velit convallis, venenatis lacus quis,
                          efficitur lectus.
                        </p>
                        <span>9:15 am – 5:00 pm</span>
                      </div>
                    </li>
                    <li>
                      <div className="ho-ev-date">
                        <span>18</span>
                        <span>jan,2018</span>
                      </div>
                      <div className="ho-ev-link">
                        <Link to="./events">
                          <h4>Admissions Information Session and Tour</h4>
                        </Link>
                        <p>
                          Nulla at velit convallis, venenatis lacus quis,
                          efficitur lectus.
                        </p>
                        <span>9:15 am – 5:00 pm</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                {/*<div class="ho-ex-title">
                              <h4>Upcoming Event</h4>
                          </div>*/}
                <div className="ho-ev-latest ho-ev-latest-bg-2">
                  <div className="ho-lat-ev">
                    <h4>Job Vacants</h4>
                    <p>
                      Nulla at velit convallis, venenatis lacus quis, efficitur
                      lectus.
                    </p>
                  </div>
                </div>
                <div className="ho-event ho-event-mob-bot-sp">
                  <ul>
                    <li>
                      <div className="ho-ev-img">
                        <img src={require("./images/event/1.jpg")} alt="" />
                      </div>
                      <div className="ho-ev-link">
                        <Link to="./#">
                          <h4>
                            Almost before we knew it, we had left the ground
                          </h4>
                        </Link>
                        <p>Etiam ornare lacus nec lectus vestibulum aliquam.</p>
                        <span>Location: New York</span>
                      </div>
                    </li>
                    <li>
                      <div className="ho-ev-img">
                        <img src={require("./images/event/2.jpg")} alt="" />
                      </div>
                      <div className="ho-ev-link">
                        <Link to="./#">
                          <h4>
                            Then came the night of the first falling star.
                          </h4>
                        </Link>
                        <p>Vestibulum sollicitudin sem arcu</p>
                        <span>Location: Los Angeles</span>
                      </div>
                    </li>
                    <li>
                      <div className="ho-ev-img">
                        <img src={require("./images/event/3.jpg")} alt="" />
                      </div>
                      <div className="ho-ev-link">
                        <Link to="./#">
                          <h4>Educate to Empower NYE Party</h4>
                        </Link>
                        <p>
                          Vestibulum sollicitudin sem arcu, eget ullamcorper
                          purus hendrerit
                        </p>
                        <span>Location: Chennai</span>
                      </div>
                    </li>
                    <li>
                      <div className="ho-ev-img">
                        <img src={require("./images/event/4.jpg")} alt="" />
                      </div>
                      <div className="ho-ev-link">
                        <Link to="./#">
                          <h4>
                            Then came the night of the first falling star.
                          </h4>
                        </Link>
                        <p>Venenatis lacus lectus.</p>
                        <span>Location: Chicago</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                {/*<div class="ho-ex-title">
                              <h4>Upcoming Event</h4>
                          </div>*/}
                <div className="ho-ev-latest ho-ev-latest-bg-3">
                  <div className="ho-lat-ev">
                    <h4>Register &amp; Login</h4>
                    <p>
                      Student area velit convallis venenatis lacus quis,
                      efficitur lectus.
                    </p>
                  </div>
                </div>
                <div className="ho-st-login">
                  <ul className="tabs tabs-hom-reg">
                    <li className="tab col s6">
                      <Link to="./#hom-vijay">Register</Link>
                    </li>
                    <li className="tab col s6">
                      <Link to="./#hom_log">Login</Link>
                    </li>
                  </ul>
                  <div id="hom-vijay" className="col s12">
                    <form className="col s12">
                      <div className="row">
                        <div className="input-field col s12">
                          <input type="text" className="validate" />
                          <label>User name</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input type="text" className="validate" />
                          <label>Email id</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input type="password" className="validate" />
                          <label>Password</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input type="password" className="validate" />
                          <label>Confirm password</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input
                            type="submit"
                            defaultValue="Register"
                            className="waves-effect waves-light light-btn"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  <div id="hom_log" className="col s12">
                    <form className="col s12">
                      <div className="row">
                        <div className="input-field col s12">
                          <input type="text" className="validate" />
                          <label>Student user name</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input type="text" className="validate" />
                          <label>Password</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input
                            type="submit"
                            defaultValue="Login"
                            className="waves-effect waves-light light-btn"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* NEWS AND EVENTS */}
        <section>
          <div className="container com-sp">
            <div className="row">
              <div className="con-title">
                <h2>
                  News and <span>Events</span>
                </h2>
                <p>
                  Fusce id sem at ligula laoreet hendrerit venenatis sed purus.
                  Ut pellentesque maximus lacus, nec pharetra augue.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="bot-gal h-gal ho-event-mob-bot-sp">
                  <h4>Photo Gallery</h4>
                  <ul>
                    <li>
                      <img
                        className="materialboxed"
                        data-caption="Education master image captions"
                        src={require("./images/ami/8.jpg")}
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        className="materialboxed"
                        data-caption="Education master image captions"
                        src={require("./images/ami/9.jpg")}
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        className="materialboxed"
                        data-caption="Education master image captions"
                        src={require("./images/ami/10.jpg")}
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        className="materialboxed"
                        data-caption="Education master image captions"
                        src={require("./images/ami/11.jpg")}
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        className="materialboxed"
                        data-caption="Education master image captions"
                        src={require("./images/ami/1.jpg")}
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        className="materialboxed"
                        data-caption="Education master image captions"
                        src={require("./images/ami/2.jpg")}
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        className="materialboxed"
                        data-caption="Education master image captions"
                        src={require("./images/ami/3.jpg")}
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        className="materialboxed"
                        data-caption="Education master image captions"
                        src={require("./images/ami/4.jpg")}
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        className="materialboxed"
                        data-caption="Education master image captions"
                        src={require("./images/ami/5.jpg")}
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        className="materialboxed"
                        data-caption="Education master image captions"
                        src={require("./images/ami/6.jpg")}
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        className="materialboxed"
                        data-caption="Education master image captions"
                        src={require("./images/ami/7.jpg")}
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        className="materialboxed"
                        data-caption="Education master image captions"
                        src={require("./images/ami/8.jpg")}
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="bot-gal h-vid ho-event-mob-bot-sp">
                  <h4>Video Gallery</h4>
                  <iframe
                    src="https://www.youtube.com/embed/2WqFtiR4-F4?autoplay=0&showinfo=0&controls=0"
                    allowFullScreen
                  />
                  <h5>Maecenas sollicitudin lacinia</h5>
                  <p>
                    Maecenas finibus neque a tellus auctor mattis. Aliquam
                    tempor varius ornare. Maecenas dignissim leo leo, nec
                    posuere purus finibus vitae.
                  </p>
                  <p>
                    Quisque vitae neque at tellus malesuada convallis. Phasellus
                    in lectus vitae ex euismod interdum non a lorem. Nulla
                    bibendum. Curabitur mi odio, tempus quis risus cursus.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="bot-gal h-blog ho-event">
                  <h4>News &amp; Event</h4>
                  <div className="ho-event">
                    <ul>
                      <li>
                        <div className="ho-ev-date">
                          <span>07</span>
                          <span>jan,2018</span>
                        </div>
                        <div className="ho-ev-link">
                          <Link to="./events">
                            <h4>Latinoo College Expo 2018</h4>
                          </Link>
                          <p>
                            Nulla at velit convallis, venenatis lacus quis,
                            efficitur lectus.
                          </p>
                          <span>9:15 am – 5:00 pm</span>
                        </div>
                      </li>
                      <li>
                        <div className="ho-ev-date">
                          <span>12</span>
                          <span>jan,2018</span>
                        </div>
                        <div className="ho-ev-link">
                          <Link to="./events">
                            <h4>Training at Team Fabio Clemente</h4>
                          </Link>
                          <p>Nulla at velit convallis venenatis.</p>
                          <span>9:15 am – 5:00 pm</span>
                        </div>
                      </li>
                      <li>
                        <div className="ho-ev-date">
                          <span>26</span>
                          <span>jan,2018</span>
                        </div>
                        <div className="ho-ev-link">
                          <Link to="./events">
                            <h4>Nulla at velit convallis</h4>
                          </Link>
                          <p>
                            Nulla at velit convallis, venenatis lacus quis,
                            efficitur lectus.
                          </p>
                          <span>9:15 am – 5:00 pm</span>
                        </div>
                      </li>
                      <li>
                        <div className="ho-ev-date">
                          <span>18</span>
                          <span>jan,2018</span>
                        </div>
                        <div className="ho-ev-link">
                          <Link to="./events">
                            <h4>Admissions Information Session and Tour</h4>
                          </Link>
                          <p>
                            Nulla at velit convallis, venenatis lacus quis,
                            efficitur lectus.
                          </p>
                          <span>9:15 am – 5:00 pm</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FOOTER COURSE BOOKING */}
        <section>
          <div className="full-bot-book">
            <div className="container">
              <div className="row">
                <div className="bot-book">
                  <div className="col-md-2 bb-img">
                    <img src={require("./images/3.png")} alt="" />
                  </div>
                  <div className="col-md-7 bb-text">
                    <h4>therefore always free from repetition</h4>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour
                    </p>
                  </div>
                  <div className="col-md-3 bb-link">
                    <Link to="./course-details">Book This Course</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FOOTER */}
        <section className="wed-hom-footer">
          <div className="container">
            {/*<div class="row">
                  <div class="col-md-12">
                  <h4>About Wedding Planner</h4>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum</p>
                  <p>more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
                  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                  <p></p>
                </div>
                </div>*/}
            <div className="row wed-foot-link">
              <div className="col-md-4 foot-tc-mar-t-o">
                <h4>Top Courses</h4>
                <ul>
                  <li>
                    <Link to="./course-details">Accounting/Finance</Link>
                  </li>
                  <li>
                    <Link to="./course-details">civil engineering</Link>
                  </li>
                  <li>
                    <Link to="./course-details">Art/Design</Link>
                  </li>
                  <li>
                    <Link to="./course-details">Marine Engineering</Link>
                  </li>
                  <li>
                    <Link to="./course-details">Business Management</Link>
                  </li>
                  <li>
                    <Link to="./course-details">Journalism/Writing</Link>
                  </li>
                  <li>
                    <Link to="./course-details">Physical Education</Link>
                  </li>
                  <li>
                    <Link to="./course-details">Political Science</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h4>New Courses</h4>
                <ul>
                  <li>
                    <Link to="./course-details">Sciences</Link>
                  </li>
                  <li>
                    <Link to="./course-details">Statistics</Link>
                  </li>
                  <li>
                    <Link to="./course-details">Web Design/Development</Link>
                  </li>
                  <li>
                    <Link to="./course-details">SEO</Link>
                  </li>
                  <li>
                    <Link to="./course-details">Google Business</Link>
                  </li>
                  <li>
                    <Link to="./course-details">Graphics Design</Link>
                  </li>
                  <li>
                    <Link to="./course-details">Networking Courses</Link>
                  </li>
                  <li>
                    <Link to="./course-details">Information technology</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h4>HELP &amp; SUPPORT</h4>
                <ul>
                  <li>
                    <Link to="./#">24x7 Live help</Link>
                  </li>
                  <li>
                    <Link to="./#">Contact us</Link>
                  </li>
                  <li>
                    <Link to="./#">Feedback</Link>
                  </li>
                  <li>
                    <Link to="./#">FAQs</Link>
                  </li>
                  <li>
                    <Link to="./#">Safety Tips</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row wed-foot-link-1">
              <div className="col-md-4 foot-tc-mar-t-o">
                <h4>Get In Touch</h4>
                <p>
                  Address: 28800 Orchard Lake Road, Suite 180 Farmington Hills,
                  U.S.A.
                </p>
                <p>
                  Phone: <Link to="./#!">+101-1231-4321</Link>
                </p>
                <p>
                  Email: <Link to="./#!">info@educationmaster.com</Link>
                </p>
              </div>
              <div className="col-md-4">
                <h4>DOWNLOAD OUR FREE MOBILE APPS</h4>
                <ul>
                  <li>
                    <Link to="./#">
                      <span className="sprite sprite-android" />
                    </Link>
                  </li>
                  <li>
                    <Link to="./#">
                      <span className="sprite sprite-ios" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h4>SOCIAL MEDIA</h4>
                <ul>
                  <li>
                    <Link to="./#">
                      <i className="fa fa-facebook" aria-hidden="true" />
                    </Link>
                  </li>
                  <li>
                    <Link to="./#">
                      <i className="fa fa-twitter" aria-hidden="true" />
                    </Link>
                  </li>
                  <li>
                    <Link to="./#">
                      <i className="fa fa-google-plus" aria-hidden="true" />
                    </Link>
                  </li>
                  <li>
                    <Link to="./#">
                      <i className="fa fa-youtube" aria-hidden="true" />
                    </Link>
                  </li>
                  <li>
                    <Link to="./#">
                      <i className="fa fa-whatsapp" aria-hidden="true" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* COPY RIGHTS */}
        <section className="wed-rights">
          <div className="container">
            <div className="row">
              <div className="copy-right">
                <p>Copyrights © 2018 RN53Themes. All rights reserved.</p>
              </div>
            </div>
          </div>
        </section>
        {/*SECTION LOGIN, REGISTER AND FORGOT PASSWORD*/}
        <section>
          {/* LOGIN SECTION */}
          <div id="modal1" className="modal fade" role="dialog">
            <div className="log-in-pop">
              <div className="log-in-pop-left">
                <h1>Hello...</h1>
                <p>
                  Don't have an account? Create your account. It's take less
                  then a minutes
                </p>
                <h4>Login with social media</h4>
                <ul>
                  <li>
                    <Link to="./#">
                      <i className="fa fa-facebook" /> Facebook
                    </Link>
                  </li>
                  <li>
                    <Link to="./#">
                      <i className="fa fa-google" /> Google+
                    </Link>
                  </li>
                  <li>
                    <Link to="./#">
                      <i className="fa fa-twitter" /> Twitter
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="log-in-pop-right">
                <Link to="./#" className="pop-close" data-dismiss="modal">
                  <img src={require("./images/cancel.png")} alt="" />
                </Link>
                <h4>Login</h4>
                <p>
                  Don't have an account? Create your account. It's take less
                  then a minutes
                </p>
                <form className="s12">
                  <div>
                    <div className="input-field s12">
                      <input
                        type="text"
                        data-ng-model="name"
                        className="validate"
                      />
                      <label>User name</label>
                    </div>
                  </div>
                  <div>
                    <div className="input-field s12">
                      <input type="password" className="validate" />
                      <label>Password</label>
                    </div>
                  </div>
                  <div>
                    <div className="s12 log-ch-bx">
                      <p>
                        <input type="checkbox" id="test5" />
                        <label htmlFor="test5">Remember me</label>
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="input-field s4">
                      <input
                        type="submit"
                        defaultValue="Login"
                        className="waves-effect waves-light log-in-btn"
                      />{" "}
                    </div>
                  </div>
                  <div>
                    <div className="input-field s12">
                      {" "}
                      <Link
                        to="./#"
                        data-dismiss="modal"
                        data-toggle="modal"
                        data-target="#modal3"
                      >
                        Forgot password
                      </Link>{" "}
                      |{" "}
                      <Link
                        to="./#"
                        data-dismiss="modal"
                        data-toggle="modal"
                        data-target="#modal2"
                      >
                        Create a new account
                      </Link>{" "}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* REGISTER SECTION */}
          <div id="modal2" className="modal fade" role="dialog">
            <div className="log-in-pop">
              <div className="log-in-pop-left">
                <h1>Hello...</h1>
                <p>
                  Don't have an account? Create your account. It's take less
                  then a minutes
                </p>
                <h4>Login with social media</h4>
                <ul>
                  <li>
                    <Link to="./#">
                      <i className="fa fa-facebook" /> Facebook
                    </Link>
                  </li>
                  <li>
                    <Link to="./#">
                      <i className="fa fa-google" /> Google+
                    </Link>
                  </li>
                  <li>
                    <Link to="./#">
                      <i className="fa fa-twitter" /> Twitter
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="log-in-pop-right">
                <Link to="./#" className="pop-close" data-dismiss="modal">
                  <img src={require("./images/cancel.png")} alt="" />
                </Link>
                <h4>Create an Account</h4>
                <p>
                  Don't have an account? Create your account. It's take less
                  then a minutes
                </p>
                <form className="s12">
                  <div>
                    <div className="input-field s12">
                      <input
                        type="text"
                        data-ng-model="name1"
                        className="validate"
                      />
                      <label>User name</label>
                    </div>
                  </div>
                  <div>
                    <div className="input-field s12">
                      <input type="email" className="validate" />
                      <label>Email id</label>
                    </div>
                  </div>
                  <div>
                    <div className="input-field s12">
                      <input type="password" className="validate" />
                      <label>Password</label>
                    </div>
                  </div>
                  <div>
                    <div className="input-field s12">
                      <input type="password" className="validate" />
                      <label>Confirm password</label>
                    </div>
                  </div>
                  <div>
                    <div className="input-field s4">
                      <input
                        type="submit"
                        defaultValue="Register"
                        className="waves-effect waves-light log-in-btn"
                      />{" "}
                    </div>
                  </div>
                  <div>
                    <div className="input-field s12">
                      {" "}
                      <Link
                        to="./#"
                        data-dismiss="modal"
                        data-toggle="modal"
                        data-target="#modal1"
                      >
                        Are you a already member ? Login
                      </Link>{" "}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* FORGOT SECTION */}
          <div id="modal3" className="modal fade" role="dialog">
            <div className="log-in-pop">
              <div className="log-in-pop-left">
                <h1>Hello... </h1>
                <p>
                  Don't have an account? Create your account. It's take less
                  then a minutes
                </p>
                <h4>Login with social media</h4>
                <ul>
                  <li>
                    <Link to="./#">
                      <i className="fa fa-facebook" /> Facebook
                    </Link>
                  </li>
                  <li>
                    <Link to="./#">
                      <i className="fa fa-google" /> Google+
                    </Link>
                  </li>
                  <li>
                    <Link to="./#">
                      <i className="fa fa-twitter" /> Twitter
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="log-in-pop-right">
                <Link to="./#" className="pop-close" data-dismiss="modal">
                  <img src={require("./images/cancel.png")} alt="" />
                </Link>
                <h4>Forgot password</h4>
                <p>
                  Don't have an account? Create your account. It's take less
                  then a minutes
                </p>
                <form className="s12">
                  <div>
                    <div className="input-field s12">
                      <input
                        type="text"
                        data-ng-model="name3"
                        className="validate"
                      />
                      <label>User name or email id</label>
                    </div>
                  </div>
                  <div>
                    <div className="input-field s4">
                      <input
                        type="submit"
                        defaultValue="Submit"
                        className="waves-effect waves-light log-in-btn"
                      />{" "}
                    </div>
                  </div>
                  <div>
                    <div className="input-field s12">
                      {" "}
                      <Link
                        to="./#"
                        data-dismiss="modal"
                        data-toggle="modal"
                        data-target="#modal1"
                      >
                        Are you a already member ? Login
                      </Link>{" "}
                      |{" "}
                      <Link
                        to="./#"
                        data-dismiss="modal"
                        data-toggle="modal"
                        data-target="#modal2"
                      >
                        Create a new account
                      </Link>{" "}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* SOCIAL MEDIA SHARE */}
        <section>
          <div className="icon-float">
            <ul>
              <li>
                <Link to="./#" className="sh">
                  1k <br /> Share
                </Link>{" "}
              </li>
              <li>
                <Link to="./#" className="fb1">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </Link>{" "}
              </li>
              <li>
                <Link to="./#" className="gp1">
                  <i className="fa fa-google-plus" aria-hidden="true" />
                </Link>{" "}
              </li>
              <li>
                <Link to="./#" className="tw1">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </Link>{" "}
              </li>
              <li>
                <Link to="./#" className="li1">
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </Link>{" "}
              </li>
              <li>
                <Link to="./#" className="wa1">
                  <i className="fa fa-whatsapp" aria-hidden="true" />
                </Link>{" "}
              </li>
              <li>
                <Link to="./#" className="sh1">
                  <i className="fa fa-envelope-o" aria-hidden="true" />
                </Link>{" "}
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
