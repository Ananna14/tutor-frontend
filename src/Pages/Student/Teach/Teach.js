import React from 'react'
import './Teach.css'

const Teach = () => {
    return (
        <div>
            {/* card  Categories-start */}

            <div className='d-flex mx-5 margin-design'>
                <div class="card categories pt-5 pb-5">
                    <div class="card-body">
                        <div className='mx-5'>
                            <input type="search" name="" id="" className='w-100 rounded' placeholder='Search Subjects' />
                            <div class="form-check" className='mt-3'>
                                <h3>Subject Categories</h3>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    English, ICT
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Math, Physics
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Chemistry, Biology
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Bangla, Science
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Higher Math, Physics
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    ICT, Physics
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Math, English
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* card-categories-end */}

            <div>

            </div>
        </div>
    )
}

export default Teach
