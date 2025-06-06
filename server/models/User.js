import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    car: {
      type: String,
      required: true,
    },
    date: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", UserSchema);
