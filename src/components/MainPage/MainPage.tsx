import React, {FC} from 'react';
import styled from 'styled-components';
import {Colors} from "../../styledHelpers/Colors";

import TopBar from '../TopBar/TopBar';
import  LeftMenu from "../LeftMenu/LeftMenu";

const Wrapper = styled.section`
    background-color: ${Colors.lightBlue};
`;

const Content = styled.div`
    max-width: 100%;
    height:1000px;
    align-items: center;
`;

const MainPage: FC = () => {
    return ( 
        <Wrapper>
            <TopBar />
            <Content>
                <LeftMenu />
            </Content>
        </Wrapper>
    );
};

export default MainPage;

