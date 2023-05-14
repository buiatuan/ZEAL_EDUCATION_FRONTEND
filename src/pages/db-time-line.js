import React ,{Component} from "react";
import { Link } from 'react-router-dom';
import { HeaderClient } from "../layout/HeaderClient";
import { FooterClient } from "../layout/FooterClient";
export class DbTimeLine extends Component{
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
                    <li><Link to="../dashboard">My Dashboard</Link></li>
                    <li><Link to="../db-profile">Profile</Link></li>
                    <li><Link to="../db-courses">Courses</Link></li>
                    <li><Link to="../db-exams">Exams</Link></li>
                    <li><Link to="../db-time-line" className="pro-act">Time Line</Link></li>
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
                            <div className="sdb-cl-tim">
                              <div className="sdb-cl-day">
                                <h5>Tuesday</h5>
                                <span>11Sep 2018</span>
                              </div>
                              <div className="sdb-cl-class">
                                <ul>
                                  <li>
                                    <div className="sdb-cl-class-tim">
                                      <span>9:30 am</span>
                                      <span>10:15 am</span>
                                    </div>
                                    <div className="sdb-cl-class-name">
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