import React, { Component } from 'react';
import MenuDirectory from './MenuDirectoryComponent';
import RecipeInfo from './RecipeInfoComponent';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { Recipes } from '../shared/recipes';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes : Recipes,
            selectedRecipe: null
        };
    }
    
    onRecipeSelect(recipeId) {
        this.setState({selectedrecipe: recipeId});
    }

    render() {
        return 
        <View style={{flex: 1}}>
        <MenuDirectory 
            recipes={this.state.recipes}
            onPress={recipeId => this.onRecipeSelect(recipeId)} />;
        <RecipeInfo
                    recipe={this.state.recipes.filter(
                    recipe => recipe.id === this.state.selectedRecipe)[0]}
                />;

        </View>
    }
}

export default Main;
