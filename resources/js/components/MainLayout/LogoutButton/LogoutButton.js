import React from "react";
import { Button, Box } from "@mui/material";
import user from "../../../Models/user";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";

const LogoutButton = () => {
    let navigate = useNavigate();
    // }
    // function LogoutButton({ history }) {
    const logout = (e) => {
        e.preventDefault()

        window.axios.post('/api/logout')
            .then((res) => {
                //successful response
                window.location.reload(); // this is not good, look for better to clear localStorage.
                console.log(res.data);
                console.log({ res });
                navigate('/app/login');
            })
            .catch((error) => {
                //handle if something went wrong
                console.log({ error });
            })
            .then(() => {
                //this code will be definitely executed
                user.logout(afterUserDestroyed)
            })
    }

    const afterUserDestroyed = () => {
        navigate('/app/login')
    }

    return (
        <>
            <Box component={"form"} onSubmit={logout}>
                <Button
                    type={"submit"}
                    color={'inherit'}
                >
                    Logout
                </Button>
            </Box>
        </>
    )
}

export default LogoutButton;
