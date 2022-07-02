import { Search, ShoppingBagOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height  : 60px;
`
const Wrapper = styled.div`
    padding : 20px 10px;
    display: flex;
`;

const SearchContainer =  styled.div`
    border: 1px solid lightgray;
    display:flex;
    align-items:center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
   border:none;
`;

const MenuItem = styled.div`
    font-size: 20px;
    cursor:pointer;
    margin:auto;
`;

const Logo = styled.h1`
    font-weight:BOLD;
    text-align:center;
`;

const Language = styled.span`
    font-size : 20px;
    cursor: pointer;
`;


const Left = styled.div`
    flex:3;
    display:flex;
    align-items:center;
`;

const Center = styled.div`
    flex:3;
`;

const Right =  styled.div`
    flex:3;
    display:flex;
    align-itms:center;
    justify-content:flex-end;
`;



const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left> 
                <Language>EN</Language>    
                <SearchContainer>
                    <Input/>
                    <Search style={{color:"gray",fontsize:16}}/>
                </SearchContainer>
            </Left>
            <Center> <Logo>SHOPZii..</Logo> </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={5} color="primary">
                        <ShoppingBagOutlined/>
                    </Badge>
                </MenuItem>
             </Right>
        </Wrapper>    
    </Container>
  )
}

export default Navbar