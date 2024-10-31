
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../../Footer/Footer.jsx';
import Header from '../Header/Header.jsx'

const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
            <h2>Welcome to My React Router Website</h2>
            <Header></Header>
            {
                navigation.state === 'loading' ? <p>Loading</p> : <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Home;