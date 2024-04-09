import Dash from './Dash'
import { Shell } from 'lucide-react';
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom';
function Opet() {
    const display=()=>{
        alert("Response has been noted.We will contact you soon !!")
    }
    return (
        <>
            <Dash />
            <div className="ohead">
            <h1> Others  <Shell /></h1>
                {/* <h2>A true friend</h2>  */}
             </div>
            <div className="ogcont">

                <div class="ocard">
                    <img className="sizereduce" src="https://sl-prod-v2-cdn.shelterluv.com/sites/default/files/animal_pics/9462/2023/08/24/11/20230824111112.png" />
                    <h4>Bruce</h4>
                    <p>2 yr,male</p>
                    <h3>Adopt! Love..</h3>
                    
                    <Link to='/pay'>
                    <input type="submit"  value="Adopt" className="obtn" />
                    </Link>
                </div>
                <div class="ocard">
                    <img className="sizereduce"src="https://sl-prod-v2-cdn.shelterluv.com/sites/default/files/animal_pics/9462/2021/10/04/16/20211004165506.png" />
                    <h4>Scooby</h4>
                    <p>2 yr,male</p>
                    <h3>Adopt! Love..</h3>
                    <Link to='/pay'>
                    <input type="submit"  value="Adopt" className="obtn" />
                    </Link>
                </div>
                <div class="ocard">
                    <img className="sizereduce"src="https://sl-prod-v2-cdn.shelterluv.com/sites/default/files/animal_pics/9462/2021/12/01/06/20211201060814.png" />
                    <h4>Blacky</h4>
                    <p>2 yr,male</p>
                    <h3>Adopt! Love..</h3>
                    <Link to='/pay'>
                    <input type="submit"  value="Adopt" className="obtn" />
                    </Link>
                </div>
            </div>
            <div className="ogcont2">
                <div class="ocard">
                    <img className="sizereduce"src="https://www.petbirdsworldindia.com/assets/images/service/adoption/bird-adoption.webp" />
                    <h4>Pattu</h4>
                    <p>2 yr,male</p>
                    <h3>Adopt! Love..</h3>
                    <Link to='/pay'>
                    <input type="submit"  value="Adopt" className="obtn" />
                    </Link>
                </div>
                <div class="ocard">
                    <img className="sizereduce"src="https://img.freepik.com/free-photo/portrait-cute-fluffy-gray-rabbit-with-ears-natural-green-grass_78492-3948.jpg?size=626&ext=jpg&ga=GA1.1.1645145977.1703093195&semt=sph" />
                    <h4>Chittu</h4>
                    <p>2 yr,male</p>
                    <h3>Adopt! Love..</h3>
                    <Link to='/pay'>
                    <input type="submit"  value="Adopt" className="obtn" />
                    </Link>
                </div>
                <div class="ocard">
                    <img className="sizereduce"src="https://www.petbirdsworldindia.com/assets/images/gallery/yellow-monk.webp" />
                    <h4>Browny</h4>
                    <p>2 yr,male</p>
                    <h3>Adopt! Love..</h3>
                    <Link to='/pay'>
                    <input type="submit"  value="Adopt" className="obtn" />
                    </Link>
                </div>
            </div>
            <div className="ogcont3">
                <div class="ocard">
                    <img className="sizereduce"src="https://img.freepik.com/free-photo/closeup-selective-focus-shot-brown-rat-concrete-ground_181624-20074.jpg?size=626&ext=jpg&ga=GA1.1.1645145977.1703093195&semt=sph" />
                    <h4>Bunny</h4>
                    <p>2 yr,male</p>
                    <h3>Adopt! Love..</h3>
                    <Link to='/pay'>
                    <input type="submit"  value="Adopt" className="obtn" />
                    </Link>
                </div>
                <div class="ocard">
                    <img className="sizereduce"src="https://img.freepik.com/free-photo/selective-focus-shot-rabbit-yard_181624-32183.jpg?size=626&ext=jpg&ga=GA1.1.1645145977.1703093195&semt=sph" />
                    <h4>Maanu</h4>
                    <p>9 yr,Female</p>
                    <h3>Adopt! Love..</h3>
                    <Link to='/pay'>
                    <input type="submit"  value="Adopt" className="obtn" />
                    </Link>
                </div>
                <div class="ocard">
                    <img className="sizereduce"src="https://img.freepik.com/free-photo/beaver-eating-with-blurred-water_181624-6464.jpg?size=626&ext=jpg&ga=GA1.1.1645145977.1703093195&semt=sph" />
                    <h4>Bittu</h4>
                    <p>4 yr,Female</p>
                    <h3>Adopt! Love..</h3>
                    <Link to='/pay'>
                    <input type="submit"  value="Adopt" className="obtn" />
                    </Link>
                </div>
            </div>
            <div className="ogcont4">
                <div class="ocard">
                    <img className="sizereduce"src="https://sl-prod-v2-cdn.shelterluv.com/sites/default/files/animal_pics/9462/2021/12/01/16/20211201165319.png" />
                    <h4>Gimmy</h4>
                    <p>5 yr,male</p>
                    <h3>Adopt! Love..</h3>
                    <Link to='/pay'>
                    <input type="submit"  value="Adopt" className="obtn" />
                    </Link>
                </div>
                <div class="ocard">
                    <img className="sizereduce"src="https://img.freepik.com/free-photo/closeup-shot-squirrel-eating-pieces-corn_181624-32206.jpg?size=626&ext=jpg&ga=GA1.1.1645145977.1703093195&semt=sph" />
                    <h4>Whitty</h4>
                    <p>3 yr,male</p>
                    <h3>Adopt! Love..</h3>
                    <Link to='/pay'>
                    <input type="submit"  value="Adopt" className="obtn" />
                    </Link>
                </div>
                <div class="ocard">
                    <img className="sizereduce"src="https://img.freepik.com/free-photo/ground-squirrel-eating_181624-15828.jpg?size=626&ext=jpg&ga=GA1.1.1645145977.1703093195&semt=sph" />
                    <h4>Bittu</h4>
                    <p>2 yr,male</p>
                    <h3>Adopt! Love..</h3>
                    <Link to='/pay'>
                    <input type="submit"  value="Adopt" className="obtn" />
                    </Link>
                </div>
            </div>


                  <div className="footy">
                     <Footer/>
                     </div>
        </>
    )
}
export default Opet