const React = require('react');
const Layout = require('./Layout');


function AnimalsInNeed(props) {
  return(
    <Layout>
      <h1>Animals in need of a family</h1>
      <form id="search-animals" action="/search-animals-to-adopt" method="GET">
        <label>Species</label>
        <input type="text" name="species" placeholder="species" />
        <label>Breed</label>
        <input type="text" name="breed" placeholder="breed" />
        <label>Age</label>
        <input type="number" name="age" placeholder="2"/>
        <label>Genre</label>
        <input type="text" name="genre" placeholder="female"/>
        <button type="submit">Search animals</button>
        {
          props.errorMessage 
            ? <div className="error-message"> {props.errorMessage} </div>
            : null
        }
      </form>
    </Layout>
  )
}


module.exports = AnimalsInNeed;