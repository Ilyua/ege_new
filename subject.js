import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  _handleButtonPress = () => {
    Alert.alert(
      'Button pressed!',
      'You did it!',
    );
  };

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header_row}>
            <Text style={styles.header_bold}>
              Математика ЕГЭ - Профиль
            </Text>
            <Text style={styles.header_light}>
              Преподаватель: Преподавалкин С.
            </Text>
          </View>
          <View style={styles.scores}>
            <View style={styles.scores_col_1}>
              <Text style={styles.scores_bold}>
                ЦЕЛЬ
              </Text>
              <View style={styles.scores_round_block}>
                <Text style={styles.mark}>
                  80
                </Text>
                <Text style={styles.mark_word}>
                  баллов
                </Text>
              </View>
            </View>
            <View style={styles.scores_col_2}>
              <Text style={styles.scores_bold}>
                СЕЙЧАС
              </Text>
              <View style={styles.scores_round_block}>
                 <Text style={styles.mark}>
                  64
                </Text>
                <Text style={styles.mark_word}>
                  балла
                </Text>
              </View>
            </View>         
          </View>
          <View style={styles.parts}>
            <View style={styles.parts_box}>
              <Text style={styles.parts_text}>
                Первая часть
              </Text>
              <View style={styles.parts_counter}>
              </View>
            </View>
            <View style={styles.parts_box_last}>
              <Text style={styles.parts_text}>
                Вторая часть
              </Text>
              <View style={styles.parts_counter}>
              </View>
            </View>
          </View>
          <View style={styles.schedule}>
            <View style={styles.schedule_col_1}>
              <View style={styles.a1}>
                <Text style={styles.day_of_the_week}>
                  пн
                </Text>
                <Text style={styles.day_of_the_week_bold}>
                  вт
                </Text>
                <Text style={styles.day_of_the_week}>
                  ср
                </Text>
                <Text style={styles.day_of_the_week}>
                  чт
                </Text>
              </View>
            </View>
            <View style={styles.schedule_col_2}>
              <Text style={styles.day_of_the_week}>
                Подготовка к занятию
              </Text>
              <Text style={styles.day_of_the_week_bold}>
                Занятие
              </Text>
               <Text style={styles.day_of_the_week}>
                Домашняя работа
              </Text>
              <Text style={styles.day_of_the_week}>
                Подготовка к занятию
              </Text>
            </View>
            <View style={styles.schedule_col_3}>
              <View style={styles.a1}>
                <Text style={styles.day_of_the_week_bold}>
                  пт
                </Text>
                <Text style={styles.day_of_the_week}>
                  сб
                </Text>
                <Text style={styles.day_of_the_week}>
                  вс
                </Text>
                <Text style={styles.day_of_the_week}>
                  
                </Text>
              </View>
            </View>
            <View style={styles.schedule_col_4}>
              <Text style={styles.day_of_the_week_bold}>
                Занятие
              </Text>
              <Text style={styles.day_of_the_week}>
                Домашняя работа
              </Text>
               <Text style={styles.day_of_the_week}>
                
              </Text>
              <Text style={styles.day_of_the_week}>
               
              </Text>
            </View>
          </View>
          <View style={styles.feedback}>
            
           <TouchableOpacity style={styles.button}>
             <Text style={styles.buttonText}>
               ОСТАВИТЬ ОТЗЫВ
             </Text>
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
    flex: 2,
    paddingLeft: 15,
    justifyContent: 'center',
  },
  header_bold: {
    fontSize: 20,
    color: '#000'
  },
  header_light: {
    color: '#808080'
  },
  scores: {
    flexDirection: 'row',
    flex: 4,
  },
  scores_col_1: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    paddingLeft: 33,
  },
  scores_col_2: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    paddingRight: 33,
  },
  scores_bold: {
    fontSize: 20,
    color: '#000',
    marginBottom: 5,
  },
  scores_round_block: {
    width: 90,
    height: 90,
    paddingTop: 10,
    backgroundColor: '#aaa',
    borderRadius: 50,
  },
  mark: {
    fontSize: 40,
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  mark_word: {
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  parts: {
    flex: 4,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 15,
    paddingBottom: 15,
  },
  parts_box: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15
  },
  parts_box_last: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#ddd',
    borderWidth: 1,
    paddingLeft: 15,
    paddingRight: 15
  },
  parts_text: {
    fontSize: 20,
  },
  parts_counter: {
    backgroundColor: '#aaa',
    borderRadius: 50,
    height: 50,
    width: 50,
  },
  schedule: {
    flex: 3,
    paddingTop: 15,
    backgroundColor: '#ddd',
    flexDirection: 'row',
    paddingLeft: 15,
  },
  schedule_col_1: {
    flex:1,
    marginRight:5,
  },
  a1: {
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 1,
    borderBottomWidth: 0,
    borderColor: '#808080',
  },
  schedule_col_2: {
    flex:7,
  },
  schedule_col_3: {
    flex:1,
    marginRight: 5,
  },
  schedule_col_4: {
    flex:6,
  },
  day_of_the_week: {
    fontSize: 12,
    marginBottom: 5,
  },
  day_of_the_week_bold: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  feedback: {
    flex: 2,
    justifyContent: 'center',
    paddingLeft: 60,
    paddingRight: 60,
  },
  button: {
    flex: 1,
    marginBottom:10,
    marginTop:10,
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold'
  },
});
