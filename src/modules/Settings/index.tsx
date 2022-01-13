import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {BodyWrapper} from "../Welcome/styles";
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';

const Settings: React.FC = () => {
    const user = useSelector((state: RootState) => state.user?.userData?.data);
    return (
        <BodyWrapper>
            <Header drawer /> 
            <Typography variant="h2">
                Настройки
            </Typography>
            <div>Your name: {user ? user.name : 'please login'}</div>
            <div>Your email: {user ? user.email : 'please login'}</div>
            <Link to="/">home</Link>
            <Footer />
        </BodyWrapper>
    )
}

export default Settings;