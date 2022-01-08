import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from 'react-router-dom';
import { BodyWrapper } from "./styles";
import { userDataRequest } from '../../api';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
document.title = "Main Page";

const MainPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state: RootState) => state.user.isUser);

  useEffect(() => {
    const goToWelcomePage = () => navigate('/welcome');
    const goToMainPage = () => navigate('/');
    if (localStorage.getItem('token') || userData) {
      dispatch(userDataRequest());
      goToMainPage();
    } else {
      goToWelcomePage();
    }
  }, [navigate, dispatch]);
  return (
    <BodyWrapper>
      <Header drawer logOut/>
      <h1 style={{ textAlign: "center" }}>you are logged</h1>
      <Footer />
    </BodyWrapper>
  );
};

export default MainPage;