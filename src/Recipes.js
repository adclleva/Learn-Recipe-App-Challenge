import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// These are all components from the router that we use in render().

//Import of our Mock Data
import recipes from './store/recipes'
import Recipe from './pages/Recipe'

class Recipes extends Component {
  constructor(props){
    super(props)
    this.state = {
      allRecipes: recipes
    }
  }

  // handleClick = () => {
  //     const { allRecipes } = this.state
  //   const newRecipe = {
  //       id: 3,
  //       name: 'Test',
  //       instructions: 'Test Instructions.'
  //     }
  //   const newRecipes = [...allRecipes, newRecipe]
  //   this.setState({allRecipes: newRecipes})

  //   console.log(newRecipes) 
  // }

  render() {
    const { allRecipes } = this.state

    return(
      <Router>
        <div>
          <nav>
           <h1>Recipes</h1>
            <ul>
              {allRecipes.map((recipeObj, index) => // ? why don't we need the brackets here
                <li key={index}> 
                  <Link to={`/recipe/${recipeObj.id}`}>
                    {recipeObj.name}
                  </Link>
                </li>
              )}
            </ul>
          </nav>
            
            <Switch>
                <Route path="/recipe/:id" 
                       component={Recipe}
                />
            </Switch>


            {/* <h3 onClick={this.handleClick}>Add Recipe</h3> */}

        </div>
      </Router>
    )
    
  }
}

  export default Recipes