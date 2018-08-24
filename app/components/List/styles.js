import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    List: {
        backgroundColor: '#fff',
        borderTopColor: '#F4F4F5',
        borderTopWidth: 0,
        borderBottomColor: '#F4F4F5',
        borderBottomWidth: 1,

        // paddingHorizontal: 20,
        // paddingVertical: 10,
    },

    // ListItem
    content: {
        flex: 1,
        flexDirection: 'row',
    }
});

export default styles;