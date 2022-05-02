import app from "./src/server/app.js";

const port = process.env.PORT || 3000;

// start litening and print message on terminal
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})
