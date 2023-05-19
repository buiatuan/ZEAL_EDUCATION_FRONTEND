import React,{Component} from "react";
import { HeaderClient } from "../components/HeaderClient";
import { FooterClient } from "../components/FooterClient";
export class Home extends Component{
    render() {

      return (
        <div>
         <HeaderClient/>
          {/* SLIDER */}
          <section>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
              {/* Wrapper for slides */}
              <div className="carousel-inner">
                <div className="item slider1 active">
                  <img src={require('../assets/images/slider/1.jpg')} alt="" />
                  <div className="carousel-caption slider-con">
                    <h2>Welcome to <span>University</span></h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                    <a href="#" className="bann-btn-1">All Courses</a><a href="#" className="bann-btn-2">Read More</a>
                  </div>
                </div>
                <div className="item">
                  <img src={require('../assets/images/slider/2.jpg')} alt="" />
                  <div className="carousel-caption slider-con">
                    <h2>Admission open <span>2018</span></h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                    <a href="#" className="bann-btn-1">Admission</a><a href="#" className="bann-btn-2">Read More</a>
                  </div>
                </div>
                <div className="item">
                  <img src={require('../assets/images/slider/3.jpg')} alt="" />
                  <div className="carousel-caption slider-con">
                    <h2>Education <span>Master</span></h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                    <a href="#" className="bann-btn-1">All Courses</a><a href="#" className="bann-btn-2">Read More</a>
                  </div>
                </div>
              </div>
              {/* Left and right controls */}
              <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <i className="fa fa-chevron-left slider-arr" />
              </a>
              <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <i className="fa fa-chevron-right slider-arr" />
              </a>
            </div>
          </section>
          {/* QUICK LINKS */}
          <section>
            <div className="container">
              <div className="row">
                <div className="wed-hom-ser">
                  <ul>
                    <li>
                      <a href="awards.html" className="waves-effect waves-light btn-large wed-pop-ser-btn"><img src={require('../assets/images/icon/h-ic1.png')} alt="" /> Academy</a>
                    </li>
                    <li>
                      <a href="admission.html" className="waves-effect waves-light btn-large wed-pop-ser-btn"><img src={require('../assets/images/icon/h-ic2.png')} alt="" /> Admission</a>
                    </li>
                    <li>
                      <a href="all-courses.html" className="waves-effect waves-light btn-large wed-pop-ser-btn"><img src={require('../assets/images/icon/h-ic4.png')} alt="" /> Courses</a>
                    </li>
                    <li>
                      <a href="seminar.html" className="waves-effect waves-light btn-large wed-pop-ser-btn"><img src={require('../assets/images/icon/h-ic3.png')} alt="" /> Seminar</a>
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
                  <h2>Discover <span>More</span></h2>
                  <p>Fusce id sem at ligula laoreet hendrerit venenatis sed purus. Ut pellentesque maximus lacus, nec pharetra augue.</p>
                </div>
              </div>
              <div className="row">
                <div className="ed-course">
                  <div className="col-md-3 col-sm-4 col-xs-12">
                    <div className="ed-course-in">
                      <a className="course-overlay" href="about.html">
                        <img src={require('../assets/images/h-about.jpg')} alt="" />
                        <span>Academics</span>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-4 col-xs-12">
                    <div className="ed-course-in">
                      <a className="course-overlay" href="admission.html">
                        <img src={require('../assets/images/h-adm1.jpg')} alt="" />
                        <span>Admission</span>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-4 col-xs-12">
                    <div className="ed-course-in">
                      <a className="course-overlay" href="dashboard.html">
                        <img src={require('../assets/images/h-cam.jpg')} alt="" />
                        <span>Students profile</span>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-4 col-xs-12">
                    <div className="ed-course-in">
                      <a className="course-overlay" href="research.html">
                        <img src={require('../assets/images/h-res.jpg')} alt="" />
                        <span>Research &amp; Education</span>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-4 col-xs-12">
                    <div className="ed-course-in">
                      <a className="course-overlay" href="all-courses.html">
                        <img src={require('../assets/images/h-about1.jpg')} alt="" />
                        <span>Couse</span>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-4 col-xs-12">
                    <div className="ed-course-in">
                      <a className="course-overlay" href="db-time-line.html">
                        <img src={require('../assets/images/h-adm.jpg')} alt="" />
                        <span>Exam Time Line</span>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-4 col-xs-12">
                    <div className="ed-course-in">
                      <a className="course-overlay" href="seminar.html">
                        <img src={require('../assets/images/h-cam1.jpg')} alt="" />
                        <span>Seminar 2018</span>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-4 col-xs-12">
                    <div className="ed-course-in">
                      <a className="course-overlay" href="events.html">
                        <img src={require('../assets/images/h-res1.jpg')} alt="" />
                        <span>Research &amp; Education</span>
                      </a>
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
                  <h2>Popular <span>Courses</span></h2>
                  <p>Fusce id sem at ligula laoreet hendrerit venenatis sed purus. Ut pellentesque maximus lacus, nec pharetra augue.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div>
                    {/*POPULAR COURSES*/}
                    <div className="home-top-cour">
                      {/*POPULAR COURSES IMAGE*/}
                      <div className="col-md-3"> <img src={require('../assets/images/course/sm-1.jpg')} alt="" /> </div>
                      {/*POPULAR COURSES: CONTENT*/}
                      <div className="col-md-9 home-top-cour-desc">
                        <a href="course-details.html">
                          <h3>Aerospace Engineering</h3>
                        </a>
                        <h4>Technology / Space / Aerospace</h4>
                        <p>Classes started from coming friday(21 jun 2017),total seats 72 and available seats 10</p> <span className="home-top-cour-rat">4.2</span>
                        <div className="hom-list-share">
                          <ul>
                            <li><a href="course-details.html"><i className="fa fa-bar-chart" aria-hidden="true" /> Book Now</a> </li>
                            <li><a href="course-details.html"><i className="fa fa-eye" aria-hidden="true" />10 Aavailable</a> </li>
                            <li><a href="course-details.html"><i className="fa fa-share-alt" aria-hidden="true" /> 570</a> </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/*POPULAR COURSES*/}
                    <div className="home-top-cour">
                      {/*POPULAR COURSES IMAGE*/}
                      <div className="col-md-3"> <img src={require('../assets/images/course/sm-2.jpg')} alt="" /> </div>
                      {/*POPULAR COURSES: CONTENT*/}
                      <div className="col-md-9 home-top-cour-desc">
                        <a href="course-details.html">
                          <h3>Agriculture Courses</h3>
                        </a>
                        <h4>Technology / Space / Aerospace</h4>
                        <p>Classes started from coming friday(21 jun 2017),total seats 72 and available seats 10</p> <span className="home-top-cour-rat">4.2</span>
                        <div className="hom-list-share">
                          <ul>
                            <li><a href="course-details.html"><i className="fa fa-bar-chart" aria-hidden="true" /> Book Now</a> </li>
                            <li><a href="course-details.html"><i className="fa fa-eye" aria-hidden="true" />40 Aavailable</a> </li>
                            <li><a href="course-details.html"><i className="fa fa-share-alt" aria-hidden="true" /> 320</a> </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/*POPULAR COURSES*/}
                    <div className="home-top-cour">
                      {/*POPULAR COURSES IMAGE*/}
                      <div className="col-md-3"> <img src={require('../assets/images/course/sm-3.jpg')} alt="" /> </div>
                      {/*POPULAR COURSES: CONTENT*/}
                      <div className="col-md-9 home-top-cour-desc">
                        <a href="course-details.html">
                          <h3>Marine Engineering</h3>
                        </a>
                        <h4>Technology / Ocean / Marine</h4>
                        <p>Classes started from coming friday(21 jun 2017),total seats 72 and available seats 10</p> <span className="home-top-cour-rat">4.2</span>
                        <div className="hom-list-share">
                          <ul>
                            <li><a href="course-details.html"><i className="fa fa-bar-chart" aria-hidden="true" /> Book Now</a> </li>
                            <li><a href="course-details.html"><i className="fa fa-eye" aria-hidden="true" />04 Aavailable</a> </li>
                            <li><a href="course-details.html"><i className="fa fa-share-alt" aria-hidden="true" /> 1020</a> </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/*POPULAR COURSES*/}
                    <div className="home-top-cour">
                      {/*POPULAR COURSES IMAGE*/}
                      <div className="col-md-3"> <img src={require('../assets/images/course/sm-4.jpg')} alt="" /> </div>
                      {/*POPULAR COURSES: CONTENT*/}
                      <div className="col-md-9 home-top-cour-desc">
                        <a href="course-details.html">
                          <h3>Building, Construction Management</h3>
                        </a>
                        <h4>Technology / Construction / Building</h4>
                        <p>Classes started from coming friday(21 jun 2017),total seats 72 and available seats 10</p> <span className="home-top-cour-rat">4.2</span>
                        <div className="hom-list-share">
                          <ul>
                            <li><a href="course-details.html"><i className="fa fa-bar-chart" aria-hidden="true" /> Book Now</a> </li>
                            <li><a href="course-details.html"><i className="fa fa-eye" aria-hidden="true" />32 Aavailable</a> </li>
                            <li><a href="course-details.html"><i className="fa fa-share-alt" aria-hidden="true" /> 124</a> </li>
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
                      <div className="col-md-3"> <img src={require('../assets/images/course/sm-5.jpg')} alt="" /> </div>
                      {/*POPULAR COURSES: CONTENT*/}
                      <div className="col-md-9 home-top-cour-desc">
                        <a href="course-details.html">
                          <h3>Fashion Technology</h3>
                        </a>
                        <h4>Technology / Trends / Fashion</h4>
                        <p>Classes started from coming friday(21 jun 2017),total seats 72 and available seats 10</p> <span className="home-top-cour-rat">4.2</span>
                        <div className="hom-list-share">
                          <ul>
                            <li><a href="course-details.html"><i className="fa fa-bar-chart" aria-hidden="true" /> Book Now</a> </li>
                            <li><a href="course-details.html"><i className="fa fa-eye" aria-hidden="true" />10 Aavailable</a> </li>
                            <li><a href="course-details.html"><i className="fa fa-share-alt" aria-hidden="true" /> 570</a> </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/*POPULAR COURSES*/}
                    <div className="home-top-cour">
                      {/*POPULAR COURSES IMAGE*/}
                      <div className="col-md-3"> <img src={require('../assets/images/course/sm-6.jpg')} alt="" /> </div>
                      {/*POPULAR COURSES: CONTENT*/}
                      <div className="col-md-9 home-top-cour-desc">
                        <a href="course-details.html">
                          <h3>Agriculture Courses</h3>
                        </a>
                        <h4>Technology / Space / Aerospace</h4>
                        <p>Classes started from coming friday(21 jun 2017),total seats 72 and available seats 10</p> <span className="home-top-cour-rat">4.2</span>
                        <div className="hom-list-share">
                          <ul>
                            <li><a href="course-details.html"><i className="fa fa-bar-chart" aria-hidden="true" /> Book Now</a> </li>
                            <li><a href="course-details.html"><i className="fa fa-eye" aria-hidden="true" />40 Aavailable</a> </li>
                            <li><a href="course-details.html"><i className="fa fa-share-alt" aria-hidden="true" /> 320</a> </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/*POPULAR COURSES*/}
                    <div className="home-top-cour">
                      {/*POPULAR COURSES IMAGE*/}
                      <div className="col-md-3"> <img src={require('../assets/images/course/sm-7.jpg')} alt="" /> </div>
                      {/*POPULAR COURSES: CONTENT*/}
                      <div className="col-md-9 home-top-cour-desc">
                        <a href="course-details.html">
                          <h3>Marine Engineering</h3>
                        </a>
                        <h4>Technology / Ocean / Marine</h4>
                        <p>Classes started from coming friday(21 jun 2017),total seats 72 and available seats 10</p> <span className="home-top-cour-rat">4.2</span>
                        <div className="hom-list-share">
                          <ul>
                            <li><a href="course-details.html"><i className="fa fa-bar-chart" aria-hidden="true" /> Book Now</a> </li>
                            <li><a href="course-details.html"><i className="fa fa-eye" aria-hidden="true" />04 Aavailable</a> </li>
                            <li><a href="course-details.html"><i className="fa fa-share-alt" aria-hidden="true" /> 1020</a> </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/*POPULAR COURSES*/}
                    <div className="home-top-cour">
                      {/*POPULAR COURSES IMAGE*/}
                      <div className="col-md-3"> <img src={require('../assets/images/course/sm-8.jpg')} alt="" /> </div>
                      {/*POPULAR COURSES: CONTENT*/}
                      <div className="col-md-9 home-top-cour-desc">
                        <a href="course-details.html">
                          <h3>Building, Construction Management</h3>
                        </a>
                        <h4>Technology / Construction / Building</h4>
                        <p>Classes started from coming friday(21 jun 2017),total seats 72 and available seats 10</p> <span className="home-top-cour-rat">4.2</span>
                        <div className="hom-list-share">
                          <ul>
                            <li><a href="course-details.html"><i className="fa fa-bar-chart" aria-hidden="true" /> Book Now</a> </li>
                            <li><a href="course-details.html"><i className="fa fa-eye" aria-hidden="true" />32 Aavailable</a> </li>
                            <li><a href="course-details.html"><i className="fa fa-share-alt" aria-hidden="true" /> 124</a> </li>
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
                      <p>Nulla at velit convallis, venenatis lacus quis, efficitur lectus.</p>
                    </div>
                  </div>
                  <div className="ho-event ho-event-mob-bot-sp">
                    <ul>
                      <li>
                        <div className="ho-ev-date"><span>07</span><span>jan,2018</span>
                        </div>
                        <div className="ho-ev-link">
                          <a href="events.html">
                            <h4>Latinoo College Expo 2018</h4>
                          </a>
                          <p>Nulla at velit convallis, venenatis lacus quis, efficitur lectus.</p>
                          <span>9:15 am – 5:00 pm</span>
                        </div>
                      </li>
                      <li>
                        <div className="ho-ev-date"><span>12</span><span>jan,2018</span>
                        </div>
                        <div className="ho-ev-link">
                          <a href="events.html">
                            <h4>Training at Team Fabio Clemente</h4>
                          </a>
                          <p>Nulla at velit convallis venenatis.</p>
                          <span>9:15 am – 5:00 pm</span>
                        </div>
                      </li>
                      <li>
                        <div className="ho-ev-date"><span>26</span><span>jan,2018</span>
                        </div>
                        <div className="ho-ev-link">
                          <a href="events.html">
                            <h4>Nulla at velit convallis</h4>
                          </a>
                          <p>Nulla at velit convallis, venenatis lacus quis, efficitur lectus.</p>
                          <span>9:15 am – 5:00 pm</span>
                        </div>
                      </li>
                      <li>
                        <div className="ho-ev-date"><span>18</span><span>jan,2018</span>
                        </div>
                        <div className="ho-ev-link">
                          <a href="events.html">
                            <h4>Admissions Information Session and Tour</h4>
                          </a>
                          <p>Nulla at velit convallis, venenatis lacus quis, efficitur lectus.</p>
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
                      <p>Nulla at velit convallis, venenatis lacus quis, efficitur lectus.</p>
                    </div>
                  </div>
                  <div className="ho-event ho-event-mob-bot-sp">
                    <ul>
                      <li>
                        <div className="ho-ev-img"><img src={require('../assets/images/event/1.jpg')} alt="" />
                        </div>
                        <div className="ho-ev-link">
                          <a href="#">
                            <h4>Almost before we knew it, we had left the ground</h4>
                          </a>
                          <p>Etiam ornare lacus nec lectus vestibulum aliquam.</p>
                          <span>Location: New York</span>
                        </div>
                      </li>
                      <li>
                        <div className="ho-ev-img"><img src={require('../assets/images/event/2.jpg')} alt="" />
                        </div>
                        <div className="ho-ev-link">
                          <a href="#">
                            <h4>Then came the night of the first falling star.</h4>
                          </a>
                          <p>Vestibulum sollicitudin sem arcu</p>
                          <span>Location: Los Angeles</span>
                        </div>
                      </li>
                      <li>
                        <div className="ho-ev-img"><img src={require('../assets/images/event/3.jpg')} alt="" />
                        </div>
                        <div className="ho-ev-link">
                          <a href="#">
                            <h4>Educate to Empower NYE Party</h4>
                          </a>
                          <p>Vestibulum sollicitudin sem arcu, eget ullamcorper purus hendrerit</p>
                          <span>Location: Chennai</span>
                        </div>
                      </li>
                      <li>
                        <div className="ho-ev-img"><img src={require('../assets/images/event/4.jpg')} alt="" /></div>
                        <div className="ho-ev-link">
                          <a href="#">
                            <h4>Then came the night of the first falling star.</h4>
                          </a>
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
                      <p>Student area velit convallis venenatis lacus quis, efficitur lectus.</p>
                    </div>
                  </div>
                  <div className="ho-st-login">
                    <ul className="tabs tabs-hom-reg">
                      <li className="tab col s6"><a href="#hom-vijay">Register</a>
                      </li>
                      <li className="tab col s6"><a href="#hom_log">Login</a>
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
                            <input type="submit" defaultValue="Register" className="waves-effect waves-light light-btn" />
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
                            <input type="submit" defaultValue="Login" className="waves-effect waves-light light-btn" />
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
                  <h2>News and <span>Events</span></h2>
                  <p>Fusce id sem at ligula laoreet hendrerit venenatis sed purus. Ut pellentesque maximus lacus, nec pharetra augue.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="bot-gal h-gal ho-event-mob-bot-sp">
                    <h4>Photo Gallery</h4>
                    <ul>
                      <li><img className="materialboxed" data-caption="Education master image captions" src={require('../assets/images/ami/8.jpg')} alt="" />
                      </li>
                      <li><img className="materialboxed" data-caption="Education master image captions" src={require('../assets/images/ami/9.jpg')} alt="" />
                      </li>
                      <li><img className="materialboxed" data-caption="Education master image captions" src={require('../assets/images/ami/10.jpg')} alt="" />
                      </li>
                      <li><img className="materialboxed" data-caption="Education master image captions" src={require('../assets/images/ami/11.jpg')} alt="" />
                      </li>
                      <li><img className="materialboxed" data-caption="Education master image captions" src={require('../assets/images/ami/1.jpg')} alt="" />
                      </li>
                      <li><img className="materialboxed" data-caption="Education master image captions" src={require('../assets/images/ami/2.jpg')} alt="" />
                      </li>
                      <li><img className="materialboxed" data-caption="Education master image captions" src={require('../assets/images/ami/3.jpg')} alt="" />
                      </li>
                      <li><img className="materialboxed" data-caption="Education master image captions" src={require('../assets/images/ami/4.jpg')} alt="" />
                      </li>
                      <li><img className="materialboxed" data-caption="Education master image captions" src={require('../assets/images/ami/5.jpg')} alt="" />
                      </li>
                      <li><img className="materialboxed" data-caption="Education master image captions" src={require('../assets/images/ami/6.jpg')} alt="" />
                      </li>
                      <li><img className="materialboxed" data-caption="Education master image captions" src={require('../assets/images/ami/7.jpg')} alt="" />
                      </li>
                      <li><img className="materialboxed" data-caption="Education master image captions" src={require('../assets/images/ami/8.jpg')} alt="" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bot-gal h-vid ho-event-mob-bot-sp">
                    <h4>Video Gallery</h4>
                    <iframe src="https://www.youtube.com/embed/2WqFtiR4-F4?autoplay=0&showinfo=0&controls=0" allowFullScreen />
                    <h5>Maecenas sollicitudin lacinia</h5>
                    <p>Maecenas finibus neque a tellus auctor mattis. Aliquam tempor varius ornare. Maecenas dignissim leo leo, nec posuere purus finibus vitae.</p>
                    <p>Quisque vitae neque at tellus malesuada convallis. Phasellus in lectus vitae ex euismod interdum non a lorem. Nulla bibendum. Curabitur mi odio, tempus quis risus cursus.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bot-gal h-blog ho-event">
                    <h4>News &amp; Event</h4>
                    <div className="ho-event">
                      <ul>
                        <li>
                          <div className="ho-ev-date"><span>07</span><span>jan,2018</span>
                          </div>
                          <div className="ho-ev-link">
                            <a href="events.html">
                              <h4>Latinoo College Expo 2018</h4>
                            </a>
                            <p>Nulla at velit convallis, venenatis lacus quis, efficitur lectus.</p>
                            <span>9:15 am – 5:00 pm</span>
                          </div>
                        </li>
                        <li>
                          <div className="ho-ev-date"><span>12</span><span>jan,2018</span>
                          </div>
                          <div className="ho-ev-link">
                            <a href="events.html">
                              <h4>Training at Team Fabio Clemente</h4>
                            </a>
                            <p>Nulla at velit convallis venenatis.</p>
                            <span>9:15 am – 5:00 pm</span>
                          </div>
                        </li>
                        <li>
                          <div className="ho-ev-date"><span>26</span><span>jan,2018</span>
                          </div>
                          <div className="ho-ev-link">
                            <a href="events.html">
                              <h4>Nulla at velit convallis</h4>
                            </a>
                            <p>Nulla at velit convallis, venenatis lacus quis, efficitur lectus.</p>
                            <span>9:15 am – 5:00 pm</span>
                          </div>
                        </li>
                        <li>
                          <div className="ho-ev-date"><span>18</span><span>jan,2018</span>
                          </div>
                          <div className="ho-ev-link">
                            <a href="events.html">
                              <h4>Admissions Information Session and Tour</h4>
                            </a>
                            <p>Nulla at velit convallis, venenatis lacus quis, efficitur lectus.</p>
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
         <FooterClient/>
        </div>
      );
    }
  };