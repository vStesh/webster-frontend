import React, { useEffect } from "react";
import Header from "../../components/Header";
import Slider from "../../components/Slider";
import Footer from "../../components/Footer";
import { SliderData } from "../../assets/SliderData";
import { useNavigate } from 'react-router-dom';

import { BodyWrapper } from "./styles";

const Welcome: React.FC = () => {
  const navigate = useNavigate();
  const goToMainPage = () => navigate('/main-page');
  useEffect(() => {
    if(localStorage.getItem('token')){
      console.log('пользователь авторизирован');
      goToMainPage()
    }
  }, []);
  return (
    <BodyWrapper>
      <Header loginButton signUpButton />
      <h1 style={{ textAlign: "center" }}>Welcome page</h1>
      <Slider slides={SliderData} />
      <Footer />
    </BodyWrapper>
  );
};

export default Welcome;
