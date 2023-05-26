import React,{useState,useEffect} from "react";
import { Link, useParams } from 'react-router-dom';
import { HeaderAdmin } from "../components/HeaderAdmin";
import { SidebarAdmin } from "../components/SidebarAdmin";

const AdminTeacherView = ()=>{
    const id = useParams().id;
  
    var myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('Token'));
    myHeaders.append('Content-Type', 'application/json');
    
    const [formData, setFormData] = useState({
      username: '',
      password: '',
      name: '',
      age: '',
      gender: '',
      email: '',
      phoneNumber: '',
      address: '',
      dateOfbirth: '',
      status: '',
    });
  
    useEffect(()=>{
        const fetchCourseDetail = async ()=>{
            try{
                await fetch(`https://localhost:7156/api/AdminTeacher/GetDetailTeacher/${id}`,
                {method: 'GET',headers:myHeaders})
                .then(res=>res.json()).then(data=>setFormData(data));
              }catch (error) {
                console.log('Error occurred:', error.message);
              }
        };
        fetchCourseDetail();
      }, [])
    
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
                  <li className="active-bre"><Link to="../#"> Add New Event</Link>
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
                      <div className="inn-title">
                        <h4>Add Teacher</h4>
                        <p>Here you can edit your website basic details URL, Phone, Email, Address, User and password and more</p>
                      </div>
                      <div className="tab-inn">
                          <form>
                            <div className="mb-3">
                              <label htmlFor="name" className="form-label">Name</label>
                              <input type="text" disabled className="form-control" id="name" name="name" value={formData.name} placeholder="Enter name"/>
                            </div>
                            <div className="mb-3">
                              <label htmlFor="username" className="form-label">Username</label>
                              <input type="text" disabled className="form-control" name="username" value={formData.username} id="username" placeholder="Enter username"/>
                            </div>
                            <div className="mb-3">
                              <label htmlFor="password" className="form-label">Password</label>
                              <input type="text" disabled className="form-control" id="password" name="password" value={formData.password} placeholder="Enter password"/>
                            </div>
                            <div className="mb-3">
                              <label htmlFor="age" className="form-label">Age</label>
                              <input type="number" disabled min={0} max={100} className="form-control" id="age" name="age" value={formData.age} placeholder="Enter age"/>
                            </div>
                            <div className="mb-3">
                              <label htmlFor="status" className="form-label">Status</label>
                              <select className="form-select form-select-lg" disabled id="status" name="status" value={formData.status}>
                                <option>Choose status</option>
                                <option value="1">Active</option>
                                <option value="0">Inactive</option>
                                <option value="2">Locked</option>
                              </select>
                            </div>
                            <div className="mb-3">
                              <label htmlFor="email" className="form-label">Email</label>
                              <input type="email" disabled className="form-control" id="email" name="email" placeholder="Enter email" value={formData.email}/>
                            </div>
                            <div className="mb-3">
                              <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                              <input className="form-control" disabled id="phoneNumber" name="phoneNumber" rows="3" placeholder="Enter phone number" value={formData.phoneNumber}/>
                            </div>
                            <div className="mb-3">
                              <label htmlFor="address" className="form-label">Address</label>
                              <input className="form-control" disabled id="address" name="address" rows="3" placeholder="Enter address" value={formData.address}/>
                            </div>
                            <div className="mb-3">
                            <label htmlFor="dateOfbirth" className="form-label">Date Of Birth</label>
                            <input type="datetime-local" disabled className="form-control" name="dateOfbirth" id="dateOfbirth" value={formData.dateOfbirth}/>
                          </div>
                            <div className="mb-3">
                              <label htmlFor="gender" className="form-label">Gender</label>
                              <select className="form-select form-select-lg" disabled id="gender" name="gender" value={formData.gender}>
                                <option>Choose gender</option>
                                <option value="m">Male</option>
                                <option value="f">Female</option>
                                <option value="o">Others</option>
                              </select>                          
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
        {/*Import jQuery before materialize.js*/}
      </div>
    );
  }
  
  export default AdminTeacherView;
