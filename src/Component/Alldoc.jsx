import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DocCard from './DocCard';
import './alldoc.css'
import banner from '../Assets/banner.jpg'
import {
  MDBInputGroup,
} from 'mdb-react-ui-kit';

function Alldoc() {
    const base_url='http://localhost:3001/doctors'
    const [AlldocData,setAlldocData]=useState([])
    const fetchData=async()=>{
        const result = await axios.get(base_url)
        console.log(result.data);
        setAlldocData(result.data)
    }
    console.log(AlldocData);
    useEffect(()=>{
        fetchData()
    },[])
  return (

    <div>
           <div className="banner ">
           <div className="banner-text">
        
               <h1>STAY SAFE, <br /> STAY HEALTHY</h1>
               <p> Simplify doctor bookings, personalizeappointments, and access instant <br />  solutions—all in one seamless platform. Your   health journey, simplified.</p>
                <button>
                  Book Your Appointment
                </button>
            </div>
            <div className="image">
            <img  src='https://github.com/prabinmagar/medimoor-hospital-website-design-using-html-css-and-js/blob/master/assets/images/banner-image.png?raw=true' alt="" />
            </div>
            
           </div>
           <div className="bookking d-flex container mt-5 mb-5">
            <img src="https://github.com/prabinmagar/medimoor-hospital-website-design-using-html-css-and-js/blob/master/assets/images/download-image.png?raw=true" alt="" />
            <div className='text-field p-5'>
              <div className='text-fields'>
                <div className='text-center'>
                  <h1 className='mb-4'>Book Your Doctor</h1>

                </div>
                <div className='d-flex'>
                <MDBInputGroup textBefore='Name' className='  m-3'>
        <input className='form-control ' type='text' placeholder="" />
      </MDBInputGroup> <MDBInputGroup textBefore='@' className='m-3'>
        <input className='form-control' type='email' placeholder="" />
      </MDBInputGroup> <MDBInputGroup textBefore='Phone' className='m-3'>
        <input className='form-control' type='number' placeholder=" " />
      </MDBInputGroup>
                </div>
                <div className='d-flex'>
                <MDBInputGroup className='m-3' textBefore='Address'>
        <textarea className='form-control' />
      </MDBInputGroup> <MDBInputGroup textBefore='City' className='m-3'>
        <input className='form-control' type='email' placeholder="" />
      </MDBInputGroup> 
                </div>
                <div className='d-flex'>
                <MDBInputGroup textBefore='Doctor' className='m-3'>
        <input className='form-control' type='text' placeholder="" />
      </MDBInputGroup> <MDBInputGroup textBefore='Date' className='m-3'>
        <input className='form-control' type='number' placeholder="" />
      </MDBInputGroup> <MDBInputGroup  textBefore='Time' className='m-3'>
        <input className='form-control ' type='number' placeholder="" />
      </MDBInputGroup>
                </div>
                <div className='booknow text-center'>
                  <button>
                    Book Now
                  </button>
                </div>
            
              </div>

              
            </div>
           </div>
           <div className='doctors'>
           <Row className=' m-5'>
            <section id='doctors'>
            <div className='text-center'>
            <h1 className='m-5'>OUR DOCTORS</h1>
          </div>

            </section>
         
          {
            AlldocData.map(item=>(
              <Col sm={12} md={6} lg={4} xl={3}>
              <DocCard doctors={item}/>
              </Col>
                      ))
          }
        </Row>

           </div>
          
        
    </div>
  )
}

export default Alldoc