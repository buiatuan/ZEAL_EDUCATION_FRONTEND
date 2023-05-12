import React, {Component} from "react";
import {Link } from "react-router-dom";
export class FooterClient extends Component{
    render(){
        return(
            <div>
                   <section className="wed-hom-footer">
        <div className="container">
            {/*<div class="row">
                <div class="col-md-12">
                    <h4>About Wedding Planner</h4>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum</p>
                    <p>more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                    <p></p>
                </div>
            </div>*/}
            <div className="row wed-foot-link">
                <div className="col-md-4 foot-tc-mar-t-o">
                    <h4>Top Courses</h4>
                    <ul>
                        <li><Link to="../course-details">Accounting/Finance</Link></li>
                        <li><Link to="../course-details">civil engineering</Link></li>
                        <li><Link to="../course-details">Art/Design</Link></li>
                        <li><Link to="../course-details">Marine Engineering</Link></li>
                        <li><Link to="../course-details">Business Management</Link></li>
                        <li><Link to="../course-details">Journalism/Writing</Link></li>
                        <li><Link to="../course-details">Physical Education</Link></li>
                        <li><Link to="../course-details">Political Science</Link></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h4>New Courses</h4>
                    <ul>
                        <li><Link to="../course-details">Sciences</Link></li>
                        <li><Link to="../course-details">Statistics</Link></li>
                        <li><Link to="../course-details">Web Design/Development</Link></li>
                        <li><Link to="../course-details">SEO</Link></li>
                        <li><Link to="../course-details">Google Business</Link></li>
                        <li><Link to="../course-details">Graphics Design</Link></li>
                        <li><Link to="../course-details">Networking Courses</Link></li>
                        <li><Link to="../course-details">Information technology</Link></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h4>HELP &amp; SUPPORT</h4>
                    <ul>
                        <li>
                            <Link to="../#">24x7 Live help</Link>
                        </li>
                        <li>
                            <Link to="../#">Contact us</Link>
                        </li>
                        <li>
                            <Link to="../#">Feedback</Link>
                        </li>
                        <li>
                            <Link to="../#">FAQs</Link>
                        </li>
                        <li>
                            <Link to="../#">Safety Tips</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row wed-foot-link-1">
                <div className="col-md-4 foot-tc-mar-t-o">
                    <h4>Get In Touch</h4>
                    <p>Address: 28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.</p>
                    <p>Phone: <Link to="../#!">+101-1231-4321</Link></p>
                    <p>Email: <Link to="../#!">info@educationmaster.com</Link></p>
                </div>
                <div className="col-md-4">
                    <h4>DOWNLOAD OUR FREE MOBILE APPS</h4>
                    <ul>
                        <li>
                            <Link to="../#"><span className="sprite sprite-android" /></Link>
                        </li>
                        <li>
                            <Link to="../#"><span className="sprite sprite-ios" /></Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h4>SOCIAL MEDIA</h4>
                    <ul>
                        <li>
                            <Link to="../#"><i className="fa fa-facebook" aria-hidden="true" /></Link>
                        </li>
                        <li>
                            <Link to="../#"><i className="fa fa-twitter" aria-hidden="true" /></Link>
                        </li>
                        <li>
                            <Link to="../#"><i className="fa fa-google-plus" aria-hidden="true" /></Link>
                        </li>
                        <li>
                            <Link to="../#"><i className="fa fa-youtube" aria-hidden="true" /></Link>
                        </li>
                        <li>
                            <Link to="../#"><i className="fa fa-whatsapp" aria-hidden="true" /></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    {/*END HEADER SECTION*/}
    {/*HEADER SECTION*/}
    <section className="wed-rights">
        <div className="container">
            <div className="row">
                <div className="copy-right">
                    <p>Copyrights © 2018 RN53Themes. All rights reserved.</p>
                </div>
            </div>
        </div>
    </section>
    {/*END HEADER SECTION*/}
    {/*SECTION LOGIN, REGISTER AND FORGOT PASSWORD*/}
    <section>
        {/* LOGIN SECTION */}
        <div id="modal1" className="modal fade" role="dialog">
            <div className="log-in-pop">
                <div className="log-in-pop-left">
                    <h1>Hello...</h1>
                    <p>Don't have an account? Create your account. It's take less then a minutes</p>
                    <h4>Login with social media</h4>
                    <ul>
                        <li>
                            <Link to="../#"><i className="fa fa-facebook" /> Facebook</Link>
                        </li>
                        <li>
                            <Link to="../#"><i className="fa fa-google" /> Google+</Link>
                        </li>
                        <li>
                            <Link to="../#"><i className="fa fa-twitter" /> Twitter</Link>
                        </li>
                    </ul>
                </div>
                <div className="log-in-pop-right">
                    <Link to="../#" className="pop-close" data-dismiss="modal">
                        <img src={require("../asserts/images/cancel.png")} alt="" />
                    </Link>
                    <h4>Login</h4>
                    <p>Don't have an account? Create your account. It's take less then a minutes</p>
                    <form className="s12">
                        <div>
                            <div className="input-field s12">
                                <input type="text" data-ng-model="name" className="validate" />
                                <label>User name</label>
                            </div>
                        </div>
                        <div>
                            <div className="input-field s12">
                                <input type="password" className="validate" />
                                <label>Password</label>
                            </div>
                        </div>
                        <div>
                            <div className="s12 log-ch-bx">
                                <p>
                                    <input type="checkbox" id="test5" />
                                    <label htmlFor="test5">Remember me</label>
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="input-field s4">
                                <input type="submit" defaultValue="Login" className="waves-effect waves-light log-in-btn" />
                            </div>
                        </div>
                        <div>
                            <div className="input-field s12"> <Link to="../#" data-dismiss="modal" data-toggle="modal" data-target="#modal3">Forgot password</Link> | <Link to="../#" data-dismiss="modal" data-toggle="modal" data-target="#modal2">Create a new account</Link> </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        {/* REGISTER SECTION */}
        <div id="modal2" className="modal fade" role="dialog">
            <div className="log-in-pop">
                <div className="log-in-pop-left">
                    <h1>Hello...</h1>
                    <p>Don't have an account? Create your account. It's take less then a minutes</p>
                    <h4>Login with social media</h4>
                    <ul>
                        <li>
                            <Link to="../#"><i className="fa fa-facebook" /> Facebook</Link>
                        </li>
                        <li>
                            <Link to="../#"><i className="fa fa-google" /> Google+</Link>
                        </li>
                        <li>
                            <Link to="../#"><i className="fa fa-twitter" /> Twitter</Link>
                        </li>
                    </ul>
                </div>
                <div className="log-in-pop-right">
                    <Link to="../#" className="pop-close" data-dismiss="modal">
                        <img src={require("../asserts/images/cancel.png")} alt="" />
                    </Link>
                    <h4>Create an Account</h4>
                    <p>Don't have an account? Create your account. It's take less then a minutes</p>
                    <form className="s12">
                        <div>
                            <div className="input-field s12">
                                <input type="text" data-ng-model="name1" className="validate" />
                                <label>User name</label>
                            </div>
                        </div>
                        <div>
                            <div className="input-field s12">
                                <input type="email" className="validate" />
                                <label>Email id</label>
                            </div>
                        </div>
                        <div>
                            <div className="input-field s12">
                                <input type="password" className="validate" />
                                <label>Password</label>
                            </div>
                        </div>
                        <div>
                            <div className="input-field s12">
                                <input type="password" className="validate" />
                                <label>Confirm password</label>
                            </div>
                        </div>
                        <div>
                            <div className="input-field s4">
                                <input type="submit" defaultValue="Register" className="waves-effect waves-light log-in-btn" />
                            </div>
                        </div>
                        <div>
                            <div className="input-field s12"> <Link to="../#" data-dismiss="modal" data-toggle="modal" data-target="#modal1">Are you a already member ? Login</Link> </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        {/* FORGOT SECTION */}
        <div id="modal3" className="modal fade" role="dialog">
            <div className="log-in-pop">
                <div className="log-in-pop-left">
                    <h1>Hello... </h1>
                    <p>Don't have an account? Create your account. It's take less then a minutes</p>
                    <h4>Login with social media</h4>
                    <ul>
                        <li>
                            <Link to="../#"><i className="fa fa-facebook" /> Facebook</Link>
                        </li>
                        <li>
                            <Link to="../#"><i className="fa fa-google" /> Google+</Link>
                        </li>
                        <li>
                            <Link to="../#"><i className="fa fa-twitter" /> Twitter</Link>
                        </li>
                    </ul>
                </div>
                <div className="log-in-pop-right">
                    <Link to="../#" className="pop-close" data-dismiss="modal">
                        <img src={require("../asserts/images/cancel.png")} alt="" />
                    </Link>
                    <h4>Forgot password</h4>
                    <p>Don't have an account? Create your account. It's take less then a minutes</p>
                    <form className="s12">
                        <div>
                            <div className="input-field s12">
                                <input type="text" data-ng-model="name3" className="validate" />
                                <label>User name or email id</label>
                            </div>
                        </div>
                        <div>
                            <div className="input-field s4">
                                <input type="submit" defaultValue="Submit" className="waves-effect waves-light log-in-btn" />
                            </div>
                        </div>
                        <div>
                            <div className="input-field s12"> <Link to="../#" data-dismiss="modal" data-toggle="modal" data-target="#modal1">Are you a already member ? Login</Link> | <Link to="../#" data-dismiss="modal" data-toggle="modal" data-target="#modal2">Create a new account</Link> </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div className="icon-float">
            <ul>
                <li><Link to="../#" className="sh">1k <br /> Share</Link> </li>
                <li><Link to="../#" className="fb1"><i className="fa fa-facebook" aria-hidden="true" /></Link> </li>
                <li><Link to="../#" className="gp1"><i className="fa fa-google-plus" aria-hidden="true" /></Link> </li>
                <li><Link to="../#" className="tw1"><i className="fa fa-twitter" aria-hidden="true" /></Link> </li>
                <li><Link to="../#" className="li1"><i className="fa fa-linkedin" aria-hidden="true" /></Link> </li>
                <li><Link to="../#" className="wa1"><i className="fa fa-whatsapp" aria-hidden="true" /></Link> </li>
                <li><Link to="../#" className="sh1"><i className="fa fa-envelope-o" aria-hidden="true" /></Link> </li>
            </ul>
        </div>
    </section>
            </div>
        );
    };
    
}