import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    RouteProps,
  } from 'react-router-dom';

import Welcome from '../modules/Welcome';
import About from '../modules/About';
import NotFound from '../modules/NotFound';
import ListItems from '../modules/ListItems';
import SignUp from '../modules/SignUp';
import Login from '../modules/Login';

export interface IRouteProps extends RouteProps {
    isAuthenticated?: boolean;
  }


const Routesss: React.FC<IRouteProps> = (props) => {
    return (
      <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/list-items" element={<ListItems />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>  
    ) 
};
  
  export default Routesss;