import mongoose from "mongoose"
import { DB_NAME } from "../constant.js"

const connectDB = async () => {
    try {
        const connectionInstace = await mongoose.connect(`${process.env.MONOGODB_URI}/${DB_NAME}`)
        console.log(`MONGODB IS CONNECTED SUCCESSFULLY || DB host ${connectionInstace.connection.host}`)
    } catch (error) {
        console.log("Mongodb connection failed!", error);
        process.exit(1);
    }
}

export default connectDB