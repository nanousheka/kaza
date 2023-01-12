import whiteLogo from '../../assets/white-logo.png';
import styled from 'styled-components';

const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 38px;
    height: 160px;
    width: 100vw;
    background: rgba(0, 0, 0, 1);

`
const FooterLogo = styled.img`
    height: 30px;
`
const FooterCredentials = styled.span`
    font-size: 18px;
    line-height: 142.6%;
    color: white;
    margin-top: 30px;
    @media screen and (max-width: 768px) {
        font-size : 12px;
    }
`

function Footer(){
    return(
        <FooterWrapper>
            <FooterLogo src={whiteLogo} alt='Logo du pieds de page' />
            <FooterCredentials>© 2023 Kasa. All rights reserved</FooterCredentials>
        </FooterWrapper>
    )

}

export default Footer;