import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

const Map: React.FC = () => {
    return (
        <>
        <Typography variant="h2">
            карта
        </Typography>
        <Link to="/">home</Link>
        </>
    )
}

export default Map;