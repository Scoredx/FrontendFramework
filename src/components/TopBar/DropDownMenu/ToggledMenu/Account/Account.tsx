import {FC} from "react";
import styled from "styled-components";
import { Colors } from "../../../../../styledHelpers/Colors";
import { FontSize } from "../../../../../styledHelpers/FontSize";

const Wrapper = styled.div`
    width:100%;
    height:152px;
    display: flex;
    flex-direction: column;
    font-family: Tahoma;
    #Account{
        margin-left:10px;
        margin-top:8px;
        font-size: ${FontSize[16]};
    }
`;
const Profile = styled.div` 
    margin-left: 10px;
    margin-top: 5px;
    margin-right: 15px;
    display:flex;
    flex-direction:row;
    align-items:center;
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
    }
    #NameAndLink{
        margin-left:8px;
    }
    div{
        display:flex;
        flex-direction:column;
    }
`;

const PrivacyAndSettings = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    height:150px;
    #Privacy,#Settings{
        display:flex;
        align-items:center;
        margin-top: 10px;
        margin-left: 15px;
        img{
            height:25px;
            margin-right:20px;
        }
        a{
            text-decoration:none;
            color: ${Colors.black};
        }
    }
`;

const Account: FC = () => {
	return (
        <Wrapper>
            <p id="Account">Account</p>

            <Profile>
                <img src="./icons/ecosystem.png"></img>
                <div id="NameAndLink">
                    <p id="Name">Jeanne-Marie de dla cli...</p>
                    <a href="See profile">See profile</a>
                </div>
            </Profile>

            <PrivacyAndSettings>
                <div id="Privacy">
                    <img src="./icons/privacy.png"></img>
                    <a href="privacy">Privacy</a>
                </div>
                <div id="Settings">
                    <img src="./icons/settings.png"></img>
                    <a href="settings">Settings</a>
                </div>
            </PrivacyAndSettings>

        </Wrapper>
	)
}

export default Account;