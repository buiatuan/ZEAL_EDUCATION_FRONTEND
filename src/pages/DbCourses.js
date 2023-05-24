import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HeaderClient } from '../components/HeaderClient';
import { FooterClient } from '../components/FooterClient';
export class DbCourses extends Component {
    render() {
        return (
            <div>
                {/* MOBILE MENU */}
                <HeaderClient />
                {/*END HEADER SECTION*/}
                {/*SECTION START*/}
                <section>
                    <div className="pro-cover"></div>
                    <div className="pro-menu">
                        <div className="container">
                            <div className="col-md-9 col-md-offset-3">
                                <ul>
                                    <li>
                                        <Link to="../dashboard" className="pro-act">
                                            My Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="../dbprofile">Profile</Link>
                                    </li>
                                    <li>
                                        <Link to="../dbcourses">Courses</Link>
                                    </li>
                                    <li>
                                        <Link to="../dbexams">Exams</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="stu-db">
                        <div className="container pg-inn">
                            <div className="col-md-3">
                                <div className="pro-user">
                                    <img src={require('../assets/images/user.jpg')} alt="user" />
                                </div>
                                <div className="pro-user-bio">
                                    <ul>
                                        <li>
                                            <h4>Emily Jessica</h4>
                                        </li>
                                        <li>Student Id: ST17241</li>
                                        <li>
                                            <Link to="../#!">
                                                <i className="fa fa-facebook" /> Facebook: my sample
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="../#!">
                                                <i className="fa fa-google-plus" /> Google: my sample
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="../#!">
                                                <i className="fa fa-twitter" /> Twitter: my sample
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="udb">
                                    <div className="udb-sec udb-cour">
                                        <h4>
                                            <img src={require('../assets/images/icon/db2.png')} alt="" /> Booking
                                            Courses
                                        </h4>
                                        <p>
                                            Many desktop publishing packages and web page editors now use Lorem Ipsum as
                                            their default model text.The point of using Lorem Ipsummaking it look like
                                            readable English.
                                        </p>
                                        <div className="sdb-cours">
                                            <ul>
                                                <li>
                                                    <Link to="../#">
                                                        <div className="list-mig-like-com com-mar-bot-30">
                                                            <div className="list-mig-lc-img">
                                                                {' '}
                                                                <img
                                                                    src={require('../assets/images/course/3.jpg')}
                                                                    alt=""
                                                                />{' '}
                                                                <span className="home-list-pop-rat list-mi-pr">
                                                                    Duration:150 Days
                                                                </span>{' '}
                                                            </div>
                                                            <div className="list-mig-lc-con">
                                                                <h5>Master of Science</h5>
                                                                <p>Illinois City,</p>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="../#">
                                                        <div className="list-mig-like-com com-mar-bot-30">
                                                            <div className="list-mig-lc-img">
                                                                {' '}
                                                                <img
                                                                    src={require('../assets/images/course/4.jpg')}
                                                                    alt=""
                                                                />{' '}
                                                                <span className="home-list-pop-rat list-mi-pr">
                                                                    Duration:60 Days
                                                                </span>{' '}
                                                            </div>
                                                            <div className="list-mig-lc-con">
                                                                <h5>Java Programming</h5>
                                                                <p>Illinois City,</p>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="../#">
                                                        <div className="list-mig-like-com com-mar-bot-30">
                                                            <div className="list-mig-lc-img">
                                                                {' '}
                                                                <img
                                                                    src={require('../assets/images/course/5.jpg')}
                                                                    alt=""
                                                                />{' '}
                                                                <span className="home-list-pop-rat list-mi-pr">
                                                                    Duration:30 Days
                                                                </span>{' '}
                                                            </div>
                                                            <div className="list-mig-lc-con">
                                                                <h5>Aeronautical Engineering</h5>
                                                                <p>Illinois City,</p>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="../#">
                                                        <div className="list-mig-like-com com-mar-bot-30">
                                                            <div className="list-mig-lc-img">
                                                                {' '}
                                                                <img
                                                                    src={require('../assets/images/course/3.jpg')}
                                                                    alt=""
                                                                />{' '}
                                                                <span className="home-list-pop-rat list-mi-pr">
                                                                    Duration:20 Days
                                                                </span>{' '}
                                                            </div>
                                                            <div className="list-mig-lc-con">
                                                                <h5>Master of Science</h5>
                                                                <p>Illinois City,</p>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="udb-sec udb-cour-stat">
                                        <h4>
                                            <img src={require('../assets/images/icon/db3.png')} alt="" /> Course Status
                                        </h4>
                                        <p>
                                            Many desktop publishing packages and web page editors now use Lorem Ipsum as
                                            their default model text.The point of using Lorem Ipsummaking it look like
                                            readable English.
                                        </p>
                                        <div className="pro-con-table">
                                            <table className="bordered responsive-table">
                                                <thead>
                                                    <tr>
                                                        <th>No</th>
                                                        <th>Course Name</th>
                                                        <th>Start Date</th>
                                                        <th>End Date</th>
                                                        <th>Status</th>
                                                        <th>Edit</th>
                                                        <th>View</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>01</td>
                                                        <td>Software Testing</td>
                                                        <td>12May 2018</td>
                                                        <td>18Aug 2018</td>
                                                        <td>
                                                            <span className="pro-user-act">active</span>
                                                        </td>
                                                        <td>
                                                            <Link to="../sdb-course-edit" className="pro-edit">
                                                                edit
                                                            </Link>
                                                        </td>
                                                        <td>
                                                            <Link to="../sdb-course-view" className="pro-edit">
                                                                view
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>02</td>
                                                        <td>Mechanical Design</td>
                                                        <td>05Jan 2019</td>
                                                        <td>10Feb 2019</td>
                                                        <td>
                                                            <span className="pro-user-act">active</span>
                                                        </td>
                                                        <td>
                                                            <Link to="../sdb-course-edit" className="pro-edit">
                                                                edit
                                                            </Link>
                                                        </td>
                                                        <td>
                                                            <Link to="../sdb-course-view" className="pro-edit">
                                                                view
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>03</td>
                                                        <td>Architecture &amp; Planning</td>
                                                        <td>21Jun 2020</td>
                                                        <td>08Dec 2020</td>
                                                        <td>
                                                            <span className="pro-user-act">active</span>
                                                        </td>
                                                        <td>
                                                            <Link to="../sdb-course-edit" className="pro-edit">
                                                                edit
                                                            </Link>
                                                        </td>
                                                        <td>
                                                            <Link to="../sdb-course-view" className="pro-edit">
                                                                view
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>04</td>
                                                        <td>Board Exam Training</td>
                                                        <td>08Jun 2018</td>
                                                        <td>21Sep 2018</td>
                                                        <td>
                                                            <span className="pro-user-act pro-user-de-act">
                                                                de-active
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <Link to="../sdb-course-edit" className="pro-edit">
                                                                edit
                                                            </Link>
                                                        </td>
                                                        <td>
                                                            <Link to="../sdb-course-view" className="pro-edit">
                                                                view
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>05</td>
                                                        <td>Yoga Training Classes</td>
                                                        <td>16JFeb 2018</td>
                                                        <td>26Mar 2018</td>
                                                        <td>
                                                            <span className="pro-user-act pro-user-de-act">
                                                                de-active
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <Link to="../sdb-course-edit" className="pro-edit">
                                                                edit
                                                            </Link>
                                                        </td>
                                                        <td>
                                                            <Link to="../sdb-course-view" className="pro-edit">
                                                                view
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="full-bot-book">
                        <div className="container">
                            <div className="row">
                                <div className="bot-book">
                                    <div className="col-md-2 bb-img">
                                        <img src={require('../assets/images/3.png')} alt="" />
                                    </div>
                                    <div className="col-md-7 bb-text">
                                        <h4>therefore always free from repetition</h4>
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but the
                                            majority have suffered alteration in some form, by injected humour
                                        </p>
                                    </div>
                                    <div className="col-md-3 bb-link">
                                        <Link to="../CousrseDetails">Book This Course</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*SECTION END*/}
                {/*SECTION START*/}
                <FooterClient />
                {/*Import jQuery before materialize.js*/}
            </div>
        );
    }
}
