import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';

function Footer() {
  return (
    <>
      <footer>

        <div class="footer-items">
          <ul>
            <h3>Petty Pet</h3>
            <li>About us</li>
            <li>Career</li>
            <li>Online Pet Shop</li>
            <li>Report Animal Abuse</li>
          </ul>
          <ul>
            <h3>Home Services</h3>
            <li>Pet Grooming</li>
            <li>Dog Training</li>
            <li>Pet Relocation</li>
            <li>Home Vet Visit</li>
            <li>Pet Insurance</li>
            <li>Dog Training Course</li>
          </ul>
          <ul>
            <h3>Partner</h3>
            <li>Become a Groomer</li>
            <li>Become a Trainer</li>
            <li>Become a Dog Walker</li>
            <li>Become a Pet Boarder</li>
            <li>Pet Grooming Course</li>
            <li>Pet Store Franchise</li>

          </ul>
          <ul>
            <h3>Policy</h3>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Cancellation Policy</li>
            <li>Terms & Conditions</li>
            <li>Help</li>
          </ul>
      
              
   <div class="social-icons">
    <h3>Social Media</h3>
    <div class="icon-container">
      <div class="icon"><Facebook/></div> 
      <div class="icon"><Instagram/></div>
      <div class="icon"><Twitter/></div>
    </div>
  </div>
            
        </div>
      </footer>

    </>
  )
}
export default Footer;