import { ChangeEvent, ChangeEventHandler, FC, useState } from "react";
import styled from "styled-components";
import { Colors } from "../../../../styledHelpers/Colors";
import { FontSize } from "../../../../styledHelpers/FontSize";
import Account from "./Account/Account"

const Wrapper = styled.div`
    width:310px;
    height:480px;
    border:1px solid gray;
    background-color: ${Colors.white};
    display: flex;
    flex-direction: column;
    font-family: Tahoma;

    #filterInput{
        width:100%;
        height:50px;
        display:flex;
        justify-content:center;
        align-items:center;
        input{
        border-radius:5px;
        height: 35px;
        width: 80%;
        font-size: ${FontSize[18]};
        outline:none;
        }
    }
`;

const InnerWarpper = styled.div`
    width:100%;
    height:280px;
    display: flex;
    flex-direction: column;
    font-family: Tahoma;
    overflow-y:scroll;
    margin-left:8px;
    a{
        text-decoration:none;
        color: ${Colors.black};
    }
`;

const MenuItem = styled.div`
    width:90%;
    height: 40px;
    margin-left: 5px;
    margin-top: 5px;
    display:flex;
    justify-content:start;
    align-items:center;
    font-size: ${FontSize[18]};
    img{
        height: 25px;
        width:25px;
        margin-right: 20px;
    }
    p{
        margin: 2px 2px;
        font-size: ${FontSize[16]}
    }
`;

const ToggledMenu: FC = () => {

    const [inputText, setInputText] = useState<string>('');
    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }

	return (
        <Wrapper>
            <div id="filterInput">
                <input type="text" value={inputText} onChange={inputHandler} placeholder="Filter..." />
            </div>
            <InnerWarpper>
                <MenuItem><p>Platform</p></MenuItem>
                {
                    'Home'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem ><img src='./icons/house2.png'/><a href="publication">Home</a></MenuItem>
                }
                {
                    'Publication'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem>  <img src='./icons/publications.png'/> <a href="publication">Publication</a></MenuItem>
                }
                {
                    'People'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem> <img src='./icons/people.png'/> <a href="people">People</a> </MenuItem>
                }
                {
                    'Entities'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem> <img src='./icons/entities2.png'/> <a href="entities">Entities</a></MenuItem>
                }
                {
                    'Administration'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem> <img src='./icons/administration.png'/> <a href="administration">Administration</a></MenuItem>
                }
                <MenuItem><p>Workspaces</p></MenuItem>
                {
                    'Client contract'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem> <img src='./icons/entities2.png'/> <a href="client_contract">Client contract</a></MenuItem>
                }
                {
                    'Supplier contract'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem> <img src='./icons/entities2.png'/> <a href="supplier_contract">Supplier contract</a></MenuItem>
                }
                {
                    'Corporate'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem> <img src='./icons/entities.png'/> <a href="corporate">Corporate</a></MenuItem>
                }
                {
                    'Group norms'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem> <img src='./icons/people.png'/> <a href="group_norms">Group norms</a> </MenuItem>
                }
                {
                    'Real estate contracts'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem> <img src='./icons/entities.png'/> <a href="real_estate_contracts">Real estate contracts</a></MenuItem>
                }
            </InnerWarpper>
            <Account/>
        </Wrapper>
	)
}
export default ToggledMenu;