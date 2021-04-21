import { FC } from 'React';
import styled from 'styled-components';
import {FontSize} from "../../../styledHelpers/FontSize";

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

const LinksUnderProfile: FC = () => {
    return( 
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
    );
};
export default LinksUnderProfile;
