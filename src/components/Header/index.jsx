import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/LOGO.png';
import color from '../../utils/style/colors'

const LogoImg = styled.img`
    height: 47px;
    @media screen and (max-width: 768px) {
        height: 37px;
    }
`
const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 68px;
    width: 1000px;
    margin : 0 auto;
    padding: 0 130px;
    padding-top: 30px;
    @media screen and (max-width: 768px) {
        padding: 20px;
        height: 47px;
        padding-top: 20px;
    }
`
const MainNav = styled.nav`
    display : flex;
    gap : 45px;
    @media screen and (max-width: 768px) {
        gap : 15px;
    }
`

const MainNavLink = styled(Link)`
    display : flex;
    color: ${color.primary};
    text-decoration: none;
    font-weight: 500;
    font-size : 18px;
    &:hover{
        position: relative;
        &:after {
            content: '';
            position: absolute;
            color: ${color.primary};
            bottom: -2px;
            border-bottom : solid 2px;
            width: 100%;
        }
    };
    @media screen and (max-width: 768px) {
        font-size : 12px;
        text-transform: uppercase; 
    }
    
`

function Header() {
    return (
        <HeaderWrapper>
            <LogoImg src={Logo} alt='Logo'/>
            <MainNav>
                <MainNavLink to='/'>Accueil</MainNavLink>
                <MainNavLink to='/about-us'>A propos</MainNavLink>
            </MainNav>
        </HeaderWrapper>
        
    )
}

export default Header