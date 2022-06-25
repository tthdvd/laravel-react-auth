import React from "react";
import user from "../../Models/user";
import {Button, Grid, Typography} from "@mui/material";
import MainLayout from "../MainLayout/MainLayout";
import Book from "../../Models/Book";

function Dashboard() {

    const createNewBook = () => {
        alert('pushed')
        let book = new Book();
        book.put({title: 'Harry Potter és a bölcsek köve'}).then((book) => console.log(book))
    }

    const getById = () => {
        let book = new Book();
        let queryResult = book.get(1).then((book) => {console.log(book)});
    }

    const getAll = () => {
        let book = new Book();
        let queryResult = book.getAll().then(a => console.log(a));
    }

    return (
        <MainLayout title={"Dashboard"}>
            <Grid container justifyContent={"center"}>
                <Grid item>
                    <Typography variant={"h5"}>
                        Hello {user.name}, you're logged in!
                        <Button onClick={createNewBook}>Create new book</Button>
                        <Button onClick={getById}>Get 1  book</Button>
                        <Button onClick={getAll}>Get all books</Button>
                    </Typography>
                </Grid>
            </Grid>
        </MainLayout>
    )
}

export default Dashboard
