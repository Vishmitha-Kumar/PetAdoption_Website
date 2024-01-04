import Dashboard from "./Dashboard";
import dogv from '../Assets/Images/Adopt.mp4'
import '../Assets/Css/dwelcome.css'
import { Dog } from 'lucide-react';
import { Cat } from 'lucide-react';
function DWelcome() {
    return (
        <>  
        <Dashboard/>
              <h2 className="qoute"> <Dog/> Adopting a pet is not only a wonderful way to bring joy into your life,it's also a chance to save a life   <Cat /></h2>
            <div  className="dwel">
                
            <video  autoPlay loop muted playsInline >
                    <source src={dogv} type="video/mp4" />
                </video>
            </div>
        </>
    )
}
export default DWelcome 