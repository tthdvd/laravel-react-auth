import React from "react";
import user from "../../Models/user";
import {Grid, Typography} from "@mui/material";
import MainLayout from "../MainLayout/MainLayout";

function Dashboard() {
    return (
        <MainLayout title={"Dashboard"}>
            <Grid container justifyContent={"center"}>
                <Grid item>
                    <Typography variant={"h5"}>
                        Hello {user.name}, you're logged in!
                    </Typography>
                </Grid>
            </Grid>
        </MainLayout>
    )
}

export default Dashboard
