import React,{Component} from "react";
import { Link } from 'react-router-dom';
import { HeaderAdmin } from "../components/HeaderAdmin";
import { SidebarAdmin } from "../components/SidebarAdmin";
export class AdminAllCourses extends Component{
    render() {

      return (
        <div>
       <HeaderAdmin/>
      {/*== BODY CONTNAINER ==*/}
      <div className="container-fluid sb2">
        <div className="row">
          {/*== BODY INNER CONTAINER ==*/}
          <SidebarAdmin/>
              {/*== BODY INNER CONTAINER ==*/}
              <div className="sb2-2">
                {/*== breadcrumbs ==*/}
                <div className="sb2-2-2">
                  <ul>
                    <li><Link to="../index"><i className="fa fa-home" aria-hidden="true" /> Home</Link>
                    </li>
                    <li className="active-bre"><Link to="../#"> Dashboard</Link>
                    </li>
                    <li className="page-back"><Link to="../index"><i className="fa fa-backward" aria-hidden="true" /> Back</Link>
                    </li>
                  </ul>
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
                                  <td><span className="list-img"><img src={require('../assets/images/course/sm-1.jpg')} alt="" /></span>
                                  </td>
                                  <td><Link to="../admin-course-details"><span className="list-enq-name">Aerospace Engineering</span><span className="list-enq-city">Illunois, United States</span></Link>
                                  </td>
                                  <td>Engineering</td>
                                  <td>60 Days(420hrs)</td>
                                  <td>03 Jun 2018</td>
                                  <td>12 Aug 2018</td>
                                  <td>74</td>
                                  <td>
                                    <span className="label label-success">Active</span>
                                  </td>
                                  <td><Link to="../admin-course-details" className="ad-st-view">Edit</Link></td>
                                </tr>
                                <tr>
                                  <td><span className="list-img"><img src={require('../assets/images/course/sm-5.jpg')} alt="" /></span>
                                  </td>
                                  <td><Link to="../admin-course-details"><span className="list-enq-name">Fashion Technology</span><span className="list-enq-city">Illunois, United States</span></Link>
                                  </td>
                                  <td>Fashion</td>
                                  <td>30 Days(420hrs)</td>
                                  <td>01 Nov 2018</td>
                                  <td>01 Dec 2018</td>
                                  <td>30</td>
                                  <td>
                                    <span className="label label-success">Active</span>
                                  </td>
                                  <td><Link to="../admin-course-details" className="ad-st-view">Edit</Link></td>
                                </tr>
                                <tr>
                                  <td><span className="list-img"><img src={require('../assets/images/course/sm-2.jpg')} alt="" /></span>
                                  </td>
                                  <td><Link to="../admin-course-details"><span className="list-enq-name">Agriculture Courses</span><span className="list-enq-city">Illunois, United States</span></Link>
                                  </td>
                                  <td>Agriculture</td>
                                  <td>25 Days(420hrs)</td>
                                  <td>05 Jan 2018</td>
                                  <td>25 Jan 2018</td>
                                  <td>25</td>
                                  <td>
                                    <span className="label label-success">Active</span>
                                  </td>
                                  <td><Link to="../admin-course-details" className="ad-st-view">Edit</Link></td>
                                </tr>
                                <tr>
                                  <td><span className="list-img"><img src={require('../assets/images/course/sm-3.jpg')} alt="" /></span>
                                  </td>
                                  <td><Link to="../admin-course-details"><span className="list-enq-name">Marine Engineering</span><span className="list-enq-city">Illunois, United States</span></Link>
                                  </td>
                                  <td>Ocean / Marine</td>
                                  <td>06 Months</td>
                                  <td>12 Feb 2018</td>
                                  <td>14 Aug 2018</td>
                                  <td>68</td>
                                  <td>
                                    <span className="label label-success">Active</span>
                                  </td>
                                  <td><Link to="../admin-course-details" className="ad-st-view">Edit</Link></td>
                                </tr>
                                <tr>
                                  <td><span className="list-img"><img src={require('../assets/images/course/sm-4.jpg')} alt="" /></span>
                                  </td>
                                  <td><Link to="../admin-course-details"><span className="list-enq-name">Building, Construction Management</span><span className="list-enq-city">Illunois, United States</span></Link>
                                  </td>
                                  <td>Construction</td>
                                  <td>1 Year</td>
                                  <td>05 Mar 2018</td>
                                  <td>16 Mar 2018</td>
                                  <td>72</td>
                                  <td>
                                    <span className="label label-success">Active</span>
                                  </td>
                                  <td><Link to="../admin-course-details" className="ad-st-view">Edit</Link></td>
                                </tr>
                                <tr>
                                  <td><span className="list-img"><img src={require('../assets/images/course/sm-1.jpg')} alt="" /></span>
                                  </td>
                                  <td><Link to="../admin-course-details"><span className="list-enq-name">Aerospace Engineering</span><span className="list-enq-city">Illunois, United States</span></Link>
                                  </td>
                                  <td>Engineering</td>
                                  <td>60 Days(420hrs)</td>
                                  <td>03 Jun 2018</td>
                                  <td>12 Aug 2018</td>
                                  <td>74</td>
                                  <td>
                                    <span className="label label-success">Active</span>
                                  </td>
                                  <td><Link to="../admin-course-details" className="ad-st-view">Edit</Link></td>
                                </tr>
                                <tr>
                                  <td><span className="list-img"><img src={require('../assets/images/course/sm-5.jpg')} alt="" /></span>
                                  </td>
                                  <td><Link to="../admin-course-details"><span className="list-enq-name">Fashion Technology</span><span className="list-enq-city">Illunois, United States</span></Link>
                                  </td>
                                  <td>Fashion</td>
                                  <td>30 Days(420hrs)</td>
                                  <td>01 Nov 2018</td>
                                  <td>01 Dec 2018</td>
                                  <td>30</td>
                                  <td>
                                    <span className="label label-success">Active</span>
                                  </td>
                                  <td><Link to="../admin-course-details" className="ad-st-view">Edit</Link></td>
                                </tr>
                                <tr>
                                  <td><span className="list-img"><img src={require('../assets/images/course/sm-2.jpg')} alt="" /></span>
                                  </td>
                                  <td><Link to="../admin-course-details"><span className="list-enq-name">Agriculture Courses</span><span className="list-enq-city">Illunois, United States</span></Link>
                                  </td>
                                  <td>Agriculture</td>
                                  <td>25 Days(420hrs)</td>
                                  <td>05 Jan 2018</td>
                                  <td>25 Jan 2018</td>
                                  <td>25</td>
                                  <td>
                                    <span className="label label-success">Active</span>
                                  </td>
                                  <td><Link to="../admin-course-details" className="ad-st-view">Edit</Link></td>
                                </tr>
                                <tr>
                                  <td><span className="list-img"><img src={require('../assets/images/course/sm-3.jpg')} alt="" /></span>
                                  </td>
                                  <td><Link to="../admin-course-details"><span className="list-enq-name">Marine Engineering</span><span className="list-enq-city">Illunois, United States</span></Link>
                                  </td>
                                  <td>Ocean / Marine</td>
                                  <td>06 Months</td>
                                  <td>12 Feb 2018</td>
                                  <td>14 Aug 2018</td>
                                  <td>68</td>
                                  <td>
                                    <span className="label label-success">Active</span>
                                  </td>
                                  <td><Link to="../admin-course-details" className="ad-st-view">Edit</Link></td>
                                </tr>
                                <tr>
                                  <td><span className="list-img"><img src={require('../assets/images/course/sm-4.jpg')} alt="" /></span>
                                  </td>
                                  <td><Link to="../admin-course-details"><span className="list-enq-name">Building, Construction Management</span><span className="list-enq-city">Illunois, United States</span></Link>
                                  </td>
                                  <td>Construction</td>
                                  <td>1 Year</td>
                                  <td>05 Mar 2018</td>
                                  <td>16 Mar 2018</td>
                                  <td>72</td>
                                  <td>
                                    <span className="label label-success">Active</span>
                                  </td>
                                  <td><Link to="../admin-course-details" className="ad-st-view">Edit</Link></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Import jQuery before materialize.js*/}
        </div>
      );
    }
  };