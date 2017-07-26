import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';
import { Ionicons } from '@expo/vector-icons';

const background = '#ffffff';
const textColor = '#000000';
// ���� ���������� ������
const brandColor = '#744BAC';
const buttonTextColor = '#fff';

export default class App extends Component {
  render() {
    return (
      // �������� ���
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          //ToDo ������� �������� ���� �� ������� ������
          <Ionicons name="md-menu" size={32} color="#000000" style={styles.icon} onPress={false}/>
          <Text style={styles.navText}>
            ����������
          </Text>
        </View>
        <Text style={styles.paragraph}>
          ��� �����-���:
        </Text>
        <Text style={styles.promo_code}>
          80e7f
        </Text>
        <View style={styles.footerContainer}>
          <Text style={styles.footerParagraph}>
            ��������� �����-��� ����� �������, ����� �������� ���������� ������� (1 ������������ ���� = 1 ���������� �������)
          </Text>
          <TouchableOpacity style={styles.button} onPress={false}>
              <Text style={styles.buttonText}>����������</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: background,
  },
  headerContainer: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: background,
  },
  footerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: background,
  },
  icon: {
    marginLeft: 25,
    marginRight: 10,
  },
  navText: {
    margin: 5,
    fontSize: 18,
    textAlign: 'center',
    color: textColor,
  },
  paragraph: {
    margin: 0,
    fontSize: 18,
    textAlign: 'center',
    color: textColor,
  },
  promo_code: {
    margin: 15,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: textColor,
  },
  footerParagraph: {
    margin: 0,
    fontSize: 18,
    textAlign: 'center',
    color: textColor,
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    height: 50,
    backgroundColor: brandColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: buttonTextColor,
    fontSize: 16,
    fontWeight: 'bold'
  },
});
