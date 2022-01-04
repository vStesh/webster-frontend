import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

const Templates: React.FC = () => {
    return (
        <>
        <Typography variant="h2">
            Шаблоны
        </Typography>
        <Link to="/">home</Link>
        </>
    )
}

export default Templates;