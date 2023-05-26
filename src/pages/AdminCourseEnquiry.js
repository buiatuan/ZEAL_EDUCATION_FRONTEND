import React,{Component} from "react";
import { Link } from 'react-router-dom';
import { HeaderAdmin } from "../components/HeaderAdmin";
import { SidebarAdmin } from "../components/SidebarAdmin";
export class AdminCourseEnquiry extends Component{
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      courseFeedbacks: [],
    };
  }
  
  async GetListCourseFeedbacks() {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('Token'));
    const response = await fetch("https://localhost:7156/api/AdminFeedBack/GetList", {
      method: "GET",
      headers: myHeaders,
    });
    const courseFeedbacks = await response.json();
    this.setState({ courseFeedbacks: courseFeedbacks });
  }
  
  DisplayCourseFeedbacks() {
    const result = this.state.courseFeedbacks;
    const arrayDisplay = result.map((courseFeedback,index) => {
      return (
        <tr key={index}>
          <td>{courseFeedback.id}</td>
          <td>{courseFeedback.name}</td>
          <td>{courseFeedback.email}</td>
          <td>{courseFeedback.phone}</td>
          <td><Link to={`../AdminViewEnquiry/${courseFeedback.id}`} className="ad-st-view">View</Link></td>
        </tr>
      );
    });
    return arrayDisplay;
  }
  
  componentDidMount() {
    this.GetListCourseFeedbacks();
  }
  
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
                    <li><Link to="../Admin"><i className="fa fa-home" aria-hidden="true" /> Home</Link>
                    </li>
                    <li className="active-bre"><span>Course Feedback</span>
                    </li>
                    <li className="page-back"><Link to="../Admin"><i className="fa fa-backward" aria-hidden="true" /> Back</Link>
                    </li>
                  </ul>
                </div>
                {/*== User Details ==*/}
                <div className="sb2-2-3">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="box-inn-sp">
                        <div className="inn-title">
                          <h4>Course Feedback</h4>
                        </div>
                        <div className="tab-inn">
                          <div className="table-responsive table-desi">
                            <table className="table table-hover">
                              <thead>
                                <tr>
                                  <th>ID</th>
                                  <th>Name</th>
                                  <th>Email</th>
                                  <th>Phone</th>
                                  <th>View</th>
                                </tr>
                              </thead>
                              <tbody>
                                {this.DisplayCourseFeedbacks()}
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
