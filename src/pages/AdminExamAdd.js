import React, { useState, useEffect } from 'react';
import {Link } from "react-router-dom";
import { HeaderAdmin } from "../components/HeaderAdmin";
import { SidebarAdmin } from "../components/SidebarAdmin";

const AdminExamAdd = ()=>{
  var myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('Token'));
    myHeaders.append('Content-Type', 'application/json');
  
  const [courseName, setCourseId] = useState([]);
  
  useEffect(()=>{
    const fetchData = ()=>{
      fetch('https://localhost:7156/api/AdminCourse/GetListCourse',{
        method : 'GET',
        headers : myHeaders
      }).then(res=>res.json()).then(data=>setCourseId(data));
    };
    fetchData();
  },[])
  
  const [formData, setFormData] = useState({
    examCode: '',
    startDate: '',
    endDate: '',
    courseId: '',
    descreption: ''
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the request body
    const requestBody = {
      examCode : formData.examCode,
      startDate: formData.startDate,
      endDate: formData.endDate,
      courseId: formData.courseId,
      descreption: formData.descreption,
    };

    // Send the data to the API
    fetch('https://localhost:7156/api/AdminExam/Create', {
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
  
  const optionCourse = [];
  for (let e = 0; e < courseName.length; e++) {
    optionCourse.push(<option key={e} value={courseName[e].id}>{courseName[e].name}</option>);
  }
  console.log(courseName);
  
  return(
    <div>
      {/*== MAIN CONTRAINER ==*/}
      <HeaderAdmin/>
      {/*== BODY CONTNAINER ==*/}
      <div className="container-fluid sb2">
        <div className="row">
          <SidebarAdmin/>
          {/*== BODY INNER CONTAINER ==*/}
          <div className="sb2-2">
            {/*== breadcrumbs ==*/}
            <div className="sb2-2-2">
              <ul>
                <li><Link to="index"><i className="fa fa-home" aria-hidden="true" /> Home</Link>
                </li>
                <li className="active-bre"><Link to="#"> Add New Exam</Link>
                </li>
                <li className="page-back"><Link to="index"><i className="fa fa-backward" aria-hidden="true" /> Back</Link>
                </li>
              </ul>
            </div>
            {/*== User Details ==*/}
            <div className="sb2-2-3">
              <div className="row">
                <div className="col-md-12">
                  <div className="box-inn-sp admin-form">
                    <div className="sb2-2-add-blog sb2-2-1">
                      <h2>New Exam</h2>
                      <p>The table class adds basic styling (light padding and only horizontal dividers) to a table:</p>
                      <div className="tab-content">
                        <div id="home" className="tab-pane fade active in">
                          <div className="box-inn-sp">
                            <div className="inn-title">
                              <h4>Exam Details</h4>
                            </div>
                            <div className="bor">
                              <form onSubmit={e=>handleSubmit(e)}>
                                <div className="row">
                                  <label htmlFor="courseId">Course Name</label>
                                  <div className="mb-3">
                                    <select className="form-select" required onChange={e=>handleChange(e)} name="courseId">
                                      <option style={{}}>Choose a course name</option>
                                      {optionCourse}
                                    </select>
                                  </div>
                                </div>
                                <div className="row">
                                  <label htmlFor="examCode">Exam Code</label>
                                  <div className="input-field mb-3">
                                    <input type="text" name="examCode" required className="validate" placeholder="Enter exam code" onChange={e=>handleChange(e)}/>
                                  </div>
                                  <label htmlFor="startDate">Starting Date</label>
                                  <div className="input-field mb-3">
                                    <input type="datetime-local" name="startDate" required className="validate" placeholder="Enter start date" onChange={e=>handleChange(e)}/>
                                  </div>
                                  <label htmlFor="endDate">Ending Date</label>
                                  <div className="input-field mb-3">
                                    <input type="datetime-local" name="endDate" required className="validate" placeholder="Enter end date" onChange={e=>handleChange(e)}/>
                                  </div>
                                  <label htmlFor="descreption">Description</label>
                                  <div className="input-field mb-3">
                                    <input type="text" name="descreption" className="validate" placeholder="Enter description" onChange={e=>handleChange(e)}/>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="input-field mb-3">
                                    <i className="waves-effect waves-light btn-large waves-input-wrapper" style={{}}><input type="submit" className="waves-button-input" defaultValue="Submit" /></i>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        {/* <div id="menu1" className="tab-pane fade">
                          <div className="inn-title">
                            <h4>Exam Details</h4>
                            <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                          </div>
                          <div className="bor ad-cou-deta-h4">
                            <form>
                              <div className="row">
                                <div className="input-field col s12">
                                  <input type="text" defaultValue="Semester 1" className="validate" />
                                  <label className>Main exam name</label>
                                </div>
                                <div className="input-field col s12">
                                  <input type="text" defaultValue="Board Exam Training Classes" className="validate" />
                                  <label>Exam name</label>
                                </div>
                                <div className="input-field col s12">
                                  <input type="text" defaultValue="12 may 2018" className="validate" />
                                  <label>Date</label>
                                </div>
                                <div className="input-field col s12">
                                  <input type="text" defaultValue="10:00AM" className="validate" />
                                  <label>Start time</label>
                                </div>
                                <div className="input-field col s12">
                                  <input type="text" defaultValue="03:00hrs" className="validate" />
                                  <label>Duration</label>
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
                        <div id="menu2" className="tab-pane fade">
                          <div className="inn-title">
                            <h4>Exam Details</h4>
                            <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                          </div>
                          <div className="bor">
                            <form>
                              <div className="row">
                                <div className="input-field col s12">
                                  <input type="text" defaultValue="Semester 1" className="validate" />
                                  <label className>Main exam name</label>
                                </div>
                                <div className="input-field col s12">
                                  <input type="text" defaultValue="Board Exam Training Classes" className="validate" />
                                  <label>Exam name</label>
                                </div>
                                <div className="input-field col s12">
                                  <input type="text" defaultValue="12 may 2018" className="validate" />
                                  <label>Date</label>
                                </div>
                                <div className="input-field col s12">
                                  <input type="text" defaultValue="10:00AM" className="validate" />
                                  <label>Start time</label>
                                </div>
                                <div className="input-field col s12">
                                  <input type="text" defaultValue="03:00hrs" className="validate" />
                                  <label>Duration</label>
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
                        <div id="menu3" className="tab-pane fade">
                          <div className="inn-title">
                            <h4>Exam Details</h4>
                            <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                          </div>
                          <div className="bor ad-cou-deta-h4">
                            <form>
                              <div className="row">
                                <div className="input-field col s12">
                                  <input type="text" defaultValue="Semester 1" className="validate" />
                                  <label className>Main exam name</label>
                                </div>
                                <div className="input-field col s12">
                                  <input type="text" defaultValue="Board Exam Training Classes" className="validate" />
                                  <label>Exam name</label>
                                </div>
                                <div className="input-field col s12">
                                  <input type="text" defaultValue="12 may 2018" className="validate" />
                                  <label>Date</label>
                                </div>
                                <div className="input-field col s12">
                                  <input type="text" defaultValue="10:00AM" className="validate" />
                                  <label>Start time</label>
                                </div>
                                <div className="input-field col s12">
                                  <input type="text" defaultValue="03:00hrs" className="validate" />
                                  <label>Duration</label>
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
                        <div id="menu4" className="tab-pane fade">
                          <div className="inn-title">
                            <h4>Exam Details</h4>
                            <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                          </div>
                          <div className="bor">
                            <form>
                              <div className="row">
                                <div className="input-field col s12">
                                  <input type="text" defaultValue="Semester 1" className="validate" />
                                  <label className>Main exam name</label>
                                </div>
                                <div className="input-field col s12">
                                  <input type="text" defaultValue="Board Exam Training Classes" className="validate" />
                                  <label>Exam name</label>
                                </div>
                                <div className="input-field col s12">
                                  <input type="text" defaultValue="12 may 2018" className="validate" />
                                  <label>Date</label>
                                </div>
                                <div className="input-field col s12">
                                  <input type="text" defaultValue="10:00AM" className="validate" />
                                  <label>Start time</label>
                                </div>
                                <div className="input-field col s12">
                                  <input type="text" defaultValue="03:00hrs" className="validate" />
                                  <label>Duration</label>
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
                        </div> */}
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

export default AdminExamAdd;
