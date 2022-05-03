import express from "express";
import codesRoutes from "./codesRoutes.js";

const routes = (app) => {
    app.get('/', (req, res) => {
        res.status(200).send("Connected");
    })

    app.use(
        express.json(),
        codesRoutes
    )
}

export default routes;