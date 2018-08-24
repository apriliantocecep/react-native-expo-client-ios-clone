import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { ProjectScreen } from "./screens/ProjectScreen";

import { List, ListItem } from "./components/List";

EStyleSheet.build({
  $backgroundColor: '#F8F8F9'
});

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{
        flex: 1,
        backgroundColor: '#F8F8F9'
      }}>

        <List>
          <ListItem title="Cecep Aprilianto" subtitle="http://cecepaprilianto.com/sdfadsfa/sdfadsf/sdfads/dsf" image={{ uri: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg' }} />
          <ListItem title="Cecep Aprilianto" subtitle="http://cecepaprilianto.com/sdfadsfa/sdfadsf/sdfads/dsf" image={{ uri: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg' }} />
        </List>

      </SafeAreaView>
    );
  }
}
