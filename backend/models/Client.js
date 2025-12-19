import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
  {
    name: String,
    designation: String,
    description: String,
    image: String
  },
  { timestamps: true }
);

export default mongoose.model("Client", clientSchema);
