import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleAbout.css'

const SingleAbout = ({ teach }) => {
    const { img, name, salary, mobile, institute, area, current_education } = teach;
    console.log(teach)
    return (
        <div className='col-lg-4 col-md-6 col-sm-12 col-12 card-design '>
            <Card className="card shadow mx-4 mb-4 h-100">
                <Card.Img variant="top" className='img-design h-70 mx-auto' src={img} />
                <Card.Body className="text-center">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{institute}</Card.Text>
                    <Card.Text>{current_education}</Card.Text>
                    <Card.Text>{salary} tk/month</Card.Text>
                    <Card.Text>{mobile}</Card.Text>
                    <Card.Text>{area}</Card.Text>
                    <Link to={`/courses/${teach._id}`}><Button className="fw-bold fs-5 px-3" >Details</Button></Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SingleAbout
