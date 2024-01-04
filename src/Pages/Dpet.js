import Dash from './Dash'
import { Bone } from 'lucide-react';
import Footer from '../Components/Footer'
function Dpet() {


    const display=()=>{
        alert("Response has been noted.We will contact you soon !!")
    }
    return (
        <>
            <Dash />
            <div className="dhead">
            <h1> Dogs <Bone /></h1>
                {/* <h2>A true friend</h2>  */}
             </div>
            <div className="dgcont">

                <div class="dcard">
                    <img className="sizereduce" src="https://img.freepik.com/premium-photo/brown-black-stray-puppies-sitting-ground_36268-803.jpg?size=626&ext=jpg&ga=GA1.1.1645145977.1703093195&semt=sph" />
                    <h4>Bittu</h4>
                    <p>2 yr,male,Stray dog</p>
                    <h3>Adopt a four legged love</h3>
                    
                    <input type="submit" onClick={display} value="Adopt" className="dogbtn" />
                </div>
                <div class="dcard">
                    <img className="sizereduce" src="https://img.freepik.com/free-photo/adorable-brown-white-basenji-dog-smiling-giving-high-five-isolated-white_346278-1657.jpg?size=626&ext=jpg&ga=GA1.1.1645145977.1703093195&semt=sph" />
                    <h4>Whitty</h4>
                    <p>3 yr,male,Trained dog</p>
                    <h3>Adopt a four legged love</h3>
                    <input type="submit"  onClick={display} value="Adopt" className="dogbtn" />
                </div>
                <div class="dcard">
                    <img className="sizereduce"src="https://img.freepik.com/free-photo/cute-young-stylish-pretty-smiling-happy-blond-woman-playing-with-dog-husky-breed-park-sunny-summer-day_285396-1695.jpg?size=626&ext=jpg&ga=GA1.1.1645145977.1703093195&semt=sph" />
                    <h4>Gimmy</h4>
                    <p>5 yr,male,Trained dog</p>
                    <h3>Adopt a four legged love</h3>
                    <input type="submit"  onClick={display} value="Adopt" className="dogbtn" />
                </div>
            </div>
            <div className="dgcont2">
                <div class="dcard">
                    <img className="sizereduce"src="https://img.freepik.com/free-photo/small-funny-dog-beagle-posing-isolated-white-wall_155003-33570.jpg?size=626&ext=jpg&ga=GA1.1.1645145977.1703093195&semt=sph" />
                    <h4>Bittu</h4>
                    <p>4 yr,Female,Trained dog</p>
                    <h3>Adopt a four legged love</h3>
                    <input type="submit"  onClick={display} value="Adopt" className="dogbtn" />
                </div>
                <div class="dcard">
                    <img className="sizereduce"src="https://img.freepik.com/free-photo/funny-happy-beagle-dog-walking-playing-park_176420-6453.jpg?size=626&ext=jpg&ga=GA1.1.1645145977.1703093195&semt=sph" />
                    <h4>Maanu</h4>
                    <p>9 yr,Female,Trained dog</p>
                    <h3>Adopt a four legged love</h3>
                    <input type="submit"  onClick={display} value="Adopt" className="dogbtn" />
                </div>
                <div class="dcard">
                    <img className="sizereduce"src="https://img.freepik.com/premium-photo/cute-healthy-yellow-labrador-dog-with-tongue-out-standing-pathway-forest-glade_157917-1234.jpg?size=626&ext=jpg&ga=GA1.1.1645145977.1703093195&semt=sph" />
                    <h4>Bunny</h4>
                    <p>2 yr,male,Stray dog</p>
                    <h3>Adopt a four legged love</h3>
                    <input type="submit"  onClick={display} value="Adopt" className="dogbtn" />
                </div>
            </div>
            <div className="dgcont3">
                <div class="dcard">
                    <img className="sizereduce"src="https://img.freepik.com/free-photo/beagle-dog-gray-background_155003-9714.jpg?size=626&ext=jpg&ga=GA1.1.1645145977.1703093195&semt=sph" />
                    <h4>Chittu</h4>
                    <p>2 yr,male,Stray dog</p>
                    <h3>Adopt a four legged love</h3>
                    <input type="submit"  onClick={display} value="Adopt" className="dogbtn" />
                </div>
                <div class="dcard">
                    <img className="sizereduce"src="https://img.freepik.com/free-photo/beagle-beautiful-shot-dog-grass_1161-359.jpg?size=626&ext=jpg&ga=GA1.1.1645145977.1703093195&semt=sph" />
                    <h4>Browny</h4>
                    <p>2 yr,male,Trained dog</p>
                    <h3>Adopt a four legged love</h3>
                    <input type="submit"  onClick={display} value="Adopt" className="dogbtn" />
                </div>
                <div class="dcard">
                    <img className="sizereduce"src="https://img.freepik.com/premium-photo/photo-motion-running-beautiful-golden-retriever-dog-have-walk-outdoors-park_146671-50461.jpg?size=626&ext=jpg&ga=GA1.1.1645145977.1703093195&semt=sph" />
                    <h4>Tiger</h4>
                    <p>2 yr,male,Foreign dog</p>
                    <h3>Adopt a four legged love</h3>
                    <input type="submit"  onClick={display} value="Adopt" className="dogbtn" />
                </div>
            </div>
            <div className="dgcont4">
                <div class="dcard">
                    <img className="sizereduce"src="https://img.freepik.com/premium-photo/golden-retriever-dog-sitting-floor-isolated_8595-251.jpg?size=626&ext=jpg&ga=GA1.1.1645145977.1703093195&semt=sph" />
                    <h4>Blacky</h4>
                    <p>2 yr,male,Stray dog</p>
                    <h3>Adopt a four legged love</h3>
                    <input type="submit"  onClick={display} value="Adopt" className="dogbtn" />
                </div>
                <div class="dcard">
                    <img className="sizereduce"src="https://img.freepik.com/free-photo/sportive-dog-performing-during-lure-coursing-competition_155003-42639.jpg?size=626&ext=jpg&ga=GA1.1.1645145977.1703093195&semt=sph" />
                    <h4>Scooby</h4>
                    <p>2 yr,male,Trained dog</p>
                    <h3>Adopt a four legged love</h3>
                    <input type="submit"  onClick={display} value="Adopt" className="dogbtn" />
                </div>
                <div class="dcard">
                    <img className="sizereduce"src="https://img.freepik.com/free-photo/labrador-retriever_95678-27.jpg?size=626&ext=jpg&ga=GA1.1.1645145977.1703093195&semt=sph" />
                    <h4>Bruce</h4>
                    <p>2 yr,male,Stray dog</p>
                    <h3>Adopt a four legged love</h3>
                    <input type="submit" onClick={display}  value="Adopt" className="dogbtn" />
                </div>
            </div>


                  <div className="footy">
                     <Footer/>
                     </div>
        </>
    )
}
export default Dpet