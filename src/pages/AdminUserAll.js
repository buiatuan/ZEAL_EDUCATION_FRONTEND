import React,{Component} from "react";
import { Link } from 'react-router-dom';
import { HeaderAdmin } from "../components/HeaderAdmin";
import { SidebarAdmin } from "../components/SidebarAdmin";
export class AdminUserAll extends Component{
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
                    <li className="active-bre"><Link to="../#"> Users(Students)</Link>
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
                                  <td><span className="list-img"><img src={require('../assets/images/user/1.png')} alt="" /></span>
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
                                  <td><span className="list-img"><img src={require('../assets/images/user/2.png')} alt="" /></span>
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
                                  <td><span className="list-img"><img src={require('../assets/images/user/4.png')} alt="" /></span>
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
                                  <td><span className="list-img"><img src={require('../assets/images/user/5.png')} alt="" /></span>
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
                                  <td><span className="list-img"><img src={require('../assets/images/user/1.png')} alt="" /></span>
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
                                  <td><span className="list-img"><img src={require('../assets/images/user/2.png')} alt="" /></span>
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
                                  <td><span className="list-img"><img src={require('../assets/images/user/4.png')} alt="" /></span>
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
                                  <td><span className="list-img"><img src={require('../assets/images/user/5.png')} alt="" /></span>
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
              </div>
            </div>
          </div>
          {/*Import jQuery before materialize.js*/}
        </div>
      );
    }
  };