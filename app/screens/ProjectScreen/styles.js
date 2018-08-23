import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    $paddingHorizontal: 18,
    $paddingVertical: 15,
    $background: '#F8F8F9',
    $underlayColor: '#b5b8bc',
    $headerColor: '#ADB0B4',
    $active: '#20BE2F',
    $marginLeftLikes: 5,

    text: {
        color: '$headerColor',
        fontWeight: '500',
        fontSize: 11,
        letterSpacing: 1.2,
    },
    title: {
        color: '#000',
        fontSize: 15,
        fontWeight: '500',
        paddingBottom: 2,
    },
    subtitle: {
        color: '$headerColor',
        fontSize: 13.5,
        flex: 1,
    },
    subtitleContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    likesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        // width: 55,
        marginLeft: '$marginLeftLikes',
    },
    likesText: {
        marginLeft: '$marginLeftLikes',
        color: '$headerColor',
        fontSize: 14,
        alignSelf: 'flex-start',
    },
    likesCircle: {
        width: 4,
        height: 4,
        borderRadius: 4 / 2,
        backgroundColor: '#ddd',
        alignSelf: 'center',
        justifyContent: 'center',
    },

    singleContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    singleText: {
        fontSize: 16,
    },
    dot: {
        backgroundColor: '$headerColor',
        width: 7,
        height: 7,
        borderRadius: 7 / 2,
    },
    dotActive: {
        backgroundColor: '$active',
    },
    nanoSpacer: {
        width: 7
    },
    listLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#F4F4F5'
    },
    fullLine: {
        marginLeft: 0,
    },
    halfLine: {
        marginLeft: 20,
    },

    listContainer: {
        backgroundColor: '$background',
    },
    touchContainer: {
        backgroundColor: '#fff'
    },

    listHeaderContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: '$paddingHorizontal',
        backgroundColor: '$background',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    listContent: {
        paddingVertical: '$paddingVertical',
        backgroundColor: '#ffffff',
        paddingHorizontal: '$paddingHorizontal',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    contentRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    contentColumn: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    checkmark: {
        color: '#509BDA',
        alignSelf: 'center',
    },

    messageContainer: {
        flex: 1,
        paddingHorizontal: '$paddingHorizontal',
        backgroundColor: 'transparent',
    },
    messageText: {
        color: '$headerColor',
        paddingTop: 12,
        paddingBottom: 30,
        fontSize: 13,
    }
});

export default styles;