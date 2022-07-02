import styled from 'styled-components';
import Announcement from '../component/Announcement';
import Navbar from '../component/Navbar';
import Newsletter from '../component/Newsletter';
import Footer from '../component/Footer';
import { FilterTiltShiftOutlined } from '@mui/icons-material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Container = styled.div``;
const Wrapper = styled.div`
    padding:50px;
    display:flex;
`;
const ImageConatiner = styled.div`
    flex:1;
`;
const Image = styled.img`
    width:100%;
    height: 50vh;
    object-fit:cover;
`;

const InfoContainer = styled.div`
    flex:1;
    padding: 0px 50px;
`;

const Title = styled.h1`
    align-items:center;
    justify-content:center;
    font-weight: 200;
    font-size:70px;
    margin-top:50px;
`;

const Desc = styled.p`
    margin: 20px 0px;
    font-size: 20px;
    font-weight:400;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight:200;    
`;

const FilterColor = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
       djustify-content:space-between;
        aligm-items:center;
        width:80%;
        display:flex;
`;
const AmountContainer = styled.div`
        display:flex;
        align-item:center;
        font-weight:700;
`;


const Amount = styled.div`
    margin:0px 5px;
    height:30px;
    width:30px;
    border-radius:10px;
    border: 1px solid black;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    margin:0px 10px;

    &:hover{
        background-color: #f8f4f4;
    }
`;

const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
            <Wrapper>
                <ImageConatiner>
                    <Image src="https://media.istockphoto.com/photos/flying-mens-black-running-shoe-with-fluttering-laces-isolated-on-a-picture-id1203472337?k=20&m=1203472337&s=612x612&w=0&h=OZOfbcnJu-xiygrVB5m1ik-krC_AH3z_hQO5XojfI-o="/>
                </ImageConatiner>
                <InfoContainer>
                    <Title>
                        SPORTS SHOE
                    </Title>
                    
                    <Desc> A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function. </Desc>

                    <Price>$100</Price>
                    
                
                <FilterContainer>
                    <Filter>
                        <FilterTitle> Color </FilterTitle>
                        
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                        
                    </Filter>
                    <Filter>
                    <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                        <AmountContainer>
                            <RemoveIcon/>
                            <Amount>1</Amount>
                            <AddIcon/>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                </AddContainer>
                </InfoContainer>
            </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product