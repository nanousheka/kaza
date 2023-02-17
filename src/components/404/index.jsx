import {Link} from 'react-router-dom';
import styled from 'styled-components';
import color from '../../utils/style/colors'

const Quatre104Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    color: ${color.primary};
`
const Quatre100quatre = styled.span`
    font-size: 200px;
    font-weight: 700;
    @media screen and (max-width: 768px) {
        font-size: 96px;
    }
`
const Quatre104Message = styled.span`
    text-align: center;
    font-size: 24px;
    margin-top: 60px;
    @media screen and (max-width: 768px) {
        font-size: 18px;
    }
`
const HomeRedirection = styled(Link)`
    margin-top: 100px;
    font-size: 18px;
    &:visited {
        color: ${color.primary};
    }
    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`

function quatre104() {
    return (
        <Quatre104Container>
            <Quatre100quatre>404</Quatre100quatre>
            <Quatre104Message>Oups! La page que vous demandez n'existe pas.</Quatre104Message>
            <HomeRedirection to='/' >Retourner sur la page d’accueil</HomeRedirection>
        </Quatre104Container>
    )
}

export default quatre104