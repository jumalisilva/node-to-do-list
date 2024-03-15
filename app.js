const express = require('express');
const port = 3000;
const app = express();
const taskRouter = require('./routes/taskRouters');

app.use(express.json());

app.use('/tarefa', taskRouter);

// Início - Criando rotas
app.get('/', (req, res) => {
   res.send("Testando API"); 
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});