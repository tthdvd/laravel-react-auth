import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import user from "../../Models/user";

export const ProtectedRoute = () => {
    let navigate = useNavigate()
    const auth = user.isLoggedIn();
    console.log('auth in Dashboard : ' + auth);
    useEffect(() => {
        if (!auth) {
            navigate('/app/login');
            // <Navigate to="/app/login" />
        }
    }, []);
    return auth ? <Outlet /> : <Navigate to="/app/login" />;
}
