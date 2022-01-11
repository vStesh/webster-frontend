import { styled } from '@mui/system';

export const BodyWrapper = styled('div')({
    margin: '0px',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
});

export const Wrapper = styled('div')({
    margin: '0px',
    display: 'flex',
    flexDirection: 'column',
});

export const CenterWrapper = styled('div')({
    margin: '50px 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
});

export const Container = styled('div')({
    margin: '0px 10%',
    display: 'flex',
    flexDirection: 'column',
});

export const Line = styled('div')({
    margin: '10px 0',
    display: 'flex',
    flexDirection: 'row',
    borderBottom: "1px solid black",
});

export const LineNumber = styled('div')({
    padding: '0 10px',
    width: '50px',
    textAlign: "end"
});