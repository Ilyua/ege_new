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

const MAX_LENGTH_CODE = 6;
const PHONE_NUMBER_LENGTH = 10;

const SMS_GATEWAY_LOGIN = 'z1500494926240'; 
const SMS_GATEWAY_PASSWORD = '505669';

const brandColor = '#744BAC';


function getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  },
  header: {
    textAlign: 'center',
    marginTop: 60,
    fontSize: 22,
    margin: 20,
    color: brandColor,
  },
  description: {
    textAlign: 'center', 
    color: '#aaa'
  },
  form: {
    margin: 20
  },
  textInput: {
    padding: 0,
    margin: 0,
    height: 20,
    flex: 1,
    fontSize: 20,
    color: brandColor
  },
  button: {
    marginTop: 20,
    height: 50,
    backgroundColor: brandColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  callingCodeText: {
    fontSize: 20,
    color: brandColor,
    paddingRight: 10,
    paddingTop: 3
  }
});

export class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enterCode: false,
      spinner: false,
      verificationCode: getRandomArbitrary(100000, 999999),
    };
    this.phone = 'placeholder'
  }

  _sendSms = (phone, text) => {
    var url = `http://gate.iqsms.ru/send/?phone=${'%2B7' + phone}&text=${text}&login=${SMS_GATEWAY_LOGIN}&password=${SMS_GATEWAY_PASSWORD}`;
    Alert.alert('URL', url);

    fetch(url, {method: 'GET'})
      .then(function(response) {
          if (response.status == 200) return;
          else throw new Error('Something went wrong on api server!');
      })
      .catch(function(error) {
          console.error(error);
      });
  } 

  _getCode = function() {
      this._sendSms(this.state.inputVal, this.state.verificationCode);

      this.textInput.setNativeProps({ text: '' });
      this.setState({
        enterCode: true
      });
  }

  _verifyCode = () => {
    if (this.state.inputVal == this.state.verificationCode) {
        setTimeout(() => {
          Alert.alert('state.phone', this.state.phone);
          this.props.register(this.state.phone);
        }, 100);
    }
    else {
      Alert.alert('', this.state.inputVal + ' != ' + this.state.verificationCode);
    }

    this.textInput.blur();
  }

  _onChangeText = (val) => {
    this.setState({inputVal: val});

    if (!this.state.enterCode) {
      this.setState({phone: val});
    }

    setTimeout(() => {
      if (this.state.enterCode && val.length === MAX_LENGTH_CODE) {
         this._verifyCode();
      }
      else if (val.length === PHONE_NUMBER_LENGTH) {
         this._getCode();
      }
    }, 100);
  }

  _tryAgain = () => {
    this.textInput.setNativeProps({ text: '' })
    this.textInput.focus();
    this.setState({ enterCode: false });
  }

  _getSubmitAction = () => {
    this.state.enterCode ? this._verifyCode() : this._getCode();
  }
  
  render() {
    let textStyle = this.state.enterCode ? {
      height: 50,
      textAlign: 'center',
      fontSize: 40,
      fontWeight: 'bold'
    } : {};

    return (
      <View style={styles.container}>
        {this.state.enterCode ? null : <Text style={styles.header}>РЕГИСТРАЦИЯ</Text>} 
        {this.state.enterCode ? <Text style={styles.header}>ПОДТВЕРЖДЕНИЕ</Text> : null}
        {this.state.enterCode ? null : <Text style={styles.description}>Для регистрации на ваш телефон будет отправленно SMS с кодом подтверждения</Text>}
        {this.state.enterCode ? <Text style={styles.description}>На указанный телефон было направленно SMS с кодом. Чтобы завершить регистрацию, пожалуйста, введите 6-значный код активации.</Text> : null}  

        <View style={styles.form}>
          <View style={{ flexDirection: 'row' }}>
            {this.state.enterCode ? null : <Text style={styles.callingCodeText}>+7</Text>}

            <TextInput
              ref={(c) => { this.textInput = c; }}
              name={this.state.enterCode ? 'code' : 'phoneNumber' }
              type={'TextInput'}
              autoCapitalize={'none'}
              value={this.state.input}
              autoCorrect={false}
              onChangeText={this._onChangeText}
              underlineColorAndroid={'transparent'}
              placeholder={this.state.enterCode ? '_ _ _ _ _ _' : 'Номер телефона'}
              keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
              style={[ styles.textInput, textStyle,  { marginBottom: 20} ]}
              returnKeyType='go'
              autoFocus
              placeholderTextColor={brandColor}
              selectionColor={brandColor}
              maxLength={this.state.enterCode ? 6 : 20}
              onSubmitEditing={this._getSubmitAction} />

          </View>

          <View style={{ height: 10, width: 200}}></View> 

          {this.state.enterCode ? null :<TouchableOpacity style={styles.button} onPress={this._getSubmitAction}>
            <Text style={styles.buttonText}>ОТПРАВИТЬ</Text>
          </TouchableOpacity> }
        </View>
      </View>
    );
  }
}