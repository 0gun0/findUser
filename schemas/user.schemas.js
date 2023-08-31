import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
    unique: true
  },
  pw: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
});

UserSchema.virtual("userId").get(function () {
  return this._id.toHexString();
});
UserSchema.set("toJSON", {
  virtuals: true,
});

export default mongoose.model("User", UserSchema);