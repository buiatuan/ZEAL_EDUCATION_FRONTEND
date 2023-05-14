import React ,{Component} from "react";
import { Link } from "react-router-dom";
import { HeaderClient } from "../layout/HeaderClient";
import { FooterClient } from "../layout/FooterClient";
export class CourseDetail extends Component{
    render() {
      return (
        <div>
          {/* MOBILE MENU */}
          <HeaderClient/>
          {/*END HEADER SECTION*/}
          {/*SECTION START*/}
          <section>
            <div className="container com-sp pad-bot-70 pg-inn">
              <div className="row">
                <div className="cor">
                  <div className="col-md-3">
                    <div className="cor-top-deta cor-side-com">
                      <div className="cor-top-deta">
                        <div className="ho-st-login cor-apply field-com">
                          <div className="col s12">
                            <form className="col s12">
                              <div className="cor-left-app-tit">
                                <h4>Apply This Course</h4>
                                <p>Nulla at velit convallis lectus.</p>
                              </div>
                              <div className="row">
                                <div className="input-field col s12">
                                  <input type="text" className="validate" />
                                  <label>Full Name</label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="input-field col s12">
                                  <input type="text" className="validate" />
                                  <label>Email id</label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="input-field col s12">
                                  <input type="text" className="validate" />
                                  <label>Phone</label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="input-field col s12">
                                  <select>
                                    <option value disabled selected>Select Course</option>
                                    <option value={1}>Option 1</option>
                                    <option value={2}>Option 2</option>
                                    <option value={3}>Option 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="row">
                                <div className="input-field col s12">
                                  <input type="submit" defaultValue="APPLY NOW" className="waves-effect waves-light light-btn" />
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cor-side-com">
                      <div className>
                        <div className="de-left-tit">
                          <h4>Upcoming Event</h4>
                        </div>
                      </div>
                      <div className="ho-event">
                        <ul>
                          <li>
                            <div className="ho-ev-link ho-ev-link-full">
                              <Link to="../#">
                                <h4>Workshop PHP</h4>
                              </Link>
                              <p>Nulla at velit convallis venenatis.</p>
                              <span>9:15 am – 5:00 pm</span>
                            </div>
                          </li>
                          <li>
                            <div className="ho-ev-link ho-ev-link-full">
                              <Link to="../#">
                                <h4>Workshop PHP</h4>
                              </Link>
                              <p>Nulla at velit convallis venenatis.</p>
                              <span>9:15 am – 5:00 pm</span>
                            </div>
                          </li>
                          <li>
                            <div className="ho-ev-link ho-ev-link-full">
                              <Link to="../#">
                                <h4>Workshop PHP</h4>
                              </Link>
                              <p>Nulla at velit convallis venenatis.</p>
                              <span>9:15 am – 5:00 pm</span>
                            </div>
                          </li>
                          <li>
                            <div className="ho-ev-link ho-ev-link-full">
                              <Link to="../#">
                                <h4>Workshop PHP</h4>
                              </Link>
                              <p>Nulla at velit convallis venenatis.</p>
                              <span>9:15 am – 5:00 pm</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cor-mid-img">
                      <img src={require('../assets/images/course.jpg')} alt="" />
                    </div>
                    <div className="cor-con-mid">
                      <div className="cor-p1">
                        <h2>Biological Sciences</h2>
                        <span>Category: Software Testing</span>
                        <div className="share-btn">
                          <ul>
                            <li><Link to="../#"><i className="fa fa-facebook fb1" /> Share On Facebook</Link>
                            </li>
                            <li><Link to="../#"><i className="fa fa-twitter tw1" /> Share On Twitter</Link>
                            </li>
                            <li><Link to="../#"><i className="fa fa-google-plus gp1" /> Share On Google Plus</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="cor-p4">
                        <h3>Course Details:</h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going
                          to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making
                          this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem
                          Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                        <p> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                      </div>
                      <div className="cor-p5">
                        <h3>Course Syllabus</h3>
                        <ul className="nav nav-tabs">
                          <li className="active"><Link data-toggle="tab" href="#home">
                              <img src={require('../assets/images/icon/cor4.png')} alt="" /> <span>Requirements</span></Link>
                          </li>
                          <li><Link data-toggle="tab" href="#menu1"><img src={require('../assets/images/icon/cor3.png')} alt="" /><span>Fees</span></Link></li>
                          <li><Link data-toggle="tab" href="#menu2"><img src={require('../assets/images/icon/cor1.png')} alt="" /><span>Student Profile</span></Link></li>
                          <li><Link data-toggle="tab" href="#menu2"><img src={require('../assets/images/icon/cor5.png')} alt="" /><span>How to Apply</span></Link></li>
                        </ul>
                        <div className="tab-content">
                          <div id="home" className="tab-pane fade in active">
                            <h4>Home</h4>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                            <p> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                          </div>
                          <div id="menu1" className="tab-pane fade">
                            <h4>Menu 1</h4>
                            <p>Some content in menu 1.</p>
                          </div>
                          <div id="menu2" className="tab-pane fade">
                            <h4>Menu 2</h4>
                            <p>Some content in menu 2.</p>
                          </div>
                        </div>
                      </div>
                      <div className="cor-p4">
                        <h3>A typical weekly timetable:</h3>
                        <p> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <ul className="collapsible" data-collapsible="accordion">
                          <li>
                            <div className="collapsible-header active">1st year</div>
                            <div className="collapsible-body cor-tim-tab">
                              <h4>First Year Courses</h4>
                              <ul>
                                <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</li>
                                <li>Anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</li>
                                <li>Combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem</li>
                                <li>Nullam tincidunt urna non porttitor luctus. Suspendisse sem urna, auctor ac commodo eu, bibendum sed nulla.</li>
                              </ul>
                              <h4>Assessment</h4>
                              <ul>
                                <li>Three written papers form the First University Examination, together with a submitted portfolio of two exam essays of 2,000 words for Introduction to English Language and Literature.</li>
                                <li>All exams must be passed, but marks do not count towards the final degree.</li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <div className="collapsible-header">2st year</div>
                            <div className="collapsible-body cor-tim-tab">
                              <h4>Second Year Courses</h4>
                              <ul>
                                <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</li>
                                <li>Anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</li>
                                <li>Combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem</li>
                              </ul>
                              <h4>Assessment</h4>
                              <ul>
                                <li>Three written papers form the First University Examination, together with a submitted portfolio of two exam essays of 2,000 words for Introduction to English Language and Literature.</li>
                                <li>All exams must be passed, but marks do not count towards the final degree.</li>
                                <li>Combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem</li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <div className="collapsible-header">3st year</div>
                            <div className="collapsible-body cor-tim-tab">
                              <h4>Third Year Courses</h4>
                              <ul>
                                <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</li>
                                <li>Anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</li>
                              </ul>
                              <h4>Assessment</h4>
                              <ul>
                                <li>Three written papers form the First University Examination, together with a submitted portfolio of two exam essays of 2,000 words for Introduction to English Language and Literature.</li>
                                <li>All exams must be passed, but marks do not count towards the final degree.</li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="cor-p6">
                        <h3>Student Reviews</h3>
                        <div className="cor-p6-revi">
                          <div className="cor-p6-revi-left">
                            <img src={require('../assets/images/4.jpg')} alt="" />
                          </div>
                          <div className="cor-p6-revi-right">
                            <h4>Rachel Britain</h4>
                            <span>Date: 12may, 2017</span>
                            <p>Mauris elementum et libero ac pharetra. Proin tristique dapibus tellus, lacinia blandit mi tincidunt at. Vivamus vitae interdum felis. Pellentesque congue mollis erat in imperdiet.</p>
                          </div>
                        </div>
                        <div className="cor-p6-revi">
                          <div className="cor-p6-revi-left">
                            <img src={require('../assets/images/4.jpg')} alt="" />
                          </div>
                          <div className="cor-p6-revi-right">
                            <h4>Rachel Britain</h4>
                            <span>Date: 12may, 2017</span>
                            <p>Mauris elementum et libero ac pharetra. Proin tristique dapibus tellus, lacinia blandit mi tincidunt at. Vivamus vitae interdum felis. Pellentesque congue mollis erat in imperdiet.</p>
                          </div>
                        </div>
                        <div className="cor-p6-revi">
                          <div className="cor-p6-revi-left">
                            <img src={require('../assets/images/4.jpg')} alt="" />
                          </div>
                          <div className="cor-p6-revi-right">
                            <h4>Rachel Britain</h4>
                            <span>Date: 12may, 2017</span>
                            <p>Mauris elementum et libero ac pharetra. Proin tristique dapibus tellus, lacinia blandit mi tincidunt at. Vivamus vitae interdum felis. Pellentesque congue mollis erat in imperdiet.</p>
                          </div>
                        </div>
                        <div className="cor-p6-revi">
                          <div className="cor-p6-revi-left">
                            <img src={require('../assets/images/4.jpg')} alt="" />
                          </div>
                          <div className="cor-p6-revi-right">
                            <h4>Rachel Britain</h4>
                            <span>Date: 12may, 2017</span>
                            <p>Mauris elementum et libero ac pharetra. Proin tristique dapibus tellus, lacinia blandit mi tincidunt at. Vivamus vitae interdum felis. Pellentesque congue mollis erat in imperdiet.</p>
                          </div>
                        </div>
                      </div>
                      <div className="cor-p6">
                        <h3>Write Reviews</h3>
                        <div className="cor-p7-revi">
                          <form className="col s12">
                            <div className="row">
                              <div className="input-field col s6">
                                <input type="text" className="validate" />
                                <label>Name</label>
                              </div>
                              <div className="input-field col s6">
                                <input type="text" className="validate" />
                                <label>Email id</label>
                              </div>
                            </div>
                            <div className="row">
                              <div className="input-field col s12">
                                <textarea className="materialize-textarea" defaultValue={""} />
                                <label>Message</label>
                              </div>
                            </div>
                            <div className="row">
                              <div className="input-field col s12">
                                <input type="submit" defaultValue="Submit" className="waves-effect waves-light btn-book" />
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="cor-side-com">
                      <div className="ho-ev-latest ho-ev-latest-bg-3">
                        <div className="ho-lat-ev">
                          <h4>Student Login</h4>
                          <p>Student area velit convallis venenatis lacus quis, efficitur lectus.</p>
                        </div>
                      </div>
                      <div className="ho-st-login">
                        <div className="col s12">
                          <form className="col s12">
                            <div className="row">
                              <div className="input-field col s12">
                                <input type="text" className="validate" />
                                <label>Student user name</label>
                              </div>
                            </div>
                            <div className="row">
                              <div className="input-field col s12">
                                <input type="password" className="validate" />
                                <label>Password</label>
                              </div>
                            </div>
                            <div className="row">
                              <div className="input-field col s12">
                                <input type="submit" defaultValue="Login" className="waves-effect waves-light light-btn" />
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="cor-side-com">
                      <div className="ho-ev-latest ho-ev-latest-bg-2">
                        <div className="ho-lat-ev">
                          <Link to="../#">
                            <h4>Job Vacants</h4>
                            <p>Nulla at velit convallis, venenatis lacus quis, efficitur lectus.</p>
                          </Link>
                        </div>
                      </div>
                      <div className="ho-ev-latest in-ev-latest-bg-1">
                        <div className="ho-lat-ev">
                          <Link to="../#">
                            <h4>Job Vacants</h4>
                            <p>Nulla at velit convallis, venenatis lacus quis, efficitur lectus.</p>
                          </Link>
                        </div>
                      </div>
                      <div className="ho-ev-latest in-ev-latest-bg-1">
                        <div className="ho-lat-ev">
                          <Link to="../#">
                            <h4>Job Vacants</h4>
                            <p>Nulla at velit convallis, venenatis lacus quis, efficitur lectus.</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*SECTION END*/}
          {/*SECTION START*/}
         
                  
          <FooterClient/>
            {/*Import jQuery before materialize.js*/}
            </div>
    );
  }
};