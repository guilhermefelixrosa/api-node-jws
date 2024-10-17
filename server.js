import express from 'express'
import publicRoutes from './routes/public.js'

const app = express()
app.use(express.json())
app.use('/', publicRoutes)

//3 rotas -> Cadastrar, Login, Listar

//guilherme
//ftQrNF0gr1xVLAI3
//mongodb+srv://guilherme:ftQrNF0gr1xVLAI3@users.ecrpl.mongodb.net/?retryWrites=true&w=majority&appName=Users

app.listen(3000, ()=> console.log("Servidor rodando 🚀"))