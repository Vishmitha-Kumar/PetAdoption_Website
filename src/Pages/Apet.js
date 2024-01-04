import Dash from './Dash'
import { Turtle } from 'lucide-react';
import Footer from '../Components/Footer'
function Apet() {
    const display=()=>{
        alert("Response has been noted.We will contact you soon !!")
    }
    return (
        <>
            <Dash />
            <div className="ahead">
            <h1> Exotics  <Turtle /></h1>
                {/* <h2>A true friend</h2>  */}
             </div>
            <div className="agcont">

                <div class="acard">
                    <img className="sizereduce"src="https://www.thesprucepets.com/thmb/rRihpzEbNwZEOSiz4yvMd98BKrI=/315x236/filters:no_upscale():strip_icc():format(webp)/96747320-crop-56a2bcc43df78cf772795fbf.jpg" />
                    <h4>Bittu</h4>
                    <p>2 yr,male</p>
                    <h3>Adopt ! Love..</h3>
                    <input type="submit" onClick={display} value="Adopt" className="aquabtn" />
                </div>
                <div class="acard">
                    <img className="sizereduce"src="https://www.thesprucepets.com/thmb/eWmK_LWT_uSEs9FV-nC0s__b_5k=/315x236/filters:no_upscale():strip_icc():format(webp)/169760102_2bfd9b3e4a_o-56a2bd013df78cf772796267.jpg" />
                    <h4>Whitty</h4>
                    <p>3 yr,male</p>
                    <h3>Adopt ! Love..</h3>
                    <input type="submit" onClick={display}value="Adopt" className="aquabtn" />
                </div>
                <div class="acard">
                    <img className="sizereduce"src="https://www.thesprucepets.com/thmb/LmWAjV4U1hKtyeHzeHIHFZ3gPws=/315x236/filters:no_upscale():strip_icc():format(webp)/GettyImages-514744702-e901b28355434d99b49e416c430833b9.jpg" />
                    <h4>Gimmy</h4>
                    <p>5 yr,male</p>
                    <h3>Adopt ! Love..</h3>
                    <input type="submit" onClick={display}value="Adopt" className="aquabtn" />
                </div>
            </div>
            <div className="agcont2">
                <div class="acard">
                    <img className="sizereduce" src="https://www.thesprucepets.com/thmb/Q6qWoFVRhabd30HCqgb9fwgvATk=/315x236/filters:no_upscale():strip_icc():format(webp)/200351944-001-56a2bce85f9b58b7d0cdf813.jpg" />
                    <h4>Maanu</h4>
                    <p>9 yr,Female</p>
                    <h3>Adopt ! Love..</h3>
                    <input type="submit" onClick={display}value="Adopt" className="aquabtn" />
                </div>
                <div class="acard">
                    <img className="sizereduce"src="https://www.thesprucepets.com/thmb/Odq6pNH6MsKaaBv1NpW21BKHfLc=/315x236/filters:no_upscale():strip_icc():format(webp)/Degus-584dd2cd3df78c491e96487f.jpg"/>
                    <h4>Bunny</h4>
                    <p>2 yr,male</p>
                    <h3>Adopt ! Love..</h3>
                    <input type="submit" onClick={display}value="Adopt" className="aquabtn" />
                </div>
                <div class="acard">
                    <img className="sizereduce"src="https://www.thesprucepets.com/thmb/ttztB5h0rz4Iio3tSi7T-v7G0ME=/315x236/filters:no_upscale():strip_icc():format(webp)/GettyImages-677136725-580d851e5f9b58564cc750de.jpg" />
                    <h4>Browny</h4>
                    <p>2 yr,male</p>
                    <h3>Adopt ! Love..</h3>
                    <input type="submit" onClick={display}value="Adopt" className="aquabtn" />
                </div>
            </div>
            <div className="agcont3">
                <div class="acard">
                    <img className="sizereduce"src="https://sl-prod-v2-cdn.shelterluv.com/sites/default/files/animal_pics/9462/2023/09/06/12/20230906121159.png" />
                    <h4>Chittu</h4>
                    <p>2 yr,male</p>
                    <h3>Adopt ! Love..</h3>
                    <input type="submit" onClick={display}value="Adopt" className="aquabtn" />
                </div>
                <div class="acard">
                    <img className="sizereduce"src="https://sl-prod-v2-cdn.shelterluv.com/sites/default/files/animal_pics/9462/2023/06/28/13/20230628132556.png" />
                    <h4>Pattu</h4>
                    <p>2 yr,male</p>
                    <h3>Adopt ! Love..</h3>
                    <input type="submit" onClick={display}value="Adopt" className="aquabtn" />
                </div>
                <div class="acard">
                    <img className="sizereduce"src="https://sl-prod-v2-cdn.shelterluv.com/sites/default/files/animal_pics/9462/2023/10/24/12/20231024122535.png" />
                    <h4>Blacky</h4>
                    <p>2 yr,male</p>
                    <h3>Adopt ! Love..</h3>
                    <input type="submit" onClick={display}value="Adopt" className="aquabtn" />
                </div>
            </div>
            <div className="agcont4">
                <div class="acard">
                    <img className="sizereduce"src="https://sl-prod-v2-cdn.shelterluv.com/sites/default/files/animal_pics/9462/2023/11/29/10/20231129103938.png" />
                    <h4>Scooby</h4>
                    <p>2 yr,male</p>
                    <h3>Adopt ! Love..</h3>
                    <input type="submit" onClick={display}value="Adopt" className="aquabtn" />
                </div>
                <div class="acard">
                    <img className="sizereduce"src="https://sl-prod-v2-cdn.shelterluv.com/sites/default/files/animal_pics/9462/2023/07/05/09/20230705090953.png" />
                    <h4>Bruce</h4>
                    <p>2 yr,male</p>
                    <h3>Adopt ! Love..</h3>
                    <input type="submit" onClick={display}value="Adopt" className="aquabtn" />
                </div>
                <div class="acard">
                    <img className="sizereduce"src="https://sl-prod-v2-cdn.shelterluv.com/sites/default/files/animal_pics/9462/2023/12/06/13/20231206133508.png" />
                    <h4>Ginnu</h4>
                    <p>5 yr,male</p>
                    <h3>Adopt ! Love..</h3>
                    <input type="submit" onClick={display}value="Adopt" className="aquabtn" />
                </div>
            </div>


                  <div className="footy">
                     <Footer/>
                     </div>
        </>
    )
}
export default Apet