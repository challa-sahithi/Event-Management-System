const mongoose = require('mongoose');
const mongoURL = "mongodb+srv://gofood:gofood@cluster0.pdemfjn.mongodb.net/UEMS?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURL, { useNewUrlParser: true });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
};

module.exports = connectDB;
