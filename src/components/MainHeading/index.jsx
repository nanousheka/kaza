import styled from 'styled-components';

const MainHeadingText = styled.span`
color : white;
font-size : 36px;
@media screen and (max-width: 768px) {
    font-size : 24px;
    padding-left: 20px;
}
`
const MainHeadingContainer = styled.div`
display : flex;
align-items : center;
justify-content : center;
position: relative;
width: 100%;
height: 170px;
background-size: contain;
background: rgba(0, 0, 0, .30) url('${props => props.mainHeadingBackgroundUrl}');
background-blend-mode: darken;
background-position: center;
border-radius: 25px;
@media screen and (max-width: 768px) {
    height: 110px;
    border-radius: 10px;
}
`

function MainHeading({mainHeadingBackgroundUrl,mainHeadingText}) {

    return(
        <MainHeadingContainer mainHeadingBackgroundUrl={mainHeadingBackgroundUrl}>
            <MainHeadingText>{mainHeadingText}</MainHeadingText>
        </MainHeadingContainer>
    )
}

export default MainHeading;