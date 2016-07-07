import React, { Component } from 'react';
import { AppRegistry, Text, ScrollView, View, Image, TouchableOpacity } from 'react-native';
import iChing from './iChing'
import { createStore } from 'redux'

let store = createStore(counter)

let randomnumber;


function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state = randomnumber
  default:
    return state
  }
}



store.subscribe(() =>
  console.log(store.getState())
)

class HelloWorldApp extends Component {

  render() {
    var dragonImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Dragon_from_China_Qing_Dynasty_Flag_1889.svg/670px-Dragon_from_China_Qing_Dynasty_Flag_1889.svg.png';
    return (
      <ScrollView >
      <View style={styles.container}>
        <View stle={styles.div}>
          <Image source={{uri: source=dragonImage}}
               style={{width:300, height:200, marginTop: 40}} />
        </View>
        <Text>{randomnumber}</Text>
          <Text style={[styles.hey, styles.header]}>{iChing[1].Name}</Text>
            <Blink text='Look at me look at me look at me' />

          <MyButton />
               <Text style={styles.hey}>{iChing[1].Reading}</Text>
      </View>
   </ScrollView>
   );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}


class MyButton extends Component {
  _onPressButton() {
    console.log(this.state);
    console.log(randomnumber);
    store.dispatch({ type: 'INCREMENT' })
  }

  render() {
    return (
      <TouchableOpacity onPress={this._onPressButton}>
                <Image source={{uri: source=iChing[1].Symbol}}
                       style={styles.image} />
                     <Text>{this.props.state}</Text>
        </TouchableOpacity>
    );
  }
}

AppRegistry.registerComponent('abcrn', () => HelloWorldApp);

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
  contentContainer: { paddingVertical: 20 },
  container:{
    flex: 1,
    flexDirection: 'column',
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
