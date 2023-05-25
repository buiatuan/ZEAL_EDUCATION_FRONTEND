import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Blog } from "./pages/blog";

import { AllCourses } from "./pages/AllCourses";

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
// adminn
import { AdminAllEnquiry } from "./pages/AdminAllEnquiry";
import { AdminViewEnquiry } from "./pages/AdminViewEnquiry";
import { AdminEventEnquiry } from "./pages/AdminEventEnquiry";
import { AdminAdmissionEnquiry } from "./pages/AdminAdmissionEnquiry";
import { AdminCommonEnquiry } from "./pages/AdminCommonEnquir";
import { AdminCoursenEnquiry } from "./pages/AdminCourseEnquiry";
// import event
import { AdminEventAll } from "./pages/AdminEventAll";
import AdminEventAdd from "./pages/AdminEventAdd";
// import Exam admin
import AdminExamAll from "./pages/AdminExamAll";

import { AdminAboutMenu } from "./pages/AdminAboutMenu";
import { AdminAdmissionMenu } from "./pages/AdminAdmissionMenu";
import { Admin } from "./pages/Admin";
import AdminExamAdd from "./pages/AdminExamAdd";
import { AdminAllCourses } from "./pages/AdminAllCourses";
import AdminAddCourses from "./pages/AdminAddCourses";
import { AdminUserAll } from "./pages/AdminUserAll";
import CourseDetails from "./pages/CourseDetails";
import AdminEventEdit from "./pages/AdminEventEdit";
import {AdminTeacherAll} from "./pages/AdminTeacherAll";
import AdminTeacherAdd from "./pages/AdminTeacherAdd";
const AppRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    // chau fix duong dan anh , the a  duong dan link
    path: "/About",
    element: <About />,
  },
  {
    path: "/Blog",
    element: <Blog />,
  },

  {
    path: "/Departments",
    element: <Departments />,
  },
  {
    path: "/EventRegister",
    element: <EvenRegister />,
  },
  {
    path: "/Facilities",
    element: <Facilities />,
  },
  {
    path: "/FacilitiesDetail",
    element: <FacilitiesDetail />,
  },
  {
    path: "/GalleryPhoto",
    element: <GalleryPhoto />,
  },
  {
    path: "/Research",
    element: <Research />,
  },
  {
    path:"/CourseDetails/:id",
    element: <CourseDetails/>,
  },
  {
    path: "/AllCourses",
    element: <AllCourses />,
  },

  {
    path: "/Admission",
    element: <Admission />,
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
  },
  {
    path: "/DbCourses",
    element: <DbCourses />,
  },
  {
    path: "/DbTimeLine",
    element: <DbTimeLine />,
  },
  {
    path: "/DbExams",
    element: <DbExams />,
  },
  {
    path: "/DbProfile",
    element: <DbProfile />,
  },
  {
    path: "/Awards",
    element: <Awards />,
  },
  {
    path: "/Events",
    element: <Events />,
  },
  {
    path: "/ContactUs",
    element: <ContactUs />,
  },
  {
    path: "/EventDetail",
    element: <EventDetail />,
  },
  {
    path: "/Seminar",
    element: <Seminar />,
  },

  // page admin
  {
    path: "/Admin",
    element: <Admin />,
  },
  //user admin
  {
    path: "/AdminAddCourses",
    element: <AdminAddCourses />,
  },
  {
    path: "/AdminUserAll",
    element: <AdminUserAll />,
  },
  // event admin
  {
    path: "/AdminEventAll",
    element: <AdminEventAll />,
  },
  {
    path: "/AdminEventAdd",
    element: <AdminEventAdd />,
  },
  {
    path: "/AdminEventEdit",
    element: <AdminEventEdit />,
  },
  // Exam Admin
  {
    path: "/AdminExamAll",
    element: <AdminExamAll />,
  },
  {
    path: "/AdminExamAdd",
    element: <AdminExamAdd />,
  },

  // old script
  {
    path: "/AdminAllEnquiry",
    element: <AdminAllEnquiry />,
  },
  {
    path: "/AdminViewEnquiry",
    element: <AdminViewEnquiry />,
  },
  {
    path: "/AdminEventEnquiry",
    element: <AdminEventEnquiry />,
  },
  {
    path: "/AdminAdmissionEnquiry",
    element: <AdminAdmissionEnquiry />,
  },
  {
    path: "/AdminCommonEnquiry",
    element: <AdminCommonEnquiry />,
  },
  {
    path: "/AdminCourseEnquiry",
    element: <AdminCoursenEnquiry />,
  },

  {
    path: "/AdminAllCourses",
    element: <AdminAllCourses />,
  },
  {
    path: "/AdminAboutMenu",
    element: <AdminAboutMenu />,
  },
  {
    path: "/AdminAdmissionMenu",
    element: <AdminAdmissionMenu />,
  },
  //admin teacher
  {
    path: "/AdminTeacherAll",
    element: <AdminTeacherAll />,
  },
  {
    path: "/AdminTeacherAdd",
    element: <AdminTeacherAdd />
  }
];

export default AppRoutes;
