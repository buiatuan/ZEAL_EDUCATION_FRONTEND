import React, {Component} from "react";
import {Link } from "react-router-dom";
export class HeaderAdmin extends Component{
    render(){
        return(
            <div>
                <div className="container-fluid sb1">
        <div className="row">
          {/*== LOGO ==*/}
          <div className="col-md-2 col-sm-3 col-xs-6 sb1-1">
            <Link to="../#" className="btn-close-menu"><i className="fa fa-times" aria-hidden="true" /></Link>
            <Link to="../#" className="atab-menu"><i className="fa fa-bars tab-menu" aria-hidden="true" /></Link>
            <Link to="../index" className="logo"><img src={require("../asserts/images/logo1.png")} alt="" />
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
            <Link className="waves-effect dropdown-button top-user-pro" to="../#" data-activates="top-menu"><img src={require("../asserts/images/user/6.png")} alt="" />My Account <i className="fa fa-angle-down" aria-hidden="true" />
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
            </div>
        );
    };
}