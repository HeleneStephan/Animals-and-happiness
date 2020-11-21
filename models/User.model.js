const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: mongoose.SchemaTypes.Email, required: true, unique: true },
  password: { type: String, required: true },
  favorites: {type: Schema.Types.ObjectId, ref: "Animal" }
}
);

const User = mongoose.model("User", userSchema);

module.exports = User;
