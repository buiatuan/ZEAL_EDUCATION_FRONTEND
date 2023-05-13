
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Blog } from "./pages/blog";
import { AdminQuickLink } from "./pages/AdminQuickLink";
import { AdminSeminarAdd } from "./pages/AdminSeminarAdd";
import { AdminSeminarAll } from "./pages/AdminSeminarAll";
import { AdminSeminarEdit } from "./pages/AdminSeminarEdit";
import { AdminSeminarEnquiry } from "./pages/AdminSeminarEnquiry";
import { AdminAllEnquiry } from "./pages/AdminAllEnquiry";
import { AdminViewEnquiry } from "./pages/AdminViewEnquiry";
import { AdminEventEnquiry } from "./pages/AdminEventEnquiry";
import { AdminAdmissionEnquiry } from "./pages/AdminAdmissionEnquiry";
import { AdminCommonEnquiry } from "./pages/AdminCommonEnquir";
import { AdminCoursenEnquiry } from "./pages/AdminCourseEnquiry";
import { AdminAllMenu } from "./pages/AdminAllMenu";
import { AdminAboutMenu } from "./pages/AdminAboutMenu";
import { AdminAdmissionMenu } from "./pages/AdminAdmissionMenu";
import { Admin } from "./pages/Admin";
import { AdminExamAdd } from "./pages/AdminExamAdd";
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
      path:'/Admin',
      element:<Admin/>
     },
     {
      path:'/AdminQuickLink',
      element:<AdminQuickLink/>
     },
     {
      path:'/AdminSeminarAdd',
      element:<AdminSeminarAdd/>
     },
     {
      path:'/AdminSeminarAll',
      element:<AdminSeminarAll/>
     },
     {
      path:'/AdminSeminarEdit',
      element:<AdminSeminarEdit/>
     },
     {
      path:'/AdminSeminarEnquiry',
      element:<AdminSeminarEnquiry/>
     },
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
      path:'/AdminAllMenu',
      element:<AdminAllMenu/>
     },
     {
      path:'/AdminAboutMenu',
      element:<AdminAboutMenu/>
     },
     {
      path:'/AdminAdmissionMenu',
      element:<AdminAdmissionMenu/>
     },
     {
      path:'/AdminExamAdd',
      element:<AdminExamAdd/>
     },
];

export default AppRoutes;
