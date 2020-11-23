const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const organisationUserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: mongoose.SchemaTypes.Email, required: true, unique: true },
  password: {
    type: String,
    required: true,
  },

  organisations: [{
    type: Schema.Types.ObjectId,
    ref: "Organisation",
    required: true,
  }]
});

const OrganisationUser = mongoose.model(
  "OrganisationUser",
  organisationUserSchema
);

module.exports = OrganisationUser;
