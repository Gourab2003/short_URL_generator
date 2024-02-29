import mongoose from "mongoose";

const connect_DB = async () => {
    try {
        const connectionInstance = await mongoose.connect("mongodb://localhost:27017/url_shortner");
        //console.log(connectionInstance);
        console.log(`\nMongoDB connected! DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("Error in db connect:", error);
        process.exit(1);
    }
}

export default connect_DB;
