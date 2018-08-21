import React, { Component } from 'react';
import { View, Text, FlatList, TouchableHighlight, TouchableOpacity, StyleSheet } from 'react-native';
import { Constants } from "expo";

import styles from './styles';
import data from "./data";

class ProjectScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data,
            stickyHeaderIndices: []
        };
    }

    componentWillMount() {
        this.setStickyHeader();
    }

    setStickyHeader = () => {
        var arr = [];
        var data = this.state.data;

        data.map(item => {
            if (item.header) {
                arr.push(data.indexOf(item));
            }
        });

        arr.push(0);
        this.setState({ stickyHeaderIndices: arr });
    }

    renderItem = ({ item }) => {
        if (item.header) {
            return (
                <View style={styles.listHeaderContainer}>
                    <View style={styles.headerLeft}>
                        {item.active && <View style={[styles.dot, styles.dotActive]} />}
                        {item.active && <View style={styles.nanoSpacer} />}
                        <Text style={styles.text}>{item.name.toUpperCase()}</Text>
                    </View>
                    {
                        item.button && (
                            <TouchableOpacity onPress={() => alert(item.name + ' action')}>
                                <Text style={styles.text}>{item.button.toUpperCase()}</Text>
                            </TouchableOpacity>
                        )
                    }
                </View>
            )
        } else if (!item.header) {
            return (
                <TouchableHighlight
                    style={styles.listContent}
                    onPress={() => alert(item.name)}
                    underlayColor={styles.$underlayColor}
                >
                    <Text>{item.name}</Text>
                </TouchableHighlight>
            )
        }
    }

    renderSeparator = ({ highlighted, leadingItem }) => {
        // DEBUG: console.log(leadingItem)
        // TODO:
        // FIXME:
        // REVIEW: 
        // NOTE: 
        if (leadingItem.header) {
            return null;
        }
        return (
            <View style={{
                borderBottomColor: '#F4F4F5',
                borderBottomWidth: StyleSheet.hairlineWidth
            }} />)
    }


    render() {
        return (
            <View style={[styles.listContainer, { paddingTop: Constants.statusBarHeight }]}>
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.name}
                    stickyHeaderIndices={this.state.stickyHeaderIndices}
                    ItemSeparatorComponent={this.renderSeparator}
                />
            </View>
        );
    }
}

export default ProjectScreen;
