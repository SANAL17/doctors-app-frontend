import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DocCard from './DocCard';


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
           <div className="image">
      <img width={'1904px'} height={'750'} src="https://img.freepik.com/free-vector/gradient-hospital-template-design_23-2150383223.jpg?w=1480&t=st=1706520780~exp=1706521380~hmac=967e0b6c81a69dbeca103a45cb66228a031613b953760cd6288235d239ae1cff" alt="" />
     </div>
        <Row>
          {
            AlldocData.map(item=>(
              <Col sm={12} md={6} lg={4} xl={3}>
              <DocCard doctors={item}/>
              </Col>
                      ))
          }
        </Row>
    </div>
  )
}

export default Alldoc