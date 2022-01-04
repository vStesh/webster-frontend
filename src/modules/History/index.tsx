import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

const History: React.FC = () => {
    return (
        <>
        <Typography variant="h2">
            История
        </Typography>
        <Link to="/">home</Link>
        </>
    )
}

export default History;