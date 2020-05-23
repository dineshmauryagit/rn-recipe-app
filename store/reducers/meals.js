import {MEALS} from '../../data/dummy-data';
import { exp } from 'react-native-reanimated';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

const  mealsReducer = (state = initialState, action) => {
    
    return state;
}

export default mealsReducer;