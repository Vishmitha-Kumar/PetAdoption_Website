
import { Bone } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';

import { PawPrint } from 'lucide-react';
import Nav from '../Components/Nav'
import { Link } from 'react-router-dom'
import Home from '../Components/Home'
function Dashboard() {
    return (
        <>
            <div className="viewport">
                <div className="sidebar">
                    <header>
                        <li className="db"> <PawPrint /> Petty pet</li>

                    </header>
                    <ul class="navb">
                        <li className='H'>
                            <Link to='/home' className="over">
                                <button class="cta">

                                    <span>Home</span>

                                </button>
                            </Link>
                            
                        </li>
                        <li>
                            <Link to='/home' className="over">
                                <button class="cta">
                                    <span>Accessories</span>
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to='/home' className="over">
                                <button class="cta">
                                    <span>Food</span>
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to='/home' className="over">
                                <button class="cta">
                                    <span>Pet Grooming</span>
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="content">
                    <Nav />

                </div>
            </div>
        </>
    )
}
export default Dashboard