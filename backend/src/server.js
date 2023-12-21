const express = require('express');
const userRouter = require('./routers/user.router.js');
const cors = require('cors');

const app = express();
app.use(express.json());

const PORT = 5000;

app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000']
}))



//API end points
// app.get('/', (req, res) => {
//     res.send("Hello world");
// })
app.use('/api/user', userRouter);


app.listen(PORT, () => {
    console.log(`Serving on ${PORT}`)
})