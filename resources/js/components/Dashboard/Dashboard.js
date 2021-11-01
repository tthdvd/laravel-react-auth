import React from "react";
import user from "../../Models/user";
import {Container, Grid, Paper, Typography} from "@mui/material";

function Dashboard() {
    return (
        <React.Fragment>
            <Container>
                <Grid container justifyContent={"center"}>
                    <Grid item>
                        <Typography variant={"h5"}>
                            Hello {user.name}, you're logged in!
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default Dashboard
