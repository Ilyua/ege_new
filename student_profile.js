import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  Image,
  Alert
} from 'react-native';

const brandColor = '#744BAC';

const styles = StyleSheet.create({
  textInput: {
    fontSize: 20,
    marginBottom: 10,
    height: 35
  },
  inputLabel: {
    fontSize: 14
  }
});



export class StudentProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWBbf7xKVbM2LaMvUkL-bxgz1pvVUMB_4KwDSrJ5Ez1J9xnxGJ',
    }
  }

  render() {
    return (
      <View style={{ paddingLeft: 20, paddingRight: 20 }}>
        <View style={{ marginTop: 40, marginBottom: 10, width: 280, height: 100 }}>
          <Image source={{ uri: this.state.img_url }} style={{ marginLeft: 90, height: 100, width: 100, borderRadius: 9999999 }} />  
        </View>

        <Text style={styles.inputLabel}>Полное имя</Text>
        <TextInput 
          value='Иван Иванов'
          style={styles.textInput} /> 

        <Text style={styles.inputLabel}>Email</Text>
        <TextInput 
          value='some@gmail.com'
          style={styles.textInput} />


        <Text style={styles.inputLabel}>Телефон</Text>          
        <TextInput 
          value='+7 (999) 999-99-99'
          style={styles.textInput} />

        <Text style={styles.inputLabel}>Адрес</Text>        
        <TextInput 
          value='г. Москва, ул. Москворечье, д.7, к. 8, кв. 119'
          style={styles.textInput} />

        <Text style={styles.inputLabel}>Имя родителя</Text>        
        <TextInput 
          value='Степан'
          style={styles.textInput} />

        <Text style={styles.inputLabel}>Телефон родителя</Text>
        <TextInput 
          value='+7 (999) 999-99-99'
          style={styles.textInput} />
      </View> 
    );
  }
}