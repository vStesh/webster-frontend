import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { RootState } from '../../store/rootReducer';
import { userDataRequest } from '../../api';
import Header from "../../components/Header";
import Slider from "../../components/Slider";
import {SliderData} from "../../assets/SliderData";
import Footer from "../../components/Footer";
import {BodyWrapper} from "../Welcome/styles";

const Settings: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userDataRequest());
    }, []);
    const userData = useSelector((state: RootState) => state.login.response?.data?.user.email);
    console.log(userData);
    return (
        <BodyWrapper>
            <Header loginButton signUpButton />
            <Typography variant="h2">
                Настройки
            </Typography>
            <div>Your email: {userData}</div>
            <Link to="/">home</Link>
            <Footer />
        </BodyWrapper>
    )
}

export default Settings;