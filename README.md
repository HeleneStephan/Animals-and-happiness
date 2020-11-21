# Project Name to come



## Description

**Name to come** is presenting animals who are in need of a family to share happiness!

Verified organisations can register and manage their animals in our databases.

Users searching for an animal to love and respect as a member of their family can also register in order to save their favorite animals and be provided with the organisations' contact information.



## User flow

- **404** - a 404 page is displayed when a user tries to access a page that doesn’t exist.

- **500** -  a 500 error page is displayed when I, as a developer, did something wrong.

- **homepage** - a homepage shows the goal of it all!

- **sign up** - a user can sign up as an already verified organisation or as a regular user.

- **login** - an organisation user can add their animals in need of a familiy to the database, change their status if they are adopted, and manage general organisation information. 

  A regular user can save their favorite animals and see how to adopt them.

- **logout** - any user can log out to keep their account safe.

- **animals in need** - anyone can see all the registered animals searching for a family.

- **animals adopted** - it's nice to see the new beautiful life of those who are already adopted, and everyone can do so!

- **Q and A** - a page to answer users' questions.



## Backlog

- **customized adoption forms**  - organisations could add their personalized forms in order to receive adoption proposals.
- **verified feedbacks** - any user could leave them after adoptions, for both organisations and people who adopted animals.
- **links to truthworthy animals professionals** - a page to help people find good professionals with positive education skills for example.
- **donation page** - to help us save more animals, everyone can help by giving something: time, financial support, physicial accessories, etc.
- **animals adopted** - improvment so that the verified people who adopted them can add photos of their new life.
- **organisations** - global information about those who have the animals in charge.
- more to come!



## ROUTES

- GET /

  - renders the homepage

- GET /auth/signup

  - renders the signup form

- POST /auth/signup

  - renders the user's page
  - body:
    - username
    - email
    - password
    - organisation

- GET /auth/login

  - renders the login form

- POST /auth/login

  - renders the user's page
  - body:
    - email
    - password

- POST /auth/logout

  - body: (empty)

- GET /animalsinneed

  - renders the animals in need of a familly
  - favorite buttons not a favorite yet
  - not favorite anymore buttons if a favorite yet

- POST /animalsinneed/create

  - redirects to /animalsinneed if not an organisation user
  - body:
    - species
    - name
    - Date of birth
    - Is the date of birth sure?
    - breed
    - adult size
    - health condition
    - localisation
    - not fine with
    - description
    - status

- GET /animalsinneed/:id

  - renders the animal detail page
  - favorite button not a favorite yet
  - not favorite anymore button if a favorite yet

- GET /animalsadopted

  - renders the animals adopted page
  - favorite buttons not a favorite yet
  - not favorite anymore buttons if a favorite yet

- GET /animalsadopted/:id

  - renders the animal detail page
  - favorite button not a favorite yet
  - not favorite anymore button if a favorite yet

  

## Models

#### User 

```js
{
  name: { type: String, required: true },
  email: { type: mongoose.SchemaTypes.Email, required: true, unique: true },
  password: { type: String, required: true },
  favorites: {type: Schema.Types.ObjectId, ref: "Animal" }
}
```

#### OrganisationUser

```js
{
  name: { type: String, required: true },
  email: { type: mongoose.SchemaTypes.Email, required: true, unique: true },
  password: {
    type: String,
    required: true,
    ref: "Organisation",
  },

  organisation: {
    type: Schema.Types.ObjectId,
    ref: "Organisation",
    required: true,
  }
}
```

#### Animal

```js
{
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
}
```

#### Organisation

```js
{
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
      ]
    },
  ],
  description: String,
  administrators: [
    { type: mongoose.SchemaTypes.Email, required: true, unique: true },
  ],
}
```


<br>



## Links



### Trello



### Git



### Slides