import React from 'react';
import Header from '../../components/Header';
import Footer from "../../components/Footer";
import { Typography } from "@mui/material";

import {
    Aside,
    BodyWrapper,
    Container,
    Heading,
    Main,
} from "./styles";
import AdminMenu from "../../components/Admin/Menu";
import AdminMain from "../../components/Admin/Main";
import {useSelector} from "react-redux";
import {RootState} from "../../store/rootReducer";


const Admin: React.FC= () => {

    const user = useSelector((state: RootState) => state.user?.userData?.data);

    console.log(user);
    if(!user?.isAdmin) {
        return (
            <>
                <div>
                    Ви не є адміністратором сервісу
                </div>
                <div>
                    Повернутись на головну сторінку
                </div>
            </>
        )
    }
    return (
        <BodyWrapper>
            <Header drawer/>
            <Container>
                <Heading>
                    <Typography variant="h3">Адміністратор сервісу</Typography> 
                </Heading>
                <Aside>
                    <AdminMenu />
                </Aside>
                <Main>
                    <AdminMain path='/'/>
                    <AdminMain path='/users'/>
                    <AdminMain path='/services'/>
                    <AdminMain path='/orders'/>
                    <AdminMain path='/photos'/>
                    <AdminMain path='/papers'/>
                    <AdminMain path='/sizes'/>
                    <AdminMain path='/types'/>
                </Main>
            </Container>
            <Footer />
        </BodyWrapper>
    )
}

export default Admin;