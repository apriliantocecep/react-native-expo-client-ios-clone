import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Image } from 'react-native';
import { MaterialIcons, EvilIcons } from "@expo/vector-icons";

const IMAGE_WIDTH = 50;
const IMAGE_MARGIN = 10;

const ListItem = (props) => {
    const {
        style,
        onPress,
        onLongPress = () => alert('press'),
        underlayColor = '#F4F4F5',

        image,
        title,
        subtitle,

    } = props;

    let contentStyles = [styles.content];
    let rightIconStyle = [styles.rightIcon];
    let leftStyle = [styles.left];
    let titleSubtitleStyle = [styles.titleSubtitle];
    let middleStyle = [styles.middle];
    let imageStyle = [styles.image];
    let touchAreaStyle = [styles.touchArea];

    return (
        <TouchableHighlight
            style={touchAreaStyle}
            onPress={onPress}
            onLongPress={onLongPress}
            underlayColor={underlayColor}
        >
            <View style={{ backgroundColor: 'transparent', }}>
                {/* Content */}
                <View style={contentStyles}>
                    {/* Image/Icon, Title, Subtitle */}
                    <View style={leftStyle}>
                        {image && <Image resizeMode="cover" source={image} style={imageStyle} />}

                        <View style={titleSubtitleStyle}>
                            <Text numberOfLines={1}>{title}</Text>
                            <Text numberOfLines={1} style={{}}>{subtitle}</Text>
                        </View>
                    </View>

                    {/* customRightComponent??,  */}
                    <View style={middleStyle}>
                        <Text>Middle</Text>
                    </View>

                    {/* Chevron (default) */}
                    <View style={rightIconStyle}>
                        <EvilIcons style={{ justifyContent: 'flex-end', fontSize: 27, }} name="chevron-right" color="#ADB0B4" />
                    </View>
                </View>

                {/* Line */}
                <View style={styles.line} />
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    // ListItem
    touchArea: {
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 0,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    rightIcon: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        right: 0,
    },
    left: {
        flex: 1,
        flexDirection: 'row',
    },
    titleSubtitle: {
        flex: 1,
        justifyContent: 'center',
    },
    middle: {
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    image: {
        width: IMAGE_WIDTH,
        height: IMAGE_WIDTH,
        marginRight: IMAGE_MARGIN,
        marginBottom: IMAGE_MARGIN,
        borderRadius: IMAGE_WIDTH / 2,
    },
    line: {
        marginLeft: IMAGE_WIDTH + IMAGE_MARGIN,
        height: 1,
        backgroundColor: '#F4F4F5'
    },
    title: {

    },
    subtitle: {

    }
});

export default ListItem;