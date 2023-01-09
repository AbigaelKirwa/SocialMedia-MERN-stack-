import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import AuthRoute from './Routes/AuthRoute.js'
// Routes
const app = express();

// Middleware
app.use(bodyParser.json({limit:'30mb', extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb', extended:true}))

mongoose.set("strictQuery", false);

dotenv.config()
mongoose
.connect(process.env.MONGO_DB,
{useNewUrlParser:true, useUnifiedTopology:true}
)

.then(()=>app.listen(process.env.PORT, ()=>console.log(`Listening at ${process.env.PORT}`))).catch((error)=>console.log.apply(error));

//usage for routes
app.use('/auth', AuthRoute)