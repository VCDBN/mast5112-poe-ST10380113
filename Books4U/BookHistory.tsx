import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './App';
import BookHistory from './BookHistory';

const Stack = createStackNavigator();

const App = () => {

  //the side naviagtion bar is set to be closed as a default
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const toggleSideNav = () => {
   setSideNavOpen(!sideNavOpen);
  };

 const booksHistory = [
    { title: 'Book 1', author: 'Author 1', genre: 'Genre 1', pages: 100 },
    { title: 'Book 2', author: 'Author 2', genre: 'Genre 2', pages: 200 },
    { title: 'Book 3', author: 'Author 3', genre: 'Genre 3', pages: 300 },
 ];

 return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        //the array is being passed as a naviagtion parameter
        <Stack.Screen name="History" component={BookHistory} initialParams={{ booksHistory }} />
      </Stack.Navigator>
    </NavigationContainer>
 );
};


export default App;
