import React from 'react';
import Header from "../../components/Header";
import { Link } from 'react-router-dom';

import { 
    Container, 
    Section, 
    MainContainer, 
    TypographyWrapper,
    TextFieldWrapper,
    ButtonWrapper,
} from './styles';

const ForgetPassword: React.FC = () => {
    const [disableBtn, setDisableBtn] = React.useState(false);
    const [errorEmail, setErrorEmail] = React.useState<{ email: string }>();
    const [errorPassword, setErrorPassword] =
      React.useState<{ password: string }>();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
  
    const verifyData = (e: React.SyntheticEvent) => {
      e.preventDefault();
      if (email) {
        setDisableBtn(false);
        setErrorEmail({ email: "" });
      } else {
        setDisableBtn(true);
        setErrorEmail({ email: "pls write valid email" });
      }
      if (password) {
        setDisableBtn(false);
        setErrorPassword({ password: "" });
      } else {
        setDisableBtn(true);
        setErrorPassword({ password: "pls write valid password" });
      }
    };
    const emailChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const {
        target: { value },
      } = e;
      setEmail(value);
    };

    return(
        <>
        <Container>
        <Header loginButton/>
        <Section>
          <MainContainer>
            <TypographyWrapper variant="h5">Please type your email address and we will send you reset password by email.</TypographyWrapper>
            <TextFieldWrapper
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={email}
              error={!!errorEmail?.email}
              helperText={errorEmail?.email}
              onChange={emailChange}
            /> 
            <ButtonWrapper
              type="submit"
              onClick={verifyData} 
              variant="contained"
              disabled={disableBtn}
            >
              Get Started
            </ButtonWrapper>
          </MainContainer>
        </Section>
      </Container>
        </>
    )
}

export default ForgetPassword;