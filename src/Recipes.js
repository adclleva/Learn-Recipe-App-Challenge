import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// These are all components from the router that we use in render().

//Import of our Mock Data
import recipes from './store/recipes'

class Recipes extends Component {
  constructor(props){
    super(props)
    this.state = {
      allRecipes: recipes
    }
  }

  handleClick = () => {
      const { allRecipes } = this.state
    const newRecipe = {
        id: 3,
        name: 'Test',
        instructions: 'Test Instructions.'
      }
    const newRecipes = [...allRecipes, newRecipe]
    this.setState({allRecipes: newRecipes})

    console.log(newRecipes) 
  }

  render() {
    const { allRecipes } = this.state
    // this.setState({allRecipes: newRecipes})

    return(
      <Router>
        <h1>Recipes</h1>
        
        <div>
            
            <Link to ="/recipe">Recipe</Link>

            <Switch>
                <Route path="/" exact component={Home}/>
            </Switch>


            {/* <h3 onClick={this.handleClick}>Add Recipe</h3> */}
            <ul>
                {allRecipes.map((recipeObj, index) => {
                    const { id, name, instructions } = recipeObj

                    return(
                        <li key={index}>
                            <h2>{id} : {name}</h2>
                            <h3>{instructions}</h3>
                        </li>
                    )
                })}
             </ul>
        </div>
      </Router>
    )
    
  }
}

  export default Recipes