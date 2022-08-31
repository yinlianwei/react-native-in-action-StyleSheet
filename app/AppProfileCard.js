//胸卡
import React, {Component} from 'react';
import {Text, View, Button, StyleSheet, Image} from 'react-native';
import getStyleSheet from './styles';

export class AppProfileCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.cardImageContainer}>
            <Image source={require('./user.jpg')} style={styles.cardImage}/>
          </View>
          <View>
            <Text style={styles.cardName}>朱棣</Text>
          </View>
          <View style={styles.cardOccupationContainer}>
            <Text style={styles.cardOccupation}>React native Developer</Text>
          </View>
          <Text style={styles.cardDescription}>
            John is really great JavaScript developer. He
            loves using JS to build React Native Applications for iOS and Android
          </Text>
        </View>
      </View>
    );
  }
}

const profileCardColor = 'dodgerblue';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 300,
    height: 400,
  },

  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    paddingTop: 1,
  },

  cardImage: {
    borderRadius: 80,
    width: 112,
    height: 112,
  },

  cardName:{
    color:'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 30,
    textShadowColor: 'black',
    textShadowRadius: 3,
  },

  cardOccupation: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },

  cardDescription: {
    fontStyle:'italic',
    marginTop: 10,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10,
  }
});

