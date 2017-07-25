import React, { Component } from 'react'; 
import { Text, View, StyleSheet,TouchableOpacity} from 'react-native'; 
import { Constants } from 'expo'; 

const brandColor = '#afafaf';

export default class App extends Component { 
render() { 
return ( 
<View style={styles.container}> 
       <View style={styles.header_row}> 
            <Text style={styles.header_bold}> 
                Математика ЕГЭ - Профиль 
            </Text> 
                <Text style={styles.header_light}> 
                Ученик: Иван Иванов 
                </Text> 
                
      </View> 
      <View style={styles.button_container} > 
      <Text >
              Какая-то дата
                </Text> 
       <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Начать урок</Text>
            </TouchableOpacity>
             </View> 
             <View style={styles.button_container} > 
             <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Перенести</Text>
            </TouchableOpacity>
             <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Отменить </Text>
            </TouchableOpacity>
            </View> 
      </View> 
); 
} 
} 

const styles = StyleSheet.create({ 
container: { 
  flex: 1, 
  paddingTop: Constants.statusBarHeight, 
  backgroundColor: '#ecf0f1' 
}, 
header_row: { 
    flex: 1, 
    paddingTop: 10, 
    paddingLeft: 15, 
    marginBottom: 20 
}, 
header_bold: { 
    fontSize: 20, 
    color: '#000' 
}, 
header_light: { 
    marginBottom: 10, 
    fontWeight: 10 
}, 
  button_container:{
      alignItems: 'center',
    justifyContent: 'center',
     flex: 1,
        flexDirection: 'column',
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
});