import React,{Component} from "react";
import { Link } from 'react-router-dom';
export class AdminAddCourse extends Component{
    render() {

      return (
        <div>
          {/*== MAIN CONTRAINER ==*/}
          <div className="container-fluid sb1">
            <div className="row">
              {/*== LOGO ==*/}
              <div className="col-md-2 col-sm-3 col-xs-6 sb1-1">
                <Link to="../#" className="btn-close-menu"><i className="fa fa-times" aria-hidden="true" /></Link>
                <Link to="../#" className="atab-menu"><i className="fa fa-bars tab-menu" aria-hidden="true" /></Link>
                <Link to="../index" className="logo"><img src={require('../assets/images/logo1.png')} alt="" />
                </Link>
              </div>
              {/*== SEARCH ==*/}
              <div className="col-md-6 col-sm-6 mob-hide">
                <form className="app-search">
                  <input type="text" placeholder="Search..." className="form-control" />
                  <Link to="../#"><i className="fa fa-search" /></Link>
                </form>
              </div>
              {/*== NOTIFICATION ==*/}
              <div className="col-md-2 tab-hide">
                <div className="top-not-cen">
                  <Link className="waves-effect btn-noti" to="../admin-all-enquiry" title="all enquiry messages"><i className="fa fa-commenting-o" aria-hidden="true" /><span>5</span></Link>
                  <Link className="waves-effect btn-noti" to="../admin-course-enquiry" title="course booking messages"><i className="fa fa-envelope-o" aria-hidden="true" /><span>5</span></Link>
                  <Link className="waves-effect btn-noti" to="../admin-admission-enquiry" title="admission enquiry"><i className="fa fa-tag" aria-hidden="true" /><span>5</span></Link>
                </div>
              </div>
              {/*== MY ACCCOUNT ==*/}
              <div className="col-md-2 col-sm-3 col-xs-6">
                {/* Dropdown Trigger */}
                <Link className="waves-effect dropdown-button top-user-pro" to="../#" data-activates="top-menu"><img src={require('../assets/images/user/6.png')} alt="" />My Account <i className="fa fa-angle-down" aria-hidden="true" />
                </Link>
                {/* Dropdown Structure */}
                <ul id="top-menu" className="dropdown-content top-menu-sty">
                  <li><Link to="../admin-panel-setting" className="waves-effect"><i className="fa fa-cogs" aria-hidden="true" />Admin Setting</Link>
                  </li>
                  <li className="divider" />
                  <li><Link to="../#" className="ho-dr-con-last waves-effect"><i className="fa fa-sign-in" aria-hidden="true" /> Logout</Link>
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
                    <li><Link to="../admin" className="menu-active"><i className="fa fa-bar-chart" aria-hidden="true" /> Dashboard</Link>
                    </li>
                    <li><Link to="../admin-setting"><i className="fa fa-cogs" aria-hidden="true" /> Site Setting</Link>
                    </li>
                    <li><Link to="../javascript:void(0)" className="collapsible-header"><i className="fa fa-book" aria-hidden="true" /> All Courses</Link>
                      <div className="collapsible-body left-sub-menu">
                        <ul>
                          <li><Link to="../admin-all-courses">All Course</Link>
                          </li>
                          <li><Link to="../admin-add-courses">Add New Course</Link>
                          </li>
                          <li><Link to="../admin-trash-courses">Trash Course</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li><Link to="../javascript:void(0)" className="collapsible-header"><i className="fa fa-user" aria-hidden="true" /> Users</Link>
                      <div className="collapsible-body left-sub-menu">
                        <ul>
                          <li><Link to="../admin-user-all">All Users</Link>
                          </li>
                          <li><Link to="../admin-user-add">Add New user</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li><Link to="../javascript:void(0)" className="collapsible-header"><i className="fa fa-bookmark-o" aria-hidden="true" />All Pages</Link>
                      <div className="collapsible-body left-sub-menu">
                        <ul>
                          <li><Link to="../admin-page-all">Pages</Link>
                          </li>
                          <li><Link to="../admin-page-add">Create New Page</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li><Link to="../javascript:void(0)" className="collapsible-header"><i className="fa fa-bars" aria-hidden="true" /> Menu</Link>
                      <div className="collapsible-body left-sub-menu">
                        <ul>
                          <li><Link to="../admin-main-menu">Main menu</Link></li>
                          <li><Link to="../admin-about-menu">About menu</Link></li>
                          <li><Link to="../admin-admission-menu">Admission menu</Link></li>
                          <li><Link to="../admin-all-menu">All page menu</Link></li>
                        </ul>
                      </div>
                    </li>
                    <li><Link to="../admin-slider"><i className="fa fa-image" aria-hidden="true" /> Slider</Link>
                    </li>
                    <li><Link to="../admin-quick-link"><i className="fa fa-external-link-square" aria-hidden="true" /> Slider quick link</Link>
                    </li>
                    <li><Link to="../javascript:void(0)" className="collapsible-header"><i className="fa fa-calendar" aria-hidden="true" /> Events</Link>
                      <div className="collapsible-body left-sub-menu">
                        <ul>
                          <li><Link to="../admin-event-all">All Events</Link>
                          </li>
                          <li><Link to="../admin-event-add">Create New Events</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li><Link to="../javascript:void(0)" className="collapsible-header"><i className="fa fa-bullhorn" aria-hidden="true" /> Seminar</Link>
                      <div className="collapsible-body left-sub-menu">
                        <ul>
                          <li><Link to="../admin-seminar-all">All Seminar</Link>
                          </li>
                          <li><Link to="../admin-seminar-add">Create New Seminar</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li><Link to="../javascript:void(0)" className="collapsible-header"><i className="fa fa-graduation-cap" aria-hidden="true" /> Job Vacants</Link>
                      <div className="collapsible-body left-sub-menu">
                        <ul>
                          <li><Link to="../admin-job-all">All Jobs</Link>
                          </li>
                          <li><Link to="../admin-job-add">Create New Job</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li><Link to="../javascript:void(0)" className="collapsible-header"><i className="fa fa-pencil" aria-hidden="true" /> Exam time table</Link>
                      <div className="collapsible-body left-sub-menu">
                        <ul>
                          <li><Link to="../admin-exam-all">All Exams</Link></li>
                          <li><Link to="../admin-exam-add">Add New Exam</Link></li>
                          <li><Link to="../admin-exam-group-all">All Groups</Link></li>
                          <li><Link to="../admin-exam-group-add">Create New Groups</Link></li>
                        </ul>
                      </div>
                    </li>
                    <li><Link to="../javascript:void(0)" className="collapsible-header"><i className="fa fa-users" aria-hidden="true" /> Students</Link>
                      <div className="collapsible-body left-sub-menu">
                        <ul>
                          <li><Link to="../admin-user-all">All Students</Link>
                          </li>
                          <li><Link to="../admin-user-add">Add New Students</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li><Link to="../javascript:void(0)" className="collapsible-header"><i className="fa fa-commenting-o" aria-hidden="true" /> Enquiry</Link>
                      <div className="collapsible-body left-sub-menu">
                        <ul>
                          <li><Link to="../admin-all-enquiry">All Enquiry</Link></li>
                          <li><Link to="../admin-course-enquiry">Course Enquiry</Link></li>
                          <li><Link to="../admin-admission-enquiry">Admission Enquiry</Link></li>
                          <li><Link to="../admin-seminar-enquiry">Seminar Enquiry</Link></li>
                          <li><Link to="../admin-event-enquiry">Event Enquiry</Link></li>
                          <li><Link to="../admin-common-enquiry">Common Enquiry</Link></li>
                        </ul>
                      </div>
                    </li>
                    <li><Link to="../javascript:void(0)" className="collapsible-header"><i className="fa fa-cloud-download" aria-hidden="true" /> Import &amp; Export</Link>
                      <div className="collapsible-body left-sub-menu">
                        <ul>
                          <li><Link to="../admin-export-data">Export all datas</Link>
                          </li>
                          <li><Link to="../admin-import-data">Import all datas</Link>
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
                    <li><Link to="../index"><i className="fa fa-home" aria-hidden="true" /> Home</Link>
                    </li>
                    <li className="active-bre"><Link to="../#"> Add new course</Link>
                    </li>
                    <li className="page-back"><Link to="../index"><i className="fa fa-backward" aria-hidden="true" /> Back</Link>
                    </li>
                  </ul>
                </div>
                {/*== User Details ==*/}
                <div className="sb2-2-3">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="box-inn-sp admin-form">
                        <div className="sb2-2-add-blog sb2-2-1">
                          <h2>Add New Course</h2>
                          <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p>
                          <ul className="nav nav-tabs tab-list">
                            <li className="active"><Link data-toggle="tab" to="../#home" aria-expanded="true"><i className="fa fa-info" aria-hidden="true" /> <span>Detail</span></Link>
                            </li>
                            <li className><Link data-toggle="tab" to="../#menu1" aria-expanded="false"><i className="fa fa-bed" aria-hidden="true" /> <span>Course Syllabus</span></Link>
                            </li>
                            <li className><Link data-toggle="tab" to="../#menu2" aria-expanded="false"><i className="fa fa-picture-o" aria-hidden="true" /> <span>Banner Image</span></Link>
                            </li>
                            <li className><Link data-toggle="tab" to="../#menu3" aria-expanded="false"><i className="fa fa-facebook" aria-hidden="true" /> <span>Time table</span></Link>
                            </li>
                            <li className><Link data-toggle="tab" to="../#menu4" aria-expanded="false"><i className="fa fa-phone" aria-hidden="true" /> <span>Contact Info</span></Link>
                            </li>
                          </ul>
                          <div className="tab-content">
                            <div id="home" className="tab-pane fade active in">
                              <div className="box-inn-sp">
                                <div className="inn-title">
                                  <h4>Course Information</h4>
                                  <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                                </div>
                                <div className="bor">
                                  <form>
                                    <div className="row">
                                      <div className="input-field col s12">
                                        <input id="list-title" type="text" className="validate" />
                                        <label htmlFor="list-title" className>Course Name</label>
                                      </div>
                                      <div className="input-field col s12">
                                        <input id="list-name" type="text" className="validate" />
                                        <label htmlFor="list-name">Contact Person</label>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="input-field col s12">
                                        <textarea className="materialize-textarea" defaultValue={""} />
                                        <label>Course Descriptions:</label>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="input-field col s12">
                                        <select>
                                          <option value disabled selected>Select Status</option>
                                          <option value={1}>Active</option>
                                          <option value={2}>De-Active</option>
                                          <option value={3}>Delete</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="input-field col s12">
                                        <i className="waves-effect waves-light btn-large waves-input-wrapper" style={{}}><input type="submit" className="waves-button-input" defaultValue="Submit" /></i>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                            <div id="menu1" className="tab-pane fade">
                              <div className="inn-title">
                                <h4>Requirements, feese, student profile and how to apply</h4>
                                <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                              </div>
                              <div className="bor ad-cou-deta-h4">
                                <form>
                                  <h4>Requirements:</h4>
                                  <div className="row">
                                    <div className="input-field col s12">
                                      <textarea className="materialize-textarea" defaultValue={""} />
                                      <label>Course Descriptions:</label>
                                    </div>
                                  </div> 
                                  <h4>Feese:</h4>
                                  <div className="row">
                                    <div className="input-field col s12">
                                      <input type="number" className="validate" required />
                                      <label>1'st terms feese</label>
                                    </div>
                                    <div className="input-field col s12">
                                      <input type="number" className="validate" required />
                                      <label>2'nd terms feese</label>
                                    </div>
                                    <div className="input-field col s12">
                                      <input type="number" className="validate" required />
                                      <label>3'rd terms feese</label>
                                    </div>
                                    <div className="input-field col s12">
                                      <textarea className="materialize-textarea" defaultValue={""} />
                                      <label>Price Descriptions:</label>
                                    </div>
                                  </div>
                                  <h4>Student Profile:</h4>
                                  <div className="row">
                                    <div className="input-field col s12">
                                      <textarea className="materialize-textarea" defaultValue={""} />
                                      <label>Student Profile Descriptions:</label>
                                    </div>
                                  </div>	
                                  <h4>How to apply this course:</h4>
                                  <div className="row">
                                    <div className="input-field col s12">
                                      <input type="text" className="validate" required />
                                      <label>Step 1 Descriptions:</label>
                                    </div>
                                    <div className="input-field col s12">
                                      <input type="text" className="validate" required />
                                      <label>Step 2 Descriptions:</label>
                                    </div>
                                    <div className="input-field col s12">
                                      <input type="text" className="validate" required />
                                      <label>Step 3 Descriptions:</label>
                                    </div>
                                    <div className="input-field col s12">
                                      <input type="text" className="validate" required />
                                      <label>Step 4 Descriptions:</label>
                                    </div>
                                    <div className="input-field col s12">
                                      <input type="text" className="validate" required />
                                      <label>Step 5 Descriptions:</label>
                                    </div>
                                  </div>	
                                  <div className="row">
                                    <div className="input-field col s12">
                                      <i className="waves-effect waves-light btn-large waves-input-wrapper" style={{}}><input type="submit" className="waves-button-input" defaultValue="Submit" /></i>
                                    </div>
                                  </div>										
                                </form>
                              </div>
                            </div>
                            <div id="menu2" className="tab-pane fade">
                              <div className="inn-title">
                                <h4>Photo Gallery</h4>
                                <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                              </div>
                              <div className="bor">
                                <form action="#">
                                  <div className="file-field input-field">
                                    <div className="btn admin-upload-btn">
                                      <span>File</span>
                                      <input type="file" multiple />
                                    </div>
                                    <div className="file-path-wrapper">
                                      <input className="file-path validate" type="text" placeholder="Upload course banner image" />
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="input-field col s12">
                                      <i className="waves-effect waves-light btn-large waves-input-wrapper" style={{}}><input type="submit" className="waves-button-input" defaultValue="Upload" /></i>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div id="menu3" className="tab-pane fade">
                              <div className="inn-title">
                                <h4>Time table</h4>
                                <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                              </div>
                              <div className="bor ad-cou-deta-h4">
                                <form>
                                  <h4>1st semester:</h4>
                                  <div className="row">
                                    <div className="input-field col s12">
                                      <input type="text" className="validate" required />
                                      <label>Title:</label>
                                    </div>
                                    <div className="input-field col s12">
                                      <textarea className="materialize-textarea" defaultValue={""} />
                                      <label>Descriptions:</label>
                                    </div>
                                  </div> 
                                  <h4>2nd semester:</h4>
                                  <div className="row">
                                    <div className="input-field col s12">
                                      <input type="text" className="validate" required />
                                      <label>Title:</label>
                                    </div>
                                    <div className="input-field col s12">
                                      <textarea className="materialize-textarea" defaultValue={""} />
                                      <label>Descriptions:</label>
                                    </div>
                                  </div> 
                                  <h4>3rd semester:</h4>
                                  <div className="row">
                                    <div className="input-field col s12">
                                      <input type="text" className="validate" required />
                                      <label>Title:</label>
                                    </div>
                                    <div className="input-field col s12">
                                      <textarea className="materialize-textarea" defaultValue={""} />
                                      <label>Descriptions:</label>
                                    </div>
                                  </div> 
                                  <h4>4th semester:</h4>
                                  <div className="row">
                                    <div className="input-field col s12">
                                      <input type="text" className="validate" required />
                                      <label>Title:</label>
                                    </div>
                                    <div className="input-field col s12">
                                      <textarea className="materialize-textarea" defaultValue={""} />
                                      <label>Descriptions:</label>
                                    </div>
                                  </div> 
                                  <div className="row">
                                    <div className="input-field col s12">
                                      <i className="waves-effect waves-light btn-large waves-input-wrapper" style={{}}><input type="submit" className="waves-button-input" defaultValue="Submit" /></i>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div id="menu4" className="tab-pane fade">
                              <div className="inn-title">
                                <h4>Contact Info</h4>
                                <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                              </div>
                              <div className="bor">
                                <form>
                                  <div className="row">
                                    <div className="input-field col s6">
                                      <input id="t5-n1" type="text" className="validate" />
                                      <label htmlFor="t5-n1">Contact Name</label>
                                    </div>
                                    <div className="input-field col s6">
                                      <input id="t5-n2" type="text" className="validate" />
                                      <label htmlFor="t5-n2">Alter Contact Name</label>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="input-field col s6">
                                      <input id="t5-n3" type="number" className="validate" />
                                      <label htmlFor="t5-n3">Phone</label>
                                    </div>
                                    <div className="input-field col s6">
                                      <input id="t5-n4" type="number" className="validate" />
                                      <label htmlFor="t5-n4">Mobile</label>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="input-field col s12">
                                      <input id="t5-n5" type="email" className="validate" />
                                      <label htmlFor="t5-n5">Email</label>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="input-field col s12">
                                      <textarea id="t5-n6" className="materialize-textarea" defaultValue={""} />
                                      <label htmlFor="t5-n6">Listing Descriptions:</label>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="input-field col s12">
                                      <i className="waves-effect waves-light btn-large waves-input-wrapper" style={{}}><input type="submit" className="waves-button-input" defaultValue="Upload" /></i>
                                    </div>
                                  </div>
                                </form>
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
          </div>
          {/*Import jQuery before materialize.js*/}
        </div>
      );
    }
  };