import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from "../../../styledHelpers/Colors";
import { FontSize } from '../../../styledHelpers/FontSize';


const Wrapper = styled.div`
    background-color: ${Colors.white};
    width: 100%;
    height: 420px;
    border-radius: 10px;
`;

const InnerWrapper = styled.div`
    width:28%;
    height: 100%;
    background-color: green;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    display:flex;
    flex-direction:column;
    justify-content: flex-end;
    padding-left:12px;
    p{
        font-family: Tahoma;
        color: ${Colors.white};
    }
    #Title{
        color: ${Colors.white};
        font-size: ${FontSize[22]};
        padding-bottom:10px;
    }
    #dateAndProfile{
        display:flex;
        flex-direction:row;
        padding-bottom:20px;
        align-items:center;
        #date{
            font-size: ${FontSize[18]};
            margin-right: 10px;
        }
        #profilePicture{
            border-radius:50%;
            width:40px;
            height:40px;
            background-color:white;
        }
        #profileName{
            font-size: ${FontSize[18]};
            margin-left:10px;
        }
    }
`;

const TopContainer: FC = () => {
    return ( 
        <Wrapper>
            <InnerWrapper>
            <p id="Title">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit ...  and <br/> eone more line for the demo</p>
            <div id="dateAndProfile">
                <p id="date">7 jan. 2020</p> 
                <image id="profilePicture"></image>
                <p id="profileName">John Doe</p>
            </div>
            </InnerWrapper>
        </Wrapper>
    );
};

export default TopContainer;