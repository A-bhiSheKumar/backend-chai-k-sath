import mongoose from "mongoose";
import {DB_NAME} from '../constants.js';

const connectDB = async () => {
    try {
        //Mongoose ek return object deta hn tho hmm store krskte hn
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);

    } catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1)
    }
}


export default connectDB;