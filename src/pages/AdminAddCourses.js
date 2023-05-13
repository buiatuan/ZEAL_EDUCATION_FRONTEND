import React,{Component} from "react";
import { Link } from 'react-router-dom';
import { HeaderAdmin } from "../components/HeaderAdmin";
import { SidebarAdmin } from "../components/SidebarAdmin";
export class AdminAddCourse extends Component{
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
                    <li className="active-bre"><Link to="../#"> Add new course</Link>
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
                        <div className="sb2-2-add-blog sb2-2-1">
                          <h2>Add New Course</h2>
                          <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p>
                          <ul className="nav nav-tabs tab-list">
                            <li className="active"><Link data-toggle="tab" to="../#home" aria-expanded="true"><i className="fa fa-info" aria-hidden="true" /> <span>Detail</span></Link>
                            </li>
                            <li className><Link data-toggle="tab" to="../#menu1" aria-expanded="false"><i className="fa fa-bed" aria-hidden="true" /> <span>Course Syllabus</span></Link>
                            </li>
                            <li className><Link data-toggle="tab" to="../#menu2" aria-expanded="false"><i className="fa fa-picture-o" aria-hidden="true" /> <span>Banner Image</span></Link>
                            </li>
                            <li className><Link data-toggle="tab" to="../#menu3" aria-expanded="false"><i className="fa fa-facebook" aria-hidden="true" /> <span>Time table</span></Link>
                            </li>
                            <li className><Link data-toggle="tab" to="../#menu4" aria-expanded="false"><i className="fa fa-phone" aria-hidden="true" /> <span>Contact Info</span></Link>
                            </li>
                          </ul>
                          <div className="tab-content">
                            <div id="home" className="tab-pane fade active in">
                              <div className="box-inn-sp">
                                <div className="inn-title">
                                  <h4>Course Information</h4>
                                  <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                                </div>
                                <div className="bor">
                                  <form>
                                    <div className="row">
                                      <div className="input-field col s12">
                                        <input id="list-title" type="text" className="validate" />
                                        <label htmlFor="list-title" className>Course Name</label>
                                      </div>
                                      <div className="input-field col s12">
                                        <input id="list-name" type="text" className="validate" />
                                        <label htmlFor="list-name">Contact Person</label>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="input-field col s12">
                                        <textarea className="materialize-textarea" defaultValue={""} />
                                        <label>Course Descriptions:</label>
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
                            </div>
                            <div id="menu1" className="tab-pane fade">
                              <div className="inn-title">
                                <h4>Requirements, feese, student profile and how to apply</h4>
                                <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                              </div>
                              <div className="bor ad-cou-deta-h4">
                                <form>
                                  <h4>Requirements:</h4>
                                  <div className="row">
                                    <div className="input-field col s12">
                                      <textarea className="materialize-textarea" defaultValue={""} />
                                      <label>Course Descriptions:</label>
                                    </div>
                                  </div> 
                                  <h4>Feese:</h4>
                                  <div className="row">
                                    <div className="input-field col s12">
                                      <input type="number" className="validate" required />
                                      <label>1'st terms feese</label>
                                    </div>
                                    <div className="input-field col s12">
                                      <input type="number" className="validate" required />
                                      <label>2'nd terms feese</label>
                                    </div>
                                    <div className="input-field col s12">
                                      <input type="number" className="validate" required />
                                      <label>3'rd terms feese</label>
                                    </div>
                                    <div className="input-field col s12">
                                      <textarea className="materialize-textarea" defaultValue={""} />
                                      <label>Price Descriptions:</label>
                                    </div>
                                  </div>
                                  <h4>Student Profile:</h4>
                                  <div className="row">
                                    <div className="input-field col s12">
                                      <textarea className="materialize-textarea" defaultValue={""} />
                                      <label>Student Profile Descriptions:</label>
                                    </div>
                                  </div>	
                                  <h4>How to apply this course:</h4>
                                  <div className="row">
                                    <div className="input-field col s12">
                                      <input type="text" className="validate" required />
                                      <label>Step 1 Descriptions:</label>
                                    </div>
                                    <div className="input-field col s12">
                                      <input type="text" className="validate" required />
                                      <label>Step 2 Descriptions:</label>
                                    </div>
                                    <div className="input-field col s12">
                                      <input type="text" className="validate" required />
                                      <label>Step 3 Descriptions:</label>
                                    </div>
                                    <div className="input-field col s12">
                                      <input type="text" className="validate" required />
                                      <label>Step 4 Descriptions:</label>
                                    </div>
                                    <div className="input-field col s12">
                                      <input type="text" className="validate" required />
                                      <label>Step 5 Descriptions:</label>
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
                                <h4>Photo Gallery</h4>
                                <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                              </div>
                              <div className="bor">
                                <form action="#">
                                  <div className="file-field input-field">
                                    <div className="btn admin-upload-btn">
                                      <span>File</span>
                                      <input type="file" multiple />
                                    </div>
                                    <div className="file-path-wrapper">
                                      <input className="file-path validate" type="text" placeholder="Upload course banner image" />
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="input-field col s12">
                                      <i className="waves-effect waves-light btn-large waves-input-wrapper" style={{}}><input type="submit" className="waves-button-input" defaultValue="Upload" /></i>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div id="menu3" className="tab-pane fade">
                              <div className="inn-title">
                                <h4>Time table</h4>
                                <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                              </div>
                              <div className="bor ad-cou-deta-h4">
                                <form>
                                  <h4>1st semester:</h4>
                                  <div className="row">
                                    <div className="input-field col s12">
                                      <input type="text" className="validate" required />
                                      <label>Title:</label>
                                    </div>
                                    <div className="input-field col s12">
                                      <textarea className="materialize-textarea" defaultValue={""} />
                                      <label>Descriptions:</label>
                                    </div>
                                  </div> 
                                  <h4>2nd semester:</h4>
                                  <div className="row">
                                    <div className="input-field col s12">
                                      <input type="text" className="validate" required />
                                      <label>Title:</label>
                                    </div>
                                    <div className="input-field col s12">
                                      <textarea className="materialize-textarea" defaultValue={""} />
                                      <label>Descriptions:</label>
                                    </div>
                                  </div> 
                                  <h4>3rd semester:</h4>
                                  <div className="row">
                                    <div className="input-field col s12">
                                      <input type="text" className="validate" required />
                                      <label>Title:</label>
                                    </div>
                                    <div className="input-field col s12">
                                      <textarea className="materialize-textarea" defaultValue={""} />
                                      <label>Descriptions:</label>
                                    </div>
                                  </div> 
                                  <h4>4th semester:</h4>
                                  <div className="row">
                                    <div className="input-field col s12">
                                      <input type="text" className="validate" required />
                                      <label>Title:</label>
                                    </div>
                                    <div className="input-field col s12">
                                      <textarea className="materialize-textarea" defaultValue={""} />
                                      <label>Descriptions:</label>
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
                                <h4>Contact Info</h4>
                                <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                              </div>
                              <div className="bor">
                                <form>
                                  <div className="row">
                                    <div className="input-field col s6">
                                      <input id="t5-n1" type="text" className="validate" />
                                      <label htmlFor="t5-n1">Contact Name</label>
                                    </div>
                                    <div className="input-field col s6">
                                      <input id="t5-n2" type="text" className="validate" />
                                      <label htmlFor="t5-n2">Alter Contact Name</label>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="input-field col s6">
                                      <input id="t5-n3" type="number" className="validate" />
                                      <label htmlFor="t5-n3">Phone</label>
                                    </div>
                                    <div className="input-field col s6">
                                      <input id="t5-n4" type="number" className="validate" />
                                      <label htmlFor="t5-n4">Mobile</label>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="input-field col s12">
                                      <input id="t5-n5" type="email" className="validate" />
                                      <label htmlFor="t5-n5">Email</label>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="input-field col s12">
                                      <textarea id="t5-n6" className="materialize-textarea" defaultValue={""} />
                                      <label htmlFor="t5-n6">Listing Descriptions:</label>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="input-field col s12">
                                      <i className="waves-effect waves-light btn-large waves-input-wrapper" style={{}}><input type="submit" className="waves-button-input" defaultValue="Upload" /></i>
                                    </div>
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
              </div>
            </div>
          </div>
          {/*Import jQuery before materialize.js*/}
        </div>
      );
    }
  };