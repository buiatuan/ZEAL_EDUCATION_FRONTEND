import React,{Component} from "react";
import {HeaderClient} from "../components/HeaderClient";
import {FooterClient} from "../components/FooterClient";
export class ContactUs extends Component{
    render() {

      return (
        <div>
          <HeaderClient/>
          {/*SECTION START*/}
          <section>
            <div className="container com-sp pad-bot-70">
              <div className="row">
                <div className="cor about-sp">
                  <div className="ed-about-tit">
                    <div className="con-title">
                      <h2>Contact <span> Us</span></h2>
                      <p>Fusce id sem at ligula laoreet hendrerit venenatis sed purus. Ut pellentesque maximus lacus, nec pharetra augue.</p>
                    </div>
                  </div>
                  <div className="pg-contact">
                    <div className="col-md-3 col-sm-6 col-xs-12 new-con new-con1">
                      <h2>Educate <span>Master</span></h2>
                      <p>We Provide Outsourced Software Development Services To Over 50 Clients From 21 Countries.</p>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 new-con new-con1"> <img src={require('../assets/img/contact/1')} alt="" />
                      <h4>Address</h4>
                      <p>28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.
                        <br />Landmark : Next To Airport</p>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 new-con new-con3"> <img src={require('../assets/img/contact/2')} alt="" />
                      <h4>CONTACT INFO:</h4>
                      <p> <a href="tel://0099999999" className="contact-icon">Phone: 01 234874 965478</a>
                        <br /> <a href="tel://0099999999" className="contact-icon">Mobile: 01 654874 965478</a>
                        <br /> <a href="mailto:mytestmail@gmail.com" className="contact-icon">Email: info@company.com</a> </p>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 new-con new-con4"> <img src={require('../assets/img/contact/3')} alt="" />
                      <h4>Website</h4>
                      <p> <a href="#">Website: www.mycompany.com</a>
                        <br /> <a href="#">Facebook: www.facebook/my</a>
                        <br /> <a href="#">Blog: www.blog.mycompany.com</a> </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*SECTION END*/}
          <section id="map">
            <div className="row contact-map">
              {/* IFRAME: GET YOUR LOCATION FROM GOOGLE MAP */}
              <iframe src='../assets/https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6290413.804893654!2d-93.99620524741552!3d39.66116578737809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880b2d386f6e2619%3A0x7f15825064115956!2sIllinois%2C+USA!5e0!3m2!1sen!2sin!4v1469954001005' allowFullScreen />
              <div className="container">
                <div className="overlay-contact footer-part footer-part-form">
                  <div className="map-head">
                    <p>Send Us Now</p>
                    <h2>GetIn Touch</h2> <span className="footer-ser-re">Service Request Form</span> </div>
                  {/* ENQUIRY FORM */}
                  <form id="contact_form" name="contact_form" action="https://rn53themes.net/themes/demo/education-master/send.php">
                    <ul>
                      <li className="col-md-6 col-sm-6 col-xs-12 contact-input-spac">
                        <input type="text" id="f1" defaultValue name="f1" placeholder="Name" required /> </li>
                      <li className="col-md-6 col-sm-6 col-xs-12 contact-input-spac">
                        <input type="text" id="f2" defaultValue name="f2" placeholder="Phone" required /> </li>
                      <li className="col-md-6 col-sm-6 col-xs-12 contact-input-spac">
                        <input type="text" id="f3" defaultValue name="f3" placeholder="City" required /> </li>
                      <li className="col-md-6 col-sm-6 col-xs-12 contact-input-spac">
                        <input type="text" id="f4" defaultValue name="f4" placeholder="Country" required /> </li>
                      <li className="col-md-12 col-sm-12 col-xs-12 contact-input-spac">
                        <textarea id="f5" name="f5" required defaultValue={""} />
                      </li>
                      <li className="col-md-6">
                        <input type="submit" defaultValue="SUBMIT" /> </li>
                    </ul>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <FooterClient/>
        </div>
       );
      }
    };