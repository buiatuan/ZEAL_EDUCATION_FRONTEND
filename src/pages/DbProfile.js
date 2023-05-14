import React ,{Component} from "react";
import { Link } from 'react-router-dom';
import { HeaderClient } from "../components/HeaderClient";
import { FooterClient } from "../components/FooterClient";
export class DbProfile extends Component{
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
                    <li><Link to="../db-profile" className="pro-act">Profile</Link></li>
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
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its components. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
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
                          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its components. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                          <Link to="../#" className="waves-effect waves-light btn-large sdb-btn sdb-btn-edit"><i className="fa fa-pencil" /> Edit my profile</Link>
                        </div>
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
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
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
          <FooterClient/>
            {/*Import jQuery before materialize.js*/}
            </div>
    );
  }
};