import React, { Component } from 'react';
import { AppRegistry, TouchableHighlight, Text, ScrollView, View, Image, TouchableOpacity, Navigator } from 'react-native';
import iChing from './iChing'

var randomnumber;

class NavAllDay extends Component {
  render() {
    const routes = [
      {title: 'First Scene', index: 0},
      {title: 'Second Scene', index: 1},
    ];
    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={(route, navigator) =>
          <TouchableHighlight onPress={() => {
            if (route.index === 0) {
              navigator.push(routes[1]);
            } else {
              navigator.pop();
            }
          }}>
          <Text>{route.title}</Text>
          </TouchableHighlight>
          }
          style={{padding: 0, backgroundColor:'orchid'}}
          />
    );
  }
}

class IchingApp extends Component {
  constructor(props) {
    super(props);
    this.state = ({number: 0});
  }
  onPress() {
    randomnumber = Math.ceil(Math.random()*63);
    this.setState({number: randomnumber})
  }


  render() {
    var dragonImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Dragon_from_China_Qing_Dynasty_Flag_1889.svg/670px-Dragon_from_China_Qing_Dynasty_Flag_1889.svg.png';
    return (
      <View style={{flex:1}}>
      <ScrollView >
      <View style={styles.container}>
        <View stle={styles.div}>
               <MyButton onPress={this.onPress.bind(this)} style={styles.button}  />
        </View>
        <Text>{this.state.number}</Text>
          <Text style={[styles.hey, styles.header]}>{iChing[this.state.number].Name}</Text>
            <Image source={{uri: source=iChing[this.state.number].Symbol}}
                   style={styles.image} />
           <Text style={styles.hey}>{iChing[this.state.number].Reading}</Text>
      </View>
   </ScrollView>
   <View><NavAllDay /></View>
   </View>
   );
  }
}


class MyButton extends Component {


  render() {
    var dragonImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Dragon_from_China_Qing_Dynasty_Flag_1889.svg/670px-Dragon_from_China_Qing_Dynasty_Flag_1889.svg.png';

    return (
      <TouchableOpacity onPress={this.props.onPress}>
                       <Image source={{uri: source=dragonImage}}
                            style={{width:300, height:200, marginTop: 40}} />

        </TouchableOpacity>
    );
  }
}

// 'https://s-media-cache-ak0.pinimg.com/236x/42/99/ee/4299ee1b3a2726830f2718bfed0982ff.jpg'

AppRegistry.registerComponent('abcrn', () => IchingApp);

const styles = {
  image:{
    width: 200,
    height: 200,
    margin: 15,
  },
  button:{
    backgroundColor: 'darkturquoise',
    height: 50,
    // width: 100,
    // alignItems: 'baseline',
    // alignItems: 'flexEnd',
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
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
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

// import { createStore } from 'redux'

// let store = createStore(counter)



// function counter(state = 0, action) {
//   switch (action.type) {
//   case 'INCREMENT':
//     return state = state + 1
//   default:
//     return state
//   }
// }



// store.subscribe(() =>
//   console.log(store.getState())
// )


// _onPressButton() {
//   console.log(this.state);
//   console.log(randomnumber);
//   // store.dispatch({ type: 'INCREMENT' })
// }
//
// class Blink extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {showText: true};
//
//     // Toggle the state every second
//     setInterval(() => {
//       this.setState({ showText: !this.state.showText });
//     }, 1000);
//   }
//
//   render() {
//     let display = this.state.showText ? this.props.text : ' ';
//     return (
//       <Text>{display}</Text>
//     );
//   }
// }
