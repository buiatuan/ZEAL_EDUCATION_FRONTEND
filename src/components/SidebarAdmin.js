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
                  src={require("../assets/images/placeholder.jpg")}
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
                <Link to="../Admin" className="menu-active">
                  <i className="fa fa-bar-chart" aria-hidden="true" /> Dashboard
                </Link>
              </li>
              <li>
                <Link onClick={(e)=>e.preventDefault()} className="collapsible-header" >
                  <i className="fa fa-book" aria-hidden="true" /> All Courses
                </Link>
                <div className="collapsible-body left-sub-menu">
                  <ul>
                    <li>
                      <Link to="../AdminAllCourses">All Course</Link>
                    </li>
                    <li>
                      <Link to="../AdminAddCourses">Add New Course</Link>
                    </li>
              
                  </ul>
                </div>
              </li>
              <li>
                <Link onClick={(e)=>e.preventDefault()} className="collapsible-header">
                  <i className="fa fa-user" aria-hidden="true" /> Teachers
                </Link>
                <div className="collapsible-body left-sub-menu">
                  <ul>
                    <li>
                      <Link to="../AdminTeacherAll">All Teacher</Link>
                    </li>
                    <li>
                      <Link to="../AdminTeacherAdd">Add New teacher</Link>
                    </li>
                  </ul>
                </div>
              </li>
            
          
             
            
              <li>
                <Link onClick={(e)=>e.preventDefault()} className="collapsible-header">
                  <i className="fa fa-calendar" aria-hidden="true" /> Events
                </Link>
                <div className="collapsible-body left-sub-menu">
                  <ul>
                    <li>
                      <Link to="../AdminEventAll">All Events</Link>
                    </li>
                    <li>
                      <Link to="../AdminEventAdd">Create New Events</Link>
                    </li>
                  </ul>
                </div>
              </li>
        
           
              <li>
                <Link onClick={(e)=>e.preventDefault()} className="collapsible-header">
                  <i className="fa fa-pencil" aria-hidden="true" /> Exam 
                  table
                </Link>
                <div className="collapsible-body left-sub-menu">
                  <ul>
                    <li>
                      <Link to="../AdminExamAll">All Exams</Link>
                    </li>
                    <li>
                      <Link to="../AdminExamAdd">Add New Exam</Link>
                    </li>
                   
                  </ul>
                </div>
              </li>
              <li>
                <Link onClick={(e)=>e.preventDefault()} className="collapsible-header">
                  <i className="fa fa-users" aria-hidden="true" /> Scholar
                </Link>
                <div className="collapsible-body left-sub-menu">
                  <ul>
                    <li>
                      <Link to="../AdminUserAll">All Scholar</Link>
                    </li>
                    <li>
                      <Link to="../AdminCourseRegister">Course Register Management</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to="../AdminCourseEnquiry">
                  <i className="fa fa-commenting-o" aria-hidden="true" />Course Feedback
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
