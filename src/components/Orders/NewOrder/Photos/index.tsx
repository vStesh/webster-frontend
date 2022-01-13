import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
    DottedBorder, ImageContainer,
    PhotosBodyWrapper,
    PhotosBorder,
    PhotosHeader,
} from "./styles";
import {DBOrderSettingsSectionType, OrderProps} from "../../../../types";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import { StepLabel,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
} from '@mui/material';
import {TypographyWrapper} from "../styles";
import {DragEventHandler, useState} from "react";
import {SelectChangeEvent} from "@mui/material/Select";
import {savePhoto} from "../../../../api";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../store/rootReducer";
import {ImageItem, Img, ImgInfo} from "./styles";

export interface PageProps {
    section: DBOrderSettingsSectionType;
    // photos?: Array<string>;
    remove: Function;
    addPhoto: Function;
}

export const Photos: React.FC<PageProps> = ({section, remove, addPhoto}) => {
    const dispatch = useDispatch();
    const [dragEnter, setDragEnter] = useState(false);

    // const photos = section.photos;

    const dragEnterHandler = (e: any): void => {
        e.preventDefault();
        e.stopPropagation();
        setDragEnter(true);
    }

    const dragLeaveHandler = (e: any): void => {
        e.preventDefault();
        e.stopPropagation();
        setDragEnter(false);
    }

    const dropHandler = (e: any): void => {
        e.preventDefault();
        e.stopPropagation();
        let files = [...e.dataTransfer.files];
        files.map(file => uploadImage(file));
        console.log(files);
        setDragEnter(false);
    }



    const uploadImage = async (file: any) => {
        const imgName = file.name;

        if (
            imgName.endsWith(".jpg") ||
            imgName.endsWith(".jpeg") ||
            imgName.endsWith(".png")
        ) {
            await dispatch(savePhoto(file));
            addPhoto();
        } else {
            console.log('error upload files');
        }

    };

    console.log(dragEnter);
  return (
    <PhotosBodyWrapper>
        <PhotosHeader>
            <div>Розмір: {section?.size?.name}</div>
            <div onClick={() => remove()} style={{textDecoration: 'underline', cursor: 'pointer'}}>Видалити</div>
        </PhotosHeader>
        {!dragEnter ?
            <div onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler} style={{width: '100%'}}>
                {section.photos &&
                    <PhotosBorder>
                        <ImageContainer>
                        {section.photos.map((item, index) =>
                            <ImageItem key={index}>
                                <Img>
                                    <img
                                        style={{ width: "100%" }}
                                        src={item["url"]}
                                        alt="downloaded file"
                                    />
                                </Img>
                                <ImgInfo>
                                    {item["settings"]["fileName"]}
                                    <br />
                                    {`розмір: ${Math.floor(
                                        item["settings"]["size"] / 1024
                                    )} Кб`}
                                </ImgInfo>
                            </ImageItem>
                        )}
                        </ImageContainer>
                    </PhotosBorder>
                }
                {!section.photos &&
                    <DottedBorder>
                            <Typography variant="h6" style={{ textAlign: "center", cursor: 'pointer', textDecoration: 'underline' }}>
                                виберіть фотографії
                            </Typography>
                         або
                        <Typography variant="h6" style={{ textAlign: "center"}}>
                            перетягніть файли з фото сюди
                        </Typography>

                    </DottedBorder>
                }
            </div>
            :
            <DottedBorder onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler} onDrop={dropHandler}>
                <Typography variant="h3" style={{ textAlign: "center"}}>
                    перетягніть файли з фото сюди
                </Typography>
            </DottedBorder>
        }
    </PhotosBodyWrapper>
  );
};
