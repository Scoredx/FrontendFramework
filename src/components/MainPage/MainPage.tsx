import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from "../../styledHelpers/Colors";

import TopBar from '../TopBar/TopBar';
import  LeftMenu from "../LeftMenu/LeftMenu";
import Center from '../Center/Center';


const Wrapper = styled.section`
    background-color: ${Colors.lightBlue};
`;

const Content = styled.div`
    max-width: 100%;
    height:1550px;
    display:flex;
    justify-content:center;
`;

const MainPage: FC = () => {
    return ( 
        <Wrapper>
            <TopBar/>
            <Content>
                <LeftMenu/>
                <Center/>
            </Content>
        </Wrapper>
    );
};

export default MainPage;

