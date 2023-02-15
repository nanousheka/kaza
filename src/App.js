import Header from './components/Header';
import Footer from './components/Footer';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Normalize from 'react-normalize';
import MainRoutes from './routes';

const GlobalStyle = createGlobalStyle`
  div {
    font-family: Montserrat, Helvetica, sans-serif;
    font-weight: 500;
  }
`
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1000px;
  min-height: calc(100vh - 160px);
  margin : 0 auto;
  padding: 0 130px;
  margin-top : 45px;
  @media screen and (max-width: 768px) {
    padding : 20px;
    padding-top: 0;
    margin-top : 0px;
}
`

function App() {

  return (
    <>
      <Normalize />
      <GlobalStyle />
      <Header />
      <MainContainer>
          <MainRoutes />
      </MainContainer>
      <Footer />
    </>
    
  );
}

export default App;
