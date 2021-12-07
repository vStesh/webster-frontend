import * as React from "react";
import Typography from "@mui/material/Typography";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Header from "../../components/Header";

import {
  Container,
  Section,
  MainContainer,
  TextFieldWrapper,
  ButtonWrapper,
  LinkSubTitle1,
} from "./styles";

const Login: React.FC = () => {
  const [disableBtn, setDisableBtn] = React.useState(false);
  const [errorEmail, setErrorEmail] = React.useState<{ email: string }>();
  // const [errorPassword, setErrorPassword] =
  //   React.useState<{ password: string }>();
  const [errorPassword, setErrorPassword] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const verifyData = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (email) {
      setDisableBtn(false);
      setErrorEmail({ email: "" });
    } else {
      setDisableBtn(true);
      setErrorEmail({ email: "please write valid email." });
    }
    if (password) {
      setDisableBtn(false);
      // setErrorPassword({ password: "" });
      setErrorPassword(false);
    } else {
      setDisableBtn(true);
      // setErrorPassword({ password: "please write valid password." });
      setErrorPassword(true);
    }
  };

  const emailChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {
      target: { value },
    } = e;
    setEmail(value);
    const regExp = new RegExp("^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)+$").test(value);

    if(!regExp || value.length < 4 || value.length > 40){
      setErrorEmail({email: 'Please enter a valid email address.'});
      setDisableBtn(true);
    }else{
      setDisableBtn(false);
      setErrorEmail({email: ''})
    }
  };

  const passwordChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {
      target: { value },
    } = e;
    setPassword(value);
    const reg = new RegExp(
      /(?=^[\w\d!"#$%&'()*+,\-./:;<=>?@[\\\]^`{|}~]{8,64}$)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,\-./:;<=>?@[\\\]^`{|}~])/,
    ).test(value);
    if(!reg){
      // setErrorPassword({password: 'Please enter a valid email address.'});
      setErrorPassword(true);
      setDisableBtn(true);
    }else{
      setDisableBtn(false);
      // setErrorPassword({password: ''});
      setErrorPassword(false);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
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
            <FormControl sx={{ m: 1, width: '43.5ch' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password" style={{color: errorPassword ? '#f44336' : 'primary'}}>Password</InputLabel>
              <OutlinedInput
                    label="Password"
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    error={errorPassword}
                    onChange={passwordChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  {errorPassword ? <div style={{color: '#f44336', marginLeft: 15, fontSize: 13}}>Looks like your password doesn’t match requirements.</div> : null}
              </FormControl>
            <LinkSubTitle1 to="/forget-password">
                            <Typography variant="subtitle1">don't remember password</Typography>
            </LinkSubTitle1>
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
