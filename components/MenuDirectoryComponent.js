import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

function MenuDirectory(props) {

    const renderDirectoryItem = ({item}) => {
        return (
            <ListItem
                title={item.name}
                subtitle={item.description}
              
            />
        );
    };

    return (
        <FlatList
            data={props.recipes}
            renderItem={renderDirectoryItem}
            keyExtractor={item => item.id.toString()}
        />
    );
}

export default MenuDirectory;