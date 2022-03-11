import React from 'react';
import {useFonts} from "expo-font";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import  AppLoading  from 'expo-app-loading';
import ReduxThunk from 'redux-thunk';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
//import {SafeAreaView} from 'react-native-safe-area-context';
// import { SafeAreaView } from 'react-native';
//  import SafeAreaView from 'react-native-safe-area-view';


// import * as Font from 'expo-font';
import cartReducer from './store/reducers/cart';
import ordersReducer from './store/reducers/orders';
import productsReducer from './store/reducers/products';
import ShopNavigator from './navigation/ShopNavigator';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
    let [fontsLoaded] = useFonts({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    });
 
    if (!fontsLoaded) {
        return <AppLoading/>
    } else {
        return (
            <Provider store={store}>
            {/* <SafeAreaProvider> */}
             {/* <SafeAreaView>  */}
            {/* <Provider store={store}> */}
                <ShopNavigator/>
            {/* </Provider> */}
            {/* </SafeAreaView> */}
            {/* </SafeAreaProvider> */}
            </Provider>
            
        );
    }
}
