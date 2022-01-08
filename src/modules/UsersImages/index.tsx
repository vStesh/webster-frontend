import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Header from '../../components/Header';
import { savePhoto } from '../../api';

const UserImages: React.FC = () => {
    const getImage = (e: any) => {
        if(e.target.files.length){
            console.log(e.target.files[0]);
            savePhoto(e.target.files[0]);
        }
        
    }
    return (
        <>
        <Header drawer logOut />
        <Typography variant="h2">
            Images
        </Typography>
            <input type="file" name="picture" onChange={getImage} />
        
        <Link to="/">home</Link>
        {/* <div><img src={photo} alt="profile"/></div> */}
        </>
    )
}

export default UserImages;