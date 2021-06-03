import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

function RenderRecipe({recipe}) {
    if (recipe) {
        return (
            <Card 
                featuredTitle={recipe.name}
                image={require('./images/react-lake.jpg')}
            >
                <Text style={{margin: 10}}>
                    {recipe.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

function RecipeInfo(props) {
    return <RenderRecipe campsite={props.recipe} />;
}

export default RecipeInfo;