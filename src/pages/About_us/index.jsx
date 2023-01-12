import MainHeading from '../../components/MainHeading';
import AboutUsBackground from '../../assets/about-us-background.png';
import ToggleContent from '../../components/ToggleContent';
import styled from 'styled-components';

const AboutUsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 1023px;
`

function AboutUs(){
    const toggleWidth = '100%';
    const toggleTitleHeight = '36px';

    const fiabilityContent = 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.';
    const respectContent = 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.';
    const serviceContent = 'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\'hésitez pas à nous contacter si vous avez la moindre question.';
    const responsabilityContent = <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>;

    return(
        <AboutUsContainer>
            <MainHeading mainHeadingBackgroundUrl={AboutUsBackground} mainHeadingText='' />
            <ToggleContent title='Fiabilité' content={fiabilityContent} width={toggleWidth} height={toggleTitleHeight} />
            <ToggleContent title='Respect' content={respectContent} width={toggleWidth} height={toggleTitleHeight} />
            <ToggleContent title='Service' content={serviceContent} width={toggleWidth} height={toggleTitleHeight} />
            <ToggleContent title='Responsabilité' content={responsabilityContent} width={toggleWidth} height={toggleTitleHeight} />
        </AboutUsContainer>
    )
}

export default AboutUs