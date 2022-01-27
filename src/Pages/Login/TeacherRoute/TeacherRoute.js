import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import ReactLoading from 'react-loading';
import { Navigate, useLocation } from 'react-router-dom';

const TeacherRoute = ({ children, ...rest }) => {
    const { user, teacher, isLoading } = useAuth();
    let location = useLocation();

    if (isLoading) {
        return (
            <div className="d-flex align-items-center justify-content-center" style={{ height: '80vh' }}>
                <ReactLoading type={"spinningBubbles"} color={"#A99577"} height={100} width={100} />
            </div>
        )
    }
    if (isLoading) {
        return (
            <div className="d-flex align-items-center justify-content-center" style={{ height: '80vh' }}>
                <ReactLoading type={"spinningBubbles"} color={"#A99577"} height={100} width={100} />
            </div>
        )
    }
    if (user.email && teacher) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} />;
};

export default TeacherRoute;