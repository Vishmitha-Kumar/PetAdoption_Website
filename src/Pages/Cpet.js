import Dash from './Dash'
import { PawPrint } from 'lucide-react';
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom';
function Cpet() {
    const display=()=>{
        alert("Response has been noted.We will contact you soon !!")
    }
    return (
        <>
            <Dash />
            <div className="chead">
            <h1> Cats  <PawPrint /></h1>
                {/* <h2>A true friend</h2>  */}
             </div>
            <div className="cgcont">

                <div class="ccard">
                    <img  className="sizereduce"src="https://sl-prod-v2-cdn.shelterluv.com/sites/default/files/animal_pics/9462/2023/11/02/15/20231102155343.png" />
                    <h4>Bittu</h4>
                    <p>2 yr,male,Stray cat</p>
                    <h3>Adopt a four legged love</h3>
                    
                    <Link to='/pay'>
                    <input type="submit"  value="Adopt" className="catbtn" />
                    </Link>
                </div>
                <div class="ccard">
                    <img  className="sizereduce"src="https://img.freepik.com/free-photo/closeup-shot-beautiful-ginger-domestic-kitten-sitting-white-surface_181624-35913.jpg?size=626&ext=jpg&ga=GA1.1.1645145977.1703093195&semt=sph" />
                    <h4>Whitty</h4>
                    <p>3 yr,male,Trained cat</p>
                    <h3>Adopt a four legged love</h3>
                    <Link to='/pay'>
                    <input type="submit"  value="Adopt" className="catbtn" />
                    </Link>
                </div>
                <div class="ccard">
                    <img  className="sizereduce"src="https://img.freepik.com/free-photo/portrait-beautiful-purebred-pussycat-with-shorthair-orange-collar-neck-sitting-floor-reacting-camera-flash-scared-looking-light-indoor_8353-12551.jpg?size=626&ext=jpg&ga=GA1.1.1645145977.1703093195&semt=sph" />
                    <h4>Gimmy</h4>
                    <p>5 yr,male,Trained cat</p>
                    <h3>Adopt a four legged love</h3>
                    <Link to='/pay'>
                    <input type="submit"  value="Adopt" className="catbtn" />
                    </Link>
                </div>
            </div>
            <div className="cgcont2">
                <div class="ccard">
                    <img  className="sizereduce"src="https://img.freepik.com/premium-photo/portrait-nice-white-gray-domestic-cat-with-big-round-green-eyes-laying-relaxed-outdoors-blurred-light-sunny-animal-world-concept_127089-3565.jpg?size=626&ext=jpg&ga=GA1.1.1645145977.1703093195&semt=sph" />
                    <h4>Bittu</h4>
                    <p>4 yr,Female,Trained cat</p>
                    <h3>Adopt a four legged love</h3>
                    <Link to='/pay'>
                    <input type="submit"  value="Adopt" className="catbtn" />
                    </Link>
                </div>
                <div class="ccard">
                    <img  className="sizereduce"src="https://img.freepik.com/free-photo/close-up-kitten-surrounded-by-flowers_23-2150782331.jpg?size=626&ext=jpg&ga=GA1.1.1645145977.1703093195&semt=sph" />
                    <h4>Maanu</h4>
                    <p>9 yr,Female,Trained cat</p>
                    <h3>Adopt a four legged love</h3>
                    <Link to='/pay'>
                    <input type="submit"  value="Adopt" className="catbtn" />
                    </Link>
                </div>
                <div class="ccard">
                    <img  className="sizereduce"src="https://img.freepik.com/free-photo/white-cat-garden_1150-43949.jpg?size=626&ext=jpg&ga=GA1.1.1645145977.1703093195&semt=sph" />
                    <h4>Bunny</h4>
                    <p>2 yr,male,Stray cat</p>
                    <h3>Adopt a four legged love</h3>
                    <Link to='/pay'>
                    <input type="submit"  value="Adopt" className="catbtn" />
                    </Link>
                </div>
            </div>
            <div className="cgcont3">
                <div class="ccard">
                    <img  className="sizereduce"src="https://img.freepik.com/free-photo/readhead-cat-sitting_181624-21415.jpg?size=626&ext=jpg&ga=GA1.1.1645145977.1703093195&semt=sph" />
                    <h4>Browny</h4>
                    <p>2 yr,male,Trained cat</p>
                    <h3>Adopt a four legged love</h3>
                    <Link to='/pay'>
                    <input type="submit"  value="Adopt" className="catbtn" />
                    </Link>
                </div>
                <div class="ccard">
                    <img  className="sizereduce"src="https://img.freepik.com/premium-photo/stray-cat-walking-city_285180-10.jpg?size=626&ext=jpg&ga=GA1.1.1645145977.1703093195&semt=sph" />
                    <h4>Chittu</h4>
                    <p>2 yr,male,Stray cat</p>
                    <h3>Adopt a four legged love</h3>
                    <Link to='/pay'>
                    <input type="submit"  value="Adopt" className="catbtn" />
                    </Link>
                </div>
                <div class="ccard">
                    <img  className="sizereduce"src="https://img.freepik.com/free-photo/cute-cat-spending-time-outside_23-2150649152.jpg?size=626&ext=jpg&ga=GA1.1.1645145977.1703093195&semt=sph" />
                    <h4>Pattu</h4>
                    <p>2 yr,male,Foreign cat</p>
                    <h3>Adopt a four legged love</h3>
                    <Link to='/pay'>
                    <input type="submit"  value="Adopt" className="catbtn" />
                    </Link>
                </div>
            </div>
            <div className="cgcont4">
                <div class="ccard">
                    <img  className="sizereduce"src="https://img.freepik.com/free-photo/selective-closeup-cute-abyssinian-cat-playing-with-toy-room_181624-58660.jpg?size=626&ext=jpg&ga=GA1.1.1645145977.1703093195&semt=sph" />
                    <h4>Blacky</h4>
                    <p>2 yr,male,Stray cat</p>
                    <h3>Adopt a four legged love</h3>
                    <Link to='/pay'>
                    <input type="submit"  value="Adopt" className="catbtn" />
                    </Link>
                </div>
                <div class="ccard">
                    <img  className="sizereduce"src="https://img.freepik.com/free-photo/kitten_658691-126.jpg?size=626&ext=jpg&ga=GA1.1.1645145977.1703093195&semt=sph" />
                    <h4>Scooby</h4>
                    <p>2 yr,male,Trained cat</p>
                    <h3>Adopt a four legged love</h3>
                    <Link to='/pay'>
                    <input type="submit"  value="Adopt" className="catbtn" />
                    </Link>
                </div>
                <div class="ccard">
                    <img  className="sizereduce"src="https://img.freepik.com/free-photo/closeup-cute-cat-sitting-carpet-against-blurred-background_181624-53498.jpg?size=626&ext=jpg&ga=GA1.1.1645145977.1703093195&semt=sph" />
                    <h4>Bruce</h4>
                    <p>2 yr,male,Stray cat</p>
                    <h3>Adopt a four legged love</h3>
                    <Link to='/pay'>
                    <input type="submit"  value="Adopt" className="catbtn" />
                    </Link>
                </div>
            </div>


                  <div className="footy">
                     <Footer/>
                     </div>
        </>
    )
}
export default Cpet