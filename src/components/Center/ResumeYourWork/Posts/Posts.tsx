import React from 'react';
import styled from 'styled-components';
import {Colors} from "../../../../styledHelpers/Colors";
import { FontSize } from '../../../../styledHelpers/FontSize';
import {IState} from "../../../../reducers";
import { useSelector } from "react-redux";
import { IUsersReducer } from '../../../../reducers/usersReducers';


const Container = styled.div`
    width:100%;
    height:130px;
    background-color: ${Colors.white};
    display:flex;
    flex-direction: column;
    padding-left:15px;
    font-family:Tahoma;
    margin-bottom: 15px;
    .title{
        margin-top:6px;
        font-size: ${FontSize[24]};
        margin-bottom:10px;
        color: ${Colors.blue}
    }
    a{
        text-decoration:none;
        color: ${Colors.blue};
    }
    .corpTypeUpdate{
        display:flex;
        flex-direction:row;
        align-items:center;
        margin-top:20px;
    }
    .corpPicture{
        border-radius:50%;
    }
    .corpPicture, .typeIcon{
        width:25px;
        height:25px;
        margin-left:5px;
        margin-right:5px;
    }
    .text{
        font-size: ${FontSize[18]};
    }
    h1{
        font-weight:bold;
        font-size: ${FontSize[24]};
        margin-left: 10px;
        margin-right: 10px;
    }
`;


const Posts =  ({posts, loading} : {posts: any[], loading: boolean}) => 
{   
    const { currentUser } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));
    
    if(loading){
        return <h2>Loading ...</h2>
    }
    return (
        <div>
            {posts.map( post => ( 
                <Container key={post.id}>

                    <div className='title'>
                        {post.title}
                    </div>

                    <div className='text'>
                        <p>
                            {post.body}
                        </p>
                    </div>

                    <div className='corpTypeUpdate'>
                        <img className='corpPicture' src="./images/sas.jpg"/> 
                        <p className='corpName'>Susbid. corp.</p>
                        <h1>·</h1> 
                        <img className='typeIcon' src="./icons/entities2.png"/> 
                        <p className="Type">Corporate</p>
                        <h1>·</h1>
                        <p className="lastUpdate">Updated 3 days ago by {currentUser?.name}.</p>
                    </div>
                </Container> 
            ))}
        </div>
    )
};

export default Posts;

