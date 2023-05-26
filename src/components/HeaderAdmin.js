import React, {Component} from "react";
import {Link } from "react-router-dom";
export class HeaderAdmin extends Component{
  constructor(){
    super();
    this.state={
      AccountAdmin:JSON.parse(localStorage.getItem('Account'))===null? {name:"Admin"}: JSON.parse(localStorage.getItem('Account'))
    }
  }
  async checkToken(){
   
    try {
        var myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('Token'));
    console.log(localStorage.getItem('Token'));
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
    };
    const response = await fetch(
        'https://localhost:7156/api/ScholarDetail/GetDeailScholarLogin',
        requestOptions,
    );
    if(response.ok!==true){
        localStorage.removeItem('Token');
        localStorage.removeItem('Account');
    }
    else{
        var data= await response.json();
   
        localStorage.setItem('Account', JSON.stringify(data));
    }
    } catch (error) {
        window.location.href='../notfound'
    }
    
   }
   
  componentDidMount(){
     this.checkToken();
  }
    render(){
        return(
            <div>
                <div className="container-fluid sb1">
        <div className="row">
          {/*== LOGO ==*/}
          <div className="col-md-2 col-sm-3 col-xs-6 sb1-1">
            <Link to="../#" className="btn-close-menu"><i className="fa fa-times" aria-hidden="true" /></Link>
            <Link to="../#" className="atab-menu"><i className="fa fa-bars tab-menu" aria-hidden="true" /></Link>
            <Link to="../admin" className="logo"><img src={require("../assets/images/logo1.png")} alt="" />
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
            <Link className="waves-effect dropdown-button top-user-pro" to="../#" data-activates="top-menu"><img src={'https://randomuser.me/api/portraits/men/1.jpg'} alt="" />{this.state.AccountAdmin.name} <i className="fa fa-angle-down" aria-hidden="true" />
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