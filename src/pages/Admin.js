import React, {Component} from "react";
import {Link } from "react-router-dom";
import { HeaderAdmin } from "../components/HeaderAdmin";
import { SidebarAdmin } from "../components/SidebarAdmin";
export class Admin extends Component{
    render(){
        return(
            <div>
         <HeaderAdmin/>
      {/*== BODY CONTNAINER ==*/}
      <div className="container-fluid sb2">
        <div className="row">
          {/*== BODY INNER CONTAINER ==*/}
          <SidebarAdmin/>
          <div className="sb2-2">
            {/*== breadcrumbs ==*/}
            <div className="sb2-2-2">
              <ul>
                <li><Link to="../"><i className="fa fa-home" aria-hidden="true" /> Home</Link>
                </li>
                <li className="active-bre"><Link to="../#"> Dashboard</Link>
                </li>
                <li className="page-back"><Link to="../"><i className="fa fa-backward" aria-hidden="true" /> Back</Link>
                </li>
              </ul>
            </div>
            {/*== DASHBOARD INFO ==*/}
            <div className="sb2-2-1">
              <h2>Admin Dashboard</h2>
              <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p>
              <div className="db-2">
                <ul>
                  <li>
                    <div className="dash-book dash-b-1">
                      <h5>All Courses</h5>
                      <h4>948</h4>
                      <Link to="../#">View more</Link>
                    </div>
                  </li>
                  <li>
                    <div className="dash-book dash-b-2">
                      <h5>Admission</h5>
                      <h4>672</h4>
                      <Link to="../#">View more</Link>
                    </div>
                  </li>
                  <li>
                    <div className="dash-book dash-b-3">
                      <h5>Students</h5>
                      <h4>689</h4>
                      <Link to="../#">View more</Link>
                    </div>
                  </li>
                  <li>
                    <div className="dash-book dash-b-4">
                      <h5>Enquiry</h5>
                      <h4>24</h4>
                      <Link to="../#">View more</Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/*== User Details ==*/}
            <div className="sb2-2-3">
              <div className="row">
                <div className="col-md-12">
                  <div className="box-inn-sp">
                    <div className="inn-title">
                      <h4>Student Details</h4>
                      <p>All about students like name, student id, phone, email, country, city and more</p>
                    </div>
                    <div className="tab-inn">
                      <div className="table-responsive table-desi">
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th>User</th>
                              <th>Name</th>
                              <th>Phone</th>
                              <th>Email</th>
                              <th>Country</th>
                              <th>Id</th>
                              <th>Date of birth</th>
                              <th>Status</th>
                              <th>View</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><span className="list-img"><img src={require("../assets/images/user/1.png")} alt="" /></span>
                              </td>
                              <td><Link to="../#"><span className="list-enq-name">Marsha Hogan</span><span className="list-enq-city">Illunois, United States</span></Link>
                              </td>
                              <td>+01 3214 6522</td>
                              <td>chadengle@dummy.com</td>
                              <td>united states</td>
                              <td>ST17241</td>
                              <td>03 Jun 1990</td>
                              <td>
                                <span className="label label-success">Active</span>
                              </td>
                              <td><Link to="../admin-student-details" className="ad-st-view">View</Link></td>
                            </tr>
                            <tr>
                              <td><span className="list-img"><img src={require("../assets/images/user/2.png")} alt="" /></span>
                              </td>
                              <td><Link to="../#"><span className="list-enq-name">Lucas Caden</span><span className="list-enq-city">Illunois, United States</span></Link>
                              </td>
                              <td>+01 8574 6854</td>
                              <td>lucas@gmail.com</td>
                              <td>Illinois</td>
                              <td>ST10231</td>
                              <td>16 Feb 1987</td>
                              <td>
                                <span className="label label-success">Active</span>
                              </td>
                              <td><Link to="../admin-student-details" className="ad-st-view">View</Link></td>
                            </tr>
                            <tr>
                              <td><span className="list-img"><img src={require("../assets/images/user/4.png")} alt="" /></span>
                              </td>
                              <td><Link to="../#"><span className="list-enq-name">Ethan Oliver</span><span className="list-enq-city">Illunois, United States</span></Link>
                              </td>
                              <td>+01 8574 6854</td>
                              <td>Ethan@gmail.com</td>
                              <td>Illinois</td>
                              <td>ST32168</td>
                              <td>21 Jun 1992</td>
                              <td>
                                <span className="label label-success">Active</span>
                              </td>
                              <td><Link to="../admin-student-details" className="ad-st-view">View</Link></td>
                            </tr>
                            <tr>
                              <td><span className="list-img"><img src={require("../assets/images/user/5.png")} alt="" /></span>
                              </td>
                              <td><Link to="../#"><span className="list-enq-name">Ethan Oliver</span><span className="list-enq-city">Illunois, United States</span></Link>
                              </td>
                              <td>+01 8574 6854</td>
                              <td>Ethan@gmail.com</td>
                              <td>Illinois</td>
                              <td>ST32168</td>
                              <td>21 Jun 1992</td>
                              <td>
                                <span className="label label-success">Active</span>
                              </td>
                              <td><Link to="../admin-student-details" className="ad-st-view">View</Link></td>
                            </tr>
                            <tr>
                              <td><span className="list-img"><img src={require("../assets/images/user/1.png")} alt="" /></span>
                              </td>
                              <td><Link to="../#"><span className="list-enq-name">Marsha Hogan</span><span className="list-enq-city">Illunois, United States</span></Link>
                              </td>
                              <td>+01 3214 6522</td>
                              <td>chadengle@dummy.com</td>
                              <td>united states</td>
                              <td>ST17241</td>
                              <td>03 Jun 1990</td>
                              <td>
                                <span className="label label-success">Active</span>
                              </td>
                              <td><Link to="../admin-student-details" className="ad-st-view">View</Link></td>
                            </tr>
                            <tr>
                              <td><span className="list-img"><img src={require("../assets/images/user/2.png")} alt="" /></span>
                              </td>
                              <td><Link to="../#"><span className="list-enq-name">Lucas Caden</span><span className="list-enq-city">Illunois, United States</span></Link>
                              </td>
                              <td>+01 8574 6854</td>
                              <td>lucas@gmail.com</td>
                              <td>Illinois</td>
                              <td>ST10231</td>
                              <td>16 Feb 1987</td>
                              <td>
                                <span className="label label-success">Active</span>
                              </td>
                              <td><Link to="../admin-student-details" className="ad-st-view">View</Link></td>
                            </tr>
                            <tr>
                              <td><span className="list-img"><img src={require("../assets/images/user/4.png")} alt="" /></span>
                              </td>
                              <td><Link to="../#"><span className="list-enq-name">Ethan Oliver</span><span className="list-enq-city">Illunois, United States</span></Link>
                              </td>
                              <td>+01 8574 6854</td>
                              <td>Ethan@gmail.com</td>
                              <td>Illinois</td>
                              <td>ST32168</td>
                              <td>21 Jun 1992</td>
                              <td>
                                <span className="label label-success">Active</span>
                              </td>
                              <td><Link to="../admin-student-details" className="ad-st-view">View</Link></td>
                            </tr>
                            <tr>
                              <td><span className="list-img"><img src={require("../assets/images/user/5.png")} alt="" /></span>
                              </td>
                              <td><Link to="../#"><span className="list-enq-name">Ethan Oliver</span><span className="list-enq-city">Illunois, United States</span></Link>
                              </td>
                              <td>+01 8574 6854</td>
                              <td>Ethan@gmail.com</td>
                              <td>Illinois</td>
                              <td>ST32168</td>
                              <td>21 Jun 1992</td>
                              <td>
                                <span className="label label-success">Active</span>
                              </td>
                              <td><Link to="../admin-student-details" className="ad-st-view">View</Link></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*== User Details ==*/}
            <div className="sb2-2-3">
              <div className="row">
                <div className="col-md-12">
                  <div className="box-inn-sp">
                    <div className="inn-title">
                      <h4>Course Details</h4>
                      <p>All about courses, program structure, fees, best course lists (ranking), syllabus, teaching techniques and other details.</p>
                    </div>
                    <div className="tab-inn">
                      <div className="table-responsive table-desi">
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th>Image</th>
                              <th>Course Name</th>
                              <th>Category</th>
                              <th>Durations</th>
                              <th>Start Date</th>
                              <th>End Date</th>
                              <th>Total Seats</th>
                              <th>Status</th>
                              <th>View</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><span className="list-img"><img src={require("../assets/images/course/sm-1.jpg")} alt="" /></span>
                              </td>
                              <td><Link to="../admin-student-details"><span className="list-enq-name">Aerospace Engineering</span><span className="list-enq-city">Illunois, United States</span></Link>
                              </td>
                              <td>Engineering</td>
                              <td>60 Days(420hrs)</td>
                              <td>03 Jun 2018</td>
                              <td>12 Aug 2018</td>
                              <td>74</td>
                              <td>
                                <span className="label label-success">Active</span>
                              </td>
                              <td><Link to="../admin-student-details" className="ad-st-view">View</Link></td>
                            </tr>
                            <tr>
                              <td><span className="list-img"><img src={require("../assets/images/course/sm-5.jpg")} alt="" /></span>
                              </td>
                              <td><Link to="../admin-student-details"><span className="list-enq-name">Fashion Technology</span><span className="list-enq-city">Illunois, United States</span></Link>
                              </td>
                              <td>Fashion</td>
                              <td>30 Days(420hrs)</td>
                              <td>01 Nov 2018</td>
                              <td>01 Dec 2018</td>
                              <td>30</td>
                              <td>
                                <span className="label label-success">Active</span>
                              </td>
                              <td><Link to="../admin-student-details" className="ad-st-view">View</Link></td>
                            </tr>
                            <tr>
                              <td><span className="list-img"><img src={require("../assets/images/course/sm-2.jpg")} alt="" /></span>
                              </td>
                              <td><Link to="../admin-student-details"><span className="list-enq-name">Agriculture Courses</span><span className="list-enq-city">Illunois, United States</span></Link>
                              </td>
                              <td>Agriculture</td>
                              <td>25 Days(420hrs)</td>
                              <td>05 Jan 2018</td>
                              <td>25 Jan 2018</td>
                              <td>25</td>
                              <td>
                                <span className="label label-success">Active</span>
                              </td>
                              <td><Link to="../admin-student-details" className="ad-st-view">View</Link></td>
                            </tr>
                            <tr>
                              <td><span className="list-img"><img src={require("../assets/images/course/sm-3.jpg")} alt="" /></span>
                              </td>
                              <td><Link to="../admin-student-details"><span className="list-enq-name">Marine Engineering</span><span className="list-enq-city">Illunois, United States</span></Link>
                              </td>
                              <td>Ocean / Marine</td>
                              <td>06 Months</td>
                              <td>12 Feb 2018</td>
                              <td>14 Aug 2018</td>
                              <td>68</td>
                              <td>
                                <span className="label label-success">Active</span>
                              </td>
                              <td><Link to="../admin-student-details" className="ad-st-view">View</Link></td>
                            </tr>
                            <tr>
                              <td><span className="list-img"><img src={require("../assets/images/course/sm-4.jpg")} alt="" /></span>
                              </td>
                              <td><Link to="../admin-student-details"><span className="list-enq-name">Building, Construction Management</span><span className="list-enq-city">Illunois, United States</span></Link>
                              </td>
                              <td>Construction</td>
                              <td>1 Year</td>
                              <td>05 Mar 2018</td>
                              <td>16 Mar 2018</td>
                              <td>72</td>
                              <td>
                                <span className="label label-success">Active</span>
                              </td>
                              <td><Link to="../admin-student-details" className="ad-st-view">View</Link></td>
                            </tr>
                            <tr>
                              <td><span className="list-img"><img src={require("../assets/images/course/sm-1.jpg")} alt="" /></span>
                              </td>
                              <td><Link to="../admin-student-details"><span className="list-enq-name">Aerospace Engineering</span><span className="list-enq-city">Illunois, United States</span></Link>
                              </td>
                              <td>Engineering</td>
                              <td>60 Days(420hrs)</td>
                              <td>03 Jun 2018</td>
                              <td>12 Aug 2018</td>
                              <td>74</td>
                              <td>
                                <span className="label label-success">Active</span>
                              </td>
                              <td><Link to="../admin-student-details" className="ad-st-view">View</Link></td>
                            </tr>
                            <tr>
                              <td><span className="list-img"><img src={require("../assets/images/course/sm-5.jpg")} alt="" /></span>
                              </td>
                              <td><Link to="../admin-student-details"><span className="list-enq-name">Fashion Technology</span><span className="list-enq-city">Illunois, United States</span></Link>
                              </td>
                              <td>Fashion</td>
                              <td>30 Days(420hrs)</td>
                              <td>01 Nov 2018</td>
                              <td>01 Dec 2018</td>
                              <td>30</td>
                              <td>
                                <span className="label label-success">Active</span>
                              </td>
                              <td><Link to="../admin-student-details" className="ad-st-view">View</Link></td>
                            </tr>
                            <tr>
                              <td><span className="list-img"><img src={require("../assets/images/course/sm-2.jpg")} alt="" /></span>
                              </td>
                              <td><Link to="../admin-student-details"><span className="list-enq-name">Agriculture Courses</span><span className="list-enq-city">Illunois, United States</span></Link>
                              </td>
                              <td>Agriculture</td>
                              <td>25 Days(420hrs)</td>
                              <td>05 Jan 2018</td>
                              <td>25 Jan 2018</td>
                              <td>25</td>
                              <td>
                                <span className="label label-success">Active</span>
                              </td>
                              <td><Link to="../admin-student-details" className="ad-st-view">View</Link></td>
                            </tr>
                            <tr>
                              <td><span className="list-img"><img src={require("../assets/images/course/sm-3.jpg")} alt="" /></span>
                              </td>
                              <td><Link to="../admin-student-details"><span className="list-enq-name">Marine Engineering</span><span className="list-enq-city">Illunois, United States</span></Link>
                              </td>
                              <td>Ocean / Marine</td>
                              <td>06 Months</td>
                              <td>12 Feb 2018</td>
                              <td>14 Aug 2018</td>
                              <td>68</td>
                              <td>
                                <span className="label label-success">Active</span>
                              </td>
                              <td><Link to="../admin-student-details" className="ad-st-view">View</Link></td>
                            </tr>
                            <tr>
                              <td><span className="list-img"><img src={require("../assets/images/course/sm-4.jpg")} alt="" /></span>
                              </td>
                              <td><Link to="../admin-student-details"><span className="list-enq-name">Building, Construction Management</span><span className="list-enq-city">Illunois, United States</span></Link>
                              </td>
                              <td>Construction</td>
                              <td>1 Year</td>
                              <td>05 Mar 2018</td>
                              <td>16 Mar 2018</td>
                              <td>72</td>
                              <td>
                                <span className="label label-success">Active</span>
                              </td>
                              <td><Link to="../admin-student-details" className="ad-st-view">View</Link></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sb2-2-3">
              <div className="row">
                {/*== Country Campaigns ==*/}
                <div className="col-md-6">
                  <div className="box-inn-sp">
                    <div className="inn-title">
                      <h4>Job Openings</h4>
                      <p>Randomised words which don't look even slightly believable. If you are going to use a passage</p>
                    </div>
                    <div className="tab-inn">
                      <div className="table-responsive table-desi">
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th>Company</th>
                              <th>Openings</th>
                              <th>Date</th>
                              <th>Location</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><span className="txt-dark weight-500">Samsing</span>
                              </td>
                              <td>50</td>
                              <td>15 April 2018</td>
                              <td>New york, United States</td>
                              <td>
                                <span className="label label-success">Active</span>
                              </td>
                            </tr>
                            <tr>
                              <td><span className="txt-dark weight-500">Microsofts</span>
                              </td>
                              <td>75</td>
                              <td>21 Jun 2018</td>
                              <td>New york, United States</td>
                              <td>
                                <span className="label label-success">Active</span>
                              </td>
                            </tr>
                            <tr>
                              <td><span className="txt-dark weight-500">Samsing</span>
                              </td>
                              <td>50</td>
                              <td>15 April 2018</td>
                              <td>United States</td>
                              <td>
                                <span className="label label-success">Active</span>
                              </td>
                            </tr>
                            <tr>
                              <td><span className="txt-dark weight-500">Microsofts</span>
                              </td>
                              <td>75</td>
                              <td>21 Jun 2018</td>
                              <td>United States</td>
                              <td>
                                <span className="label label-success">Active</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/*== Country Campaigns ==*/}
                <div className="col-md-6">
                  <div className="box-inn-sp">
                    <div className="inn-title">
                      <h4>Event Details</h4>
                      <p>Education is about teaching, learning skills and knowledge.</p>
                    </div>
                    <div className="tab-inn">
                      <div className="table-responsive table-desi">
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th>State</th>
                              <th>Client</th>
                              <th>Changes</th>
                              <th>Budget</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><span className="txt-dark weight-500">California</span>
                              </td>
                              <td>Beavis</td>
                              <td><span className="txt-success"><i className="fa fa-angle-up" aria-hidden="true" /><span>2.43%</span></span>
                              </td>
                              <td>
                                <span className="txt-dark weight-500">$1478</span>
                              </td>
                              <td>
                                <span className="label label-success">Active</span>
                              </td>
                            </tr>
                            <tr>
                              <td><span className="txt-dark weight-500">Florida</span>
                              </td>
                              <td>Felix</td>
                              <td><span className="txt-success"><i className="fa fa-angle-up" aria-hidden="true" /><span>1.43%</span></span>
                              </td>
                              <td>
                                <span className="txt-dark weight-500">$951</span>
                              </td>
                              <td>
                                <span className="label label-danger">Closed</span>
                              </td>
                            </tr>
                            <tr>
                              <td><span className="txt-dark weight-500">Hawaii</span>
                              </td>
                              <td>Cannibus</td>
                              <td><span className="txt-danger"><i className="fa fa-angle-up" aria-hidden="true" /><span>-8.43%</span></span>
                              </td>
                              <td>
                                <span className="txt-dark weight-500">$632</span>
                              </td>
                              <td>
                                <span className="label label-default">Hold</span>
                              </td>
                            </tr>
                            <tr>
                              <td><span className="txt-dark weight-500">Alaska</span>
                              </td>
                              <td>Neosoft</td>
                              <td><span className="txt-success"><i className="fa fa-angle-up" aria-hidden="true" /><span>7.43%</span></span>
                              </td>
                              <td>
                                <span className="txt-dark weight-500">$325</span>
                              </td>
                              <td>
                                <span className="label label-default">Hold</span>
                              </td>
                            </tr>
                            <tr>
                              <td><span className="txt-dark weight-500">New Jersey</span>
                              </td>
                              <td>Hencework</td>
                              <td><span className="txt-success"><i className="fa fa-angle-up" aria-hidden="true" /><span>9.43%</span></span>
                              </td>
                              <td>
                                <span>$258</span>
                              </td>
                              <td>
                                <span className="label label-success">Active</span>
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
            <div className="sb2-2-3">
              <div className="row">
                {/*== Listing Enquiry ==*/}
                <div className="col-md-12">
                  <div className="box-inn-sp">
                    <div className="inn-title">
                      <h4>Exam Time Tables</h4>
                      <p>Education is about teaching, learning skills and knowledge.</p>
                    </div>
                    <div className="tab-inn">
                      <div className="table-responsive table-desi">
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th>Select</th>
                              <th>Degree</th>
                              <th>Exam Name</th>
                              <th>Start Date</th>
                              <th>End Date</th>
                              <th>Timing</th>
                              <th>View</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <input type="checkbox" className="filled-in" id="filled-in-box-1" defaultChecked="checked" />
                                <label htmlFor="filled-in-box-1" />
                              </td>
                              <td>MBA</td>
                              <td><span className="list-enq-name">Civil engineering</span><span className="list-enq-city">Illunois, United States</span>
                              </td>
                              <td>10:00am</td>
                              <td>01:00pm</td>
                              <td>03:00Hrs</td>
                              <td>
                                <Link to="../admin-exam" className="ad-st-view">View</Link>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input type="checkbox" className="filled-in" id="filled-in-box-2" />
                                <label htmlFor="filled-in-box-2" />
                              </td>
                              <td>MBA</td>
                              <td><span className="list-enq-name">Google Business</span><span className="list-enq-city">Illunois, United States</span>
                              </td>
                              <td>10:00am</td>
                              <td>01:00pm</td>
                              <td>03:00Hrs</td>
                              <td>
                                <Link to="../admin-exam" className="ad-st-view">View</Link>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input type="checkbox" className="filled-in" id="filled-in-box-3" />
                                <label htmlFor="filled-in-box-3" />
                              </td>
                              <td>MBA</td>
                              <td><span className="list-enq-name">Statistics</span><span className="list-enq-city">Illunois, United States</span>
                              </td>
                              <td>10:00am</td>
                              <td>01:00pm</td>
                              <td>03:00Hrs</td>
                              <td>
                                <Link to="../admin-exam" className="ad-st-view">View</Link>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input type="checkbox" className="filled-in" id="filled-in-box-4" />
                                <label htmlFor="filled-in-box-4" />
                              </td>
                              <td>MBA</td>
                              <td><span className="list-enq-name">Business Management</span><span className="list-enq-city">Illunois, United States</span>
                              </td>
                              <td>10:00am</td>
                              <td>01:00pm</td>
                              <td>03:00Hrs</td>
                              <td>
                                <Link to="../admin-exam" className="ad-st-view">View</Link>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input type="checkbox" className="filled-in" id="filled-in-box-5" />
                                <label htmlFor="filled-in-box-5" />
                              </td>
                              <td>MBA</td>
                              <td><span className="list-enq-name">Art/Design</span><span className="list-enq-city">Illunois, United States</span>
                              </td>
                              <td>10:00am</td>
                              <td>01:00pm</td>
                              <td>03:00Hrs</td>
                              <td>
                                <Link to="../admin-exam" className="ad-st-view">View</Link>
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
            {/*== Latest Activity ==*/}
            <div className="sb2-2-3">
              <div className="row">
                {/*== Latest Activity ==*/}
                <div className="col-md-6">
                  <div className="box-inn-sp">
                    <div className="inn-title">
                      <h4>Latest Activity</h4>
                      <p>Education is about teaching, learning skills and knowledge.</p>
                    </div>
                    <div className="tab-inn list-act-hom">
                      <ul>
                        <li className="list-act-hom-con">
                          <i className="fa fa-clock-o" aria-hidden="true" />
                          <h4><span>12 may, 2017</span> Welcome to Academy</h4>
                          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                        </li>
                        <li className="list-act-hom-con">
                          <i className="fa fa-clock-o" aria-hidden="true" />
                          <h4><span>08 Jun, 2017</span> Academy Leadership</h4>
                          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                        </li>
                        <li className="list-act-hom-con">
                          <i className="fa fa-clock-o" aria-hidden="true" />
                          <h4><span>27 July, 2017</span> Awards and Achievement</h4>
                          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                        </li>
                        <li className="list-act-hom-con">
                          <i className="fa fa-clock-o" aria-hidden="true" />
                          <h4><span>14 Aug, 2017</span> Facilities and Management</h4>
                          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                        </li>
                        <li className="list-act-hom-con">
                          <i className="fa fa-clock-o" aria-hidden="true" />
                          <h4><span>24 Sep, 2017</span> Nation award winning 2017</h4>
                          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/*== Social Media ==*/}
                <div className="col-md-6">
                  <div className="box-inn-sp">
                    <div className="inn-title">
                      <h4>Social Media</h4>
                      <p>Education is about teaching, learning skills and knowledge.</p>
                    </div>
                    <div className="tab-inn">
                      <div className="table-responsive table-desi">
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th>Media</th>
                              <th>Name</th>
                              <th>Share</th>
                              <th>Like</th>
                              <th>Members</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><span className="list-img"><img src={require("../assets/images/sm/1.png")} alt="" /></span>
                              </td>
                              <td><span className="list-enq-name">Linked In</span><span className="list-enq-city">Illunois, United States</span>
                              </td>
                              <td>15K</td>
                              <td>18K</td>
                              <td>
                                <span className="label label-success">263</span>
                              </td>
                            </tr>
                            <tr>
                              <td><span className="list-img"><img src={require("../assets/images/sm/2.png")} alt="" /></span>
                              </td>
                              <td><span className="list-enq-name">Twitter</span><span className="list-enq-city">Illunois, United States</span>
                              </td>
                              <td>15K</td>
                              <td>18K</td>
                              <td>
                                <span className="label label-success">263</span>
                              </td>
                            </tr>
                            <tr>
                              <td><span className="list-img"><img src={require("../assets/images/sm/3.png")} alt="" /></span>
                              </td>
                              <td><span className="list-enq-name">Facebook</span><span className="list-enq-city">Illunois, United States</span>
                              </td>
                              <td>15K</td>
                              <td>18K</td>
                              <td>
                                <span className="label label-success">263</span>
                              </td>
                            </tr>
                            <tr>
                              <td><span className="list-img"><img src={require("../assets/images/sm/4.png")} alt="" /></span>
                              </td>
                              <td><span className="list-enq-name">Google Plus</span><span className="list-enq-city">Illunois, United States</span>
                              </td>
                              <td>15K</td>
                              <td>18K</td>
                              <td>
                                <span className="label label-success">263</span>
                              </td>
                            </tr>
                            <tr>
                              <td><span className="list-img"><img src={require("../assets/images/sm/5.png")} alt="" /></span>
                              </td>
                              <td><span className="list-enq-name">YouTube</span><span className="list-enq-city">Illunois, United States</span>
                              </td>
                              <td>15K</td>
                              <td>18K</td>
                              <td>
                                <span className="label label-success">263</span>
                              </td>
                            </tr>
                            <tr>
                              <td><span className="list-img"><img src={require("../assets/images/sm/6.png")} alt="" /></span>
                              </td>
                              <td><span className="list-enq-name">WhatsApp</span><span className="list-enq-city">Illunois, United States</span>
                              </td>
                              <td>15K</td>
                              <td>18K</td>
                              <td>
                                <span className="label label-success">263</span>
                              </td>
                            </tr>
                            <tr>
                              <td><span className="list-img"><img src={require("../assets/images/sm/7.png")} alt="" /></span>
                              </td>
                              <td><span className="list-enq-name">VK</span><span className="list-enq-city">Illunois, United States</span>
                              </td>
                              <td>15K</td>
                              <td>18K</td>
                              <td>
                                <span className="label label-success">263</span>
                              </td>
                            </tr>
                            <tr>
                              <td><span className="list-img"><img src={require("../assets/images/sm/2.png")} alt="" /></span>
                              </td>
                              <td><span className="list-enq-name">Twitter</span><span className="list-enq-city">Illunois, United States</span>
                              </td>
                              <td>15K</td>
                              <td>18K</td>
                              <td>
                                <span className="label label-success">263</span>
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
            {/*== User Details ==*/}
            <div className="sb2-2-3">
              <div className="row">
                <div className="col-md-12">
                  <div className="box-inn-sp">
                    <div className="inn-title">
                      <h4>Google Map</h4>
                      <p>Education is about teaching, learning skills and knowledge.</p>
                    </div>
                    <div className="tab-inn">
                      <div className="table-responsive table-desi tab-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6290413.804893654!2d-93.99620524741552!3d39.66116578737809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880b2d386f6e2619%3A0x7f15825064115956!2sIllinois%2C+USA!5e0!3m2!1sen!2sin!4v1469954001005" title={'Google map'} allowFullScreen />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            </div>
        );
    };
}