import styled from 'styled-components'
import {Link} from 'react-router-dom';
//import color from '../../utils/style/colors';

const cardLength = (1000 - 220)/3;

const CardWrapper = styled(Link)`
    position : relative;
    display: flex;
    flex-direction : column;
    border-radius : 10px;
    background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), ${(props) => `url(${props.backgroundurl})`};
    background-position: center center;
    background-size: cover;
    width : ${cardLength}px;
    height : ${cardLength}px;
    @media screen and (max-width: 768px) {
        width : 100%;
        height : 255px;
    }
`
const CardTitle = styled.span`
    position: absolute;
    left: 5.88%;
    right: 5.88%;
    top: 78.82%;
    bottom: 5.88%;
    font-size: 18px;
    line-height: 142.6%;
    display: flex;
    align-items: flex-end;
    color: #FFFFFF;
`


function Card({title,cover,id}){
    return(
        <CardWrapper to={`./property/${id}`} backgroundurl={cover}>
            <CardTitle>{title}</CardTitle>
        </CardWrapper>
        
    )
}

export default Card