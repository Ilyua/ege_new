import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ListView,
  TouchableOpacity
} from 'react-native';

const brandColor = '#afafaf';

const styles = StyleSheet.create({
  textInput: {
    fontSize: 20,
    marginBottom: 5,
    height: 35
  },
  textList:{
     fontSize: 20,
      height: 35
  },
  inputLabel: {
    marginBottom: 5,
    fontSize: 14
  },
  box1: {
  flex:1,
},
box2: {
  flex:1,
},
detailBox: {
  flexDirection: 'row'
},
 button: {
    marginTop: 20,
    height: 50,
    width:'70%',
    backgroundColor:  brandColor,
    alignItems: 'center',
    justifyContent: 'center',
  
    
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
   
  },
   button_container:{
        alignItems: 'center',
         justifyContent: 'center',
        flex: 1,
        flexDirection: 'column',
        marginTop:200
  },
  
});



export default class StudentProfile extends Component {
  constructor(props) {
    super(props);
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'математика', 'Русский', 'Физика'
      ]),
      dataSourceCategory: ds.cloneWithRows([
        'А категория', 'А категория', 'А категория'
      ]),

      full_name:'3455 66778 4455 7788',
      img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWBbf7xKVbM2LaMvUkL-bxgz1pvVUMB_4KwDSrJ5Ez1J9xnxGJ',
      email:'test@mail.ru',
      phone :'+4999 355 45 46',
      address:'mephi',
      parent_name:'степан',
      parent_number:'+7(999)999-99-99',
    };
  }

  render() {
    return (
      <View style={{ marginTop:50 }}>
      <View style={{ paddingLeft:30,height:'50%' }}>
        <Text style={styles.inputLabel}>Номер</Text>
        <TextInput
          value={this.state.full_name}
          onChangeText={(full_name) => this.setState({full_name})}
          style={styles.textInput} />

        <Text style={styles.inputLabel}>Владелец</Text>
        <TextInput
          value={this.state.email}
          onChangeText={(email) => this.setState({email})}
          style={styles.textInput} />


        <Text style={styles.inputLabel}>До</Text>
        <TextInput
          value={this.state.phone}
          onChangeText={(phone) => this.setState({phone})}
          style={styles.textInput} />

        <Text style={styles.inputLabel}>CVV</Text>
        <TextInput
          value={this.state.address}
          onChangeText={(address) => this.setState({address})}
          style={styles.textInput} />
            </View>
             <View style={styles.button_container} > 
           
             <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Добавить</Text>
            </TouchableOpacity>
            </View> 
            
      
       
      </View>
    );
  }
}