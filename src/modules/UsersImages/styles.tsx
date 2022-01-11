import { styled } from '@mui/system';

export const InputWrapper = styled('div')({
    margin: '50px',
})

export const BodyWrapper = styled('div')({
    margin: '0px',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '80vh',
});

export const Container = styled('div')({
    margin: '0px 10%',
    display: 'flex',
    flexDirection: 'column',
});

export const ImageContainer = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
});

export const ImageItem = styled('div')({
    width: '20%',
    margin: '10px',
    padding: '15px',
    border: '1px solid gray',
    borderRadius: '5px',
});

export const Img = styled('div')({
    width: '100%',
});

export const ImgInfo = styled('div')({
    width: '100%',
});
