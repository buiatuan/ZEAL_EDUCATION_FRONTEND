import React,{Component} from "react";
import { Link } from 'react-router-dom';
export class AdminSeminarAll extends Component{
    render() {

      return (
        <div>
          {/*== MAIN CONTRAINER ==*/}
          <div className="container-fluid sb1">
            <div className="row">
              {/*== LOGO ==*/}
              <div className="col-md-2 col-sm-3 col-xs-6 sb1-1">
                <Link to="/#" className="btn-close-menu"><i className="fa fa-times" aria-hidden="true" /></Link>
                <Link to="/#" className="atab-menu"><i className="fa fa-bars tab-menu" aria-hidden="true" /></Link>
                <Link to="/index" className="logo"><img src={require('../assets/images/logo1.png')} alt="" />
                </Link>
              </div>
              {/*== SEARCH ==*/}
              <div className="col-md-6 col-sm-6 mob-hide">
                <form className="app-search">
                  <input type="text" placeholder="Search..." className="form-control" />
                  <Link to="/#"><i className="fa fa-search" /></Link>
                </form>
              </div>
              {/*== NOTIFICATION ==*/}
              <div className="col-md-2 tab-hide">
                <div className="top-not-cen">
                  <Link className="waves-effect btn-noti" to="/admin-all-enquiry" title="all enquiry messages"><i className="fa fa-commenting-o" aria-hidden="true" /><span>5</span></Link>
                  <Link className="waves-effect btn-noti" to="/admin-course-enquiry" title="course booking messages"><i className="fa fa-envelope-o" aria-hidden="true" /><span>5</span></Link>
                  <Link className="waves-effect btn-noti" to="/admin-admission-enquiry" title="admission enquiry"><i className="fa fa-tag" aria-hidden="true" /><span>5</span></Link>
                </div>
              </div>
              {/*== MY ACCCOUNT ==*/}
              <div className="col-md-2 col-sm-3 col-xs-6">
                {/* Dropdown Trigger */}
                <Link className="waves-effect dropdown-button top-user-pro" to="/#" data-activates="top-menu"><img src={require('../assets/images/user/6.png')} alt="" />My Account <i className="fa fa-angle-down" aria-hidden="true" />
                </Link>
                {/* Dropdown Structure */}
                <ul id="top-menu" className="dropdown-content top-menu-sty">
                  <li><Link to="/admin-panel-setting" className="waves-effect"><i className="fa fa-cogs" aria-hidden="true" />Admin Setting</Link>
                  </li>
                  <li className="divider" />
                  <li><Link to="/#" className="ho-dr-con-last waves-effect"><i className="fa fa-sign-in" aria-hidden="true" /> Logout</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*== BODY CONTNAINER ==*/}
          <div className="container-fluid sb2">
            <div className="row">
              <div className="sb2-1">
                {/*== USER INFO ==*/}
                <div className="sb2-12">
                  <ul>
                    <li><img src={require('../assets/images/placeholder.jpg')} alt="" />
                    </li>
                    <li>
                      <h5>Victoria Baker <span> Santa Ana, CA</span></h5>
                    </li>
                    <li />
                  </ul>
                </div>
                {/*== LEFT MENU ==*/}
                <div className="sb2-13">
                  <ul className="collapsible" data-collapsible="accordion">
                    <li><Link to="/admin" className="menu-active"><i className="fa fa-bar-chart" aria-hidden="true" /> Dashboard</Link>
                    </li>
                    <li><Link to="/admin-setting"><i className="fa fa-cogs" aria-hidden="true" /> Site Setting</Link>
                    </li>
                    <li><Link to="/javascript:void(0)" className="collapsible-header"><i className="fa fa-book" aria-hidden="true" /> All Courses</Link>
                      <div className="collapsible-body left-sub-menu">
                        <ul>
                          <li><Link to="/admin-all-courses">All Course</Link>
                          </li>
                          <li><Link to="/admin-add-courses">Add New Course</Link>
                          </li>
                          <li><Link to="/admin-trash-courses">Trash Course</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li><Link to="/javascript:void(0)" className="collapsible-header"><i className="fa fa-user" aria-hidden="true" /> Users</Link>
                      <div className="collapsible-body left-sub-menu">
                        <ul>
                          <li><Link to="/admin-user-all">All Users</Link>
                          </li>
                          <li><Link to="/admin-user-add">Add New user</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li><Link to="/javascript:void(0)" className="collapsible-header"><i className="fa fa-bookmark-o" aria-hidden="true" />All Pages</Link>
                      <div className="collapsible-body left-sub-menu">
                        <ul>
                          <li><Link to="/admin-page-all">Pages</Link>
                          </li>
                          <li><Link to="/admin-page-add">Create New Page</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li><Link to="/javascript:void(0)" className="collapsible-header"><i className="fa fa-bars" aria-hidden="true" /> Menu</Link>
                      <div className="collapsible-body left-sub-menu">
                        <ul>
                          <li><Link to="/admin-main-menu">Main menu</Link></li>
                          <li><Link to="/admin-about-menu">About menu</Link></li>
                          <li><Link to="/admin-admission-menu">Admission menu</Link></li>
                          <li><Link to="/admin-all-menu">All page menu</Link></li>
                        </ul>
                      </div>
                    </li>
                    <li><Link to="/admin-slider"><i className="fa fa-image" aria-hidden="true" /> Slider</Link>
                    </li>
                    <li><Link to="/admin-quick-link"><i className="fa fa-external-link-square" aria-hidden="true" /> Slider quick link</Link>
                    </li>
                    <li><Link to="/javascript:void(0)" className="collapsible-header"><i className="fa fa-calendar" aria-hidden="true" /> Events</Link>
                      <div className="collapsible-body left-sub-menu">
                        <ul>
                          <li><Link to="/admin-event-all">All Events</Link>
                          </li>
                          <li><Link to="/admin-event-add">Create New Events</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li><Link to="/javascript:void(0)" className="collapsible-header"><i className="fa fa-bullhorn" aria-hidden="true" /> Seminar</Link>
                      <div className="collapsible-body left-sub-menu">
                        <ul>
                          <li><Link to="/admin-seminar-all">All Seminar</Link>
                          </li>
                          <li><Link to="/admin-seminar-add">Create New Seminar</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li><Link to="/javascript:void(0)" className="collapsible-header"><i className="fa fa-graduation-cap" aria-hidden="true" /> Job Vacants</Link>
                      <div className="collapsible-body left-sub-menu">
                        <ul>
                          <li><Link to="/admin-job-all">All Jobs</Link>
                          </li>
                          <li><Link to="/admin-job-add">Create New Job</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li><Link to="/javascript:void(0)" className="collapsible-header"><i className="fa fa-pencil" aria-hidden="true" /> Exam time table</Link>
                      <div className="collapsible-body left-sub-menu">
                        <ul>
                          <li><Link to="/admin-exam-all">All Exams</Link></li>
                          <li><Link to="/admin-exam-add">Add New Exam</Link></li>
                          <li><Link to="/admin-exam-group-all">All Groups</Link></li>
                          <li><Link to="/admin-exam-group-add">Create New Groups</Link></li>
                        </ul>
                      </div>
                    </li>
                    <li><Link to="/javascript:void(0)" className="collapsible-header"><i className="fa fa-users" aria-hidden="true" /> Students</Link>
                      <div className="collapsible-body left-sub-menu">
                        <ul>
                          <li><Link to="/admin-user-all">All Students</Link>
                          </li>
                          <li><Link to="/admin-user-add">Add New Students</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li><Link to="/javascript:void(0)" className="collapsible-header"><i className="fa fa-commenting-o" aria-hidden="true" /> Enquiry</Link>
                      <div className="collapsible-body left-sub-menu">
                        <ul>
                          <li><Link to="/admin-all-enquiry">All Enquiry</Link></li>
                          <li><Link to="/admin-course-enquiry">Course Enquiry</Link></li>
                          <li><Link to="/admin-admission-enquiry">Admission Enquiry</Link></li>
                          <li><Link to="/admin-seminar-enquiry">Seminar Enquiry</Link></li>
                          <li><Link to="/admin-event-enquiry">Event Enquiry</Link></li>
                          <li><Link to="/admin-common-enquiry">Common Enquiry</Link></li>
                        </ul>
                      </div>
                    </li>
                    <li><Link to="/javascript:void(0)" className="collapsible-header"><i className="fa fa-cloud-download" aria-hidden="true" /> Import &amp; Export</Link>
                      <div className="collapsible-body left-sub-menu">
                        <ul>
                          <li><Link to="/admin-export-data">Export all datas</Link>
                          </li>
                          <li><Link to="/admin-import-data">Import all datas</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/*== BODY INNER CONTAINER ==*/}
              <div className="sb2-2">
                {/*== breadcrumbs ==*/}
                <div className="sb2-2-2">
                  <ul>
                    <li><Link to="/index"><i className="fa fa-home" aria-hidden="true" /> Home</Link>
                    </li>
                    <li className="active-bre"><Link to="/#"> Seminars</Link>
                    </li>
                    <li className="page-back"><Link to="/index"><i className="fa fa-backward" aria-hidden="true" /> Back</Link>
                    </li>
                  </ul>
                </div>
                {/*== User Details ==*/}
                <div className="sb2-2-3">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="box-inn-sp">
                        <div className="inn-title">
                          <h4>All Seminars</h4>
                          <p>All about students like name, student id, phone, email, country, city and more</p>
                        </div>
                        <div className="tab-inn">
                          <div className="table-responsive table-desi">
                            <table className="table table-hover">
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th>Image</th>
                                  <th>Name</th>
                                  <th>Start Date</th>
                                  <th>Location</th>
                                  <th>Status</th>
                                  <th>Edit</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td><span className="list-img"><img src={require('../assets/images/course/sm-1.jpg')} alt="" /></span></td>
                                  <td>Admissions Information 2018</td>
                                  <td>21 June 2018</td>
                                  <td>los angeles</td>
                                  <td>
                                    <span className="label label-success">Active</span>
                                  </td>
                                  <td><Link to="/admin-seminar-edit" className="ad-st-view">Edit</Link></td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td><span className="list-img"><img src={require('../assets/images/course/sm-2.jpg')} alt="" /></span></td>
                                  <td>CUNY Assessment Test Workshop</td>
                                  <td>05 April 2018</td>
                                  <td>los angeles</td>
                                  <td>
                                    <span className="label label-success">Active</span>
                                  </td>
                                  <td><Link to="/admin-seminar-edit" className="ad-st-view">Edit</Link></td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td><span className="list-img"><img src={require('../assets/images/course/sm-3.jpg')} alt="" /></span></td>
                                  <td>Fire &amp; ice launch party</td>
                                  <td>12 December 2018</td>
                                  <td>los angeles</td>
                                  <td>
                                    <span className="label label-success">Active</span>
                                  </td>
                                  <td><Link to="/admin-seminar-edit" className="ad-st-view">Edit</Link></td>
                                </tr>
                                <tr>
                                  <td>4</td>
                                  <td><span className="list-img"><img src={require('../assets/images/course/sm-4.jpg')} alt="" /></span></td>
                                  <td>Educate to Empower NYE Party</td>
                                  <td>21 June 2018</td>
                                  <td>los angeles</td>
                                  <td>
                                    <span className="label label-success">Active</span>
                                  </td>
                                  <td><Link to="/admin-seminar-edit" className="ad-st-view">Edit</Link></td>
                                </tr>
                                <tr>
                                  <td>5</td>
                                  <td><span className="list-img"><img src={require('../assets/images/course/sm-5.jpg')} alt="" /></span></td>
                                  <td>Latinoo College Expo 2018 - DONATION</td>
                                  <td>21 June 2018</td>
                                  <td>los angeles</td>
                                  <td>
                                    <span className="label label-success">Active</span>
                                  </td>
                                  <td><Link to="/admin-seminar-edit" className="ad-st-view">Edit</Link></td>
                                </tr>
                                <tr>
                                  <td>6</td>
                                  <td><span className="list-img"><img src={require('../assets/images/course/sm-6.jpg')} alt="" /></span></td>
                                  <td>Training at Team Fabio Clemente</td>
                                  <td>21 June 2018</td>
                                  <td>los angeles</td>
                                  <td>
                                    <span className="label label-success">Active</span>
                                  </td>
                                  <td><Link to="/admin-seminar-edit" className="ad-st-view">Edit</Link></td>
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