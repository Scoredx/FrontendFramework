import { FC } from 'React';
import styled from 'styled-components';
import {FontSize} from "../../../styledHelpers/FontSize";
import {Colors} from "../../../styledHelpers/Colors";

const Links = styled.div`
    display:flex;
    flex-direction: column;
`;

const LinkIcon = styled.div`
    margin-top:10px;
    display:flex;
    align-items:center;
    text-decoration:none;
    width:25%;
    display:flex;
    img{
        width:40px;
        height:40px;
        margin-left:10px;
    }
    button{
    }
    span{
        margin-top: 12px;
        margin-left:20px;
        font-size: ${FontSize[24]};
    }
    a{
        text-decoration:none;
        color:${Colors.black};
    }
`;

const LinksUnderProfile: FC = () => {
    return( 
        <Links>
            <LinkIcon>
                    <img src='./icons/publications.svg' alt='Publications'></img>
                    <a href="/publications"><span>Publications</span></a>
            </LinkIcon>

            <LinkIcon>
                    <img src='./icons/ecosystem.svg' alt='Ecosystem'></img>
                    <a href="/ecosystem"><span>Ecosystem</span></a>
            </LinkIcon>

            <LinkIcon>
                    <img src='./icons/entities.svg' alt='Entities'></img>
                    <a href="/entities"><span>Entities</span></a>
            </LinkIcon>
        </Links>
        
    );
};
export default LinksUnderProfile;
