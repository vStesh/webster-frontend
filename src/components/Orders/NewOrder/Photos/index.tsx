import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
    DottedBorder,
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
import {useState} from "react";

export interface PageProps {
    section: DBOrderSettingsSectionType;
    photos?: Array<string>;
    remove: Function;
}

export const Photos: React.FC<PageProps> = ({section, photos, remove}) => {

    const [dragEnter, setDragEnter] = useState(false);
    photos = [];

    const onDragHandler = () => {

    }
  return (
    <PhotosBodyWrapper>
        <PhotosHeader>
            <div>Розмір: {section?.size?.name}</div>
            <div onClick={() => remove()} style={{textDecoration: 'underline', cursor: 'pointer'}}>Видалити</div>
        </PhotosHeader>
        {!dragEnter ?
            <div onDragEnter={onDragHandler} onDragLeave={onDragHandler} onDragOver={onDragHandler} style={{width: '100%'}}>
                {photos &&
                    <PhotosBorder>Тут будуть фотографії</PhotosBorder>
                }
                {!photos &&
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
            <DottedBorder>
                <Typography variant="h3" style={{ textAlign: "center"}}>
                    перетягніть файли з фото сюди
                </Typography>
            </DottedBorder>
        }
    </PhotosBodyWrapper>
  );
};
