import React, { Component } from "react";
import { Link } from "react-router-dom";

import M from 'materialize-css/dist/js/materialize.min.js';

export class SidebarAdmin extends Component {
    componentDidMount() {
        // Khởi tạo collapsible trong componentDidMount của component
        var elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems);
      }
  render() {
    return (
      <div>
        <div className="sb2-1">
          {/*== USER INFO ==*/}
          <div className="sb2-12">
            <ul>
              <li>
                <img
                  src={require("../asserts/images/placeholder.jpg")}
                  alt=""
                />
              </li>
              <li>
                <h5>
                  Victoria Baker <span> Santa Ana, CA</span>
                </h5>
              </li>
              <li />
            </ul>
          </div>
          {/*== LEFT MENU ==*/}
          <div className="sb2-13">
            <ul className="collapsible" data-collapsible="accordion">
              <li>
                <Link to="../admin" className="menu-active">
                  <i className="fa fa-bar-chart" aria-hidden="true" /> Dashboard
                </Link>
              </li>
              <li>
                <Link to="../admin-setting">
                  <i className="fa fa-cogs" aria-hidden="true" /> Site Setting
                </Link>
              </li>
              <li>
                <Link onClick={(e)=>e.preventDefault()} className="collapsible-header" >
                  <i className="fa fa-book" aria-hidden="true" /> All Courses
                </Link>
                <div className="collapsible-body left-sub-menu">
                  <ul>
                    <li>
                      <Link to="../admin-all-courses">All Course</Link>
                    </li>
                    <li>
                      <Link to="../admin-add-courses">Add New Course</Link>
                    </li>
                    <li>
                      <Link to="../admin-trash-courses">Trash Course</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link onClick={(e)=>e.preventDefault()} className="collapsible-header">
                  <i className="fa fa-user" aria-hidden="true" /> Users
                </Link>
                <div className="collapsible-body left-sub-menu">
                  <ul>
                    <li>
                      <Link to="../admin-user-all">All Users</Link>
                    </li>
                    <li>
                      <Link to="../admin-user-add">Add New user</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link onClick={(e)=>e.preventDefault()} className="collapsible-header">
                  <i className="fa fa-bookmark-o" aria-hidden="true" />
                  All Pages
                </Link>
                <div className="collapsible-body left-sub-menu">
                  <ul>
                    <li>
                      <Link to="../admin-page-all">Pages</Link>
                    </li>
                    <li>
                      <Link to="../admin-page-add">Create New Page</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link onClick={(e)=>e.preventDefault()} className="collapsible-header">
                  <i className="fa fa-bars" aria-hidden="true" /> Menu
                </Link>
                <div className="collapsible-body left-sub-menu">
                  <ul>
                    <li>
                      <Link to="../admin-main-menu">Main menu</Link>
                    </li>
                    <li>
                      <Link to="../admin-about-menu">About menu</Link>
                    </li>
                    <li>
                      <Link to="../admin-admission-menu">Admission menu</Link>
                    </li>
                    <li>
                      <Link to="../admin-all-menu">All page menu</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to="../admin-slider">
                  <i className="fa fa-image" aria-hidden="true" /> Slider
                </Link>
              </li>
              <li>
                <Link to="../admin-quick-link">
                  <i
                    className="fa fa-external-link-square"
                    aria-hidden="true"
                  />{" "}
                  Slider quick link
                </Link>
              </li>
              <li>
                <Link onClick={(e)=>e.preventDefault()} className="collapsible-header">
                  <i className="fa fa-calendar" aria-hidden="true" /> Events
                </Link>
                <div className="collapsible-body left-sub-menu">
                  <ul>
                    <li>
                      <Link to="../admin-event-all">All Events</Link>
                    </li>
                    <li>
                      <Link to="../admin-event-add">Create New Events</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link onClick={(e)=>e.preventDefault()} className="collapsible-header">
                  <i className="fa fa-bullhorn" aria-hidden="true" /> Seminar
                </Link>
                <div className="collapsible-body left-sub-menu">
                  <ul>
                    <li>
                      <Link to="../admin-seminar-all">All Seminar</Link>
                    </li>
                    <li>
                      <Link to="../admin-seminar-add">Create New Seminar</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link onClick={(e)=>e.preventDefault()} className="collapsible-header">
                  <i className="fa fa-graduation-cap" aria-hidden="true" /> Job
                  Vacants
                </Link>
                <div className="collapsible-body left-sub-menu">
                  <ul>
                    <li>
                      <Link to="../admin-job-all">All Jobs</Link>
                    </li>
                    <li>
                      <Link to="../admin-job-add">Create New Job</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link onClick={(e)=>e.preventDefault()} className="collapsible-header">
                  <i className="fa fa-pencil" aria-hidden="true" /> Exam time
                  table
                </Link>
                <div className="collapsible-body left-sub-menu">
                  <ul>
                    <li>
                      <Link to="../admin-exam-all">All Exams</Link>
                    </li>
                    <li>
                      <Link to="../admin-exam-add">Add New Exam</Link>
                    </li>
                    <li>
                      <Link to="../admin-exam-group-all">All Groups</Link>
                    </li>
                    <li>
                      <Link to="../admin-exam-group-add">
                        Create New Groups
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link onClick={(e)=>e.preventDefault()} className="collapsible-header">
                  <i className="fa fa-users" aria-hidden="true" /> Students
                </Link>
                <div className="collapsible-body left-sub-menu">
                  <ul>
                    <li>
                      <Link to="../admin-user-all">All Students</Link>
                    </li>
                    <li>
                      <Link to="../admin-user-add">Add New Students</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link onClick={(e)=>e.preventDefault()} className="collapsible-header">
                  <i className="fa fa-commenting-o" aria-hidden="true" />{" "}
                  Enquiry
                </Link>
                <div className="collapsible-body left-sub-menu">
                  <ul>
                    <li>
                      <Link to="../admin-all-enquiry">All Enquiry</Link>
                    </li>
                    <li>
                      <Link to="../admin-course-enquiry">Course Enquiry</Link>
                    </li>
                    <li>
                      <Link to="../admin-admission-enquiry">
                        Admission Enquiry
                      </Link>
                    </li>
                    <li>
                      <Link to="../admin-seminar-enquiry">Seminar Enquiry</Link>
                    </li>
                    <li>
                      <Link to="../admin-event-enquiry">Event Enquiry</Link>
                    </li>
                    <li>
                      <Link to="../admin-common-enquiry">Common Enquiry</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link onClick={(e)=>e.preventDefault()} className="collapsible-header">
                  <i className="fa fa-cloud-download" aria-hidden="true" />{" "}
                  Import &amp; Export
                </Link>
                <div className="collapsible-body left-sub-menu">
                  <ul>
                    <li>
                      <Link to="../admin-export-data">Export all datas</Link>
                    </li>
                    <li>
                      <Link to="../admin-import-data">Import all datas</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
