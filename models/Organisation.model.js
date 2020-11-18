const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const organisationSchema = new Schema({
  name: { type: String, required: true },
  localisation: String,
  animals: [
    {
      type: String,
      enum: [
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
      ],
    },
  ],
  description: String,
  administrators: [
    { type: mongoose.SchemaTypes.Email, required: true, unique: true },
  ],
});

const Organisation = mongoose.model("Organisation", organisationSchema);

module.exports = Organisation;
