import {useParams} from 'react-router-dom';
//import {useEffect, useState} from 'react';
import {properties} from '../../datas/properties';
import styled from 'styled-components';
import color from '../../utils/style/colors';
import Star from '../../assets/Star';
import ToggleContent from '../../components/ToggleContent';
import Carousel from '../../components/Carousel';
import PreviousArrow from '../../assets/PreviousArrow/PreviousArrow.svg';
import NextArrow from '../../assets/NextArrow/NextArrow.svg';


const PropertyMainInfos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-top: 40px;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`
const PropertyIdentification = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const PropertyTitle = styled.span`
    font-size: 27px;
    line-height: 142.6%;
    color: ${color.primary};
`
const PropertyLocation = styled.div`
    font-size: 14px;
    line-height: 25.67px;
    color: ${color.primary}
`
const PropertyHostNRating = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px) {
        flex-direction: row-reverse;
        justify-content: space-between;
        margin-top: 20px;
        align-items: center;
    }
`
const PropertyHost = styled.span`
    font-size: 14px;
    line-height: 142.6%;
    text-align: right;
    color: ${color.primary};
    margin-bottom: 25px;
    width: 100%;
    @media screen and (max-width: 768px) {
        height: 100%;
        margin-bottom: 0;
    }
`
const PropertyRating = styled.div`
    display: flex;
    flex-direction: row;
`
const PropertyRatingStar = styled(Star)`
    width: 30px;
    @media screen and (max-width: 768px) {
        transform: scale(0.5);
    }
`

const PropertyTags = styled.div`
    display: flex;
    gap: 10px;
    width: 100%;
    margin-top: 20px;
    @media screen and (max-width: 768px) {
        height: 100%;
        align-items: center;
    }
`
const PropertyTag = styled.p`
    display: flex;
    background-color : ${color.primary};
    color: white;
    height: 18px;
    font-size: 10px;
    line-height: 142.6%;
    border-radius: 10px;
    padding: 3px 15px;
    vertical-align: center;
    @media screen and (max-width: 768px) {
        white-space: nowrap;
    }
    
`
const PropertyDetails = styled.div`
    display: flex;
    width: 100%;
    margin-top: 20px;
    gap:75px;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap:20px;
    }
`
const EquipmentsList = styled.p`
margin-block-start: 0;
margin-block-end: 0;
`

function Property() {
    const {id} = useParams();
    const propertyDatas = properties.find(property => property.id === id);

    const range = [1,2,3,4,5]
    
    const equipments = propertyDatas['equipments'].map(equipment => {
        return <EquipmentsList key={equipment}>{equipment}</EquipmentsList>
    })

    return (
        <>
            <Carousel width='100%' height='320px' images={propertyDatas.pictures} previousController={PreviousArrow} nextController={NextArrow} />
            <PropertyMainInfos>
                <PropertyIdentification>
                    <PropertyTitle>{propertyDatas.title}</PropertyTitle>
                    <PropertyLocation>{propertyDatas.location}</PropertyLocation>
                    <PropertyTags>
                        {propertyDatas.tags.map(tag => {
                        return <PropertyTag key={tag}>{tag}</PropertyTag>
                        
                    })}
                    </PropertyTags>
                </PropertyIdentification>
                <PropertyHostNRating>
                    <PropertyHost>{propertyDatas['host'].name}</PropertyHost>
                    <PropertyRating>
                        {range.map((rangeElem) => {
                            let defaultColor =  propertyDatas.rating >= rangeElem   ? color.primary : color.secondary;
                            return <PropertyRatingStar key={rangeElem} fill={defaultColor} desktopwidth='30px' mobilewidth='15px' />
                        })}
                    </PropertyRating>
                </PropertyHostNRating>

            </PropertyMainInfos>
            
            
            

            <PropertyDetails>
                <ToggleContent title='Description' content={propertyDatas.description} width='50%' height='40px' />
                <ToggleContent title='Equipements' content={equipments} width='50%' height='40px'/>
            </PropertyDetails>
        </>
    )

}

export default Property;