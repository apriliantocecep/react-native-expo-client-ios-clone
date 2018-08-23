import React, { Component } from 'react';
import { View, Text, FlatList, TouchableHighlight, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Constants } from "expo";
import { Ionicons } from "@expo/vector-icons";

const window = Dimensions.get("window");
const isSmallDevice = window.width < 375;

import styles from './styles';
import data from "./data";

class ProjectScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data,
            loading: false,
            page: 1,
            seed: 1,
            error: null,
            refreshing: false,
            stickyHeaderIndices: [],
            flexOnSubtitle: 0,
        };
    }

    componentWillMount() {
        this.setStickyHeader();
    }

    makeRequest = () => {
        const { page, seed } = this.state
        const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;

        this.setState({ loading: true })

        fetch(url)
            .then(response => response.json())
            .then(res => {
                this.setState({
                    // data: page === 1 ? res.results: [...this.state.data, ...res.results],
                    error: res.error || null,
                    loading: false,
                    refreshing: false
                })
            })
            .catch(error => {
                this.setState({ error, loading: false })
            })
    }

    handleRefresh = () => {
        this.setState({
            page: 1,
            seed: this.state.seed + 1,
            refreshing: true,
        }, () => this.makeRequest())
    }

    handleLoadMore = () => {
        this.setState({
            page: this.state.page + 1,
        }, () => this.makeRequest())
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
            let isLikes = item.likes || item.likes === 0;

            if (item.message) {
                return (
                    <View style={styles.messageContainer}>
                        <Text style={styles.messageText}>{item.message}</Text>
                    </View>
                )
            }

            const handleSubtitleOnLayout = evt => {
                // console.log(evt.nativeEvent.layout)

                let layout = evt.nativeEvent.layout;
                let width = layout.width;

                let deviceWidth = isSmallDevice ? 140 : 375;
                if (width > deviceWidth) {
                    this.setState({
                        flexOnSubtitle: 1
                    })
                } else {
                    // this.setState({
                    //     flexOnSubtitle: 0
                    // })
                }
            }

            return (
                <TouchableHighlight
                    style={styles.touchContainer}
                    onPress={() => alert(item.name)}
                    onLongPress={() => alert('Long Press')}
                    underlayColor={styles.$underlayColor}
                >
                    <View>
                        <View
                            style={[
                                { flex: 1 },
                                styles.listContent,
                                !item.image && !item.title && !item.subtitle && styles.contentRow,
                            ]}
                        >
                            {/* Only title or maybe with icon */}
                            {!item.image && !item.title && !item.subtitle && (
                                <View style={styles.singleContainer}>
                                    {/* <Ionicons style={{ marginEnd: 10 }} name="ios-mail-outline" size={35} /> */}
                                    <Text style={styles.singleText} numberOfLines={1}>{item.name}</Text>
                                </View>
                            )}

                            {/* Only title and subtitle */}
                            {item.title && item.subtitle && (
                                <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    {item.image && (
                                        <Image resizeMode="cover" source={{ uri: item.image }} style={{ width: 40, height: 40, marginEnd: 10, borderRadius: 4 }} />
                                        // <Ionicons style={{ marginEnd: 10, alignSelf: 'center', }} name="md-checkmark" size={30} />
                                    )}
                                    <View style={{
                                        flex: 1
                                    }}>
                                        <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                                        <View style={styles.subtitleContainer}>
                                            <Text onLayout={handleSubtitleOnLayout} style={[styles.subtitle, isLikes && { flex: this.state.flexOnSubtitle }]} numberOfLines={1}>{item.subtitle}</Text>
                                            {isLikes && (
                                                <View style={styles.likesContainer}>
                                                    <View style={styles.likesCircle} />
                                                    <Text style={styles.likesText} numberOfLines={1}>{item.likes}</Text>
                                                    <Text style={styles.likesText} numberOfLines={1}>likes</Text>
                                                </View>
                                            )}
                                        </View>
                                    </View>
                                </View>
                            )}

                            {/* Checkmark */}
                            {item.checked && <Ionicons style={styles.checkmark} name="md-checkmark" size={20} />}
                        </View>

                        {/* Line */}
                        <View style={[
                            styles.listLine,
                            // item.image && item.title && item.subtitle && styles.halfLine
                        ]} />
                    </View>
                </TouchableHighlight>
            )
        }
    }

    renderSeparator = ({ highlighted, leadingItem }) => {
        // DEBUG: console.log(leadingItem)
        console.log(leadingItem)
        if (leadingItem.header) {
            return null;
        }
        return (
            <View style={{
                backgroundColor: '#F4F4F5',
                height: 1
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
                    showsVerticalScrollIndicator={false}
                    onRefresh={this.handleRefresh}
                    refreshing={this.state.refreshing}
                    onEndReached={this.handleLoadMore}
                    onEndReachedThreshold={0}
                />
            </View>
        );
    }
}

export default ProjectScreen;
