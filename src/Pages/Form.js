
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
function Form() {
    const navS = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Location noted');
        navS('/')

    };
    return (
        <div className="wrapy">
            
            <div class="regis">
                <form onSubmit={handleSubmit}>
                 <div className="inputt">
                    <h3 className="formhead">To Rescue</h3>

                    <input type="text" id="Name" placeholder="Name" className="auth-inputf" required />

                    <input type="tel" placeholder="Phonenumber" className="auth-inputf" required />

                    <input type="text" id="address" placeholder="Address" class="auth-inputf" required />
                    <input type="submit" value="Save" class="auth-btnf" />
                 </div>


                </form>
            </div>
        </div>
    )
}
export default Form