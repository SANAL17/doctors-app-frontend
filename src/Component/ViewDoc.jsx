import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MDBBtn } from 'mdb-react-ui-kit';
import DocReview from './DocReview';
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
        <div className="container bg-ligth shadow-5 rounded-6 "style={{width:'1300px',height:'900px'}}>
            <Row>
                <img width={'100px'} height={'500px'}  src="https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg?w=1380&t=st=1704957527~exp=1704958127~hmac=15150e56dd3eb9e54c620efe2029e61f99c04393b71678b7ea2f550f3f513d46" alt="" />
            </Row>
            <Row>
                <Col className='text-center text-dark m-4 p-4'>
                <h2 className='m-3 text-primary'>{docdetails.hospital}</h2>
                <h4>{docdetails.name } </h4>
                <p>{docdetails.specialty}</p>
                <h4>Phone : {docdetails.phone}</h4>
                </Col>
                
                <Col className=' text-dark m-5 p-3'>
                <p>Location : {docdetails.address}</p>
                   <p>Time : {docdetails.available_hours}</p>
                   <p>Email : {docdetails.email}</p>
                   <p>Working Days : {docdetails.available_days}</p>
                   <p>Rating : {docdetails.rating}⭐</p>
                   <p><DocReview review={docdetails.reviews}/></p>
                 
                 
                </Col>
            </Row>
           
        </div>
    </div>
  )
}

export default ViewDoc