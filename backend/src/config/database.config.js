const mongoose = require('mongoose');

const dbconnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('Database connection error:', error.message);
    }
};

module.exports = dbconnect;