const express = require('express');
const userRouter = require('./routers/user.router.js');
const cors = require('cors');
const dotenv = require('dotenv');
const dbconnect = require('./config/database.config.js');
const { errorHandler, notFound } = require('./middlewares/errorMiddleware.js');
dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT;

//database connection
dbconnect();

app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000']
}))



//API end points
// app.get('/', (req, res) => {
//     res.send("Hello world");
// })
app.use('/api/user', userRouter);


// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);


app.listen(PORT, () => {
    console.log(`Serving on ${PORT}`)
})