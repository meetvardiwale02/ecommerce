import React from 'react'
import styled from 'styled-components'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { Send } from '@mui/icons-material';


const Container  =  styled.div`
        height: 60vh;
        background-color: #fcf5f5;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column
`;

const Title = styled.h1`
        font-size: 70px;
        margin-bottom:20px;
`;

const Desc = styled.div`
        font-size: 30px;
        margin-bottom:20px;
        font-weight:100;
`;

const InputContainer = styled.div`
        width: 50%;
        height: 40px;
        background-color: white;
        display: flex;
        justify-content: space-between;
        border:1px solid light;
`;

const Input = styled.input`
    border:none;
    flex:8;
    padding-left:20px;
`;
const Button =  styled.button`
    flex:1;
    border:none;
    background-color:black;
    color : white;
`;
const Newsletter = () => {
  return (
    <Container>
            <Title>Newsletter</Title>    
            <Desc>Get Timely Updates From Your Favourite Products</Desc>
            <InputContainer>
                <Input placeholder='Your Email'/>
                <Button>
                    <Send/>                    
                </Button>
            </InputContainer>
    </Container>
  )
}

export default Newsletter