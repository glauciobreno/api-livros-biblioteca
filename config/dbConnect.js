import mongoose from "mongoose"

mongoose.connect("mongodb+srv://glauss:123@cluster0.rq25t7v.mongodb.net/glauss");

let db = mongoose.connection;

export default db;