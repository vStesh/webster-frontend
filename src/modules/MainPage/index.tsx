import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from 'react-router-dom';
import { BodyWrapper } from "./styles";
import { userDataRequest } from '../../api';
import { useDispatch } from 'react-redux';
document.title = "Main Page";

const MainPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goToWelcomePage = () => navigate('/welcome');
  const goToMainPage = () => navigate('/');

  useEffect(() => {
    dispatch(userDataRequest());
    if(localStorage.getItem('token')){
      goToMainPage();
    }else{
      goToWelcomePage();
    }
  }, []);
  return (
    <BodyWrapper>
      <Header drawer logOut/>
      <h1 style={{ textAlign: "center" }}>you are logged</h1>
      <input type="file"/>
      {/* {photo} */}
      <Footer />
    </BodyWrapper>
  );
};

export default MainPage;