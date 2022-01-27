import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useForm} from "react-hook-form";
import './Courses.css'
import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth';


const Courses = () => {
    const {id}=useParams();
    const [teacher,setTeacher]=useState([])
    const {user}=useAuth()
   

    useEffect(()=>{
        fetch(`https://tutor-finder.herokuapp.com/tutors/${id}`)
        .then(res=>res.json())
        .then(data=>setTeacher(data))
    },[])
   
    
    // form
    const { register, handleSubmit,reset } = useForm();

    const onSubmit=(data)=>{
        data.name=teacher?.name;
        data.number=teacher?.mobile;
        data.img=teacher?.img;
        data.subject=teacher?.subject[0];
        data.salary=teacher?.salary;
        data.status=false;

        fetch('https://tutor-finder.herokuapp.com/orders',{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.acknowledged){
                reset()
                swal("Success!", "Order Successfully!", "success");
               
            }
        })

        



        console.log(data)

    };
   
    return (
        <div className="product">
          <div className='row'>
                <div className='col col-lg-7 col-md-7 col-sm-12 col-12'>
                  
                <div className="card mb-3 single-card ">
                                <div className="row g-0 ">
                                    <div className="col-md-4 border text-center">
                                        <img src={teacher?.img} className="img-fluid teacher-image" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body pb-4">
                                            <h3 className="card-title fw-bolder text-primary">{teacher?.name}</h3>
                                            <p className="card-text fw-bolder">Tuition Class : {teacher?.class}</p>
                                            <p className="card-text fw-bolder">Teaching : {teacher?.subject}</p>
                                            <p className="card-text fw-bolder">Qualification : {teacher?.current_education}</p>
                                            <p className="card-text fw-bolder">Institute : {teacher?.institute}</p>
                                            <p className="card-text fw-bolder">Email : {teacher?.email}</p>
                                            <p className="card-text fw-bolder">Phone : {teacher?.mobile}</p>
                                            <p className="card-text fw-bolder">Salary : Tk {teacher?.salary}</p>
                                            <p className="card-text fw-bolder">Tuition Areas : {teacher?.area}</p>
                                         </div>
                                    </div>
                                </div>
                            </div>

                </div>
                {/* 2nd-part form */}
            <div className="col col-lg-5 col-md-5 col-sm-12 col-12 pt-5 ">
                <form className='w-100' onSubmit={handleSubmit(onSubmit)}>
                    <input className='w-75 py-2 mx-auto rounded mb-2 border' {...register("studentName", { required: true, maxLength: 20 })} value={user?.displayName}/><br/>
                    <input className='w-75 py-2 mx-auto rounded mb-2 border' {...register("studentEmail", { required: true })} type="email" value={user?.email}/><br/>
                    <input className='w-75 py-2 mx-auto rounded mb-2 border' type="number" {...register("studentNumber")} placeholder="Phone Number" /><br/>
                    <textarea className='w-75 py-2 mx-auto rounded mb-2 border' type="number" {...register("studentMessage")} placeholder="Write you Something________________" /><br/>
                    <input className='w-75 py-2 mx-auto rounded mb-2 bg-primary text-white fw-bolder border-0'  type="submit" value="Submit" /> 
                    {/* <input className='w-75 py-2 mx-auto rounded mb-2 border' type="number" {...register("salary")} placeholder="Salary" /><br/>
                    <input className='w-75 py-2 mx-auto rounded mb-2 border' type="number" {...register("area")} placeholder="Area" /><br/>
                   
                    <input className='w-75 py-2 mx-auto rounded mb-2 border' type="text" {...register("institute")} placeholder="institute" /><br/>
                    <input className='w-75 py-2 mx-auto rounded mb-2 border' type="text" {...register("current_education")} placeholder="current_education" /><br/>
                    <input className='w-75 py-2 mx-auto rounded mb-2 border' {...register("img")} placeholder="img-url" /><br/>
                   */}

                </form>
            </div>

            </div>
        </div>
    )
}

export default Courses
