
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Blog } from "./components/blog";
import { All_courses } from "./components/all-courses";
import { Courese_details } from "./components/course-details";
import { Admission  } from "./components/admission";
import { Awards } from "./components/awards";
import { Dashboard } from "./components/dashboard";
import { Db_profile } from "./components/db-profile";
import { Db_courses } from "./components/db-courses";
import { Db_exams } from "./components/db-exams";
import { Db_time_line } from "./components/db-time-line";
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
path:'/All-courses',
element:<All_courses/>

   },
   {
    path:'/Courese-details',
    element:<Courese_details/>
   },
   {
    path:'/Admission',
    element:<Admission/>
   },
   {
    path:'/Awards',
    element:<Awards/>
   },
   {
    path:'/Db-profile',
    element:<Db_profile/>
   },
   {
    path:'/Dashboard',
    element:<Dashboard/>
   },
   {
    path:'/Db-courses',
    element:< Db_courses/>

   },
   {
    path:'/Db-exams',
    element:<Db_exams/>
   },
   {
    path:'/Db-time-line',
    element:<Db_time_line/>
   }
 
];

export default AppRoutes;
