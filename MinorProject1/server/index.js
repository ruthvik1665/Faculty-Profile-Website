import express from 'express'
import connection from '../../../Mern-stack/server/database/db.js';
import route from './routes/route.js'
import cors from 'cors'
import bodyParser from 'body-parser';
const app=express()
app.use(cors())
app.use(bodyParser.json({entended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',route)
const PORT=8000;
connection()
app.listen(PORT,()=>console.log("its running at port 8000"));