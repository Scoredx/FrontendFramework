import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from "../../../styledHelpers/Colors";
import TopContainer  from './../TopContainer/TopContainer';

const Wrapper = styled.div`
    background-color: ${Colors.blue};
    width: 1400px;
    height:200px;
    margin-top: 10px;
`;


const Slider: FC = () => {
    return ( 
        <Wrapper> 

        </Wrapper>
    );
};
export default Slider;