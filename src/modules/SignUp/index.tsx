import * as React from "react";
import Header from "../../components/Header";
import Typography from "@mui/material/Typography";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { signUpUser } from '../../api';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { useNavigate } from 'react-router-dom';

import {
  Container,
  Section,
  MainContainer,
  TextFieldWrapper,
  ButtonWrapper,
} from "./styles";

const SignUp: React.FC = () => {
  const [name, setName] = React.useState('');
  const [errorName, setErrorName] = React.useState(false);
  const [email, setEmail] = React.useState<string>('');
  const [errors, setErrors] = React.useState(false);
  const [disableBtn, setDisableBtn] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [showErrorLabel, setShowErrorLabel] = React.useState(false);
  const [errorPassword, setErrorPassword] = React.useState(false);
  const [confirm, setPasswordConfrim] = React.useState('');
  const [showPasswordConfirm, setShowPasswordConfirm] = React.useState(false);
  const [showErrorLabelConfirm, setShowErrorLabelConfirm] = React.useState(false);
  const [errorPasswordConfirm, setErrorPasswordConfirm] = React.useState(false);
  document.title = "Sign Up";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state: RootState) => state.signUp.response);
  const goToMainPage = () => navigate('/main-page');

  const verifyData = (value: string, setErrors: (item: boolean) => void) => {
    if(value) {
      setDisableBtn(false);
      setErrors(false);
    } else {
      setErrors(true);
      setDisableBtn(true);
    }
  }

  React.useEffect(() => {
    if (userData.status === 0) {
      console.log('your are register!');
      goToMainPage();
    }else if(userData.status === 20) {
      console.log(userData?.error);
    }
  }, [userData])

  const verifyAllData = () => {
    verifyData(email, setErrors);
    verifyData(password, setErrorPassword);
    verifyData(confirm, setErrorPasswordConfirm);
    verifyData(name, setErrorName);

    dispatch(
      signUpUser({
      email,
      password,
      confirm,
      name,
    }));
  }

  const nameChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {
      target: { value },
    } = e;
    setName(value);
    setErrorName(false);
    if(name.length < 2){
      setErrorName(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {
      target: { value },
    } = e;
    setEmail(value);
    setErrors(false);
    const regExp = new RegExp(
      "^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)+$"
    ).test(value);

    if (!regExp || value.length < 4 || value.length > 40) {
      setErrors(true);
      setDisableBtn(true);
    } else {
      setDisableBtn(false);
      setErrors(false);
    }
  };

  const passwordChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {
      target: { value },
    } = e;
    setPassword(value);
    setShowErrorLabel(false);
    const reg = new RegExp(
      /(?=^[\w\d!"#$%&'()*+,\-./:;<=>?@[\\\]^`{|}~]{8,64}$)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,\-./:;<=>?@[\\\]^`{|}~])/,
    ).test(value);
    if(!reg){
      setShowErrorLabel(true);
      setErrorPassword(true);
      setDisableBtn(true);
    }else{
      setDisableBtn(false);
      setErrorPassword(false);
    }
  };

  const passwordConfirmChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {
      target: { value },
    } = e;
    setPasswordConfrim(value);
    setShowErrorLabelConfirm(false);
    const reg = new RegExp(
      /(?=^[\w\d!"#$%&'()*+,\-./:;<=>?@[\\\]^`{|}~]{8,64}$)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,\-./:;<=>?@[\\\]^`{|}~])/,
    ).test(value);
    if(!reg){
      setShowErrorLabelConfirm(true);
      setErrorPasswordConfirm(true);
      setDisableBtn(true);
    }else{
      setDisableBtn(false);
      setErrorPasswordConfirm(false);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleClickShowPasswordConfirm = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
  }

  return (
    <>
      <Container>
        <Header loginButton />
        <Section>
          <MainContainer>
            <Typography variant="h5">Get started with your account</Typography>
              <TextFieldWrapper
                id="outlined-basic"
                label="Your name"
                variant="outlined"
                value={name}
                onChange={nameChange}
                error={errorName}
                helperText={errorName && 'Please enter your name.'}
              />
              <TextFieldWrapper
                id="outlined-basic"
                label="Email"
                variant="outlined"
                value={email}
                error={errors}
                helperText={errors && 'Please enter a valid email address.'}
                onChange={handleChange}
              />
              <FormControl sx={{ m: 1, width: '43.5ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password" error={showErrorLabel}>Password</InputLabel>
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
              <FormControl sx={{ m: 1, width: '43.5ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password" error={showErrorLabelConfirm}>Password</InputLabel>
                <OutlinedInput
                      label="Confirm Password"
                      id="outlined-adornment-password"
                      type={showPasswordConfirm ? 'text' : 'password'}
                      value={confirm}
                      error={errorPasswordConfirm}
                      onChange={passwordConfirmChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPasswordConfirm}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPasswordConfirm ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    {errorPasswordConfirm ? <div style={{color: '#f44336', marginLeft: 15, fontSize: 13}}>Looks like your password doesn’t match requirements.</div> : null}
              </FormControl>
              <ButtonWrapper 
                variant="contained" 
                disabled={disableBtn}
                onClick={verifyAllData}
                >
                Get Started
              </ButtonWrapper>
          </MainContainer>
        </Section>
      </Container>
    </>
  );
};

export default SignUp;
