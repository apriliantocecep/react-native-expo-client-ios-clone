import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { ProjectScreen } from "./screens/ProjectScreen";

EStyleSheet.build({
  $backgroundColor: '#F8F8F9'
});

export default class App extends React.Component {
  render() {
    return (
      <ProjectScreen />
    );
  }
}
