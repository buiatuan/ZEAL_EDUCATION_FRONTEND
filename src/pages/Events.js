import React ,{Component} from "react";
import { Link } from 'react-router-dom';
import { HeaderClient } from "../layout/HeaderClient";
import { FooterClient } from "../layout/FooterClient";
export class Events extends Component{
    render() {
      return (
        <div>
          {/* MOBILE MENU */}
          <HeaderClient/>
          {/*END HEADER SECTION*/}
          {/*SECTION START*/}
          <section>
            <div className="container com-sp">
              <div className="row">
                <div className="cor about-sp">
                  <div className="ed-about-tit">
                    <div className="con-title">
                      <h2>College <span> Events</span></h2>
                      <p>Fusce id sem at ligula laoreet hendrerit venenatis sed purus. Ut pellentesque maximus lacus, nec pharetra augue.</p>
                    </div>
                    <div>
                      <div className="ho-event pg-eve-main">
                        <ul>
                          <li>
                            <div className="ho-ev-date pg-eve-date"><span>07</span><span>jan,2018</span>
                            </div>
                            <div className="ho-ev-link pg-eve-desc">
                              <Link to="../event-register">
                                <h4>Latinoo College Expo 2018 - DONATION</h4>
                              </Link>
                              <p>Nulla at velit convallis, venenatis lacus quis, efficitur lectus.</p>
                              <span>9:15 am – 5:00 pm</span>
                            </div>
                            <div className="pg-eve-reg">
                              <Link to="../event-register">Register</Link><Link to="../event-details">Read more</Link>
                            </div>
                          </li>
                          <li>
                            <div className="ho-ev-date pg-eve-date"><span>12</span><span>feb,2018</span>
                            </div>
                            <div className="ho-ev-link pg-eve-desc">
                              <Link to="../event-register">
                                <h4>Training at Team Fabio Clemente</h4>
                              </Link>
                              <p>Nulla at velit convallis, venenatis lacus quis, efficitur lectus.</p>
                              <span>9:15 am – 5:00 pm</span>
                            </div>
                            <div className="pg-eve-reg">
                              <Link to="../event-register">Register</Link><Link to="../event-details">Read more</Link>
                            </div>
                          </li>
                          <li>
                            <div className="ho-ev-date pg-eve-date"><span>26</span><span>apr,2018</span>
                            </div>
                            <div className="ho-ev-link pg-eve-desc">
                              <Link to="../event-register">
                                <h4>Weekly Breakdance Practice</h4>
                              </Link>
                              <p>Nulla at velit convallis, venenatis lacus quis, efficitur lectus.</p>
                              <span>9:15 am – 5:00 pm</span>
                            </div>
                            <div className="pg-eve-reg">
                              <Link to="../event-register">Register</Link><Link to="../event-details">Read more</Link>
                            </div>
                          </li>
                          <li>
                            <div className="ho-ev-date pg-eve-date"><span>18</span><span>sep,2018</span>
                            </div>
                            <div className="ho-ev-link pg-eve-desc">
                              <Link to="../event-register">
                                <h4>Admissions Information Session and Tour</h4>
                              </Link>
                              <p>Nulla at velit convallis, venenatis lacus quis, efficitur lectus.</p>
                              <span>9:15 am – 5:00 pm</span>
                            </div>
                            <div className="pg-eve-reg">
                              <Link to="../event-register">Register</Link><Link to="../event-details">Read more</Link>
                            </div>
                          </li>
                          <li>
                            <div className="ho-ev-date pg-eve-date"><span>07</span><span>nov,2018</span>
                            </div>
                            <div className="ho-ev-link pg-eve-desc">
                              <Link to="../event-register">
                                <h4>CUNY Assessment Test Workshop</h4>
                              </Link>
                              <p>Nulla at velit convallis, venenatis lacus quis, efficitur lectus.</p>
                              <span>9:15 am – 5:00 pm</span>
                            </div>
                            <div className="pg-eve-reg">
                              <Link to="../event-register">Register</Link><Link to="../event-details">Read more</Link>
                            </div>
                          </li>
                          <li>
                            <div className="ho-ev-date pg-eve-date"><span>18</span><span>sep,2018</span>
                            </div>
                            <div className="ho-ev-link pg-eve-desc">
                              <Link to="../event-register">
                                <h4>Fire &amp; ice launch party</h4>
                              </Link>
                              <p>Nulla at velit convallis, venenatis lacus quis, efficitur lectus.</p>
                              <span>9:15 am – 5:00 pm</span>
                            </div>
                            <div className="pg-eve-reg">
                              <Link to="../event-register">Register</Link><Link to="../event-details">Read more</Link>
                            </div>
                          </li>
                          <li>
                            <div className="ho-ev-date pg-eve-date"><span>07</span><span>nov,2018</span>
                            </div>
                            <div className="ho-ev-link pg-eve-desc">
                              <Link to="../event-register">
                                <h4>Educate to Empower NYE Party</h4>
                              </Link>
                              <p>Nulla at velit convallis, venenatis lacus quis, efficitur lectus.</p>
                              <span>9:15 am – 5:00 pm</span>
                            </div>
                            <div className="pg-eve-reg">
                              <Link to="../event-register">Register</Link><Link to="../event-details">Read more</Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="pg-pagina">
                      <ul className="pagination">
                        <li className="disabled"><Link to="../#!"><i className="fa fa-angle-left" aria-hidden="true" /></Link></li>
                        <li className="active"><Link to="../#!">1</Link></li>
                        <li className="waves-effect"><Link to="../#!">2</Link></li>
                        <li className="waves-effect"><Link to="../#!">3</Link></li>
                        <li className="waves-effect"><Link to="../#!">4</Link></li>
                        <li className="waves-effect"><Link to="../#!">5</Link></li>
                        <li className="waves-effect"><Link to="../#!"><i className="fa fa-angle-right" aria-hidden="true" /></Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*SECTION END*/}
          {/*SECTION START*/}
          <section>
          <div className="full-bot-book">
            <div className="container">
              <div className="row">
                <div className="bot-book">
                  <div className="col-md-2 bb-img">
                    <img src={require('../assets/images/3.png')} alt="" />
                  </div>
                  <div className="col-md-7 bb-text">
                    <h4>therefore always free from repetition</h4>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                  </div>
                  <div className="col-md-3 bb-link">
                    <Link to="../CousrseDetails">Book This Course</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
          <FooterClient/>
            {/*Import jQuery before materialize.js*/}
            </div>
    );
  }
}; 