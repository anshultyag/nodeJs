import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
const options = {
    writeConcern: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        w: 'majority' }
  };
const connectDB = async () => {

    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`,options)
        console.log((`\n MongoDB Connected !! DB HOST: ${connectionInstance.connection.host} `));
    } catch (error) {
        console.log("mongoDb connection Error ", error);
        process.exit(1)
    }
}
export default connectDB