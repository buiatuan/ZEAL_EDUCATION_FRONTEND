
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Blog } from "./pages/blog";
import {AllCourse} from "./pages/AllCourse";


import { AdminAllEnquiry } from "./pages/AdminAllEnquiry";
import { AdminViewEnquiry } from "./pages/AdminViewEnquiry";
import { AdminEventEnquiry } from "./pages/AdminEventEnquiry";
import { AdminAdmissionEnquiry } from "./pages/AdminAdmissionEnquiry";
import { AdminCommonEnquiry } from "./pages/AdminCommonEnquir";
import { AdminCoursenEnquiry } from "./pages/AdminCourseEnquiry";
// import event
import {AdminEventAll} from "./pages/AdminEventAll";
import {AdminEventAdd} from "./pages/AdminEventAdd";
// import Exam admin
// import {AdminExamAll} from "./pages/AdminExamAll";

import { AdminAboutMenu } from "./pages/AdminAboutMenu";
import { AdminAdmissionMenu } from "./pages/AdminAdmissionMenu";
import { Admin } from "./pages/Admin";
import { AdminExamAdd } from "./pages/AdminExamAdd";
import { AdminAllCourses } from "./pages/AdminAllCourses";
import {AdminAddCourses} from "./pages/AdminAddCourses";
import { AdminUserAll } from "./pages/AdminUserAll";
import { AdminUserAdd } from "./pages/AdminUserAdd";
const AppRoutes = [
  {
    index: true,
    element: <Home />
    },
    {// chau fix duong dan anh , the a  duong dan link
        path: '/About',
        element: <About />
     },
     {
      path:'/Blog',
      element:<Blog/>
     },
     {
      path:'/allcourses',
      element:<AllCourse/>
     },
     
     // page admin
     {
      path:'/Admin',
      element:<Admin/>
     },
     //user admin
     {
      path:'/AdminAddCourses',
      element:<AdminAddCourses/>
     },
     {
      path:'/AdminUserAll',
      element:<AdminUserAll/>
     },
     {
      path:'/AdminUserAdd',
      element:<AdminUserAdd/>
      
     },
     // event admin
     {
      path: '/AdminEventAll',
      element:<AdminEventAll/>
     },
    {
      path:'/AdminEventAdd',
      element:<AdminEventAdd/>
    },
    // Exam Admin
    // {
    //   path:'/AdminExamAll',
    //   element:<AdminExamAll/>
    // },
    {
      path:'/AdminExamAdd',
      element:<AdminExamAdd/>
     },
     
     // old script
     {
      path:'/AdminAllEnquiry',
      element:<AdminAllEnquiry/>
     },
     {
      path:'/AdminViewEnquiry',
      element:<AdminViewEnquiry/>
     },
     {
      path:'/AdminEventEnquiry',
      element:<AdminEventEnquiry/>
     },
     {
      path:'/AdminAdmissionEnquiry',
      element:<AdminAdmissionEnquiry/>
     },
     {
      path:'/AdminCommonEnquiry',
      element:<AdminCommonEnquiry/>
     },
     {
      path:'/AdminCourseEnquiry',
      element:<AdminCoursenEnquiry/>
     },
   
     {
      path:'/AdminAllCourses',
      element:<AdminAllCourses/>
     },
     {
      path:'/AdminAboutMenu',
      element:<AdminAboutMenu/>
     },
     {
      path:'/AdminAdmissionMenu',
      element:<AdminAdmissionMenu/>
     },
    
];

export default AppRoutes;
