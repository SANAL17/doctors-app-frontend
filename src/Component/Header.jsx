import React from 'react'
import './Header.css'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
function Header() {
  return (
    <div>
      <MDBNavbar light  classID='navbar'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/' className='text-light'>
          <i class="fa-solid fa-user-doctor fa-flip mx-3 fs-4"></i>
            Doctors Appoinment
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    
   

    </div>
  )
}

export default Header