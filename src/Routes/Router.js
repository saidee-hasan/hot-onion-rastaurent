import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login/Login";
import MinLayout from './../layout/MinLayout';
import SigneIn from "../components/SigneIn/SigneIn";
import Home from "../components/Home/Home";
import Shop from "../components/Shop/Shop";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MinLayout/>,
      children: [
        { path: "/login", element:<Login/> },
        {path:'/sign-up',element:<SigneIn/>},
        {path:'/shop',element:<Shop/>},

        
      
       
      ],
    },
  ]);
  