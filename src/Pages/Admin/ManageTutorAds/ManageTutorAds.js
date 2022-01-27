import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { BsCheckSquare, BsFillTrashFill, BsPencilSquare } from 'react-icons/bs';
import swal from 'sweetalert';
import ReactLoading from 'react-loading';

const ManageTutorAds = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    let findOrder = {};

    useEffect(() => {
        axios.get('https://tutor-finder.herokuapp.com/tutors?status=false')
            .then(res => setOrders(res.data.tutors))
            .then(() => setLoading(false))
            .catch(err => console.log(err))
    }, [findOrder]);

    const handleUpdateStatus = (id) => {
        findOrder = orders.find(product => product._id === id)
        swal({
            title: "Are you sure?",
            text: `You want to make status ${!findOrder.status ? "Shipped" : "Pending"}`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    findOrder.status = !findOrder.status;
                    // update approve or pending 
                    axios.put(`https://tutor-finder.herokuapp.com/tutors/${id}`, findOrder)
                        .then(res => {
                            if (res.data.modifiedCount > 0) {
                            }
                        })
                        .catch(err => console.log(err))
                    swal("Status updated!", {
                        icon: "success",
                    });
                } else {
                    // swal("Your imaginary file is safe!");
                }
            });
    }

    const handleDeleteOrder = (id) => {
        swal({
            title: "Are you sure?",
            text: "You want to cancel",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    // delete reservation 
                    axios.delete(`https://tutor-finder.herokuapp.com/tutors/${id}`)
                        .then(res => {
                            if (res.data.deletedCount) {
                                const remainingOrders = orders.filter(event => event._id !== id);
                                setOrders(remainingOrders);
                            }
                        }).catch(err => console.log(err))
                    swal("Your request is sucessfully cancelled", {
                        icon: "success",
                    });
                } else {
                    // swal("Your imaginary file is safe!");
                }
            });
    }

    return (
        <>
            {loading ?
                <div className="d-flex align-items-center justify-content-center mt-5 pt-5">
                    <ReactLoading type={"bars"} color={"#A99577"} height={80} width={80} />
                </div>
                :
                <Container>
                    <div className="p-5 shadow overflow-scroll" style={{ height: '85vh' }}>
                        <Table hover responsive className="product-table">
                            <thead className="border-top">
                                <tr>
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Tutor Name</th>
                                    <th>Email</th>
                                    <th>Mobile Number</th>
                                    <th>Area</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                    <th colSpan="2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map((product, index) => {
                                        return (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td><img style={{ height: '100px', width: '120px' }} src={product.img} alt="" /></td>
                                                <td>{product.name}</td>
                                                <td>{product.email}</td>
                                                <td>{product.mobile}</td>
                                                <td>{product.area}</td>
                                                <td>${product.salary}</td>
                                                <td><span className={!product.status ? "text-warning fw-bold" : "text-success fw-bold"}>{!product.status ? "Pending" : "Approved"}</span></td>
                                                <td
                                                    onClick={() => handleUpdateStatus(product._id)}
                                                    style={{ cursor: 'pointer' }}
                                                ><BsCheckSquare className="text-success" /></td>
                                                <td
                                                    onClick={() => handleDeleteOrder(product._id)}
                                                    style={{ cursor: 'pointer' }}
                                                ><BsFillTrashFill className="text-danger" /></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </div>
                </Container>
            }
        </>
    );
};

export default ManageTutorAds;