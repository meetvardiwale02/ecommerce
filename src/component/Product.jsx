import React from 'react'
import styled from 'styled-components';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Info = styled.div`
    opacity:0;
    width: 100%;
    height: 100%;
    position: absolute;
    top;0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index:3;
    display:flex;
    align-items:center;
    justify-content:center;
    transition: all 0.5s ease;
    cursoir: pointer;
    border-radius:10%;            
`;

const Container =  styled.div`
        flex: 1;
        margin: 5px;
        min-width: 420px;
        height: 350px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f5fbfd;
        position: relative;

        &:hover ${Info}{
            opacity: 1;
          }
`;

const Circle = styled.div`
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background-color: white;
        position: absolute;
`;
const Image = styled.img`
    height:75%;
    z-index: 2;
    border-radius:10%;
`;

const Icon = styled.div`
    width: 50px;
    height: 50px;
    border-radius:50%;
    background-color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:5px;

    &:hover{
        background-color:white;
        transform: scale(1.1);
    }
`;


const Product = ({ item }) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingBagOutlinedIcon/>                    
            </Icon>
            <Icon>
                <SearchOutlinedIcon/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlinedIcon/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product