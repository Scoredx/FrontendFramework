import { FC } from 'React';
import styled from 'styled-components';
import SearchField from './Components/SearchField/SearchField';
import {Colors} from "../../styledHelpers/Colors";
import RightIcons from "./Components/Notification/RightIcons";
import DropDownMenu from "./Components/DropDownMenu/DropDownMenu";


const Wrapper = styled.div`
  width: 100%;
  background:${Colors.white};
  height: 70px;
  box-shadow: 1px 1px 12px ${Colors.black};
  display: flex;
  align-items: flex-start;
  z-index: 2;

`;
const Logo = styled.div`
  margin-left:2%;
  display: flex;
  height: 50px;
  width: 5%;
  margin-top:0.3%;
`;


const TopBar: FC = () => {
    return( 
        <Wrapper>
            <Logo>
                <img src='./logo.png'alt='Logo'/>
            </Logo>
            <DropDownMenu />
            <SearchField />
            <RightIcons />
        </Wrapper>
    );
};
export default TopBar;
 