import React ,{Component} from "react";
import { Link } from "react-router-dom";
import { HeaderClient } from "../components/HeaderClient";
import { FooterClient } from "../components/FooterClient";
export class AllCourses extends Component{
    render() {
      return (
        <div>
      <HeaderClient/>
          <section className="pop-cour">
            <div className="container com-sp pad-bot-70">
              <div className="row">
                <div className="con-title">
                  <h2>All <span>Courses</span></h2>
                  <p>Fusce id sem at ligula laoreet hendrerit venenatis sed purus. Ut pellentesque maximus lacus, nec pharetra augue.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div>
                    {/*POPULAR COURSES*/}
                    <div className="home-top-cour">
                      {/*POPULAR COURSES IMAGE*/}
                      <div className="col-md-3"> <img src={require('../assets/images/course/sm-1.jpg')} alt="" /> </div>
                      {/*POPULAR COURSES: CONTENT*/}
                      <div className="col-md-9 home-top-cour-desc">
                        <Link to="../CourseDetail">
                          <h3>Aerospace Engineering</h3>
                        </Link>
                        <h4>Technology / Space / Aerospace</h4>
                        <p>Classes started from coming friday(21 jun 2017),total seats 72 and available seats 10</p> <span className="home-top-cour-rat">4.2</span>
                        <div className="hom-list-share">
                          <ul>
                            <li><Link to="../CourseDetail"><i className="fa fa-bar-chart" aria-hidden="true" /> Book Now</Link> </li>
                            <li><Link to="../CourseDetail"><i className="fa fa-eye" aria-hidden="true" />10 Aavailable</Link> </li>
                            <li><Link to="../CourseDetail"><i className="fa fa-share-alt" aria-hidden="true" /> 570</Link> </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/*POPULAR COURSES*/}
                    <div className="home-top-cour">
                      {/*POPULAR COURSES IMAGE*/}
                      <div className="col-md-3"> <img src={require('../assets/images/course/sm-2.jpg')} alt="" /> </div>
                      {/*POPULAR COURSES: CONTENT*/}
                      <div className="col-md-9 home-top-cour-desc">
                        <Link to="../CourseDetail">
                          <h3>Agriculture Courses</h3>
                        </Link>
                        <h4>Technology / Space / Aerospace</h4>
                        <p>Classes started from coming friday(21 jun 2017),total seats 72 and available seats 10</p> <span className="home-top-cour-rat">4.2</span>
                        <div className="hom-list-share">
                          <ul>
                            <li><Link to="../CourseDetail"><i className="fa fa-bar-chart" aria-hidden="true" /> Book Now</Link> </li>
                            <li><Link to="../CourseDetail"><i className="fa fa-eye" aria-hidden="true" />40 Aavailable</Link> </li>
                            <li><Link to="../CourseDetail"><i className="fa fa-share-alt" aria-hidden="true" /> 320</Link> </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/*POPULAR COURSES*/}
                    <div className="home-top-cour">
                      {/*POPULAR COURSES IMAGE*/}
                      <div className="col-md-3"> <img src={require('../assets/images/course/sm-3.jpg')} alt="" /> </div>
                      {/*POPULAR COURSES: CONTENT*/}
                      <div className="col-md-9 home-top-cour-desc">
                        <Link to="../CourseDetail">
                          <h3>Marine Engineering</h3>
                        </Link>
                        <h4>Technology / Ocean / Marine</h4>
                        <p>Classes started from coming friday(21 jun 2017),total seats 72 and available seats 10</p> <span className="home-top-cour-rat">4.2</span>
                        <div className="hom-list-share">
                          <ul>
                            <li><Link to="../CourseDetail"><i className="fa fa-bar-chart" aria-hidden="true" /> Book Now</Link> </li>
                            <li><Link to="../CourseDetail"><i className="fa fa-eye" aria-hidden="true" />04 Aavailable</Link> </li>
                            <li><Link to="../CourseDetail"><i className="fa fa-share-alt" aria-hidden="true" /> 1020</Link> </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/*POPULAR COURSES*/}
                    <div className="home-top-cour">
                      {/*POPULAR COURSES IMAGE*/}
                      <div className="col-md-3"> <img src={require('../assets/images/course/sm-4.jpg')} alt="" /> </div>
                      {/*POPULAR COURSES: CONTENT*/}
                      <div className="col-md-9 home-top-cour-desc">
                        <Link to="../CourseDetail">
                          <h3>Building, Construction Management</h3>
                        </Link>
                        <h4>Technology / Construction / Building</h4>
                        <p>Classes started from coming friday(21 jun 2017),total seats 72 and available seats 10</p> <span className="home-top-cour-rat">4.2</span>
                        <div className="hom-list-share">
                          <ul>
                            <li><Link to="../CourseDetail"><i className="fa fa-bar-chart" aria-hidden="true" /> Book Now</Link> </li>
                            <li><Link to="../CourseDetail"><i className="fa fa-eye" aria-hidden="true" />32 Aavailable</Link> </li>
                            <li><Link to="../CourseDetail"><i className="fa fa-share-alt" aria-hidden="true" /> 124</Link> </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    {/*POPULAR COURSES*/}
                    <div className="home-top-cour">
                      {/*POPULAR COURSES IMAGE*/}
                      <div className="col-md-3"> <img src={require('../assets/images/course/sm-5.jpg')} alt="" /> </div>
                      {/*POPULAR COURSES: CONTENT*/}
                      <div className="col-md-9 home-top-cour-desc">
                        <Link to="../CourseDetail">
                          <h3>Fashion Technology</h3>
                        </Link>
                        <h4>Technology / Trends / Fashion</h4>
                        <p>Classes started from coming friday(21 jun 2017),total seats 72 and available seats 10</p> <span className="home-top-cour-rat">4.2</span>
                        <div className="hom-list-share">
                          <ul>
                            <li><Link to="../CourseDetail"><i className="fa fa-bar-chart" aria-hidden="true" /> Book Now</Link> </li>
                            <li><Link to="../CourseDetail"><i className="fa fa-eye" aria-hidden="true" />10 Aavailable</Link> </li>
                            <li><Link to="../CourseDetail"><i className="fa fa-share-alt" aria-hidden="true" /> 570</Link> </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/*POPULAR COURSES*/}
                    <div className="home-top-cour">
                      {/*POPULAR COURSES IMAGE*/}
                      <div className="col-md-3"> <img src={require('../assets/images/course/sm-6.jpg')} alt="" /> </div>
                      {/*POPULAR COURSES: CONTENT*/}
                      <div className="col-md-9 home-top-cour-desc">
                        <Link to="../CourseDetail">
                          <h3>Agriculture Courses</h3>
                        </Link>
                        <h4>Technology / Space / Aerospace</h4>
                        <p>Classes started from coming friday(21 jun 2017),total seats 72 and available seats 10</p> <span className="home-top-cour-rat">4.2</span>
                        <div className="hom-list-share">
                          <ul>
                            <li><Link to="../CourseDetail"><i className="fa fa-bar-chart" aria-hidden="true" /> Book Now</Link> </li>
                            <li><Link to="../CourseDetail"><i className="fa fa-eye" aria-hidden="true" />40 Aavailable</Link> </li>
                            <li><Link to="../CourseDetail"><i className="fa fa-share-alt" aria-hidden="true" /> 320</Link> </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/*POPULAR COURSES*/}
                    <div className="home-top-cour">
                      {/*POPULAR COURSES IMAGE*/}
                      <div className="col-md-3"> <img src={require('../assets/images/course/sm-7.jpg')} alt="" /> </div>
                      {/*POPULAR COURSES: CONTENT*/}
                      <div className="col-md-9 home-top-cour-desc">
                        <Link to="../CourseDetail">
                          <h3>Marine Engineering</h3>
                        </Link>
                        <h4>Technology / Ocean / Marine</h4>
                        <p>Classes started from coming friday(21 jun 2017),total seats 72 and available seats 10</p> <span className="home-top-cour-rat">4.2</span>
                        <div className="hom-list-share">
                          <ul>
                            <li><Link to="../CourseDetail"><i className="fa fa-bar-chart" aria-hidden="true" /> Book Now</Link> </li>
                            <li><Link to="../CourseDetail"><i className="fa fa-eye" aria-hidden="true" />04 Aavailable</Link> </li>
                            <li><Link to="../CourseDetail"><i className="fa fa-share-alt" aria-hidden="true" /> 1020</Link> </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/*POPULAR COURSES*/}
                    <div className="home-top-cour">
                      {/*POPULAR COURSES IMAGE*/}
                      <div className="col-md-3"> <img src={require('../assets/images/course/sm-8.jpg')} alt="" /> </div>
                      {/*POPULAR COURSES: CONTENT*/}
                      <div className="col-md-9 home-top-cour-desc">
                        <Link to="../CourseDetail">
                          <h3>Building, Construction Management</h3>
                        </Link>
                        <h4>Technology / Construction / Building</h4>
                        <p>Classes started from coming friday(21 jun 2017),total seats 72 and available seats 10</p> <span className="home-top-cour-rat">4.2</span>
                        <div className="hom-list-share">
                          <ul>
                            <li><Link to="../CourseDetail"><i className="fa fa-bar-chart" aria-hidden="true" /> Book Now</Link> </li>
                            <li><Link to="../CourseDetail"><i className="fa fa-eye" aria-hidden="true" />32 Aavailable</Link> </li>
                            <li><Link to="../CourseDetail"><i className="fa fa-share-alt" aria-hidden="true" /> 124</Link> </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*SECTION START*/}
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