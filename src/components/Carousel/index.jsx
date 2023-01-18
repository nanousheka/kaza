//import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {useState} from 'react';

const CarouselContainer = styled.div`
    display: flex;
    position: relative;
    height: ${props => props.carouselHeight};
    width: ${props => props.carouselWidth};
    border-radius: 25px;
    background: ${(props) => `url(${props.imageUrl})` };
    background-size: cover;
    background-position: center;
    @media screen and (max-width: 768px) {
         height: calc(${props => props.carouselHeight} * 0.8);
         border-radius: 10px;
    }
`
const PreviousImage = styled.img`
    position: absolute;
    top: 50%;
    left: 25px;
    
    @media screen and (max-width: 768px) {
        left: 5px;
    }
`
const NextImage = styled.img`
    position: absolute;
    top: 50%;
    right: 25px;
    transform: translateY(-50%)
    @media screen and (max-width: 768px) {
        right: 5px;
    }
`
const BulletPoints = styled.span`
    position: absolute;
    bottom: 18px;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    font-size: 14px;
`


function Carousel({width,height,images,previousController,nextController }) {
    let [imageNumber,setImageNumber] = useState(0)
    
    const previousClick = () =>{
        imageNumber === 0 ? setImageNumber(imageNumber = images.length -1) : setImageNumber(imageNumber -1)
    }

    const nextClick = () =>{
        imageNumber === images.length -1 ? setImageNumber(imageNumber = 0) : setImageNumber(imageNumber +1)
    }

    return (
        
        <CarouselContainer imageUrl = {images[imageNumber]} carouselWidth={width} carouselHeight={height}>
            {images.length > 1 ? (
                <>
                    <PreviousImage src={previousController} onClick={previousClick}/>
                    <NextImage src={nextController} onClick={nextClick}/>
                    <BulletPoints>{imageNumber+1}/{images.length}</BulletPoints>
                </>
            ) : null}
        </CarouselContainer>
        
    )
}

export default Carousel;