
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
//import { AdminQuickLink } from "./pages/AdminQuickLink";
//import { AdminSeminarAdd } from "./pages/AdminSeminarAdd";
//import { AdminSeminarAll } from "./pages/AdminSeminarAll";
//import { AdminSeminarEdit } from "./pages/AdminSeminarEdit";
//import { AdminSeminarEnquiry } from "./pages/AdminSeminarEnquiry";
//import { AdminAllEnquiry } from "./pages/AdminAllEnquiry";
//import { AdminViewEnquiry } from "./pages/AdminViewEnquiry";
//import { AdminEventEnquiry } from "./pages/AdminEventEnquiry";
//import { AdminAdmissionEnquiry } from "./pages/AdminAdmissionEnquiry";
//import { AdminCommonEnquiry } from "./pages/AdminCommonEnquir";
//import { AdminCoursenEnquiry } from "./pages/AdminCourseEnquiry";
//import { AdminAllMenu } from "./pages/AdminAllMenu";
//import { AdminAboutMenu } from "./pages/AdminAboutMenu";
//import { AdminAdmissionMenu } from "./pages/AdminAdmissionMenu";
import { AllCourses } from "./pages/AllCourses";
import { CourseDetail } from "./pages/CourseDetails";
import { Admission } from "./pages/Admission";
import { Awards } from "./pages/Awards";
import { Dashboard } from "./pages/Dashboard";
import { DbCourses } from "./pages/DbCourses";
import { DbExams } from "./pages/DbExam";
import { DbProfile } from "./pages/DbProfile";
import { DbTimeLine } from "./pages/DbTimeLine";
import { Events } from "./pages/Events";
import { ContactUs } from "./pages/ContactUs";
import { EventDetail } from "./pages/EventDetail";
import { Seminar } from "./pages/Seminar";
import { Departments } from "./pages/Departments";
import { EvenRegister } from "./pages/EventRegister";
import { Facilities } from "./pages/Facilities";
import { FacilitiesDetail } from "./pages/FacilitiesDetail";
import { GalleryPhoto } from "./pages/GalleryPhoto";
import { Research } from "./pages/Research";
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
path:'/Departments',
element:<Departments/>
     },
     {
path:'/EvenRegister',
element:<EvenRegister/>
     },
     {
          path:'/Facilities',
          element:<Facilities/>
     },
     {
path:'/FacilitiesDetail',
element:<FacilitiesDetail/>
     },
     {
path:'/GalleryPhoto',
element:<GalleryPhoto/>
     },
     {
path:'/Research',
element:<Research/>
     },
     //<{
      //path:'/AdminQuickLink',
      //element:<AdminQuickLink/>
     //},
     //{
      //path:'/AdminSeminarAdd',
      //element:<AdminSeminarAdd/>
    // },
    // {
    //  path:'/AdminSeminarAll',
      //element:<AdminSeminarAll/>
     //},
     //{
      //path:'/AdminSeminarEdit',
     // element:<AdminSeminarEdit/>
     //},
     //{
      //path:'/AdminSeminarEnquiry',
      //element:<AdminSeminarEnquiry/>
     //},
     //{
      //path:'/AdminAllEnquiry',
      //element:<AdminAllEnquiry/>
     //},
     //{
      //path:'/AdminViewEnquiry',
      //element:<AdminViewEnquiry/>
     //},
     //{
      //path:'/AdminEventEnquiry',
      //element:<AdminEventEnquiry/>
     //},
     //{
      //path:'/AdminAdmissionEnquiry',
      //element:<AdminAdmissionEnquiry/>
     //},
     //{
      //path:'/AdminCommonEnquiry',
      //element:<AdminCommonEnquiry/>
     //},
     //{
      //path:'/AdminCourseEnquiry',
      //element:<AdminCoursenEnquiry/>
     //},
     //{
      //path:'/AdminAllMenu',
      //element:<AdminAllMenu/>
     //},
     //{
      //path:'/AdminAboutMenu',
      //element:<AdminAboutMenu/>
     //},
     //{
      //path:'/AdminAdmissionMenu',
      //element:<AdminAdmissionMenu/>
     //},
     {
      path:'/AllCourses',
      element:<AllCourses/>
     },
     {
      path:'/CourseDetail',
      element:<CourseDetail/>
     },
     {
path:'/Admission',
element:<Admission/>
     },
     {
path:'/Dashboard',
element:<Dashboard/>
     },
     {
path:'/DbCourses',
element:<DbCourses/>
     },
     {
      path:'/DbTimeLine',
      element:<DbTimeLine/>
     },
     {
      path:'/DbExams',
      element:<DbExams/>
     },
     {
      path:'/DbProfile',
      element:<DbProfile/>
     },
     {
      path:'/Awards',
      element:<Awards/>
     },
     {
          path:'/Events',
          element:<Events/>
     },
     {
          path:'/ContactUs',
          element:<ContactUs/>
     },
     {
          path:'/EventDetail',
          element:<EventDetail/>
     },
     {
          path:'/Seminar',
          element:<Seminar/>
     }

];

export default AppRoutes;
