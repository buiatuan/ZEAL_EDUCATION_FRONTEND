
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Blog } from "./components/blog";
import { Admin } from "./components/admin";
const AppRoutes = [
  {
    index: true,
    element: <Home />
    },
    {// chau fix duong dan anh , the a  duong dan link
        path: '/about',
        element: <About />
     },
     {
      path:'/blog',
      element:<Blog/>
     },
   // Hoat lam admin page1
     {
      path:'/admin',
      element:<Admin/>
     }
];

export default AppRoutes;
