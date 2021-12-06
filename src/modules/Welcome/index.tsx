import React from 'react';
import Header from '../../components/Header';
import Slider from '../../components/Slider';
import Footer from '../../components/Footer';
import { SliderData } from '../../assets/SliderData';

import { BodyWrapper } from './styles';

const Welcome: React.FC = () => {
    return (
            <BodyWrapper>
                <Header 
                    loginButton 
                    signUpButton
                    drawer
                />
                    <h1 style={{textAlign: 'center'}}>Welcome page</h1>
                    <Slider slides={SliderData}/>
                <Footer />
            </BodyWrapper>
    )
}

export default Welcome;
