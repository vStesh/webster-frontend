import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { RootState } from '../../store/rootReducer';
import { userDataRequest } from '../../api';

const Settings: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userDataRequest());
    }, []);
    const userData = useSelector((state: RootState) => state.login.response?.data?.user.email);
    return (
        <>
        <Typography variant="h2">
            Настройки
        </Typography>
        <div>Your email: {userData}</div>
        <Link to="/">home</Link>
        </>
    )
}

export default Settings;