import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { HeaderAdmin } from "../components/HeaderAdmin";
import { SidebarAdmin } from "../components/SidebarAdmin";

const AdminAddCourses = () => {
  const [formData, setFormData] = useState({
    courseCode: '',
    name: '',
    tuitionFees: '',
    courseType: '',
    description: '',
    image: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the request body
    const requestBody = {
      courseCode: formData.courseCode,
      name: formData.name,
      tuitionFees: formData.tuitionFees,
      courseType: formData.courseType,
      description: formData.description,
      image: formData.image,
    };
    
    // Send the data to the API
    fetch('https://localhost:7156/api/AdminCourse/Create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then(response => {
        if(response.ok) alert("ADD SUCCESS!");
      })
      .catch(error => {
        console.error('Error sending form data:', error);
      });
  };

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
                    <p>The table class adds basic styling (light padding and only horizontal dividers) to a table:</p>
                    {/* <ul className="nav nav-tabs tab-list">
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
                    </ul> */}
                    <form onSubmit={e=>handleSubmit(e)}>
                      <div className="mb-3">
                        <label htmlFor="courseCode" className="form-label">Course Code:</label>
                        <input type="text" className="form-control" id="courseCode" name="courseCode" placeholder="Enter course code" onChange={e=>handleChange(e)}/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input type="text" className="form-control" id="name" name="name" placeholder="Enter name" onChange={e=>handleChange(e)}/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="tuitionFees" className="form-label">Tuition Fees:</label>
                        <input type="text" className="form-control" id="tuitionFees" name="tuitionFees" placeholder="Enter tuition fees" onChange={e=>handleChange(e)}/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="courseType" className="form-label">Course Type:</label>
                        <input type="text" className="form-control" id="courseType" name="courseType" placeholder="Enter course type" onChange={e=>handleChange(e)}/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description:</label>
                        <input type="text" className="form-control" id="description" name="description" placeholder="Enter description" onChange={e=>handleChange(e)}/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="image" className="form-label">Image:</label>
                        <input type="text" className="form-control" id="image" name="image" placeholder="Enter image URL" onChange={e=>handleChange(e)}/>
                      </div>
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
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
};

export default AdminAddCourses;