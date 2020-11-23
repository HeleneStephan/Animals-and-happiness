const React = require("react");
const Layout = require("./Layout");
const speciesList = require("../models/Animal.model");
const { createElement } = require("react");

function OneAnimal(animal) {
  return (
    <Layout>
      <h1>I'm animal {animal}</h1>
    </Layout>
  );
}
function AnimalsInNeed(props) {
  let results = [];
  if (!props.species) {
    props.errorMessage = "Please select a species";
  } else {
    if (props.breed) {
      console.log(props.breed);
    }
    if (props.age) {
      console.log(props.age);
    }
    if (props.genre) {
      console.log(props.genre);
    }
  }
  //results[0] = "Joujou";
  // results[1] = "test";

  return (
    <Layout>
      <h1>Animals in need of a family</h1>
      <form id="search-animals" action="/search-animals-to-adopt" method="GET">
        <label>Species</label>
        <select id="species-list" name="species">
          {console.log("speciesList: ", speciesList)}
          {speciesList.map((species) => {
            return <option value={species}>{species}</option>;
          })}
        </select>
        <label>Breed</label>
        <input type="text" name="breed" placeholder="breed" />
        <label>Age</label>
        <input type="number" name="age" placeholder="2" min="0" max="50" />
        <label>Genre</label>
        <input type="text" name="genre" placeholder="female" />
        <button type="submit">Search for animals</button>
        {props.errorMessage ? (
          <div className="error-message"> {props.errorMessage} </div>
        ) : null}
      </form>
      <section className="animals-to-adopt">
        {results
          ? results.map((animal) => {
              return OneAnimal(animal);
            })
          : animals.map((animal) => {
              return OneAnimal(animal);
            })}
      </section>
    </Layout>
  );
}

module.exports = AnimalsInNeed;
