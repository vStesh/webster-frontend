import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { BodyWrapper } from "./styles";
import { updatePhoto } from '../../api/index';
document.title = "Main Page";

const MainPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goToWelcomePage = () => navigate('/welcome');
  const goToMainPage = () => navigate('/');

  const userId = useSelector((state: RootState) => state.login.response?.data?.user.id);

  useEffect(() => {
    if(localStorage.getItem('token')){
      console.log('пользователь авторизирован');
      goToMainPage();
    }else{
      goToWelcomePage();
    }
  }, []);
  const uploadPhoto = (e: any) => {
    console.log(e.target.files)
    dispatch(updatePhoto(userId))
  }
  return (
    <BodyWrapper>
      <Header drawer logOut/>
      <h1 style={{ textAlign: "center" }}>you are logged</h1>
      <input type="file" onChange={uploadPhoto}/>
      {/* {photo} */}
      <Footer />
    </BodyWrapper>
  );
};

export default MainPage;