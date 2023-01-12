//import logo from './logo.svg';
import Header from './components/Header';
import Home from './pages/Home';
import AboutUs from './pages/About_us';
import Quatre104 from './components/404';
import Property from './pages/Property';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom';
//import { useNavigate } from "react-router-dom";
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Normalize from 'react-normalize';



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
  max-width: 1240px;
  margin : 0 auto;
  margin-top : 45px;
  padding: 0 130px;
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
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/property/:id' element={<Property />} />
          <Route path='/property/*' element={<Quatre104 />} />
          <Route path="*" element={<Quatre104 />} />
        </Routes>
      </MainContainer>
      <Footer />
    </>
    
  );
}

export default App;
