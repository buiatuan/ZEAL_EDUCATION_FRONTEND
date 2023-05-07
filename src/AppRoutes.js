
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Blog } from "./components/blog";
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
     }
   
 
];

export default AppRoutes;
