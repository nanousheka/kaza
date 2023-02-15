import Home from '../pages/Home';
import AboutUs from '../pages/About_us';
import Property from '../pages/Property';
import Quatre104 from '../components/404';
import {Route,Routes} from 'react-router-dom';

function MainRoutes() {
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/property/:id' element={<Property />} />
            <Route path="*" element={<Quatre104 />} />
        </Routes>
    )
}

export default MainRoutes;