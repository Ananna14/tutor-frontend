import axios from 'axios';
import React, { useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import swal from 'sweetalert';

const AddTutor = () => {
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
        newProduct["status"] = true;
        console.log(newProduct);
        axios.post('https://tutor-finder.herokuapp.com/services', newProduct)
            .then(res => {
                if (res.data.insertedId) {
                    swal({
                        title: "Sucessful!",
                        text: "Successfully added!",
                        icon: "success",
                        button: "OK",
                    });
                    e.target.reset();
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <div className="mx-auto shadow-lg p-5" style={{ maxWidth: '700px' }}>
            <h3 className='page-title text-start'>ADD SERVICE</h3>
                <Form onSubmit={handleSubmitProduct}>
                    <Row className="mb-3">
                    <Form.Group as={Col} className="mb-3" controlId="formGridPrice">
                            <Form.Label>Heading</Form.Label>
                            <Form.Control name="current_education" onBlur={handleOnBlur} type="text" placeholder="Heading" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="formGridPrice">
                            <Form.Label>Day</Form.Label>
                            <Form.Control name="current_education" onBlur={handleOnBlur} type="text" placeholder="Day" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        {/* <Form.Group as={Col} className="mb-3" controlId="formGridPrice">
                            <Form.Label>Description</Form.Label>
                            <Form.Control name="mobile" onBlur={handleOnBlur} type="text" placeholder="01789142765" />
                        </Form.Group> */}

                        <Form.Group as={Col} className="mb-3" controlId="formGridPrice">
                            <Form.Label>Description</Form.Label>
                            <Form.Control className='h-50' name="email" onBlur={handleOnBlur} type="text" placeholder="Description" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridImg">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control name="img" onBlur={handleOnBlur} placeholder="http://example.png" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="formGridPrice">
                            <Form.Label>Due</Form.Label>
                            <Form.Control name="salary" onBlur={handleOnBlur} type="number" placeholder="3500" />
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="formGridPrice">
                            <Form.Label>Area</Form.Label>
                            <Form.Control name="area" onBlur={handleOnBlur} type="text" placeholder="Dhaka" />
                        </Form.Group>
                        {/* <Form.Group as={Col} className="mb-3" controlId="formGridPrice">
                            <Form.Label>Class</Form.Label>
                            <Form.Control name="class" onBlur={handleOnBlur} type="text" placeholder="6-10" />
                        </Form.Group> */}
                    </Row>

                    <Button id="tutor-submit" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default AddTutor;