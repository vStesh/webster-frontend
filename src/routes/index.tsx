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
import ForgetPassword from '../modules/ForgetPassword';
import MainPage from '../modules/MainPage';
import Templates from '../modules/Templates';
import Settings from '../modules/Settings';
import Repository from '../modules/Repository';
import Orders from '../modules/Orders';
import Map from '../modules/Map';
import History from '../modules/History';
import UsersImages from '../modules/UsersImages';

export interface IRouteProps extends RouteProps {
    isAuthenticated?: boolean;
  }


const Routesss: React.FC<IRouteProps> = (props) => {
    return (
      <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/list-items" element={<ListItems />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/forget-password" element={<ForgetPassword />}></Route>
          <Route path="/welcome" element={<Welcome />}></Route>
          <Route path="/templates" element={<Templates />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
          <Route path="/repository" element={<Repository />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/map" element={<Map />}></Route>
          <Route path="/history" element={<History />}></Route>
          <Route path="/users-images" element={<UsersImages />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>  
    ) 
};
  
  export default Routesss;