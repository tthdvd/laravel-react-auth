import React from "react";
import {
    AppBar,
    Paper,
    Container,
    Box,
    CssBaseline,
    Toolbar,
    Typography
} from "@mui/material";
import LogoutButton from "./LogoutButton/LogoutButton";

function MainLayout({children, title}) {
    return (
        <React.Fragment>
            <CssBaseline/>
            <AppBar position={"static"}>
                <Toolbar>
                    <Typography
                        variant={"h6"}
                        component={"div"}
                        sx={{flexGrow: 1}}
                    >
                        {title}
                    </Typography>
                    <LogoutButton/>
                </Toolbar>
            </AppBar>

            <Container>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        width: '100%',
                        height: '100%',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Paper sx={{
                        width: '100%',
                        padding: 2
                    }}>
                        {children}
                    </Paper>
                </Box>
            </Container>
        </React.Fragment>
    )
}

export default MainLayout
