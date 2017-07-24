import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  Alert
} from 'react-native';

const brandColor = '#744BAC';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 40 
  },
  eventCard: {
    borderColor: '#BDBDBD',
    borderRadius: 5,
    borderWidth: 1,
    width: 280, 
    height: 75,
    marginTop: 7,
    position: 'relative'
  },
  eventCourseName: {
    fontSize: 20,
    position: 'absolute',
    top: '5%',
    left: '5%'
  },
  eventType: {
    fontSize: 14,
    color: '#828282',
    position: 'absolute',
    top: '40%',
    left: '5%'
  },
  eventHoursRest: {
    fontSize: 20,
    position: 'absolute',
    right: '5%',
    top: '5%'
  },
  eventRest: {
    fontSize: 14,
    color: '#BDBDBD',
    position: 'absolute',
    right: '5%',
    top: '40%'
  }
});



export class StudentEvents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [
        {
          type: 'prepare',
          course_name: 'Математика ЕГЭ', 
          rest_hours: 8 
        },
        {
          type: 'prepare',
          course_name: 'Русский ЕГЭ', 
          rest_hours: 18 
        },
        {
          type: 'lesson',
          course_name: 'Математика ЕГЭ', 
          rest_hours: 20 
        }
      ]
    }
  }

  render() {
    var eventsList = this.state.events.map(function(item) {
      return (
        <View style={styles.eventCard}>
          <Text style={styles.eventCourseName}>{item.course_name}</Text>
          <Text style={styles.eventType}>{ item.type == 'prepare' ? 'Подготовка к уроку' : 'Урок'}</Text>
          <Text style={[ styles.eventHoursRest, {color: item.rest_hours < 10 ? '#EB5757' : '#6FCF97' }]}>{item.rest_hours} ч.</Text>        
          <Text style={styles.eventRest}>осталось</Text>
        </View> 
      );
    });
 
    return (
      <View style={styles.container}>
        {eventsList}
      </View> 
    );
  }
}