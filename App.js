import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  AsyncStorage,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  Alert
} from 'react-native';

import { Registration } from './registration'
import { StudentEvents } from './student_events'
import { StudentProfile } from './student_profile'


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      window: 'loading'
    };

    this.__load_required_window();
  }
  
  __load_required_window() {
    AsyncStorage.getItem('user_phone')
      .then((value) => {
        if (value) {
          // Alert.alert('Phone', value);

          fetch(`http://88.212.235.203/repet-api/is_teacher?phone=${value}`)
            .then((response) => response.json())
            .then((responseJson) => {
              if (responseJson.is_teacher === 'False') 
                this.setState({window: 'student'})
              else
                this.setState({window: 'teacher'})
            })
            .catch((error) => {
              console.error(error);
            });
        }
        else {
          this.setState({
            window: 'registration'
          });
        }
      });
  }
  
  __register(phone) {
    Alert.alert('Register', phone);
    AsyncStorage.setItem('user_phone', phone)
      .then(() => {this.__load_required_window()});
  }
  
  // render() {
  //   if (this.state.window == 'registration') 
  //     return (
  //       <View> 
  //         <Registration register={this.__register.bind(this)} /> 
  //       </View> 
  //     ); 
  //   else if (this.state.window == 'student')
  //     return (
  //       <View>
  //         <StudentEvents />    
  //       </View>
  //     );
  //   else if (this.state.window == 'tutor')
  //     return (
  //       <View>
  //         <Text style={{marginTop: 40}}>Tutor view</Text>    
  //       </View>
  //     );
  //   else if (this.state.window == 'loading')
  //     return (
  //       <View>
  //         <Text style={{marginTop: 40}}>Loading</Text>    
  //       </View>
  //     );
  // }

  render() {
    return (
      <StudentProfile />
    );
  }
}

AppRegistry.registerComponent('app', () => App);