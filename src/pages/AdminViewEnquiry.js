import React,{Component} from "react";
import { Link } from 'react-router-dom';
import { HeaderAdmin } from "../components/HeaderAdmin";
import { SidebarAdmin } from "../components/SidebarAdmin";
export class AdminViewEnquiry extends Component{
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
                    <li><Link to="/index"><i className="fa fa-home" aria-hidden="true" /> Home</Link>
                    </li>
                    <li className="active-bre"><Link to="/#"> View Enquiry</Link>
                    </li>
                    <li className="page-back"><Link to="/index"><i className="fa fa-backward" aria-hidden="true" /> Back</Link>
                    </li>
                  </ul>
                </div>
                {/*== User Details ==*/}
                <div className="sb2-2-3">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="box-inn-sp">
                        <div className="inn-title">
                          <h4>View Enquiry</h4>
                          <p>All about students like name, student id, phone, email, country, city and more</p>
                        </div>
                        <div className="tab-inn">
                          <div className="table-responsive table-desi">
                            <table className="table table-hover">
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th>Name</th>
                                  <th>Email id</th>
                                  <th>Phone</th>
                                  <th>Message</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>John smith</td>
                                  <td>johm_smith@gmail.com</td>
                                  <td>+1084156352</td>
                                  <td>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>Edwin</td>
                                  <td>edwin@gmail.com</td>
                                  <td>+1096525841</td>
                                  <td> It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>John smith</td>
                                  <td>johm_smith@gmail.com</td>
                                  <td>+1084156352</td>
                                  <td>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</td>
                                </tr>
                                <tr>
                                  <td>4</td>
                                  <td>Edwin</td>
                                  <td>edwin@gmail.com</td>
                                  <td>+1096525841</td>
                                  <td> It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</td>
                                </tr>
                                <tr>
                                  <td>5</td>
                                  <td>John smith</td>
                                  <td>johm_smith@gmail.com</td>
                                  <td>+1084156352</td>
                                  <td>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</td>
                                </tr>
                                <tr>
                                  <td>6</td>
                                  <td>Edwin</td>
                                  <td>edwin@gmail.com</td>
                                  <td>+1096525841</td>
                                  <td> It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</td>
                                </tr>
                              </tbody>
                            </table>
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