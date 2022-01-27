import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleHome.css'

const SingleHome = ({ teach }) => {
  const { img, name, salary, area, mobile, institute, current_education } = teach;
  return (
    <div className='col-lg-4 col-md-6 col-12'>
      <Card className="card shadow m-4">
        <Card.Img variant="top" className='img-design mx-auto' src={img} />
        <Card.Body className="text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{institute}</Card.Text>
          <Card.Text>{current_education}</Card.Text>
          <Card.Text>{salary} tk/month</Card.Text>
          <Card.Text>{mobile}</Card.Text>
          <Card.Text>{area}</Card.Text>
          <Link to={`/courses/${teach?._id}`}><Button className="fw-bold border-0 px-4 fs-5">Details</Button></Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default SingleHome
