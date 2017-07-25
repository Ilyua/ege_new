import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ListView
} from 'react-native';



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
}
  
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

      full_name:'Иван иванович',
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
      <View style={{ paddingLeft: 20, paddingRight: 20 }}>
        <View style={{ marginTop: 40, marginBottom: 10, width: 280, height: 100 }}>
          <Image source={{ uri: this.state.img_url }} style={{ marginLeft: 90, height: 100, width: 100, borderRadius: 9999999 }} />
        </View>

        <Text style={styles.inputLabel}>ФИО</Text>
        <TextInput
          value={this.state.full_name}
          onChangeText={(full_name) => this.setState({full_name})}
          style={styles.textInput} />

        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          value={this.state.email}
          onChangeText={(email) => this.setState({email})}
          style={styles.textInput} />


        <Text style={styles.inputLabel}>Телефон</Text>
        <TextInput
          value={this.state.phone}
          onChangeText={(phone) => this.setState({phone})}
          style={styles.textInput} />

        <Text style={styles.inputLabel}>Адрес</Text>
        <TextInput
          value={this.state.address}
          onChangeText={(address) => this.setState({address})}
          style={styles.textInput} />

        <Text style={styles.inputLabel}>Предметы</Text>
        
        <View style={styles.detailBox}>

          <ListView style={styles.box1}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text  style={styles.textList} >{rowData}</Text>}
            />
  
           <ListView style={styles.box2}
          dataSource={this.state.dataSourceCategory}
          renderRow={(rowData) => <Text  style={styles.textList} >{rowData}</Text>}
        />
         </View>
       

       
      </View>
    );
  }
}