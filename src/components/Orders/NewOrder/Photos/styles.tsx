import { styled } from '@mui/system';

export const Container = styled('div')({
    margin: '0px',
});

export const TypographyWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export const PhotosBodyWrapper = styled('div')({
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: "10px",
    backgroundColor: '#fafafa',
});

export const DottedBorder = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    color: '#a0a0a0',
    border: '2px dotted gray',
    width: '100%',
    minHeight: '100px',
    alignItems: 'center',
    justifyContent: 'center',
    padding: "10px",

});

export const PhotosBorder = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    color: '#a0a0a0',
    border: '1px solid gray',
    width: '100%',
    minHeight: '100px',
    alignItems: 'center',
    justifyContent: 'center',
    padding: "10px",

});

export const PhotosHeader = styled('div')({
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    padding: "10px 0",

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
