import styled from 'styled-components';
//import {useState} from 'react';
import ArrowUp from '../../assets/ArrowUp';
import ArrowDown from '../../assets/ArrowDown';
import color from '../../utils/style/colors';
import {useState} from 'react';

const ToggleContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: ${props => props.width};
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

const ToggleTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left : 20px;
    padding-right: 13px;
    background-color: ${color.primary};
    height: ${props => props.height};
    color: white;
    border-radius: 10px;
    @media screen and (max-width: 768px) {
        height: 30px;
    }
`

const ToggleTitle = styled.div`
    font-size: 16px;
    line-height: 142.6%;
    width: 100%;
    @media screen and (max-width: 768px) {
        font-size: 13px;
    }
`
const ToggleButton = styled.div`
    
`
const StyledArrowUp = styled(ArrowUp)`
    height: 20px;
`
const StyledArrowDown = styled(ArrowDown)`
    height: 20px;
`

const Content = styled.div`
    padding: 20px;
    padding-top: 40px;
    padding-right: 13px;
    border-radius: 10px;
    background-color: ${color.greyBackground};
    color: ${color.primary};
    font-weight: 400;
    font-size: 16px;
    line-height: 142.6%;
    position: relative;
    top: -10px;
    z-index: -1;
    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`

function ToggleContent({title, content, width, height}) {
    const [isOpen, setIsOpen] = useState(false)

    
    const handleToggleButton = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true)
    }
    return (
        <ToggleContainer width={width}>
            <ToggleTitleContainer height={height}>
                <ToggleTitle >{title}</ToggleTitle>
                <ToggleButton onClick={handleToggleButton}>{isOpen ? <StyledArrowUp /> : <StyledArrowDown />}</ToggleButton>
            </ToggleTitleContainer>
            
            {isOpen ? (<Content>{content}</Content>) : null}
        </ToggleContainer>
    )
}

export default ToggleContent;