import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { HeaderAdmin } from "../components/HeaderAdmin";
import { SidebarAdmin } from "../components/SidebarAdmin";

const AdminTeacherAdd = ()=>{
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    age: '',
    gender: '',
    email: '',
    phoneNumber: '',
    address: '',
    status: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the request body
    const requestBody = {
        username: formData.username,
        password: formData.password,
        name: formData.name,
        age: formData.age,
        gender: formData.gender,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        address: formData.address,
        status: formData.status
    };
    
    var myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('Token'));
    // Send the data to the API
    fetch('https://localhost:7156/api/AdminTeacher/CreateTeacher', {
      method: 'POST',
      headers:myHeaders,
      body: JSON.stringify(requestBody),
    })
      .then(response => {
        if(response.ok) alert("ADD SUCCESS!");
      })
      .catch(error => {
        console.error('Error sending form data:', error);
      });
  };
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
                      <h4>Add Event</h4>
                      <p>Here you can edit your website basic details URL, Phone, Email, Address, User and password and more</p>
                    </div>
                    <div className="tab-inn">
                        <form onSubmit={e=>handleSubmit(e)}>
                          <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" required className="form-control" id="name" name="name" placeholder="Enter name" onChange={e=>handleChange(e)}/>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" required className="form-control" name="username" id="username" placeholder="Enter username" onChange={e=>handleChange(e)}/>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="text" required className="form-control" id="password" name="password" placeholder="Enter password" onChange={e=>handleChange(e)}/>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="age" className="form-label">Age</label>
                            <input type="number" required min={0} max={100} className="form-control" id="age" name="age" placeholder="Enter age" onChange={e=>handleChange(e)}/>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="status" className="form-label">Status</label>
                            <select className="form-select" required id="status" name="status" onChange={e=>handleChange(e)}>
                              <option>Choose status</option>
                              <option value="1">Active</option>
                              <option value="0">Inactive</option>
                              <option value="2">Locked</option>
                            </select>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" required className="form-control" id="email" name="email" placeholder="Enter email" onChange={e=>handleChange(e)}/>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                            <input className="form-control" required id="phoneNumber" name="phoneNumber" rows="3" placeholder="Enter phone number" onChange={e=>handleChange(e)}/>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input className="form-control" required id="address" name="address" rows="3" placeholder="Enter address" onChange={e=>handleChange(e)}/>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="gender" className="form-label">Gender</label>
                            <select className="form-select" required id="status" name="status" onChange={e=>handleChange(e)}>
                              <option>Choose status</option>
                              <option value="m">Male</option>
                              <option value="f">Female</option>
                              <option value="o">Others</option>
                            </select>                          
                          </div>
                          <button type="submit" className="btn btn-primary">Submit</button>
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

export default AdminTeacherAdd;