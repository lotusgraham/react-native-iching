import React, { Component } from 'react';
import { Image, TouchableOpacity, } from 'react-native';
import iChing from './iChing'
import i from './index.ios'

class MyButton extends Component {

  _onPressButton() {
    console.log("You tapped the button!");
  }

  render() {
    return (
      <TouchableOpacity onPress={this._onPressButton}>
                <Image source={{uri: source=iChing[i].Symbol}}
                       style={styles.image} />
        </TouchableOpacity>
    );
  }
}

const styles = {
  image:{
    width: 200,
    height: 200,
    margin: 15,
  },
  bar:{
    backgroundColor: 'darkturquoise',
    height: 30,
  },
  div:{
    height: 300,
    flex: 1,
  },
  container:{
    flex: 1,
    backgroundColor: 'orchid',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 20,
    borderColor:'darkturquoise',
    borderStyle: 'dashed'
  },
  header:{
    marginTop: 30,
    fontSize: 26,
    textAlign: 'center',

  },
  hey: {
    marginTop: 25,
    textAlign: 'left',
    marginBottom: 15,
    color: 'black',
    marginLeft:40,
    marginRight:40,
  }
}

module.exports = MyButton
