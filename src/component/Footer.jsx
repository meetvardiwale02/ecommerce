import React from 'react';
import styled from 'styled-components';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';

const Container = styled.div`
    display:flex;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding:20px;
`;
const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
    margin:5px;
`;

const SocialIcon = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: white;
    background-color: #${(props)=> props.color};
    display:flex;
    align-items: center;
    justify-content:center;
    margin-right: 20px;
`;
const Center = styled.div`
    flex: 1;
    padding:20px;
`;
const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin:0;
    padding:0;
    list-style: none;
    display:flex;
    flex-wrap:wrap;
`; 

const ListItem = styled.li` 
     width:50%;
     margin-bottom:10px;
     font-size: 15px;
`;

const Right = styled.div`
    flex: 1;
    padding:20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width:50%;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>SHOPZii..</Logo>
            <Desc>The Way You Choose Your Style To Flex.</Desc>
            <SocialContainer >
                <SocialIcon color="E4405F">
                    <InstagramIcon/>
                </SocialIcon>
                <SocialIcon color="3B5999">
                    <FacebookIcon/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <TwitterIcon/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
                <Title>Contact</Title>
                    <ContactItem>
                     <AddLocationAltIcon style={{marginRight:"10px"}}/>   F-17 Darshan Complex, Ahmedabad 380061   
                    </ContactItem>
                    <ContactItem>
                      <LocalPhoneIcon style={{marginRight:"10px"}}/>  +91 6352422201
                    </ContactItem>
                    <ContactItem>
                      <MailIcon style={{marginRight:"10px"}}/>  t@meetvardiwale02@gmail.com
                    </ContactItem>
                    <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer