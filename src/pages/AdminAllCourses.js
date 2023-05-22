import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HeaderAdmin } from '../components/HeaderAdmin';
import { SidebarAdmin } from '../components/SidebarAdmin';
export class AdminAllCourses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AllCouses: [],
        };
    }
    async getCouses() {
        try {
            var res = await fetch('https://localhost:7156/api/AdminCourse/GetListCourse', { method: 'get' });
            var data = await res.json();
            this.setState({
                AllCouses: data,
            });
        } catch (err) {
            console.log(err);
        }
    }
    CourseDashnoard() {
        const resultCourse = this.state.AllCouses.map((e) => {
            const min = 1;
            const max = 90;
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            return (
                <tr>
                    <td>
                        <span className="list-img">
                            <img src={`https://randomuser.me/api/portraits/men/${randomNumber}.jpg`} alt="" />
                        </span>
                    </td>
                    <td>
                        <Link to="../admin-student-details">
                            <span className="list-enq-name">{e.name}</span>
                            <span className="list-enq-city">{e.courseType}</span>
                        </Link>
                    </td>
                    <td>{e.courseCode}</td>
                    <td>60 Days(420hrs)</td>
                    <td>03 Jun 2018</td>
                    <td>12 Aug 2018</td>
                    <td>{e.tuitionFees}</td>
                    <td>
                        <span className="label label-success">Active</span>
                    </td>
                    <td>
                        <Link to="../admin-student-details" className="ad-st-view">
                            View
                        </Link>
                    </td>
                </tr>
            );
        });
        return resultCourse;
    }
    componentDidMount() {
        this.getCouses();
       
    }
    render() {
        return (
            <div>
                <HeaderAdmin />
                {/*== BODY CONTNAINER ==*/}
                <div className="container-fluid sb2">
                    <div className="row">
                        {/*== BODY INNER CONTAINER ==*/}
                        <SidebarAdmin />
                        {/*== BODY INNER CONTAINER ==*/}
                        <div className="sb2-2">
                            {/*== breadcrumbs ==*/}
                            <div className="sb2-2-2">
                                <ul>
                                    <li>
                                        <Link to="../index">
                                            <i className="fa fa-home" aria-hidden="true" /> Home
                                        </Link>
                                    </li>
                                    <li className="active-bre">
                                        <Link to="../#"> Dashboard</Link>
                                    </li>
                                    <li className="page-back">
                                        <Link to="../index">
                                            <i className="fa fa-backward" aria-hidden="true" /> Back
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            {/*== User Details ==*/}
                            <div className="sb2-2-3">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="box-inn-sp">
                                            <div className="inn-title">
                                                <h4>Course Details</h4>
                                                <p>
                                                    All about courses, program structure, fees, best course lists
                                                    (ranking), syllabus, teaching techniques and other details.
                                                </p>
                                            </div>
                                            <div className="tab-inn">
                                                <div className="table-responsive table-desi">
                                                    <table className="table table-hover">
                                                        <thead>
                                                            <tr>
                                                                <th>Image</th>
                                                                <th>Course Name</th>
                                                                <th>Category</th>
                                                                <th>Durations</th>
                                                                <th>Start Date</th>
                                                                <th>End Date</th>
                                                                <th>Total Seats</th>
                                                                <th>Status</th>
                                                                <th>View</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>{this.CourseDashnoard()}</tbody>
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
}
