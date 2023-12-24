const express = require('express');
const userRouter = require('./routers/user.router.js');
const noteRouter = require('./routers/notes.router.js')
const cors = require('cors');
const dotenv = require('dotenv');
const dbconnect = require('./config/database.config.js');
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
app.use('/api/notes', noteRouter);


//Internal Error Handling
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    });
});


app.listen(PORT, () => {
    console.log(`Serving on ${PORT}`)
})