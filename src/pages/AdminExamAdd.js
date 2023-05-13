import React, {Component} from "react";
import {Link } from "react-router-dom";
import { HeaderAdmin } from "../components/HeaderAdmin";
import { SidebarAdmin } from "../components/SidebarAdmin";
export class AdminExamAdd extends Component{
    render(){
      
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
                          <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p>
                          <ul className="nav nav-tabs tab-list">
                            <li className="active"><Link to data-toggle="tab" href="#home" aria-expanded="true"><i className="fa fa-sticky-note-o" aria-hidden="true" /> <span>Exam 1</span></Link>
                            </li>
                            <li className><Link to data-toggle="tab" href="#menu1" aria-expanded="false"><i className="fa fa-sticky-note-o" aria-hidden="true" /> <span>Exam 2</span></Link>
                            </li>
                            <li className><Link to data-toggle="tab" href="#menu2" aria-expanded="false"><i className="fa fa-sticky-note-o" aria-hidden="true" /> <span>Exam 3</span></Link>
                            </li>
                            <li className><Link to data-toggle="tab" href="#menu3" aria-expanded="false"><i className="fa fa-sticky-note-o" aria-hidden="true" /> <span>Exam 4</span></Link>
                            </li>
                            <li className><Link to data-toggle="tab" href="#menu4" aria-expanded="false"><i className="fa fa-sticky-note-o" aria-hidden="true" /> <span>Exam 5</span></Link>
                            </li>
                          </ul>
                          <div className="tab-content">
                            <div id="home" className="tab-pane fade active in">
                              <div className="box-inn-sp">
                                <div className="inn-title">
                                  <h4>Exam Details</h4>
                                  <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                                </div>
                                <div className="bor">
                                  <form>
                                    <div className="row">
                                      <div className="input-field col s12">
                                        <input type="text" defaultValue className="validate" />
                                        <label className>Main exam name</label>
                                      </div>
                                      <div className="input-field col s12">
                                        <input type="text" defaultValue className="validate" />
                                        <label>Exam name</label>
                                      </div>
                                      <div className="input-field col s12">
                                        <input type="text" defaultValue className="validate" />
                                        <label>Date</label>
                                      </div>
                                      <div className="input-field col s12">
                                        <input type="text" defaultValue className="validate" />
                                        <label>Start time</label>
                                      </div>
                                      <div className="input-field col s12">
                                        <input type="text" defaultValue className="validate" />
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
                            </div>
                            <div id="menu1" className="tab-pane fade">
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