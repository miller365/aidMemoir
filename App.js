
import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import HomeScreen from './screens/Main'
import Header from './Components/Header'
import HowTo from './screens/How-to'

class CalandarScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Calendar/>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Calendar: Calendar,
    Agenda:Agenda,
    HowtoInstructions:HowTo,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerTitle:<Header/>,
      headerStyle: {
        backgroundColor: 'powderblue',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}