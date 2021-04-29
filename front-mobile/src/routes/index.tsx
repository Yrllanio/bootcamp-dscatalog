import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import {Home, Catalog} from '../pages'

const Routes: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Catalog" component={Catalog} />
        </Stack.Navigator>
    )
}

export default Routes;