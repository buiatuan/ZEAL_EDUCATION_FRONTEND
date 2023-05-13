import React ,{Component} from "react";
import { Link } from 'react-router-dom';
import { HeaderClient } from "../layout/HeaderClient";
import { FooterClient } from "../layout/FooterClient";
export class Dashboard extends Component{
    render() {
      return (
        <div>
          {/* MOBILE MENU */}
          <HeaderClient/>
          {/*END HEADER SECTION*/}
          {/*SECTION START*/}
          <section>
            <div className="pro-cover">
            </div>
            <div className="pro-menu">
              <div className="container">
                <div className="col-md-9 col-md-offset-3">
                  <ul>
                    <li><Link to="../dashboard" className="pro-act">My Dashboard</Link></li>
                    <li><Link to="../db-profile">Profile</Link></li>
                    <li><Link to="../db-courses">Courses</Link></li>
                    <li><Link to="../db-exams">Exams</Link></li>
                    <li><Link to="../db-time-line">Time Line</Link></li>
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
                    <img src={require('../assets/images/user.jpg')} alt="user" />
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
                      <h4><img src={require('../assets/images/icon/db1.png')} alt="" /> My Profile</h4>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
                        to using 'Content here, content here', making it look like readable English.</p>
                    </div>
                    <div className="udb-sec udb-cour">
                      <h4><img src={require('../assets/images/icon/db2.png')} alt="" /> Booking Courses</h4>
                      <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.The point of using Lorem Ipsummaking it look like readable English.</p>
                      <div className="sdb-cours">
                        <ul>
                          <li>
                            <Link to="../#">
                              <div className="list-mig-like-com com-mar-bot-30">
                                <div className="list-mig-lc-img"> <img src={require('../assets/images/course/3.jpg')} alt="" /> <span className="home-list-pop-rat list-mi-pr">Duration:150 Days</span> </div>
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
                                <div className="list-mig-lc-img"> <img src={require('../assets/images/course/4.jpg')} alt="" /> <span className="home-list-pop-rat list-mi-pr">Duration:60 Days</span> </div>
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
                                <div className="list-mig-lc-img"> <img src={require('../assets/images/course/5.jpg')} alt="" /> <span className="home-list-pop-rat list-mi-pr">Duration:30 Days</span> </div>
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
                                <div className="list-mig-lc-img"> <img src={require('../assets/images/course/3.jpg')} alt="" /> <span className="home-list-pop-rat list-mi-pr">Duration:20 Days</span> </div>
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
                      <h4><img src={require('../assets/images/icon/db3.png')} alt="" /> Course Status</h4>
                      <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.The point of using Lorem Ipsummaking it look like readable English.</p>
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
                              <td><span className="pro-user-act">active</span></td>
                              <td><Link to="../sdb-course-edit" className="pro-edit">edit</Link></td>
                              <td><Link to="../sdb-course-view" className="pro-edit">view</Link></td>
                            </tr>
                            <tr>
                              <td>02</td>
                              <td>Mechanical Design</td>
                              <td>05Jan 2019</td>
                              <td>10Feb 2019</td>
                              <td><span className="pro-user-act">active</span></td>
                              <td><Link to="../sdb-course-edit" className="pro-edit">edit</Link></td>
                              <td><Link to="../sdb-course-view" className="pro-edit">view</Link></td>
                            </tr>
                            <tr>
                              <td>03</td>
                              <td>Architecture &amp; Planning</td>
                              <td>21Jun 2020</td>
                              <td>08Dec 2020</td>
                              <td><span className="pro-user-act">active</span></td>
                              <td><Link to="../sdb-course-edit" className="pro-edit">edit</Link></td>
                              <td><Link to="../sdb-course-view" className="pro-edit">view</Link></td>
                            </tr>
                            <tr>
                              <td>04</td>
                              <td>Board Exam Training</td>
                              <td>08Jun 2018</td>
                              <td>21Sep 2018</td>
                              <td><span className="pro-user-act pro-user-de-act">de-active</span></td>
                              <td><Link to="../sdb-course-edit" className="pro-edit">edit</Link></td>
                              <td><Link to="../sdb-course-view" className="pro-edit">view</Link></td>
                            </tr>
                            <tr>
                              <td>05</td>
                              <td>Yoga Training Classes</td>
                              <td>16JFeb 2018</td>
                              <td>26Mar 2018</td>
                              <td><span className="pro-user-act pro-user-de-act">de-active</span></td>
                              <td><Link to="../sdb-course-edit" className="pro-edit">edit</Link></td>
                              <td><Link to="../sdb-course-view" className="pro-edit">view</Link></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="udb-sec udb-time">
                      <h4><img src={require('../assets/images/icon/db4.png')} alt="" /> Class Time Line</h4>
                      <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                      <div className="tour_head1 udb-time-line days">
                        <ul>
                          <li className="l-info-pack-plac"> <i className="fa fa-clock-o" aria-hidden="true" />
                            <div className="sdb-cl-tim">
                              <div className="sdb-cl-day">
                                <h5>Today</h5>
                                <span>10Sep 2018</span>
                              </div>
                              <div className="sdb-cl-class">
                                <ul>
                                  <li>
                                    <div className="sdb-cl-class-tim tooltipped" data-position="top" data-delay={50} data-tooltip="Class timing">
                                      <span>09:30 am</span>
                                      <span>10:15 pm</span>
                                    </div>
                                    <div className="sdb-cl-class-name tooltipped" data-position="top" data-delay={50} data-tooltip="Class Details">
                                      <h5>Software Testing <span>John Smith</span></h5>
                                      <span className="sdn-hall-na">Apj Hall 112</span>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="sdb-cl-class-tim tooltipped" data-position="top" data-delay={50} data-tooltip="Class timing">
                                      <span>10:15 am</span>
                                      <span>11:00 am</span>
                                    </div>
                                    <div className="sdb-cl-class-name tooltipped" data-position="top" data-delay={50} data-tooltip="Class Details">
                                      <h5>Mechanical Design Classes <span>Stephanie</span></h5>
                                      <span className="sdn-hall-na">Apj Hall 112</span>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="sdb-cl-class-tim">
                                      <span>11:00 am</span>
                                      <span>11:45 am</span>
                                    </div>
                                    <div className="sdb-cl-class-name sdb-cl-class-name-lev">
                                      <h5>Board Exam Training Classes <span>Matthew</span></h5>
                                      <span className="sdn-hall-na">Apj Hall 112</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li className="l-info-pack-plac"> <i className="fa fa-clock-o" aria-hidden="true" />
                            <div className="sdb-cl-tim">
                              <div className="sdb-cl-day">
                                <h5>Tuesday</h5>
                                <span>11Sep 2018</span>
                              </div>
                              <div className="sdb-cl-class">
                                <ul>
                                  <li>
                                    <div className="sdb-cl-class-tim tooltipped" data-position="top" data-delay={50} data-tooltip="Class timing">
                                      <span>9:30 am</span>
                                      <span>10:15 am</span>
                                    </div>
                                    <div className="sdb-cl-class-name tooltipped" data-position="top" data-delay={50} data-tooltip="Class Details">
                                      <h5>Agriculture <span>John Smith</span></h5>
                                      <span className="sdn-hall-na">Apj Hall 112</span>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="sdb-cl-class-tim">
                                      <span>10:15 am</span>
                                      <span>11:00 am</span>
                                    </div>
                                    <div className="sdb-cl-class-name">
                                      <h5>Google Product Training <span>Stephanie</span></h5>
                                      <span className="sdn-hall-na">Apj Hall 112</span>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="sdb-cl-class-tim">
                                      <span>11:00 am</span>
                                      <span>11:45 am</span>
                                    </div>
                                    <div className="sdb-cl-class-name sdb-cl-class-name-lev">
                                      <h5>Web Design &amp; Development <span>Matthew</span></h5>
                                      <span className="sdn-hall-na">Apj Hall 112</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li className="l-info-pack-plac"> <i className="fa fa-clock-o" aria-hidden="true" />
                            <div className="sdb-cl-tim">
                              <div className="sdb-cl-day">
                                <h5>Wednesday</h5>
                                <span>12Sep 2018</span>
                              </div>
                              <div className="sdb-cl-class">
                                <ul>
                                  <li>
                                    <div className="sdb-cl-class-tim">
                                      <span>9:30 am</span>
                                      <span>10:15 am</span>
                                    </div>
                                    <div className="sdb-cl-class-name">
                                      <h5>Software Testing <span>John Smith</span></h5>
                                      <span className="sdn-hall-na">Apj Hall 112</span>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="sdb-cl-class-tim">
                                      <span>10:15 am</span>
                                      <span>11:00 am</span>
                                    </div>
                                    <div className="sdb-cl-class-name">
                                      <h5>Mechanical Design Classes <span>Stephanie</span></h5>
                                      <span className="sdn-hall-na">Apj Hall 112</span>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="sdb-cl-class-tim">
                                      <span>11:00 am</span>
                                      <span>11:45 am</span>
                                    </div>
                                    <div className="sdb-cl-class-name sdb-cl-class-name-lev">
                                      <h5>Board Exam Training Classes <span>Matthew</span></h5>
                                      <span className="sdn-hall-na">Apj Hall 112</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li className="l-info-pack-plac"> <i className="fa fa-clock-o" aria-hidden="true" />
                            <h4><span>Holiday: </span> Thursday </h4>
                            <p>After breakfast, proceed for tour of Dubai city. Visit Jumeirah Mosque, World Trade Centre, Palaces and Dubai Museum. Enjoy your overnight stay at the hotel.In the evening, enjoy a tasty dinner on the Dhow cruise.
                              Later, head back to the hotel for a comfortable overnight stay.</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*SECTION END*/}
          {/*SECTION START*/}

          <FooterClient/>
            {/*Import jQuery before materialize.js*/}
            </div>
    );
  }
};
          