import React ,{Component} from "react";

export class About extends Component{
    render() {
      return (
    <div>
    {/* MOBILE MENU */}
    <section>
        <div className="ed-mob-menu">
            <div className="ed-mob-menu-con">
                <div className="ed-mm-left">
                    <div className="wed-logo">
                        <a href="index.html">
                            <img src="images/logo.png" alt="" />
                        </a>
                    </div>
                </div>
                <div className="ed-mm-right">
                    <div className="ed-mm-menu">
                        <a href="#!" className="ed-micon"><i className="fa fa-bars" /></a>
                        <div className="ed-mm-inn">
                            <a href="#!" className="ed-mi-close"><i className="fa fa-times" /></a>
                            <h4>All Courses</h4>
                            <ul>
                                <li><a href="course-details.html">Accounting/Finance</a></li>
                                <li><a href="course-details.html">civil engineering</a></li>
                                <li><a href="course-details.html">Art/Design</a></li>
                                <li><a href="course-details.html">Marine Engineering</a></li>
                                <li><a href="course-details.html">Business Management</a></li>
                                <li><a href="course-details.html">Journalism/Writing</a></li>
                                <li><a href="course-details.html">Physical Education</a></li>
                                <li><a href="course-details.html">Political Science</a></li>
                                <li><a href="course-details.html">Sciences</a></li>
                                <li><a href="course-details.html">Statistics</a></li>
                                <li><a href="course-details.html">Web Design/Development</a></li>
                                <li><a href="course-details.html">SEO</a></li>
                                <li><a href="course-details.html">Google Business</a></li>
                                <li><a href="course-details.html">Graphics Design</a></li>
                                <li><a href="course-details.html">Networking Courses</a></li>
                                <li><a href="course-details.html">Information technology</a></li>
                            </ul>
                            <h4>User Account</h4>
                            <ul>
                                <li><a href="#!" data-toggle="modal" data-target="#modal1">Sign In</a></li>
                                <li><a href="#!" data-toggle="modal" data-target="#modal2">Register</a></li>
                            </ul>
                            <h4>All Pages</h4>
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li><a href="about.html">About us</a></li>
                                <li><a href="admission.html">Admission</a></li>
                                <li><a href="all-courses.html">All courses</a></li>
                                <li><a href="course-details.html">Course details</a></li>
                                <li><a href="awards.html">Awards</a></li>
                                <li><a href="seminar.html">Seminar</a></li>
                                <li><a href="events.html">Events</a></li>
                                <li><a href="event-details.html">Event details</a></li>
                                <li><a href="event-register.html">Event register</a></li>
                                <li><a href="contact-us.html">Contact us</a></li>
                            </ul>
                            <h4>User Profile</h4>
                            <ul>
                                <li><a href="dashboard.html">User profile</a></li>
                                <li><a href="db-courses.html">Courses</a></li>
                                <li><a href="db-exams.html">Exams</a></li>
                                <li><a href="db-profile.html">Prfile</a></li>
                                <li><a href="db-time-line.html">Time line</a></li>
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
                                    <a href="#">Contact: Lake Road, Suite 180 Farmington Hills, U.S.A.</a>
                                </li>
                                <li>
                                    <a href="#">Phone: +101-1231-1231</a>
                                </li>
                            </ul>
                        </div>
                        <div className="ed-com-t1-right">
                            <ul>
                                <li>
                                    <a href="#!" data-toggle="modal" data-target="#modal1">Sign In</a>
                                </li>
                                <li>
                                    <a href="#!" data-toggle="modal" data-target="#modal2">Sign Up</a>
                                </li>
                            </ul>
                        </div>
                        <div className="ed-com-t1-social">
                            <ul>
                                <li>
                                    <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
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
                            <a href="index.html">
                                <img src="images/logo.png" alt="" />
                            </a>
                        </div>
                        <div className="main-menu">
                            <ul>
                                <li>
                                    <a href="index.html">Home</a>
                                </li>
                                <li className="about-menu">
                                    <a href="about.html" className="mm-arr">About us</a>
                                    {/* MEGA MENU 1 */}
                                    <div className="mm-pos">
                                        <div className="about-mm m-menu">
                                            <div className="m-menu-inn">
                                                <div className="mm1-com mm1-s1">
                                                    <div className="ed-course-in">
                                                        <a className="course-overlay menu-about" href="admission.html">
                                                            <img src="images/h-about.jpg" alt="" />
                                                            <span>Academics</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="mm1-com mm1-s2">
                                                    <p>Want to change the world? At Berkeley we’re doing just that. When you join the Golden Bear community, you’re part of an institution that shifts the global conversation every single day.</p>
                                                    <a href="about.html" className="mm-r-m-btn">Read more</a>
                                                </div>
                                                <div className="mm1-com mm1-s3">
                                                    <ul>
                                                        <li><a href="all-courses.html">All Courses</a></li>
                                                        <li><a href="course-details.html">Course details</a></li>
                                                        <li><a href="about.html">About</a></li>
                                                        <li><a href="admission.html">Admission</a></li>
                                                        <li><a href="awards.html">Awards</a></li>
                                                    </ul>
                                                </div>
                                                <div className="mm1-com mm1-s4">
                                                    <ul>
                                                        <li><a href="dashboard.html">Student profile</a></li>
                                                        <li><a href="db-courses.html">Dashboard courses</a></li>
                                                        <li><a href="db-exams.html">Dashboard exams</a></li>
                                                        <li><a href="db-profile.html">Dashboard profile</a></li>
                                                        <li><a href="db-time-line.html">Dashboard timeline</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="admi-menu">
                                    <a href="#" className="mm-arr">Admission</a>
                                    {/* MEGA MENU 1 */}
                                    <div className="mm-pos">
                                        <div className="admi-mm m-menu">
                                            <div className="m-menu-inn">
                                                <div className="mm2-com mm1-com mm1-s1">
                                                    <div className="ed-course-in">
                                                        <a className="course-overlay" href="about.html">
                                                            <img src="images/h-about1.jpg" alt="" />
                                                            <span>Academics</span>
                                                        </a>
                                                    </div>
                                                    <p>Donec lacus libero, rutrum ac sollicitudin sed, mattis non eros. Vestibulum congue nec eros quis lacinia. Mauris non tincidunt lectus. Nulla mollis, orci vitae accumsan rhoncus.</p>
                                                    <a href="about.html" className="mm-r-m-btn">Read more</a>
                                                </div>
                                                <div className="mm2-com mm1-com mm1-s1">
                                                    <div className="ed-course-in">
                                                        <a className="course-overlay" href="admission.html">
                                                            <img src="images/h-adm1.jpg" alt="" />
                                                            <span>Admission</span>
                                                        </a>
                                                    </div>
                                                    <p>Donec lacus libero, rutrum ac sollicitudin sed, mattis non eros. Vestibulum congue nec eros quis lacinia. Mauris non tincidunt lectus. Nulla mollis, orci vitae accumsan rhoncus.</p>
                                                    <a href="admission.html" className="mm-r-m-btn">Read more</a>
                                                </div>
                                                <div className="mm2-com mm1-com mm1-s1">
                                                    <div className="ed-course-in">
                                                        <a className="course-overlay" href="awards.html">
                                                            <img src="images/h-cam1.jpg" alt="" />
                                                            <span>History &amp; awards</span>
                                                        </a>
                                                    </div>
                                                    <p>Donec lacus libero, rutrum ac sollicitudin sed, mattis non eros. Vestibulum congue nec eros quis lacinia. Mauris non tincidunt lectus. Nulla mollis, orci vitae accumsan rhoncus.</p>
                                                    <a href="awards.html" className="mm-r-m-btn">Read more</a>
                                                </div>
                                                <div className="mm2-com mm1-com mm1-s4">
                                                    <div className="ed-course-in">
                                                        <a className="course-overlay" href="seminar.html">
                                                            <img src="images/h-res1.jpg" alt="" />
                                                            <span>Seminar 2018</span>
                                                        </a>
                                                    </div>
                                                    <p>Donec lacus libero, rutrum ac sollicitudin sed, mattis non eros. Vestibulum congue nec eros quis lacinia. Mauris non tincidunt lectus. Nulla mollis, orci vitae accumsan rhoncus.</p>
                                                    <a href="seminar.html" className="mm-r-m-btn">Read more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li><a href="all-courses.html">All Courses</a></li>
                                {/*
                                <li><a class='dropdown-button ed-sub-menu' href='#' data-activates='dropdown1'>Courses</a></li>*/}
                                <li className="cour-menu">
                                    <a href="#!" className="mm-arr">All Pages</a>
                                    {/* MEGA MENU 1 */}
                                    <div className="mm-pos">
                                        <div className="cour-mm m-menu">
                                            <div className="m-menu-inn">
                                                <div className="mm1-com mm1-cour-com mm1-s3">
                                                    <h4>Frontend pages:1</h4>
                                                    <ul>
                                                        <li><a href="index.html">Home</a></li>
                                                        <li><a href="index-1.html">Home - 1</a></li>
                                                        <li><a href="all-courses.html">All Courses</a></li>
                                                        <li><a href="course-details.html">Course Details</a></li>
                                                        <li><a href="about.html">About us</a></li>
                                                        <li><a href="admission.html">admission</a></li>
                                                        <li><a href="awards.html">awards</a></li>
                                                        <li><a href="blog.html">blog</a></li>
                                                        <li><a href="blog-details.html">blog details</a></li>
                                                        <li><a href="contact-us.html">contact us</a></li>
                                                        <li><a href="departments.html">Departments</a></li>
                                                        <li><a href="events.html">events</a></li>
                                                        <li><a href="event-details.html">event details</a></li>
                                                        <li><a href="event-register.html">event register</a></li>
                                                    </ul>
                                                </div>
                                                <div className="mm1-com mm1-cour-com mm1-s3">
                                                    <h4>Frontend pages:2</h4>
                                                    <ul>
                                                        <li><a href="facilities.html">facilities</a></li>
                                                        <li><a href="facilities-detail.html">facilities detail</a></li>
                                                        <li><a href="research.html">research</a></li>
                                                        <li><a href="seminar.html">seminar</a></li>
                                                        <li><a href="gallery-photo.html">gallery photo</a></li>
                                                    </ul>
                                                    <h4 className="ed-dr-men-mar-top">User Dashboard</h4>
                                                    <ul>
                                                        <li><a href="dashboard.html">Student profile</a></li>
                                                        <li><a href="db-courses.html">Dashboard courses</a></li>
                                                        <li><a href="db-exams.html">Dashboard exams</a></li>
                                                        <li><a href="db-profile.html">Dashboard profile</a></li>
                                                        <li><a href="db-time-line.html">Dashboard timeline</a></li>
                                                    </ul>
                                                </div>
                                                <div className="mm1-com mm1-cour-com mm1-s3">
                                                    <h4>Admin panel:1</h4>
                                                    <ul>
                                                        <li><a href="admin.html">admin</a></li>
                                                        <li><a href="admin-add-courses.html">Add new course</a></li>
                                                        <li><a href="admin-all-courses.html">All courses</a></li>
                                                        <li><a href="admin-student-details.html">Student details</a></li>
                                                        <li><a href="admin-user-add.html">Add new user</a></li>
                                                        <li><a href="admin-user-all.html">All users</a></li>
                                                        <li><a href="admin-panel-setting.html">Admin setting</a></li>
                                                        <li><a href="admin-event-add.html">event add</a></li>
                                                        <li><a href="admin-event-all.html">event all</a></li>
                                                        <li><a href="admin-setting.html">Admin Setting</a></li>
                                                        <li><a href="admin-slider.html">Slider setting</a></li>
                                                        <li><a href="admin-slider-edit.html">Slider edit</a></li>
                                                        <li><a href="admin-course-details.html">course details</a></li>
                                                        <li><a href="admin-login.html">admin login</a></li>
                                                    </ul>
                                                </div>
                                                <div className="mm1-com mm1-cour-com mm1-s3">
                                                    <h4>Admin panel:2</h4>
                                                    <ul>
                                                        <li><a href="admin-event-edit.html">event edit</a></li>
                                                        <li><a href="admin-exam-add.html">exam add</a></li>
                                                        <li><a href="admin-exam-all.html">exam all</a></li>
                                                        <li><a href="admin-exam-edit.html">exam edit</a></li>
                                                        <li><a href="admin-export-data.html">export data</a></li>
                                                        <li><a href="admin-import-data.html">import data</a></li>
                                                        <li><a href="admin-job-add.html">Add new jobs</a></li>
                                                        <li><a href="admin-job-all.html">All jobs</a></li>
                                                        <li><a href="admin-job-edit.html">Edit job</a></li>
                                                        <li><a href="admin-main-menu.html">main menu</a></li>
                                                        <li><a href="admin-page-add.html">Add new page</a></li>
                                                        <li><a href="admin-page-all.html">All pages</a></li>
                                                        <li><a href="admin-page-edit.html">Edit page</a></li>
                                                        <li><a href="admin-forgot.html">forgot password</a></li>
                                                    </ul>
                                                </div>
                                                <div className="mm1-com mm1-cour-com mm1-s4">
                                                    <h4>Admin panel:3</h4>
                                                    <ul>
                                                        <li><a href="admin-quick-link.html">quick link</a></li>
                                                        <li><a href="admin-seminar-add.html">Add new seminar</a></li>
                                                        <li><a href="admin-seminar-all.html">All seminar</a></li>
                                                        <li><a href="admin-seminar-edit.html">Edit seminar</a></li>
                                                        <li><a href="admin-seminar-enquiry.html">Semester enquiry</a></li>
                                                        <li><a href="admin-all-enquiry.html">All enquiry</a></li>
                                                        <li><a href="admin-view-enquiry.html">All enquiry view</a></li>
                                                        <li><a href="admin-event-enquiry.html">event enquiry</a></li>
                                                        <li><a href="admin-admission-enquiry.html">Admission enquiry</a></li>
                                                        <li><a href="admin-common-enquiry.html">common enquiry</a></li>
                                                        <li><a href="admin-course-enquiry.html">course enquiry</a></li>
                                                        <li><a href="admin-all-menu.html">menu all</a></li>
                                                        <li><a href="admin-about-menu.html">Menu - About</a></li>
                                                        <li><a href="admin-admission-menu.html">Menu - admission</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="events.html">Events</a>
                                </li>
                                <li>
                                    <a href="dashboard.html">Student</a>
                                </li>
                                <li>
                                    <a href="contact-us.html">Contact us</a>
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
                                            <li><a href="course-details.html">Accounting/Finance</a></li>
                                            <li><a href="course-details.html">civil engineering</a></li>
                                            <li><a href="course-details.html">Art/Design</a></li>
                                            <li><a href="course-details.html">Marine Engineering</a></li>
                                            <li><a href="course-details.html">Business Management</a></li>
                                            <li><a href="course-details.html">Journalism/Writing</a></li>
                                            <li><a href="course-details.html">Physical Education</a></li>
                                            <li><a href="course-details.html">Political Science</a></li>
                                            <li><a href="course-details.html">Sciences</a></li>
                                            <li><a href="course-details.html">Statistics</a></li>
                                            <li><a href="course-details.html">Web Design/Development</a></li>
                                            <li><a href="course-details.html">SEO</a></li>
                                            <li><a href="course-details.html">Google Business</a></li>
                                            <li><a href="course-details.html">Graphics Design</a></li>
                                            <li><a href="course-details.html">Networking Courses</a></li>
                                            <li><a href="course-details.html">Information technology</a></li>
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
        <div className="container com-sp pad-bot-70">
            <div className="row">
                <div className="cor about-sp">
                    <div className="ed-about-tit">
                        <div className="con-title">
                            <h2>About <span> Academy</span></h2>
                            <p>Fusce id sem at ligula laoreet hendrerit venenatis sed purus. Ut pellentesque maximus lacus, nec pharetra augue.</p>
                        </div>
                    </div>
                    <div className="ed-about-sec1">
                        <div className="ed-advan">
                            <ul>
                                <li>
                                    <div className="ed-ad-img">
                                        <img src="images/adv/1.png" alt="" />
                                    </div>
                                    <div className="ed-ad-dec">
                                        <h4>Awards</h4>
                                        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi bibendum imperdiet bibendum.</p>
                                        <a href="awards.html">Read more</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="ed-ad-img">
                                        <img src="images/adv/2.png" alt="" />
                                    </div>
                                    <div className="ed-ad-dec">
                                        <h4>Research</h4>
                                        <p>tiam eget enim non magna vestibulum malesuada ut et lectus. Curabitur egestas risus massa, a malesuada erat ultrices non.</p>
                                        <a href="research.html">Read more</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="ed-ad-img">
                                        <img src="images/adv/3.png" alt="" />
                                    </div>
                                    <div className="ed-ad-dec">
                                        <h4>Educations</h4>
                                        <p>Maecenas venenatis, turpis ac tincidunt convallis, leo enim ultrices tortor, at faucibus neque sapien ac elit. Curabitur ut ipsum odio.</p>
                                        <a href="all-courses.html">Read more</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="ed-ad-img">
                                        <img src="images/adv/4.png" alt="" />
                                    </div>
                                    <div className="ed-ad-dec">
                                        <h4>Alumni</h4>
                                        <p>Aliquam malesuada commodo lectus, at fermentum ligula finibus eu. Morbi nisi neque, suscipit non pulvinar vitae.</p>
                                        <a href="awards.html">Read more</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="ed-ad-img">
                                        <img src="images/adv/5.png" alt="" />
                                    </div>
                                    <div className="ed-ad-dec">
                                        <h4>Facilities</h4>
                                        <p>Maecenas venenatis, turpis ac tincidunt convallis, leo enim ultrices tortor, at faucibus neque sapien ac elit. Curabitur ut ipsum odio.</p>
                                        <a href="facilities.html">Read more</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="ed-ad-img">
                                        <img src="images/adv/6.png" alt="" />
                                    </div>
                                    <div className="ed-ad-dec">
                                        <h4>Departments</h4>
                                        <p>Maecenas venenatis, turpis ac tincidunt convallis, leo enim ultrices tortor, at faucibus neque sapien ac elit. Curabitur ut ipsum odio.</p>
                                        <a href="departments.html">Read more</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="ed-about-sec1">
                        <div className="col-md-6" />
                        <div className="col-md-6" />
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
                            <img src="images/3.png" alt="" />
                        </div>
                        <div className="col-md-7 bb-text">
                            <h4>therefore always free from repetition</h4>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                        </div>
                        <div className="col-md-3 bb-link">
                            <a href="course-details.html">Book This Course</a>
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
                        <li><a href="course-details.html">Accounting/Finance</a></li>
                        <li><a href="course-details.html">civil engineering</a></li>
                        <li><a href="course-details.html">Art/Design</a></li>
                        <li><a href="course-details.html">Marine Engineering</a></li>
                        <li><a href="course-details.html">Business Management</a></li>
                        <li><a href="course-details.html">Journalism/Writing</a></li>
                        <li><a href="course-details.html">Physical Education</a></li>
                        <li><a href="course-details.html">Political Science</a></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h4>New Courses</h4>
                    <ul>
                        <li><a href="course-details.html">Sciences</a></li>
                        <li><a href="course-details.html">Statistics</a></li>
                        <li><a href="course-details.html">Web Design/Development</a></li>
                        <li><a href="course-details.html">SEO</a></li>
                        <li><a href="course-details.html">Google Business</a></li>
                        <li><a href="course-details.html">Graphics Design</a></li>
                        <li><a href="course-details.html">Networking Courses</a></li>
                        <li><a href="course-details.html">Information technology</a></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h4>HELP &amp; SUPPORT</h4>
                    <ul>
                        <li>
                            <a href="#">24x7 Live help</a>
                        </li>
                        <li>
                            <a href="#">Contact us</a>
                        </li>
                        <li>
                            <a href="#">Feedback</a>
                        </li>
                        <li>
                            <a href="#">FAQs</a>
                        </li>
                        <li>
                            <a href="#">Safety Tips</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row wed-foot-link-1">
                <div className="col-md-4 foot-tc-mar-t-o">
                    <h4>Get In Touch</h4>
                    <p>Address: 28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.</p>
                    <p>Phone: <a href="#!">+101-1231-4321</a></p>
                    <p>Email: <a href="#!">info@educationmaster.com</a></p>
                </div>
                <div className="col-md-4">
                    <h4>DOWNLOAD OUR FREE MOBILE APPS</h4>
                    <ul>
                        <li>
                            <a href="#"><span className="sprite sprite-android" /></a>
                        </li>
                        <li>
                            <a href="#"><span className="sprite sprite-ios" /></a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h4>SOCIAL MEDIA</h4>
                    <ul>
                        <li>
                            <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-youtube" aria-hidden="true" /></a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-whatsapp" aria-hidden="true" /></a>
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
                        <li>
                            <a href="#"><i className="fa fa-facebook" /> Facebook</a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-google" /> Google+</a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-twitter" /> Twitter</a>
                        </li>
                    </ul>
                </div>
                <div className="log-in-pop-right">
                    <a href="#" className="pop-close" data-dismiss="modal">
                        <img src="images/cancel.png" alt="" />
                    </a>
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
                                <input type="submit" defaultValue="Login" className="waves-effect waves-light log-in-btn" />
                            </div>
                        </div>
                        <div>
                            <div className="input-field s12"> <a href="#" data-dismiss="modal" data-toggle="modal" data-target="#modal3">Forgot password</a> | <a href="#" data-dismiss="modal" data-toggle="modal" data-target="#modal2">Create a new account</a> </div>
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
                        <li>
                            <a href="#"><i className="fa fa-facebook" /> Facebook</a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-google" /> Google+</a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-twitter" /> Twitter</a>
                        </li>
                    </ul>
                </div>
                <div className="log-in-pop-right">
                    <a href="#" className="pop-close" data-dismiss="modal">
                        <img src="images/cancel.png" alt="" />
                    </a>
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
                                <input type="submit" defaultValue="Register" className="waves-effect waves-light log-in-btn" />
                            </div>
                        </div>
                        <div>
                            <div className="input-field s12"> <a href="#" data-dismiss="modal" data-toggle="modal" data-target="#modal1">Are you a already member ? Login</a> </div>
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
                        <li>
                            <a href="#"><i className="fa fa-facebook" /> Facebook</a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-google" /> Google+</a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-twitter" /> Twitter</a>
                        </li>
                    </ul>
                </div>
                <div className="log-in-pop-right">
                    <a href="#" className="pop-close" data-dismiss="modal">
                        <img src="images/cancel.png" alt="" />
                    </a>
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
                                <input type="submit" defaultValue="Submit" className="waves-effect waves-light log-in-btn" />
                            </div>
                        </div>
                        <div>
                            <div className="input-field s12"> <a href="#" data-dismiss="modal" data-toggle="modal" data-target="#modal1">Are you a already member ? Login</a> | <a href="#" data-dismiss="modal" data-toggle="modal" data-target="#modal2">Create a new account</a> </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div className="icon-float">
            <ul>
                <li><a href="#" className="sh">1k <br /> Share</a> </li>
                <li><a href="#" className="fb1"><i className="fa fa-facebook" aria-hidden="true" /></a> </li>
                <li><a href="#" className="gp1"><i className="fa fa-google-plus" aria-hidden="true" /></a> </li>
                <li><a href="#" className="tw1"><i className="fa fa-twitter" aria-hidden="true" /></a> </li>
                <li><a href="#" className="li1"><i className="fa fa-linkedin" aria-hidden="true" /></a> </li>
                <li><a href="#" className="wa1"><i className="fa fa-whatsapp" aria-hidden="true" /></a> </li>
                <li><a href="#" className="sh1"><i className="fa fa-envelope-o" aria-hidden="true" /></a> </li>
            </ul>
        </div>
    </section>
    {/*Import jQuery before materialize.js*/}
</div>
    );
    }
  };