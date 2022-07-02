import styled from "styled-components"


const Container = styled.div`
    height: 30px;
    background-color:black;
    display:flex;
    color:white;
    font-weight:bold;
    font=size:35px;
    align-items:center;
    justify-content:center;
`;

const Announcement = () => {
  return (
    
    <Container>
        Hurry up for the sale its flat 50% off !!!
    </Container>
    
  )
}

export default Announcement