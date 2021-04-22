import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from "../../styledHelpers/Colors";
import Slider from './Slider/Slider';
import TopContainer  from './TopContainer/TopContainer';

const Wrapper = styled.div`
    width: 1400px;
    height: 1000px;
    margin-left: 60px;
    margin-right: 80px;
    margin-top: 20px;
`;

const BottomContainer = styled.div`

    width:100%;
    background-color: ${Colors.grey};
    height: 800px;
    margin-top:10px
`;

const Center: FC = () => {
    return ( 
        <Wrapper>       
            <TopContainer/>
            <Slider/>
            <BottomContainer/>
        </Wrapper>
    );
};
export default Center;