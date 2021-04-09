import { FC } from 'React';
import styled from 'styled-components';
import {Colors} from "../../styledHelpers/Colors";
import {FontSize} from "../../styledHelpers/FontSize";

const Wrapper = styled.div`
  width: 304px;
  height: 500px;
  display: flex;
  margin-left:3%;
  margin-top:1%;
  border-radius:2%;
  flex-direction: column;
  z-index: 1;

`;
const InnerWrapper = styled.div`
width: 304px;
height: 330px;
background:#f0f0f0;
display: flex;
border-radius:2%;
flex-direction: column;
border:1px solid grey;

`;

const Profile = styled.div`
    width:300px;
    height:220px;
    border-radius:2%;
    display:flex;
    justify-content:center;
    align-items:center;
    img{
        width:100px;
        height:100px;
        border-radius:50%;
    }
    flex-direction: column;
`;

const Name = styled.div`
    margin-top:10px;
    display:flex;
    color: ${Colors.lightBlue};
    font-size: ${FontSize[24]};
    font-weight:bold;
    font-family: Tahoma;
`;
const Occupation = styled.div`
    display:flex;
    color: ${Colors.grey};
    font-size: ${FontSize[18]};
    font-family: Tahoma;
    margin-top:20px;
`;
const ProfileButtons = styled.div`
    margin-top:3%;
    font-family: Tahoma;
    font-size:${FontSize[20]};
    display:flex;
    width:100%;
    flex-direction: row;
`;

const Icon = styled.div`
 img{
        width:30px;
        height:30px;
        margin-left:10px;
    }
    width:25%;
`;

const Text = styled.div`
    width:55%;
    height:30px;
    align-items:center;
    display:flex;

`;
const Button=styled.button`
    top:0;
    width:15%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:15%;
    outline:none;
    img{
        width:20px;
        height:20px;
    }
    :hover{
        cursor: pointer;
    }
`;

const Links = styled.div`
    display:flex;
    flex-direction: column;
`;

const LinkIcon = styled.div`
margin-top:10px;
 img{
        width:40px;
        height:40px;
        margin-left:10px;
    }
    width:25%;
    display:flex;
    button{
        
    }
    span{
        margin-top: 12px;
        margin-left:20px;
        font-size: ${FontSize[24]};
    }
`;



const LeftMenu: FC = () => {
    return( 
        <Wrapper>  
            <InnerWrapper>      
            <Profile>
                <img src="./logo.png" alt='logo'/>
                <Name>
                    <p>Humberta Swift</p>
                </Name>
                <Occupation>
                    <p>Job title - Company</p>
                </Occupation>
            </Profile>         
            ______________________________________
            <ProfileButtons> 
                <Icon><img src="./icons/network.png" alt='network icon'></img></Icon>
                <Text>Your Network</Text>
                <Button><img src="./icons/network.svg" alt='network'></img></Button>
            </ProfileButtons>

           <ProfileButtons>
                <Icon><img src="./icons/publications.svg" alt='publications icon'></img></Icon>
                <Text>Your Publications</Text>
                <Button><img src="./icons/plus.svg" alt='plus'></img></Button>
           </ProfileButtons>
           </InnerWrapper> 
           <Links>
           <LinkIcon>
                <img src='./icons/publications.svg' alt='Publications'></img>
                <span>Publications</span>
           </LinkIcon>

           <LinkIcon>
                <img src='./icons/ecosystem.svg' alt='Ecosystem'></img>
                <span>Ecosystem</span>
           </LinkIcon>

           <LinkIcon>
                <img src='./icons/entities.svg' alt='Entities'></img>
                <span>Entities</span>
           </LinkIcon>
           
           </Links>
        </Wrapper>
        
    );
};
export default LeftMenu;
