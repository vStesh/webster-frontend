import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

const Repository: React.FC = () => {
    return (
        <>
        <Typography variant="h2">
            Хранилище
        </Typography>
        <Link to="/">home</Link>
        </>
    )
}

export default Repository;