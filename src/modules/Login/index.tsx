import * as React from "react";
import Typography from "@mui/material/Typography";
import Header from "../../components/Header";

import {
  Container,
  Section,
  MainContainer,
  TextFieldWrapper,
  ButtonWrapper,
} from "./styles";

const Login: React.FC = () => {
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
  const passwordChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {
      target: { value },
    } = e;
    setPassword(value);
  };
  return (
    <>
      <Container>
        <Header signUpButton />
        <Section>
          <MainContainer>
            <Typography variant="h5">Get started with your account</Typography>
            <TextFieldWrapper
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={email}
              error={!!errorEmail?.email}
              helperText={errorEmail?.email}
              onChange={emailChange}
            />
            <TextFieldWrapper
              id="outlined-basic"
              label="Password"
              variant="outlined"
              error={!!errorPassword?.password}
              helperText={errorPassword?.password}
              value={password}
              onChange={passwordChange}
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
  );
};

export default Login;
