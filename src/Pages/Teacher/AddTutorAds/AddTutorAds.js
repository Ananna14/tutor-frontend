import axios from 'axios';
import React, { useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const AddTutorAds = () => {
    // Use useAuth here 
    const { user } = useAuth();
    const [product, setProduct] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...product };
        newInfo[field] = value;
        setProduct(newInfo);
    }

    const handleSubmitProduct = e => {
        e.preventDefault();
        const newProduct = {
            ...product
        }
        newProduct["name"] = user.displayName;
        newProduct["email"] = user.email;
        newProduct["status"] = false;
        console.log(newProduct);
        axios.post('https://tutor-finder.herokuapp.com/tutors', newProduct)
            .then(res => {
                if (res.data.insertedId) {
                    swal({
                        title: "Sucessful!",
                        text: "Product successfully added!",
                        icon: "success",
                        button: "OK",
                    });
                    e.target.reset();
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <Header />
            <Container>
                <div className="mx-auto shadow-lg p-5" style={{ maxWidth: '700px' }}>
                    <h3 className="text-center fw-bold mb-2">Add Tutor Ads</h3>
                    <Form onSubmit={handleSubmitProduct}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridModel">
                                <Form.Label>Name</Form.Label>
                                <Form.Control value={user.displayName} name="name" type="text" placeholder="Enter Name" disabled />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridMadeBy">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control name="subject" onChange={handleOnBlur} type="text" placeholder="Subject Name" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} className="mb-3" controlId="formGridPrice">
                                <Form.Label>Education</Form.Label>
                                <Form.Control name="current_education" onChange={handleOnBlur} type="text" placeholder="Bsc in English" />
                            </Form.Group>

                            <Form.Group as={Col} className="mb-3" controlId="formGridPrice">
                                <Form.Label>Institute</Form.Label>
                                <Form.Control name="institute" onChange={handleOnBlur} type="text" placeholder="Dhaka University" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} className="mb-3" controlId="formGridPrice">
                                <Form.Label>Mobile</Form.Label>
                                <Form.Control name="mobile" onChange={handleOnBlur} type="text" placeholder="01789142765" />
                            </Form.Group>

                            <Form.Group as={Col} className="mb-3" controlId="formGridPrice">
                                <Form.Label>Email</Form.Label>
                                <Form.Control value={user.email} name="email" type="text" placeholder="abc@gmail.com" disabled />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridImg">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control name="img" onChange={handleOnBlur} placeholder="http://example.png" />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} className="mb-3" controlId="formGridPrice">
                                <Form.Label>Salary</Form.Label>
                                <Form.Control name="salary" onChange={handleOnBlur} type="number" placeholder="3500" />
                            </Form.Group>

                            <Form.Group as={Col} className="mb-3" controlId="formGridPrice">
                                <Form.Label>Area</Form.Label>
                                <Form.Control name="area" onChange={handleOnBlur} type="text" placeholder="Dhaka" />
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3" controlId="formGridPrice">
                                <Form.Label>Class</Form.Label>
                                <Form.Control name="class" onChange={handleOnBlur} type="text" placeholder="6-10" />
                            </Form.Group>
                        </Row>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </Container>
            {/* <Footer /> */}
        </>
    );
};

export default AddTutorAds
    ;