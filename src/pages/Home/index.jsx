import mainHeadingBackground from '../../assets/home_heading-background.png';
import styled from 'styled-components';
import color from '../../utils/style/colors';
import {properties} from '../../datas/properties';
import Card from '../../components/Card';
import MainHeading from '../../components/MainHeading';
import Footer from '../../components/Footer';

const CardsContainerBackground = styled.div`
    display : flex;
    justify-content: center;
    max-width: 100%;
    background : ${color.greyBackground};
    border-radius: 25px;
    padding : 50px;
    margin-top: 45px;
    @media screen and (max-width: 768px) {
        padding : 0;
        background : transparent;
        margin-top: 20px;
    }
`
const CardsContainer = styled.div`
    display : flex;
    flex-wrap : wrap;
    gap: 60px;
    width: 100%;
    @media screen and (max-width: 768px) {
        gap: 20px;
    }
    
    
`

function Home() {
 return(
    <>
        <MainHeading mainHeadingBackgroundUrl={mainHeadingBackground} mainHeadingText='Chez vous, partout et ailleurs' />
        <CardsContainerBackground>
            <CardsContainer>
                {properties.map(property =>{
                    return <Card key={property.id} id={property.id} cover={property.cover} title={property.title}/>
                })}

            </CardsContainer>
        </CardsContainerBackground>
        
    </>
 )
}

export default Home