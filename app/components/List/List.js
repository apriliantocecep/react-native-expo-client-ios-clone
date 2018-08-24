import React from 'react';
import { View } from 'react-native';
import T from "prop-types";

import styles from "./styles";

const List = (props) => {

    let containerStyle = [styles.List];
    if (props.style) {
        containerStyle.push(props.style);
    }

    return (
        <View style={containerStyle}>
            {props.children}
        </View>
    );
}

List.propTypes = {
    children: T.oneOfType([
        T.array,
        T.object
    ]).isRequired,
    style: T.object
}

export default List;