# Project Name to come



## Description

**Name to come** is presenting animals who are in need of a family to share happiness!

Verified organisations can register and manage their animals in our databases.

Users searching for an animal to love and respect as a member of their family can also register in order to save their favorite animals and be provided with the organisations' contact information.



## Pages

- **404** - a 404 page is displayed when a user tries to access a page that doesn’t exist.

- **500** -  a 500 error page is displayed when I, as a developer, did something wrong.

- **homepage** - a homepage shows the goal of it all!

- **sign up** - a user can sign up as an already verified organisation or as a regular user.

- **login** - an organisation user can add their animals in need of a familiy to the database, change their status if they are adopted, and manage general organisation information. 

  A regular user can save their favorite animals and see how to adopt them.

- **logout** - any user can log out to keep their account safe.

- **animals in need** - anyone can see all the registered animals searching for a family.

- **animals adopted** - it's nice to see the new beautiful life of those who are already adopted, and everyone can do so!



## Backlog

- **customized adoption forms**  - organisations could add their personalized forms in order to receive adoption proposals.
- **verified feedbacks** - any user could leave them after adoptions, for both organisations and people who adopted animals.
- **links to truthworthy animals professionals** - a page to help people find good professionals with positive education skills for example.
- **donation page** - to help us save more animals.
- **animals adopted** - improvment so that the verified people who adopted them can add photos of their new life.
- more to come!



## ROUTES



## Models



User Model:

`const userSchema = new Schema({`

  `name: { type: String, required: true },`

  `email: { type: mongoose.SchemaTypes.Email, required: true, unique: true },`

  `password: { type: String, required: true },`

  `favorites: {`

​    `dogs: [{ type: Schema.Types.ObjectId, ref: "Dog" }],`

​    `cats: [],`

​    `horses: [],`

  `},`

`});`



OrganisationUser model:

`const organisationUserSchema = new Schema({`

  `name: { type: String, required: true },`

  `email: { type: mongoose.SchemaTypes.Email, required: true, unique: true },`

  `password: {`

​    `type: String,`

​    `required: true,`

​    `enum: Schema.Types.administrators,`

​    `ref: "Organisation",`

  `},`

  `organisation: {`

​    `type: Schema.Types.ObjectId,`

​    `ref: "Organisation",`

​    `required: true,`

  `},`

`});`



Dog model:

`const dogSchema = new Schema({`

  `name: { type: String, required: true, default: "Name to be given" },`

  `brithDate: { type: date, required: true },`

  `exactBirthDate: { type: Boolean, required: true },`

  `breed: [String],`

  `adultSize: [{ type: String, enum: ["small", "medium", "large"] }],`

  `healthCondition: [String],`

  `localisation: String,`

  `description: String,`

  `notFineWith: [String],`

  `organisation: { type: Schema.Types.ObjectId, ref: "Organisation" },`

`});`



Organisation model:

`const organisationSchema = new Schema({`

  `name: { type: String, required: true },`

  `localisation: String,`

  `animals: [`

​    `{`

​      `type: String,`

​      `enum: [`

​        `"dogs",`

​        `"cats",`

​        `"horses",`

​        `"pigs",`

​        `"bunnies",`

​        `"goats",`

​        `"ferrets",`

​        `"hamster",`

​        `"donkeys",`

​        `"mice",`

​        `"rats",`

​        `"others",`

​      `],`

​    `},`

  `],`

  `description: String,`

  `administrators: [`

​    `{ type: mongoose.SchemaTypes.Email, required: true, unique: true },`

  `],`

`});`



Other animals models to come!



## Links

### Trello

### Git

### Slides

