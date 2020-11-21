const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const animalSchema = new Schema({
  species: {type: String, required: true, enum: [
        "dogs",
        "cats",
        "horses",
        "pigs",
        "bunnies",
        "goats",
        "ferrets",
        "hamster",
        "donkeys",
        "mice",
        "rats",
        "others",
      ]},
  name: { type: String, required: true, default: "Name to be given" },
  birthDate: { type: date, required: true },
  exactBirthDate: { type: Boolean, required: true },
  breed: [String],
  adultSize: [{ type: String, enum: ["small", "medium", "large"] }],
  healthCondition: [String],
  localisation: String,
  description: String,
  notFineWith: [String],
  organisation: { type: Schema.Types.ObjectId, ref: "Organisation" },
  status: {type: String, required: true, enum: ["to adopt", "adopted", "other"] }
});

const Animal = mongoose.model("Animal", animalSchema);

module.exports = Animal;
