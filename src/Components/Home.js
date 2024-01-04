import dog from '../Assets/Images/dog.jpg'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import Ovalcard from './Ovalcard'
import About from './About'
import Overlap from './Overlap'
import Footer from './Footer'
import Dashboard from './Dashboard'


const Home = () => {
    return (

        <div>
            <Dashboard />
            <img className="adopt" src={dog} />
            <div className="quote-container">
                <p>Adopt a forever friend today!</p>
                <h2>Browse pets from our network of over 11,500 shelters and rescues.</h2>
            </div>

            <Ovalcard />
            <About/>
            <Overlap/>
            <Footer />

        </div>

    )
}
export default Home