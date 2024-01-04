
import Dash from './Dash'
import { Dog } from 'lucide-react';
import { Cat } from 'lucide-react';
import { Heart } from 'lucide-react';
import dogv from '../Assets/Images/Adopt.mp4'

function Welcome() {
    return (
        <>
            <Dash />
            <h2 className="qoute"> <Dog /> Adopting a pet is not only a wonderful way to bring joy into your life,it's also a chance to save a life   <Cat /></h2>
            <div className="dwel">

                <video autoPlay loop muted playsInline >
                    <source src={dogv} type="video/mp4" />
                </video>
            </div>
            <div className="forq">
            </div>
            <div className="wellq">
                <h1>Who Adapted Who?</h1>
            </div>
            <div className="wellhead">
                <div className="well1">
                    <div class="cardhead">
                        <p class="wcard">Pet Adopters</p>
                        <p class="small-desc">
                            129   <Heart />
                        </p>
                        <div class="go-corner">
                            <div class="go-arrow">→</div>
                        </div>
                    </div>
                </div>
                <div className="well2">
                    <div class="cardhead">
                        <p class="wcard">Pet Adopted</p>
                        <p class="small-desc">
                            134   <Heart />
                        </p>
                        <div class="go-corner">
                            <div class="go-arrow">→</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Welcome 