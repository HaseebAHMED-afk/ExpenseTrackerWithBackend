const mongoose = require('mongoose');

const connectDB = async ()=> {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL,{
            useCreateIndex:true,
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log(`MongoDB connection successful: ${conn.connection.host}`.cyan.underline.bold);
    } catch (err) {
        console.log(`Error: ${err.message}`.red);
        process.exit(1);
    }
}

module.exports = connectDB;