import React, { Component } from 'react'
import ReactDOM from 'react-dom'

//Import of our Mock Data
import recipes from './store/recipes'

class Recipe extends Component {
  constructor(props){
    super(props)
    this.state = {
      allRecipes: recipes
    }
  }
  render() {
    return(
        <div>
            <h1>Recipes</h1>
            <ul>
                {recipes.map((recipeObj, index) => {
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
       
    )
    
  }
}

  export default Recipe