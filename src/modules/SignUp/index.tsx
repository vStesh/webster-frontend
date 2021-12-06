import * as React from 'react';
import Header from '../../components/Header';
import Typography from '@mui/material/Typography';


import {
  Container, 
  Section, 
  MainContainer, 
  TextFieldWrapper,
  ButtonWrapper,
} from './styles';

// ^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)+$

const SignUp: React.FC = () => {
    const [email, setEmail] = React.useState<string>('');
    const [errors, setErrors] = React.useState<{ email: string }>();
    const [disableBtn, setDisableBtn] = React.useState(false);
    document.title = 'Sign Up';


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { target: { value } } = e;
        setEmail(value);
        setErrors({email: ''});
        const regExp = new RegExp("^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)+$").test(value);

        if(!regExp || value.length < 4 || value.length > 40){
            setErrors({email: 'Please enter a valid email address'});
            setDisableBtn(true);
        }else{
            setDisableBtn(false);
            setErrors({email: ''})
        }
        
    }
    return (
        <>
        <Container>
            <Header loginButton/>
            <Section>
                <MainContainer>
                    <Typography variant="h5">
                        Get started with your account
                    </Typography>
                        <TextFieldWrapper 
                            id="outlined-basic" 
                            label="Your name" 
                            variant="outlined"
                            />
                        <TextFieldWrapper 
                            id="outlined-basic" 
                            label="Email" 
                            variant="outlined"
                            value={email}
                            error={!!errors?.email}
                            helperText={errors?.email}
                            onChange={handleChange}
                        />
                        <TextFieldWrapper id="outlined-basic" label="Password" variant="outlined" />
                        <TextFieldWrapper id="outlined-basic" label="Password confirm" variant="outlined" />
                        <ButtonWrapper 
                            variant="contained"
                            disabled={disableBtn}
                            >Get Started</ButtonWrapper>
                </MainContainer>
            </Section>
        </Container>
        </>
    )
}

export default SignUp;
