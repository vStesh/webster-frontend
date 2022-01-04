import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

const Orders: React.FC = () => {
    return (
        <>
        <Typography variant="h2">
            Заказы
        </Typography>
        <Link to="/">home</Link>
        </>
    )
}

export default Orders;