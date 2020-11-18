const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dogSchema = new Schema({
  name: { type: String, required: true, default: "Name to be given" },
  brithDate: { type: date, required: true },
  exactBirthDate: { type: Boolean, required: true },
  breed: [String],
  adultSize: [{ type: String, enum: ["small", "medium", "large"] }],
  healthCondition: [String],
  localisation: String,
  description: String,
  notFineWith: [String],
  organisation: { type: Schema.Types.ObjectId, ref: "Organisation" },
});

const Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog;
