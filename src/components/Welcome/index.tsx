import * as React from 'react';
import { 
    SectionWrapper,
} from './styles';

export interface SliderDataType {
    img: string | undefined;
}

export interface SliderPropsTypes {
    slides: SliderDataType[]
}

const Welcome: React.FC = () => {
    const [current, setCurrent] = React.useState(0);

    return (
        <SectionWrapper>


        </SectionWrapper>
    )
}

export default Welcome;
