import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MDBBtn } from 'mdb-react-ui-kit';
import DocReview from './DocReview';
import './viewdoc.css'
function ViewDoc() {
    // get the doc id in the path
    const {id}=useParams()
    console.log(id);

    // api call to fetch particular doc
    
    const base_url='http://localhost:3001/doctors'

    const [docdetails,setdocDetails]=useState({})

    const fetchDocDetails=async()=>{
        const result = await axios.get(`${base_url}/${id}`)
        console.log(result.data);
        setdocDetails
        (result.data);
    }
     console.log(docdetails);

    useEffect(()=>{
        fetchDocDetails()
    },[])


  return (
    <div className='m-5'>
        <div className="container bg-ligth  ">
            <Row className=''>
                <img width={'100px'} height={'600px'}  src="https://cdn.pixabay.com/photo/2017/03/14/03/20/woman-2141808_640.jpg" alt="" />
            </Row>
            <Row >
                <Col className='text-center text-dark m-5 p-4'>
                <h2 style={{textTransform:'uppercase', fontSize:'60px'}} className='mb-5 text-primary '>{docdetails.hospital}</h2>
                <h4 className='mb-4' style={{textTransform:'uppercase', fontSize:'30px'}}>{docdetails.name } </h4>
                <p className='fs-4'>{docdetails.specialty}</p>
                <h3>Phone : {docdetails.phone}</h3>
                </Col>
                
                <Col className=' text-dark m-5 p-3'>
                    <div className='mt-5 ms-3'>
                    <p>Location : {docdetails.address}</p>
                   <p>Time : {docdetails.available_hours}</p>
                   <p>Email : {docdetails.email}</p>
                   <p>Working Days : {docdetails.available_days}</p>
                   <p>Rating : {docdetails.rating}⭐</p>
                   <p><DocReview review={docdetails.reviews}/></p>

                    </div>
               
                 
                 
                </Col>
            </Row>
           
        </div>
    </div>
  )
}

export default ViewDoc