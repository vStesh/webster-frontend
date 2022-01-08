import React, { useEffect } from "react";
import Header from "../../components/Header";
import Slider from "../../components/Slider";
import Footer from "../../components/Footer";
import { SliderData } from "../../assets/SliderData";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { BodyWrapper } from "./styles";

const Welcome: React.FC = () => {
  const navigate = useNavigate();
  const userData = useSelector((state: RootState) => state.user.isUser);
  useEffect(() => {
    const goToWelcomePage = () => navigate('/welcome');
    const goToMainPage = () => navigate('/');
    localStorage.getItem('token') || userData ? goToMainPage() : goToWelcomePage();
  }, [userData, navigate]);
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
