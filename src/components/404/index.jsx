import {Link} from 'react-router-dom';
import styled from 'styled-components';
import color from '../../utils/style/colors'

const Quatre104Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    color: ${color.primary};
`
const Quatre100quatre = styled.span`
    font-size: 200px;
    font-weight: 700;
`
const Quatre104Message = styled.span`
    font-size: 24px;
    margin-top: 60px;
`
const HomeRedirection = styled(Link)`
    margin-top: 100px;
    font-size: 18px;
    &:visited {
        color: ${color.primary};
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