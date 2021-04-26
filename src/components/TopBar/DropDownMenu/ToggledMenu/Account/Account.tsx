import {FC} from "react";
import styled from "styled-components";
import { Colors } from "../../../../../styledHelpers/Colors";
import { FontSize } from "../../../../../styledHelpers/FontSize";

const Wrapper = styled.div`
    width:100%;
    height:150px;
    display: flex;
    flex-direction: column;
    font-family: Tahoma;
    p{
        margin-left:10px;
        margin-top:5px;
        font-size: ${FontSize[16]}
    }
  
`;
const Profile = styled.div` 
    margin-left: 10px;
    margin-top: 10px;
    margin-right: 15px;
    display:flex;
    flex-direction:row;
    img{
        margin-top: 5px;
        height:40px;
        width:auto;
        margin-right: 10px;
    }
    p{
        font-size: ${FontSize[18]};
        margin-bottom:5px;
    }
    a{
        text-decoration:none;
        font-weight: bold;
        margin-left: 10px;
    }
    div{
        display:flex;
        flex-direction:column;
    }
`;

const Account: FC = () => {
	return (
        <Wrapper>
            <p>Account</p>
            <Profile>
                <img src="./icons/ecosystem.png"></img>
                <div>
                    <p id="Name">Jeanne-Marie de dla cli...</p>
                    <a href="See profile">See profile</a>
                </div>
            </Profile>
        </Wrapper>
	)
}

export default Account;