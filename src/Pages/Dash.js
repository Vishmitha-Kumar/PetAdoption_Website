import { Dog } from 'lucide-react'
import { Cat } from 'lucide-react'
import { Fish } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Turtle } from 'lucide-react';
import { Shell } from 'lucide-react';
import { LogOut } from 'lucide-react';
import { Home } from 'lucide-react';
import { LayoutDashboard } from 'lucide-react';

function Dash() {
  return (
    <>
      <nav class="main-menu">
        <ul>
          <li>
            <Link to='/welcome'>
            <LayoutDashboard />
              <span class="nav-text">Dashboard</span>
              {/* <i class="fa fa-home nav-icon"></i> */}
            </Link>
          </li>
          <li>
            <Link to='/'>
              <Home />
              <span class="nav-text">Home</span>
              {/* <i class="fa fa-home nav-icon"></i> */}
            </Link>
          </li>
          <li>
            <Link to='/dpet'>
              <Dog />
              {/* <i class="fa fa-home nav-icon"></i> */}
              <span class="nav-text">Dog</span>
            </Link>
          </li>

          <li>
            {/* <a href="#"> */}
            <Link to='/cpet'>
              {/* <i class="fa fa-image nav-icon"></i> */}
              <Cat />
              <span class="nav-text">Cat</span>
            </Link>

          </li>

          {/* <li>
          
            <Link to='/apet'>
              
              <Fish />
              <span class="nav-text">Aquarium pets</span>
            </Link>
          </li> */}

          <li>
            {/* <a href="#"> */}
            <Link to='/apet'>
              {/* <i class="fa fa-envelope nav-icon"></i> */}
              <Turtle />
              <span class="nav-text">Exotic pets</span>
            </Link>
          </li>

          <li>
            {/* <a href="#">
        <i class="fa fa-bell nav-icon"></i> */}
            <Link to='/opet'>
              <Shell />
              <span class="nav-text">Others</span>
            </Link>
          </li>

        </ul>

        <ul class="logout">
          {/* <li>
      <a href="#">
        <i class="fa fa-cogs nav-icon"></i>
        <span class="nav-text">Settings</span>
      </a>
    </li> */}

          <li>
            {/* <a href="#">
        <i class="fa fa-bell nav-icon"></i> */}
            <Link to='/'>
              <LogOut />
              <span class="nav-text">Logout</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
export default Dash