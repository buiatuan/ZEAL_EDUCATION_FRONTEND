import React,{Component} from "react";
import { Link } from 'react-router-dom';
export class Db_profile extends Component{
    render() {

      return (
        <div>
          {/* MOBILE MENU */}
          <section>
            <div className="ed-mob-menu">
              <div className="ed-mob-menu-con">
                <div className="ed-mm-left">
                  <div className="wed-logo">
                    <Link to="../.html"><img src={require('../asserts/images/logo.png')} alt="" />
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
                        <li><Link to="../course-details.html">Accounting/Finance</Link></li>
                        <li><Link to="../course-details.html">civil engineering</Link></li>
                        <li><Link to="../course-details.html">Art/Design</Link></li>
                        <li><Link to="../course-details.html">Marine Engineering</Link></li>
                        <li><Link to="../course-details.html">Business Management</Link></li>
                        <li><Link to="../course-details.html">Journalism/Writing</Link></li>
                        <li><Link to="../course-details.html">Physical Education</Link></li>
                        <li><Link to="../course-details.html">Political Science</Link></li>
                        <li><Link to="../course-details.html">Sciences</Link></li>
                        <li><Link to="../course-details.html">Statistics</Link></li>
                        <li><Link to="../course-details.html">Web Design/Development</Link></li>
                        <li><Link to="../course-details.html">SEO</Link></li>
                        <li><Link to="../course-details.html">Google Business</Link></li>
                        <li><Link to="../course-details.html">Graphics Design</Link></li>
                        <li><Link to="../course-details.html">Networking Courses</Link></li>
                        <li><Link to="../course-details.html">Information technology</Link></li>
                      </ul>
                      <h4>User Account</h4>
                      <ul>
                        <li><Link to="../#!" data-toggle="modal" data-target="#modal1">Sign In</Link></li>
                        <li><Link to="../#!" data-toggle="modal" data-target="#modal2">Register</Link></li>
                      </ul>
                      <h4>All Pages</h4>
                      <ul>
                        <li><Link to="../.html">Home</Link></li>
                        <li><Link to="../about.html">About us</Link></li>
                        <li><Link to="../admission.html">Admission</Link></li>
                        <li><Link to="../all-courses.html">All courses</Link></li>
                        <li><Link to="../course-details.html">Course details</Link></li>
                        <li><Link to="../awards.html">Awards</Link></li>
                        <li><Link to="../seminar.html">Seminar</Link></li>
                        <li><Link to="../events.html">Events</Link></li>
                        <li><Link to="../event-details.html">Event details</Link></li>
                        <li><Link to="../event-register.html">Event register</Link></li>
                        <li><Link to="../contact-us.html">Contact us</Link></li>
                      </ul>
                      <h4>User Profile</h4>
                      <ul>
                        <li><Link to="../dashboard.html">User profile</Link></li>
                        <li><Link to="../db-courses.html">Courses</Link></li>
                        <li><Link to="../db-exams.html">Exams</Link></li>
                        <li><Link to="../db-profile.html">Prfile</Link></li>
                        <li><Link to="../db-time-line.html">Time line</Link></li>
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
                        <li><Link to="../#">Contact: Lake Road, Suite 180 Farmington Hills, U.S.A.</Link>
                        </li>
                        <li><Link to="../#">Phone: +101-1231-1231</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="ed-com-t1-right">
                      <ul>
                        <li><Link to="../#!" data-toggle="modal" data-target="#modal1">Sign In</Link>
                        </li>
                        <li><Link to="../#!" data-toggle="modal" data-target="#modal2">Sign Up</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="ed-com-t1-social">
                      <ul>
                        <li><Link to="../#"><i className="fa fa-facebook" aria-hidden="true" /></Link>
                        </li>
                        <li><Link to="../#"><i className="fa fa-google-plus" aria-hidden="true" /></Link>
                        </li>
                        <li><Link to="../#"><i className="fa fa-twitter" aria-hidden="true" /></Link>
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
                      <Link to="../.html"><img src={require('../asserts/images/logo.png')} alt="" />
                      </Link>
                    </div>
                    <div className="main-menu">
                      <ul>
                        <li><Link to="../.html">Home</Link>
                        </li>
                        <li className="about-menu">
                          <Link to="../about.html" className="mm-arr">About us</Link>
                          {/* MEGA MENU 1 */}
                          <div className="mm-pos">
                            <div className="about-mm m-menu">
                              <div className="m-menu-inn">
                                <div className="mm1-com mm1-s1">
                                  <div className="ed-course-in">
                                    <Link className="course-overlay menu-about" href="admission.html">
                                      <img src={require('../asserts/images/h-about.jpg')} alt="" />
                                      <span>Academics</span>
                                    </Link>
                                  </div>
                                </div>
                                <div className="mm1-com mm1-s2">
                                  <p>Want to change the world? At Berkeley we’re doing just that. When you join the Golden Bear community, you’re part of an institution that shifts the global conversation every single day.</p>
                                  <Link to="../about.html" className="mm-r-m-btn">Read more</Link>
                                </div>
                                <div className="mm1-com mm1-s3">
                                  <ul>
                                    <li><Link to="../all-courses.html">All Courses</Link></li>
                                    <li><Link to="../course-details.html">Course details</Link></li>
                                    <li><Link to="../about.html">About</Link></li>
                                    <li><Link to="../admission.html">Admission</Link></li>
                                    <li><Link to="../awards.html">Awards</Link></li>
                                  </ul>
                                </div>
                                <div className="mm1-com mm1-s4">
                                  <ul>
                                    <li><Link to="../dashboard.html">Student profile</Link></li>
                                    <li><Link to="../db-courses.html">Dashboard courses</Link></li>
                                    <li><Link to="../db-exams.html">Dashboard exams</Link></li>
                                    <li><Link to="../db-profile.html">Dashboard profile</Link></li>
                                    <li><Link to="../db-time-line.html">Dashboard timeline</Link></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="admi-menu">
                          <Link to="../#" className="mm-arr">Admission</Link>
                          {/* MEGA MENU 1 */}
                          <div className="mm-pos">
                            <div className="admi-mm m-menu">
                              <div className="m-menu-inn">
                                <div className="mm2-com mm1-com mm1-s1">
                                  <div className="ed-course-in">
                                    <Link className="course-overlay" href="about.html">
                                      <img src={require('../asserts/images/h-about1.jpg')} alt="" />
                                      <span>Academics</span>
                                    </Link>
                                  </div>
                                  <p>Donec lacus libero, rutrum ac sollicitudin sed, mattis non eros. Vestibulum congue nec eros quis lacinia. Mauris non tincidunt lectus. Nulla mollis, orci vitae accumsan rhoncus.</p>
                                  <Link to="../about.html" className="mm-r-m-btn">Read more</Link>
                                </div>
                                <div className="mm2-com mm1-com mm1-s1">
                                  <div className="ed-course-in">
                                    <Link className="course-overlay" href="admission.html">
                                      <img src={require('../asserts/images/h-adm1.jpg')} alt="" />
                                      <span>Admission</span>
                                    </Link>
                                  </div>
                                  <p>Donec lacus libero, rutrum ac sollicitudin sed, mattis non eros. Vestibulum congue nec eros quis lacinia. Mauris non tincidunt lectus. Nulla mollis, orci vitae accumsan rhoncus.</p>
                                  <Link to="../admission.html" className="mm-r-m-btn">Read more</Link>
                                </div>
                                <div className="mm2-com mm1-com mm1-s1">
                                  <div className="ed-course-in">
                                    <Link className="course-overlay" href="awards.html">
                                      <img src={require('../asserts/images/h-cam1.jpg')} alt="" />
                                      <span>History &amp; awards</span>
                                    </Link>
                                  </div>
                                  <p>Donec lacus libero, rutrum ac sollicitudin sed, mattis non eros. Vestibulum congue nec eros quis lacinia. Mauris non tincidunt lectus. Nulla mollis, orci vitae accumsan rhoncus.</p>
                                  <Link to="../awards.html" className="mm-r-m-btn">Read more</Link>
                                </div>
                                <div className="mm2-com mm1-com mm1-s4">
                                  <div className="ed-course-in">
                                    <Link className="course-overlay" href="seminar.html">
                                      <img src={require('../asserts/images/h-res1.jpg')} alt="" />
                                      <span>Seminar 2018</span>
                                    </Link>
                                  </div>
                                  <p>Donec lacus libero, rutrum ac sollicitudin sed, mattis non eros. Vestibulum congue nec eros quis lacinia. Mauris non tincidunt lectus. Nulla mollis, orci vitae accumsan rhoncus.</p>
                                  <Link to="../seminar.html" className="mm-r-m-btn">Read more</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li><Link to="../all-courses.html">All Courses</Link></li>
                        {/*<li><Link class='dropdown-button ed-sub-menu' href='#' data-activates='dropdown1'>Courses</Link></li>*/}
                        <li className="cour-menu">
                          <Link to="../#!" className="mm-arr">All Pages</Link>
                          {/* MEGA MENU 1 */}
                          <div className="mm-pos">
                            <div className="cour-mm m-menu">
                              <div className="m-menu-inn">
                                <div className="mm1-com mm1-cour-com mm1-s3">
                                  <h4>Frontend pages:1</h4>
                                  <ul>
                                    <li><Link to="../.html">Home</Link></li>
                                    <li><Link to="../-1.html">Home - 1</Link></li>
                                    <li><Link to="../all-courses.html">All Courses</Link></li>
                                    <li><Link to="../course-details.html">Course Details</Link></li>
                                    <li><Link to="../about.html">About us</Link></li>
                                    <li><Link to="../admission.html">admission</Link></li>
                                    <li><Link to="../awards.html">awards</Link></li>
                                    <li><Link to="../blog.html">blog</Link></li>
                                    <li><Link to="../blog-details.html">blog details</Link></li>
                                    <li><Link to="../contact-us.html">contact us</Link></li>
                                    <li><Link to="../departments.html">Departments</Link></li>
                                    <li><Link to="../events.html">events</Link></li>
                                    <li><Link to="../event-details.html">event details</Link></li>
                                    <li><Link to="../event-register.html">event register</Link></li>
                                  </ul>
                                </div>
                                <div className="mm1-com mm1-cour-com mm1-s3">
                                  <h4>Frontend pages:2</h4>
                                  <ul>
                                    <li><Link to="../facilities.html">facilities</Link></li>
                                    <li><Link to="../facilities-detail.html">facilities detail</Link></li>
                                    <li><Link to="../research.html">research</Link></li>
                                    <li><Link to="../seminar.html">seminar</Link></li>
                                    <li><Link to="../gallery-photo.html">gallery photo</Link></li>
                                  </ul>
                                  <h4 className="ed-dr-men-mar-top">User Dashboard</h4>
                                  <ul>
                                    <li><Link to="../dashboard.html">Student profile</Link></li>
                                    <li><Link to="../db-courses.html">Dashboard courses</Link></li>
                                    <li><Link to="../db-exams.html">Dashboard exams</Link></li>
                                    <li><Link to="../db-profile.html">Dashboard profile</Link></li>
                                    <li><Link to="../db-time-line.html">Dashboard timeline</Link></li>
                                  </ul>
                                </div>
                                <div className="mm1-com mm1-cour-com mm1-s3">
                                  <h4>Admin panel:1</h4>
                                  <ul>
                                    <li><Link to="../admin.html">admin</Link></li>
                                    <li><Link to="../admin-add-courses.html">Add new course</Link></li>
                                    <li><Link to="../admin-all-courses.html">All courses</Link></li>
                                    <li><Link to="../admin-student-details.html">Student details</Link></li>
                                    <li><Link to="../admin-user-add.html">Add new user</Link></li>
                                    <li><Link to="../admin-user-all.html">All users</Link></li>
                                    <li><Link to="../admin-panel-setting.html">Admin setting</Link></li>
                                    <li><Link to="../admin-event-add.html">event add</Link></li>
                                    <li><Link to="../admin-event-all.html">event all</Link></li>
                                    <li><Link to="../admin-setting.html">Admin Setting</Link></li>
                                    <li><Link to="../admin-slider.html">Slider setting</Link></li>
                                    <li><Link to="../admin-slider-edit.html">Slider edit</Link></li>
                                    <li><Link to="../admin-course-details.html">course details</Link></li>
                                    <li><Link to="../admin-login.html">admin login</Link></li>
                                  </ul>
                                </div>
                                <div className="mm1-com mm1-cour-com mm1-s3">
                                  <h4>Admin panel:2</h4>
                                  <ul>
                                    <li><Link to="../admin-event-edit.html">event edit</Link></li>
                                    <li><Link to="../admin-exam-add.html">exam add</Link></li>
                                    <li><Link to="../admin-exam-all.html">exam all</Link></li>
                                    <li><Link to="../admin-exam-edit.html">exam edit</Link></li>
                                    <li><Link to="../admin-export-data.html">export data</Link></li>
                                    <li><Link to="../admin-import-data.html">import data</Link></li>
                                    <li><Link to="../admin-job-add.html">Add new jobs</Link></li>
                                    <li><Link to="../admin-job-all.html">All jobs</Link></li>
                                    <li><Link to="../admin-job-edit.html">Edit job</Link></li>
                                    <li><Link to="../admin-main-menu.html">main menu</Link></li>
                                    <li><Link to="../admin-page-add.html">Add new page</Link></li>
                                    <li><Link to="../admin-page-all.html">All pages</Link></li>
                                    <li><Link to="../admin-page-edit.html">Edit page</Link></li>
                                    <li><Link to="../admin-forgot.html">forgot password</Link></li>
                                  </ul>
                                </div>
                                <div className="mm1-com mm1-cour-com mm1-s4">
                                  <h4>Admin panel:3</h4>
                                  <ul>
                                    <li><Link to="../admin-quick-link.html">quick link</Link></li>
                                    <li><Link to="../admin-seminar-add.html">Add new seminar</Link></li>
                                    <li><Link to="../admin-seminar-all.html">All seminar</Link></li>
                                    <li><Link to="../admin-seminar-edit.html">Edit seminar</Link></li>
                                    <li><Link to="../admin-seminar-enquiry.html">Semester enquiry</Link></li>
                                    <li><Link to="../admin-all-enquiry.html">All enquiry</Link></li>
                                    <li><Link to="../admin-view-enquiry.html">All enquiry view</Link></li>
                                    <li><Link to="../admin-event-enquiry.html">event enquiry</Link></li>
                                    <li><Link to="../admin-admission-enquiry.html">Admission enquiry</Link></li>
                                    <li><Link to="../admin-common-enquiry.html">common enquiry</Link></li>
                                    <li><Link to="../admin-course-enquiry.html">course enquiry</Link></li>
                                    <li><Link to="../admin-all-menu.html">menu all</Link></li>
                                    <li><Link to="../admin-about-menu.html">Menu - About</Link></li>
                                    <li><Link to="../admin-admission-menu.html">Menu - admission</Link></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li><Link to="../events.html">Events</Link>
                        </li>
                        <li><Link to="../dashboard.html">Student</Link>
                        </li>
                        <li><Link to="../contact-us.html">Contact us</Link>
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
                              <li><Link to="../course-details.html">Accounting/Finance</Link></li>
                              <li><Link to="../course-details.html">civil engineering</Link></li>
                              <li><Link to="../course-details.html">Art/Design</Link></li>
                              <li><Link to="../course-details.html">Marine Engineering</Link></li>
                              <li><Link to="../course-details.html">Business Management</Link></li>
                              <li><Link to="../course-details.html">Journalism/Writing</Link></li>
                              <li><Link to="../course-details.html">Physical Education</Link></li>
                              <li><Link to="../course-details.html">Political Science</Link></li>
                              <li><Link to="../course-details.html">Sciences</Link></li>
                              <li><Link to="../course-details.html">Statistics</Link></li>
                              <li><Link to="../course-details.html">Web Design/Development</Link></li>
                              <li><Link to="../course-details.html">SEO</Link></li>
                              <li><Link to="../course-details.html">Google Business</Link></li>
                              <li><Link to="../course-details.html">Graphics Design</Link></li>
                              <li><Link to="../course-details.html">Networking Courses</Link></li>
                              <li><Link to="../course-details.html">Information technology</Link></li>
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
          {/*SECTION START*/}
          <section>
            <div className="pro-cover">
            </div>
            <div className="pro-menu">
              <div className="container">
                <div className="col-md-9 col-md-offset-3">
                  <ul>
                    <li><Link to="../dashboard.html">My Dashboard</Link></li>
                    <li><Link to="../db-profile.html" className="pro-act">Profile</Link></li>
                    <li><Link to="../db-courses.html">Courses</Link></li>
                    <li><Link to="../db-exams.html">Exams</Link></li>
                    <li><Link to="../db-time-line.html">Time Line</Link></li>
                    <li><Link to="../#">Entry</Link></li>
                    <li><Link to="../#">Notifications</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="stu-db">
              <div className="container pg-inn">
                <div className="col-md-3">
                  <div className="pro-user">
                    <img src={require('../asserts/images/user.jpg')} alt="user" />
                  </div>
                  <div className="pro-user-bio">
                    <ul>
                      <li>
                        <h4>Emily Jessica</h4>
                      </li>
                      <li>Student Id: ST17241</li>
                      <li><Link to="../#!"><i className="fa fa-facebook" /> Facebook: my sample</Link></li>
                      <li><Link to="../#!"><i className="fa fa-google-plus" /> Google: my sample</Link></li>
                      <li><Link to="../#!"><i className="fa fa-twitter" /> Twitter: my sample</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="udb">
                    <div className="udb-sec udb-prof">
                      <h4><img src={require('../asserts/images/icon/db1.png')} alt="" /> My Profile</h4>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
                        to using 'Content here, content here', making it look like readable English.</p>
                      <div className="sdb-tabl-com sdb-pro-table">
                        <table className="responsive-table bordered">
                          <tbody>
                            <tr>
                              <td>Student Name</td>
                              <td>:</td>
                              <td>Sam Anderson</td>
                            </tr>
                            <tr>
                              <td>Student Id</td>
                              <td>:</td>
                              <td>ST17241</td>
                            </tr>
                            <tr>
                              <td>Eamil</td>
                              <td>:</td>
                              <td>sam_anderson@gmail.com</td>
                            </tr>
                            <tr>
                              <td>Phone</td>
                              <td>:</td>
                              <td>+01 4561 3214</td>
                            </tr>
                            <tr>
                              <td>Date of birth</td>
                              <td>:</td>
                              <td>03 Jun 1990</td>
                            </tr>
                            <tr>
                              <td>Address</td>
                              <td>:</td>
                              <td>8800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.</td>
                            </tr>
                            <tr>
                              <td>Status</td>
                              <td>:</td>
                              <td><span className="db-done">Active</span> </td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="sdb-bot-edit">
                          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                          <Link to="../#" className="waves-effect waves-light btn-large sdb-btn sdb-btn-edit"><i className="fa fa-pencil" /> Edit my profile</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*SECTION END*/}
          {/*SECTION START*/}
          <section>
            <div className="full-bot-book">
              <div className="container">
                <div className="row">
                  <div className="bot-book">
                    <div className="col-md-2 bb-img">
                      <img src={require('../asserts/images/3.png')} alt="" />
                    </div>
                    <div className="col-md-7 bb-text">
                      <h4>therefore always free from repetition</h4>
                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                    </div>
                    <div className="col-md-3 bb-link">
                      <Link to="../course-details.html">Book This Course</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*SECTION END*/}
          {/*HEADER SECTION*/}
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
                    <li><Link to="../course-details.html">Accounting/Finance</Link></li>
                    <li><Link to="../course-details.html">civil engineering</Link></li>
                    <li><Link to="../course-details.html">Art/Design</Link></li>
                    <li><Link to="../course-details.html">Marine Engineering</Link></li>
                    <li><Link to="../course-details.html">Business Management</Link></li>
                    <li><Link to="../course-details.html">Journalism/Writing</Link></li>
                    <li><Link to="../course-details.html">Physical Education</Link></li>
                    <li><Link to="../course-details.html">Political Science</Link></li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h4>New Courses</h4>
                  <ul>
                    <li><Link to="../course-details.html">Sciences</Link></li>
                    <li><Link to="../course-details.html">Statistics</Link></li>
                    <li><Link to="../course-details.html">Web Design/Development</Link></li>
                    <li><Link to="../course-details.html">SEO</Link></li>
                    <li><Link to="../course-details.html">Google Business</Link></li>
                    <li><Link to="../course-details.html">Graphics Design</Link></li>
                    <li><Link to="../course-details.html">Networking Courses</Link></li>
                    <li><Link to="../course-details.html">Information technology</Link></li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h4>HELP &amp; SUPPORT</h4>
                  <ul>
                    <li><Link to="../#">24x7 Live help</Link>
                    </li>
                    <li><Link to="../#">Contact us</Link>
                    </li>
                    <li><Link to="../#">Feedback</Link>
                    </li>
                    <li><Link to="../#">FAQs</Link>
                    </li>
                    <li><Link to="../#">Safety Tips</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row wed-foot-link-1">
                <div className="col-md-4 foot-tc-mar-t-o">
                  <h4>Get In Touch</h4>
                  <p>Address: 28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.</p>
                  <p>Phone: <Link to="../#!">+101-1231-4321</Link></p>
                  <p>Email: <Link to="../#!">info@educationmaster.com</Link></p>
                </div>
                <div className="col-md-4">
                  <h4>DOWNLOAD OUR FREE MOBILE APPS</h4>
                  <ul>
                    <li><Link to="../#"><span className="sprite sprite-android" /></Link>
                    </li>
                    <li><Link to="../#"><span className="sprite sprite-ios" /></Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h4>SOCIAL MEDIA</h4>
                  <ul>
                    <li><Link to="../#"><i className="fa fa-facebook" aria-hidden="true" /></Link>
                    </li>
                    <li><Link to="../#"><i className="fa fa-twitter" aria-hidden="true" /></Link>
                    </li>
                    <li><Link to="../#"><i className="fa fa-google-plus" aria-hidden="true" /></Link>
                    </li>
                    <li><Link to="../#"><i className="fa fa-youtube" aria-hidden="true" /></Link>
                    </li>
                    <li><Link to="../#"><i className="fa fa-whatsapp" aria-hidden="true" /></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/*END HEADER SECTION*/}
          {/*HEADER SECTION*/}
          <section className="wed-rights">
            <div className="container">
              <div className="row">
                <div className="copy-right">
                  <p>Copyrights © 2018 RN53Themes. All rights reserved.</p>
                </div>
              </div>
            </div>
          </section>
          {/*END HEADER SECTION*/}
          {/*SECTION LOGIN, REGISTER AND FORGOT PASSWORD*/}
          <section>
            {/* LOGIN SECTION */}
            <div id="modal1" className="modal fade" role="dialog">
              <div className="log-in-pop">
                <div className="log-in-pop-left">
                  <h1>Hello...</h1>
                  <p>Don't have an account? Create your account. It's take less then a minutes</p>
                  <h4>Login with social media</h4>
                  <ul>
                    <li><Link to="../#"><i className="fa fa-facebook" /> Facebook</Link>
                    </li>
                    <li><Link to="../#"><i className="fa fa-google" /> Google+</Link>
                    </li>
                    <li><Link to="../#"><i className="fa fa-twitter" /> Twitter</Link>
                    </li>
                  </ul>
                </div>
                <div className="log-in-pop-right">
                  <Link to="../#" className="pop-close" data-dismiss="modal"><img src={require('../asserts/images/cancel.png')} alt="" />
                  </Link>
                  <h4>Login</h4>
                  <p>Don't have an account? Create your account. It's take less then a minutes</p>
                  <form className="s12">
                    <div>
                      <div className="input-field s12">
                        <input type="text" data-ng-model="name" className="validate" />
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
                        <input type="submit" defaultValue="Login" className="waves-effect waves-light log-in-btn" /> </div>
                    </div>
                    <div>
                      <div className="input-field s12"> <Link to="../#" data-dismiss="modal" data-toggle="modal" data-target="#modal3">Forgot password</Link> | <Link to="../#" data-dismiss="modal" data-toggle="modal" data-target="#modal2">Create a new account</Link> </div>
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
                  <p>Don't have an account? Create your account. It's take less then a minutes</p>
                  <h4>Login with social media</h4>
                  <ul>
                    <li><Link to="../#"><i className="fa fa-facebook" /> Facebook</Link>
                    </li>
                    <li><Link to="../#"><i className="fa fa-google" /> Google+</Link>
                    </li>
                    <li><Link to="../#"><i className="fa fa-twitter" /> Twitter</Link>
                    </li>
                  </ul>
                </div>
                <div className="log-in-pop-right">
                  <Link to="../#" className="pop-close" data-dismiss="modal"><img src={require('../asserts/images/cancel.png')} alt="" />
                  </Link>
                  <h4>Create an Account</h4>
                  <p>Don't have an account? Create your account. It's take less then a minutes</p>
                  <form className="s12">
                    <div>
                      <div className="input-field s12">
                        <input type="text" data-ng-model="name1" className="validate" />
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
                        <input type="submit" defaultValue="Register" className="waves-effect waves-light log-in-btn" /> </div>
                    </div>
                    <div>
                      <div className="input-field s12"> <Link to="../#" data-dismiss="modal" data-toggle="modal" data-target="#modal1">Are you a already member ? Login</Link> </div>
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
                  <p>Don't have an account? Create your account. It's take less then a minutes</p>
                  <h4>Login with social media</h4>
                  <ul>
                    <li><Link to="../#"><i className="fa fa-facebook" /> Facebook</Link>
                    </li>
                    <li><Link to="../#"><i className="fa fa-google" /> Google+</Link>
                    </li>
                    <li><Link to="../#"><i className="fa fa-twitter" /> Twitter</Link>
                    </li>
                  </ul>
                </div>
                <div className="log-in-pop-right">
                  <Link to="../#" className="pop-close" data-dismiss="modal"><img src={require('../asserts/images/cancel.png')} alt="" />
                  </Link>
                  <h4>Forgot password</h4>
                  <p>Don't have an account? Create your account. It's take less then a minutes</p>
                  <form className="s12">
                    <div>
                      <div className="input-field s12">
                        <input type="text" data-ng-model="name3" className="validate" />
                        <label>User name or email id</label>
                      </div>
                    </div>
                    <div>
                      <div className="input-field s4">
                        <input type="submit" defaultValue="Submit" className="waves-effect waves-light log-in-btn" /> </div>
                    </div>
                    <div>
                      <div className="input-field s12"> <Link to="../#" data-dismiss="modal" data-toggle="modal" data-target="#modal1">Are you a already member ? Login</Link> | <Link to="../#" data-dismiss="modal" data-toggle="modal" data-target="#modal2">Create a new account</Link> </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="icon-float">
              <ul>
                <li><Link to="../#" className="sh">1k <br /> Share</Link> </li>
                <li><Link to="../#" className="fb1"><i className="fa fa-facebook" aria-hidden="true" /></Link> </li>
                <li><Link to="../#" className="gp1"><i className="fa fa-google-plus" aria-hidden="true" /></Link> </li>
                <li><Link to="../#" className="tw1"><i className="fa fa-twitter" aria-hidden="true" /></Link> </li>
                <li><Link to="../#" className="li1"><i className="fa fa-linkedin" aria-hidden="true" /></Link> </li>
                <li><Link to="../#" className="wa1"><i className="fa fa-whatsapp" aria-hidden="true" /></Link> </li>
                <li><Link to="../#" className="sh1"><i className="fa fa-envelope-o" aria-hidden="true" /></Link> </li>
              </ul>
            </div>
          </section>
          {/*Import jQuery before materialize.js*/}
        </div>
   );
  }
};