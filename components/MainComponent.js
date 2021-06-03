import React, { Component } from 'react';
import MenuDirectory from './MenuDirectoryComponent';
import { Recipes } from '../shared/recipes';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes : Recipes
        };
    }

    render() {
        return <MenuDirectory recipes={this.state.recipes} />;
    }
}

export default Main;
