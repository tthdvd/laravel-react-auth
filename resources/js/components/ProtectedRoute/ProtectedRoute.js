import React from "react";
import { Navigate, Route } from "react-router-dom";
import user from "../../Models/user";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest}
            render={
                (props) => {
                    if (user.isLoggedIn()) {
                        return <Component {...props} {...rest} />
                    }
                    return <Navigate to={{
                        pathname: "/app/login",
                        state: { from: props.location }
                    }} />
                }
            }
        />
    )
}
