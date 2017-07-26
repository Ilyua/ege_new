import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { Constants } from 'expo';
//import { Ionicons } from '@expo/vector-icons';

const background = '#fff';
const marginFromCorner = 25;

class Subject extends Component {
  render() {
    return (
      <View style={styles.lessonBlock}>
        <View style={styles.textForLesson}>
          <Text style={styles.subjectInLessonBlock}>
            {this.props.name}
          </Text>
          <Text style={styles.isMainSubjectText}>
            {this.props.profil}
          </Text>
        </View>
        <View style={styles.progressForLesson}>
          
        </View>
      </View>
    );
  }
}

class SubjectList extends Component {
  render() {
    return (
      <View style={styles.subjectHolder}>
        <FlatList data={[
            {key: 'Математика (ЕГЭ)'},
            {key: 'Русский язык (ЕГЭ)'},
            {key: 'Пример'},
            {key: 'Пример1'},
            {key: 'Пример2'},
            {key: 'Пример3'},
            {key: 'Пример4'},
            {key: 'Пример6'},
          ]}
          renderItem={ ({item}) => 
            <View style={styles.subjectHolderInsideView}>
              <Text style={styles.subjectHolderInsideText}>{item.key}</Text>
            </View>
          }>
        </FlatList>
      </View>
    );
  }
}

class Today extends Component {
  render() {
    return (
      <View style={styles.dateHolder}>
        <View style={styles.dayDate}>
          <Text style={styles.dayDateText}>{this.props.currentDate}</Text>
        </View>
        <View style={styles.monthDate}>
          <Text style={styles.monthDateText}>июля 2017</Text>
          <Text style={styles.monthDateText}>Пятница</Text>
        </View>
      </View>
    );
  }
}



export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Тут Иконка Меню</Text>
          {/*<Ionicons name="md-menu" size={32} color="#000000" style={styles.icon} onPress={false}/>*/}
        </View>
        <View style={styles.subjectView}>
          <Subject name='Математика ЕГЭ' profil='Профиль' />
          <Subject name='Русский язык ЕГЭ' />
          <Subject name='Повторение' profil='' />
        </View>
        <View style={styles.footerContainer}>
          <Today currentDate='21' />
          <SubjectList />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: background,
  },
  header: {
    flex: 1,
    marginLeft: 20,
    backgroundColor: 'gery',
  },
  subjectView: {
    flex: 5,
    justifyContent: 'center',
    marginLeft: marginFromCorner,
    marginRight: marginFromCorner,
    
  },
  footerContainer: {
    flex: 4,
    justifyContent: 'flex-end',
    marginLeft: marginFromCorner,
    marginRight: marginFromCorner,
    marginBottom: 20,
    
  },
  lessonBlock: {
    flexDirection: 'row',
    height: 75,
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 1,
    borderRadius: 5,
  },
  textForLesson: {
    flex: 3,
  },
  progressForLesson: {
    flex: 1, 
    backgroundColor: 'red',
  },
  subjectInLessonBlock: {
    margin: 4,
    marginLeft: 15,
    fontSize: 20,
    textAlign: 'left'
  },
  isMainSubjectText: {
    margin: 4,
    marginTop: 0,
    marginLeft: 15,
    fontSize: 13,
    textAlign: 'left',
    color: 'grey',
  },
  dateHolder: {
    flexDirection: 'row',
    marginLeft: 60,
    marginRight: 60,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderRadius: 5,
  },
  dayDate: {
    margin: 5,
  },
  dayDateText: {
    fontSize: 40,
  },
  monthDate: {
    marginTop: 10,
  },
  monthDateText: {
    fontSize: 15,
  },
  subjectHolder: {
    height: 125,
    borderWidth: 1,
    borderRadius: 5,
  },
  subjectHolderInsideView: {
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 1,
  },
  subjectHolderInsideText: {
    margin: 5,
    marginLeft: 15,
  },
});
