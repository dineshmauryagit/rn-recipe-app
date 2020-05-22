import React from 'react';
import {  createAppContainer } from 'react-navigation-stack';
import {createStackNavigator} from 'react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
const MealsNavigator =  createStackNavigator({
    Categories: CategoriesScreen,
    CatrgoryMeals: {
        screen: CategoryMealsScreen,
    },
    MealsDetail: MealDetailsScreen
});

export default (MealsNavigator);