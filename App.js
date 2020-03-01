import React from 'react';
// "View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls"
// "Text: A React component for displaying text."
import {View, Text, ImageBackground} from 'react-native';
import {Button} from 'native-base';

// To use the image, you need to require it
const background = require('./assets/bachgrund.png');
// Use backgroundimage component so we can have child elements

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={background} style={styles.background}>
        <View style={styles.itemContainer}>
            <Text style={styles.titleStyle}>Hello, expo</Text>
            <Button
            onPress={()=>console.log('f')}
            block={true}  
            // This is provided by native-base. block={true} makes a nice wide button that spans the screen
            style={styles.buttonStyle}
            
            >
              <Text style={styles.buttonText}>enter iPlant</Text>
            </Button>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

// This is the way they do styles in the docs--make a styles object, 
// give the component inline styling that references this 
// <View style={styles.whatever}>


const styles = {
  titleStyle: {
    fontSize: 30,
    color: 'blue'
  },
  background: {
    flex: 1         // We really want this, so the background takes up the whole background
  },
  container: {
    flex: 1,        // This makes the app span the screen
    // marginTop: 24   // Gives a little whitespace at the top of the screen
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  clickMe: {
    flex: 1,
    color: 'blue',
    alignItems: 'center'
  },
  buttonText: {
    color: '#0f0'
  },
  buttonStyle: {
    margin: 10
  }
}
