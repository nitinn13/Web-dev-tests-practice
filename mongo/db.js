const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/mydb', { 
            useNewUrlParser: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

// const db = connectDB();

module.exports = db;