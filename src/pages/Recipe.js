import React, { Component } from 'react'
import ReactDOM from 'react-dom'

	//Our Mock Datastore
import recipes from '../store/recipes'

class Recipe extends React.Component {
    state = {
        recipeId: this.props.match.params.id
    }

    componentDidUpdate(prevProps) { //componentDidUpdate takes previous props and previous state
        const { id } = this.props.match.params
        if(id != prevProps.params.id) {
            this.setState({recipeId: id})
        }
    }

    render(){
        const { recipeId } = this.state
        const recipe = recipes.find((r)=> r.id == recipeId)
        
        return(
            <div>
                {recipe && 
                    <div>
                        <h1>{recipe.name}</h1>
                        <p>{recipe.instructions}</p>
                    </div>
                }
            </div>
        )
    }
}

export default Recipe