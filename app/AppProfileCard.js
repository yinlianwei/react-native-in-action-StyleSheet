//胸卡
import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Platform, TouchableHighlight} from 'react-native';
import getStyleSheet from './styles';
import PropTypes from 'prop-types';
import update from 'immutability-helper';

const userImage = require('./user.jpg');

const data = [{
  image: userImage,
  name: '朱棣',
  occupation: 'React Native Developer',
  description: ' Zhudi is really great JavaScript developer. He\n' +
    'loves using JS to build React Native Applications for iOS and Android',
  showThumbnail: true,
}];

const ProfileCard = (props) => {
  const {image, name, occupation, description, onPress, showThumbnail} = props;
  let containerStyles = [styles.cardContainer];

  if (showThumbnail) {
    containerStyles.push(styles.cardThumbnail);
  }

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.cardImageContainer}>
          <Image source={require('./user.jpg')} style={styles.cardImage}/>
        </View>
        <View>
          <Text style={styles.cardName}>{name}</Text>
        </View>
        <View style={styles.cardOccupationContainer}>
          <Text style={styles.cardOccupation}>{occupation}</Text>
        </View>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
    </View>
  );
};

ProfileCard.propTypes = {
  image: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showThumbnail: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

export class AppProfileCard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: data,
    };
  }

  handleProfileCardPress = (index) => {
    const showThumbnail = !this.state.data[index].showThumbnail;
    this.setState({
      data: update(this.state.data, {[index]: {showThumbnail: {$set: showThumbnail}}}),
    });
  };

  render() {
    const list = this.state.data.map(function (item, index){
      const {image, name, occupation, description, showThumbnail} = item;
      return <ProfileCard key={'card-' + index} image={image} name={name} occupation={occupation} description={description} showThumbnail={showThumbnail} onPress={this.handleProfileCardPress.bind(this, index)}/>
    }, this)

    return (
      <view style={styles.container}>{list}</view>
    )
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
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: 10,
        },
        shadowOpacity: 1,
      },
      android: {
        elevation: 15,
      },
    }),
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
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: 10,
        },
        shadowOpacity: 1,
      },
      android: {
        borderWidth: 3,
        borderColor: 'black',
        elevation: 15,
      },
    }),
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

  cardName: {
    color: 'white',
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
    fontStyle: 'italic',
    marginTop: 10,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10,
  },

  cardThumbnail: {
    transform:[{scale: 0.2}]
  }
});

