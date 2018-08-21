import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    $paddingHorizontal: 18,
    $paddingVertical: 15,
    $background: '$backgroundColor',
    $underlayColor: '#F4F4F4',
    $headerColor: '#ADB0B4',
    $active: '#20BE2F',

    text: {
        color: '$headerColor',
        fontWeight: '500',
        fontSize: 11,
        letterSpacing: 1.2,
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

    listContainer: {
        backgroundColor: '$background',
    },

    listHeaderContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: '$paddingVertical',
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
        backgroundColor: '#fff',
        paddingHorizontal: '$paddingHorizontal',
    }
});

export default styles;