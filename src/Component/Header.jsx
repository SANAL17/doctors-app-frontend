import React, { useState } from 'react'
import './Header.css'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon
} from 'mdb-react-ui-kit';

function Header() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <div>
      


      <MDBNavbar expand='lg' light classID='navbar'>
      <MDBContainer fluid>
      <MDBNavbarBrand href='/' className='text-light fs-3  fw-bold'>
          <i class="fa-solid fa-user-doctor  mx-3 fs-3"></i>
            MedCare
          </MDBNavbarBrand>
                  <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNav(!openNav)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNav}>
          <MDBNavbarNav className='ms-5'>
            <MDBNavbarItem >
              <MDBNavbarLink className='text-white' active aria-current='page' href='/'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className='text-white' href='#doctors'>Doctors</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className='text-white' href=''>About Us</MDBNavbarLink>
            </MDBNavbarItem>
            
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    
   

    </div>
  )
}

export default Header