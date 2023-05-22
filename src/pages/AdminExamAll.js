import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HeaderAdmin } from "../components/HeaderAdmin";
import { SidebarAdmin } from "../components/SidebarAdmin";
export class AdminExamAll extends Component {
  constructor(){
    super();
    this.state={
      AllExam:[]
    }
  }
  async getAllExam(){
    var myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('Token'));
    var res= await fetch('https://localhost:7156/api/AdminExam/GetList',{method:'get',headers:myHeaders});
    var data= await res.json();
    this.setState({
      AllEvent:data
    })
  }
  displayAllExam(){
    var result=this.state.AllExam.map(e=>{
      return(
        <tr>
        <th>{e.id}</th>
        <th>{e.name}</th>
        <th>{e.startDate}</th>
        <th>{e.endDate}</th>
        <th>{e.createdBy}</th>
        <th>Edit</th>
      </tr>
      )
    });
    return result;
  }
  componentDidMount(){
    this.getAllExam();
  }
  render() {
    return (
      <div>
        {/*== MAIN CONTRAINER ==*/}
        <HeaderAdmin />
        {/*== BODY CONTNAINER ==*/}
        <div className="container-fluid sb2">
          <div className="row">
            <SidebarAdmin />
            {/*== BODY INNER CONTAINER ==*/}
            <div className="sb2-2">
              {/*== breadcrumbs ==*/}
              <div className="sb2-2-2">
                <ul>
                  <li>
                    <Link to="../index.html">
                      <i className="fa fa-home" aria-hidden="true" /> Home
                    </Link>
                  </li>
                  <li className="active-bre">
                    <Link to="../#"> All Exams</Link>
                  </li>
                  <li className="page-back">
                    <Link to="../index.html">
                      <i className="fa fa-backward" aria-hidden="true" /> Back
                    </Link>
                  </li>
                </ul>
              </div>
              {/*== User Details ==*/}
              <div className="sb2-2-3">
                <div className="row">
                  <div className="col-md-12">
                    <div className="box-inn-sp">
                      <div className="inn-title">
                        <h4>Exams Time Table</h4>
                        <p>
                          All about students like name, student id, phone,
                          email, country, city and more
                        </p>
                      </div>
                      <div className="tab-inn">
                        <div className="table-responsive table-desi">
                          <table className="table table-hover">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Exam Name</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Created By</th>
                                <th>Edit</th>
                              </tr>
                            </thead>
                            <tbody>
                              {this.displayAllExam()}
                              <tr>
                                <td>1</td>
                                <td>Semester 1</td>
                                <td>28 May 2018</td>
                                <td>10:00AM</td>
                                <td>03:00</td>
                                <td>
                                  <Link
                                    to
                                    href="admin-exam-edit.html"
                                    className="ad-st-view"
                                  >
                                    Edit
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Exam 1</td>
                                <td>14 June 2018</td>
                                <td>01:00PM</td>
                                <td>03:00</td>
                                <td>
                                  <Link
                                    to
                                    href="admin-exam-edit.html"
                                    className="ad-st-view"
                                  >
                                    Edit
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>Semester 1</td>
                                <td>28 May 2018</td>
                                <td>10:00AM</td>
                                <td>03:00</td>
                                <td>
                                  <Link
                                    to
                                    href="admin-exam-edit.html"
                                    className="ad-st-view"
                                  >
                                    Edit
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>Exam 1</td>
                                <td>14 June 2018</td>
                                <td>01:00PM</td>
                                <td>03:00</td>
                                <td>
                                  <Link
                                    to
                                    href="admin-exam-edit.html"
                                    className="ad-st-view"
                                  >
                                    Edit
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>Semester 1</td>
                                <td>28 May 2018</td>
                                <td>10:00AM</td>
                                <td>03:00</td>
                                <td>
                                  <Link
                                    to
                                    href="admin-exam-edit.html"
                                    className="ad-st-view"
                                  >
                                    Edit
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>6</td>
                                <td>Exam 1</td>
                                <td>14 June 2018</td>
                                <td>01:00PM</td>
                                <td>03:00</td>
                                <td>
                                  <Link
                                    to
                                    href="admin-exam-edit.html"
                                    className="ad-st-view"
                                  >
                                    Edit
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>7</td>
                                <td>Semester 1</td>
                                <td>28 May 2018</td>
                                <td>10:00AM</td>
                                <td>03:00</td>
                                <td>
                                  <Link
                                    to
                                    href="admin-exam-edit.html"
                                    className="ad-st-view"
                                  >
                                    Edit
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>8</td>
                                <td>Exam 1</td>
                                <td>14 June 2018</td>
                                <td>01:00PM</td>
                                <td>03:00</td>
                                <td>
                                  <Link
                                    to
                                    href="admin-exam-edit.html"
                                    className="ad-st-view"
                                  >
                                    Edit
                                  </Link>
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
            </div>
          </div>
        </div>
        {/*Import jQuery before materialize.js*/}
      </div>
    );
  }
}
