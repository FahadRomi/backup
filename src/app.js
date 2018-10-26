import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCzlJUyTbDdUna86uMJ7b7BBSKMAF51RDs',
    authDomain: 'auth-74356.firebaseapp.com',
    databaseURL: 'https://auth-74356.firebaseio.com',
    projectId: 'auth-74356',
    storageBucket: 'auth-74356.appspot.com',
    messagingSenderId: '49560148135'

    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (

          <Button onPress={() => firebase.auth().signOut()}>
          <Text> تسجيل الخروج </Text>
          </Button>

        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="  تسجيل الدخول" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
