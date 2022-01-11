import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
    Container,
    TypographyWrapper,
    BodyWrapper,
    ButtonWrapper,
    UploadButtonWrapper,
} from "./styles";
import { OrderProps } from "../../../types";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/rootReducer";
import CheckBoxGroup from '../../CheckBoxGroup';
import FormLabel from '@mui/material/FormLabel';
import UploadButton from "../../UploadButton";

export const NewOrder: React.FC<OrderProps> = ({ order, dropZero, setCurrentOrder }) => {
  const orderData = useSelector(
    (state: RootState) => state.order.orderResponse?.data
  );
  return (
    <Container>
      <TypographyWrapper>
        <Typography variant="h4" style={{ textAlign: "center" }}>
          Замовлення № {order && dropZero(order?.number)}
        </Typography>
      </TypographyWrapper>
      <BodyWrapper>
            <ButtonWrapper>
                <Button onClick={() => setCurrentOrder(null)}>До списку замовлень</Button>
            </ButtonWrapper>
        <FormLabel component="legend">1. Завантаження фото:</FormLabel>
        <UploadButtonWrapper>
            <UploadButton/>
        </UploadButtonWrapper>
        <FormLabel component="legend">2. Розмір фото:</FormLabel>
        <CheckBoxGroup labelSizeName />
        <div></div>
        <FormLabel component="legend">3. Папір:</FormLabel>
        <CheckBoxGroup labelPapierName />
        <FormLabel component="legend">4. Тип друку:</FormLabel>
        <div></div>
        <FormLabel component="legend">5. Сервіс друку:</FormLabel>
        <div></div>
      </BodyWrapper>
    </Container>
  );
};
