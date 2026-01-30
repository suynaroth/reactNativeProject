import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

export type HomeStackParamList = {
    Home: undefined;
    Details: { id: string } | undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigation: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: true }}>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
            <Stack.Screen
                name="Details"
                component={DetailsScreen}
                options={({ route }) => ({ title: route?.params?.id ?? 'Details' })}
            />
        </Stack.Navigator>
    );
};

export default HomeStackNavigation;