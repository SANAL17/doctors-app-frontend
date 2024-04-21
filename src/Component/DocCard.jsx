import React from 'react'

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,

  MDBCardHeader,
  MDBBtn
} from 'mdb-react-ui-kit';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

function DocCard({doctors}) {
  console.log(doctors);
  return (
    <div >
      <div className="container">
        
   
      <MDBCard style={{width:'100%', height:'300px'}}  className='bg-light text-primary mb-5  rounded-6 shadow-5 '>
        <MDBCardHeader className='text-center'><h4>{doctors.hospital}</h4></MDBCardHeader>
        
        <MDBCardBody>
        <MDBCardTitle className='text-center fw-bold'>{doctors.name}</MDBCardTitle>
          <MDBCardText className='text-center '>
          <p>{doctors.specialty}</p>
           <p>⭐{doctors.rating}</p>
          <Link to={`view/${doctors.id}`}>
          <MDBBtn className='bg-primary text-light' color='link' rippleColor='dark'>
               More Details
           </MDBBtn>
          </Link>
          </MDBCardText>
          
        </MDBCardBody>
      </MDBCard>
     
      </div>
     
    </div>
  )
}

export default DocCard