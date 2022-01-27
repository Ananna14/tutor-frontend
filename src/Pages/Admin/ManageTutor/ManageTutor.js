import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { BsFillTrashFill } from 'react-icons/bs';
import swal from 'sweetalert';
import ReactLoading from 'react-loading';

const ManageTutor = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        axios.get('https://tutor-finder.herokuapp.com/tutors')
            .then(res => setAllProducts(res.data.tutors))
            .then(() => setLoading(false))
            .catch(err => console.log(err))
    }, []);

    const handleDeleteProduct = (id) => {
        swal({
            title: "Are you sure?",
            text: "You want to Delete Teacher Post",
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
                                const remainingProducts = allProducts.filter(product => product._id !== id);
                                setAllProducts(remainingProducts);
                            }
                        }).catch(err => console.log(err))
                    swal("Teacher Post is sucessfully deleted", {
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
                                    <th>Name</th>
                                    <th>Mobile</th>
                                    <th>Education</th>
                                    <th>Salary</th>
                                    <th colSpan="2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allProducts.map((product, index) => {
                                        return (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td><img style={{ height: '100px', width: '120px' }} src={product.img} alt="" /></td>
                                                <td>{product.name}</td>
                                                <td>{product.mobile}</td>
                                                <td>{product.current_education}</td>
                                                <td>{product.salary}</td>
                                                <td
                                                    onClick={() => handleDeleteProduct(product._id)}
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

export default ManageTutor;
