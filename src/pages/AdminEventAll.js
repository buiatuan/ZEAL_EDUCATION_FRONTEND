import React,{Component} from "react";
import { Link } from 'react-router-dom';
import { HeaderAdmin } from "../components/HeaderAdmin";
import { SidebarAdmin } from "../components/SidebarAdmin";
export class AdminEventAll extends Component{
  constructor(){
    super();
    this.state={
      AllEvent:[]
    }
  }
  async getAllEvent(){
    var myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('Token'));
    var res= await fetch('https://localhost:7156/api/AdminEvent/GetListEvent',{method:'get',headers:myHeaders});
    var data= await res.json();
    this.setState({
      AllEvent:data
    })
  }
  displayEvent(){
    const result=this.state.AllEvent.map(e=>{
      const status= e.status===1? (<span className="label label-success">Active</span> ) : (<span className="label label-danger">UnActive</span>);
      return(
        <tr>
        <td>{e.id}</td>
        <td><span className="list-img"><img src={require('../assets/images/course/sm-1.jpg')} alt="" /></span></td>
        <td>{e.name}</td>
        <td>{e.startDate}</td>
        <td>{e.location}</td>
        <td>
          {status}
        </td>
        <td><Link to="../admineventedit" className="ad-st-view">Edit</Link></td>
      </tr>
      )
    });
    return result;
  }
  componentDidMount(){
    this.getAllEvent();
  }
  componentDidUpdate(){
    console.log(this.state.AllEvent);
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
                    <li><Link to="../index"><i className="fa fa-home" aria-hidden="true" /> Home</Link>
                    </li>
                    <li className="active-bre"><Link to="../#"> Events</Link>
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
                          <h4>All Events</h4>
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
                                {this.displayEvent()}
                                <tr>
                                  <td>1</td>
                                  <td><span className="list-img"><img src={require('../assets/images/course/sm-1.jpg')} alt="" /></span></td>
                                  <td>Admissions Information 2023</td>
                                  <td>21 June 2023</td>
                                  <td>los angeles</td>
                                  <td>
                                    <span className="label label-success">Active</span>
                                  </td>
                                  <td><Link to="../admin-event-edit" className="ad-st-view">Edit</Link></td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td><span className="list-img"><img src={require('../assets/images/course/sm-2.jpg')} alt="" /></span></td>
                                  <td>CUNY Assessment Test Workshop</td>
                                  <td>05 April 2023</td>
                                  <td>los angeles</td>
                                  <td>
                                    <span className="label label-success">Active</span>
                                  </td>
                                  <td><Link to="../admin-event-edit" className="ad-st-view">Edit</Link></td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td><span className="list-img"><img src={require('../assets/images/course/sm-3.jpg')} alt="" /></span></td>
                                  <td>Fire &amp; ice launch party</td>
                                  <td>12 December 2023</td>
                                  <td>los angeles</td>
                                  <td>
                                    <span className="label label-success">Active</span>
                                  </td>
                                  <td><Link to="../admin-event-edit" className="ad-st-view">Edit</Link></td>
                                </tr>
                                <tr>
                                  <td>4</td>
                                  <td><span className="list-img"><img src={require('../assets/images/course/sm-4.jpg')} alt="" /></span></td>
                                  <td>Educate to Empower NYE Party</td>
                                  <td>21 June 2023</td>
                                  <td>los angeles</td>
                                  <td>
                                    <span className="label label-success">Active</span>
                                  </td>
                                  <td><Link to="../admin-event-edit" className="ad-st-view">Edit</Link></td>
                                </tr>
                                <tr>
                                  <td>5</td>
                                  <td><span className="list-img"><img src={require('../assets/images/course/sm-5.jpg')} alt="" /></span></td>
                                  <td>Latinoo College Expo 2023 - DONATION</td>
                                  <td>21 June 2023</td>
                                  <td>los angeles</td>
                                  <td>
                                    <span className="label label-success">Active</span>
                                  </td>
                                  <td><Link to="../admin-event-edit" className="ad-st-view">Edit</Link></td>
                                </tr>
                                <tr>
                                  <td>6</td>
                                  <td><span className="list-img"><img src={require('../assets/images/course/sm-6.jpg')} alt="" /></span></td>
                                  <td>Training at Team Fabio Clemente</td>
                                  <td>21 June 2023</td>
                                  <td>los angeles</td>
                                  <td>
                                    <span className="label label-success">Active</span>
                                  </td>
                                  <td><Link to="../admin-event-edit" className="ad-st-view">Edit</Link></td>
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