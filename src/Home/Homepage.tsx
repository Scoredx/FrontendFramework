import {FC, useEffect} from 'react';
import styled from 'styled-components';
import TopBar from '../components/TopBar/TopBar';
import LeftMenu from "../components/LeftSidebar/LeftSidebar";
import Center from '../components/Center/Center';
import {Colors} from "../styledHelpers/Colors";
import { getUsers } from '../actions/usersActions';
import { useDispatch } from "react-redux";
import { getLatestPublications } from "../actions/publicationsActions";
import { getWorks } from "../actions/worksActions";

const Wrapper = styled.section`
    background-color: ${Colors.lightBlue};
`;

const Content = styled.div`
    display:flex;
    max-width: 100%;
    min-height:1800px;
    height: fit-content;
    justify-content:center;
`;

const MainPage: FC = () => {
    const dispatch = useDispatch();
    type GetUsers = ReturnType<typeof getUsers>;
    type GetLatestPublications = ReturnType<typeof getLatestPublications>;
    type GetWorks = ReturnType<typeof getWorks>;

    useEffect(() => {
        dispatch<GetUsers>(getUsers());
        dispatch<GetLatestPublications>(getLatestPublications());
        dispatch<GetWorks>(getWorks());
    });
    
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

