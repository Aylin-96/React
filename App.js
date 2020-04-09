import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class Chats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Chats"
    };
  }

  render() {
    return (
      <View style={{flex:1}}>
        <View style={{flex:1, backgroundColor: "darkcyan"}}>
         <Text style={styles.titleText} onPress={this.onPressTitle}>
            {this.state.titleText}
            {"\n"}
            {"\n"}
          </Text>
        </View> 
        <View style={{flex:2, backgroundColor: "darkred"}}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
        <View style={{flex:2, backgroundColor: "darksalmon"}}/>
        <View style={{flex:2, backgroundColor: "darkseagreen"}}/>
        <View style={{flex:2, backgroundColor: "darkorchid"}}/>
        <View style={{flex:2, backgroundColor: "mediumaquamarine"}}/>
        <View style={{flex:2, backgroundColor: "maroon"}}/>
        <View style={{flex:2, backgroundColor: "lightcoral"}}>
          <Text style={styles.baseText}>
            <Text>Igor</Text>
          </Text>
        </View>
        <View style={{flex:2, backgroundColor: "lightsalmon"}}>
          <Text style={styles.baseText}>
            <Text>Katya</Text>
          </Text>
        </View>
        <View style={{flex:2, backgroundColor: "lightseagreen"}}>
          <Text style={styles.baseText}>
            <Text>Vasya</Text>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontSize: 50
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "firebrick"
  }
});

