import logo from '../Assets/Images/logo.png'
import { Link } from 'react-router-dom'
import { Home } from 'lucide-react';
import { UsersRound } from 'lucide-react';
import { LogOut } from 'lucide-react';
import { LayoutDashboard } from 'lucide-react';

function Nav() {
    return (
        <>
            <div className="navbar">
               
                <ul>

                    <li>
                    <Link to='/d' className='nav'>
                         <LayoutDashboard />
                    </Link>
                    </li>
                    <li>
                    <Link to='/register' className='nav'>
                        <UsersRound />
                    </Link>
                    </li>
                    <li>
                        <Link to='/login' className='nav'>
                        <LogOut/>
                        </Link>
                    </li>
                
                </ul>
            </div>
        </>
    )
}
export default Nav