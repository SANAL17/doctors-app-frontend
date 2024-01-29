import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';
function DocReview({review}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    console.log(review);
  return (
    <div>
     

        <Button variant="primary" onClick={handleShow}>
        Reviews <i class="fa-solid fa-arrow-right fa-bounce"></i>
      </Button> 
  

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Reviews</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
   
          {
            review?.map(item=>(
              
          
           <ListGroup className='m-3'>
           <ListGroup.Item>Name : {item.patient_name}</ListGroup.Item>
           <ListGroup.Item>Date : {item.date}</ListGroup.Item>
           <ListGroup.Item>   {item.comments}</ListGroup.Item>
           <ListGroup.Item>Rating : {item.rating}⭐</ListGroup.Item>
         
         </ListGroup>
            ))
          }
       
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default DocReview