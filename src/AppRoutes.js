
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Blog } from "./components/blog";
import { AdminQuickLink } from "./components/AdminQuickLink";
import { AdminSeminarAdd } from "./components/AdminSeminarAdd";
import { AdminSeminarAll } from "./components/AdminSeminarAll";
import { AdminSeminarEdit } from "./components/AdminSeminarEdit";
import { AdminSeminarEnquiry } from "./components/AdminSeminarEnquiry";
import { AdminAllEnquiry } from "./components/AdminAllEnquiry";
import { AdminViewEnquiry } from "./components/AdminViewEnquiry";
import { AdminEventEnquiry } from "./components/AdminEventEnquiry";
import { AdminAdmissionEnquiry } from "./components/AdminAdmissionEnquiry";
import { AdminCommonEnquiry } from "./components/AdminCommonEnquir";
import { AdminCoursenEnquiry } from "./components/AdminCourseEnquiry";
import { AdminAllMenu } from "./components/AdminAllMenu";
import { AdminAboutMenu } from "./components/AdminAboutMenu";
import { AdminAdmissionMenu } from "./components/AdminAdmissionMenu";
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
     }
];

export default AppRoutes;
