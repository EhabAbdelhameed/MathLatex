import { Dimensions, Platform, StyleSheet } from "react-native";

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    drawerLabelStyle: {
        fontSize: 17,
        height: 25,
        justifyContent: 'center',
        marginTop: 5,
        marginRight: -20,
        fontWeight: '700',
        textAlign: 'right'
    },
    Container:
    {
        flex: 1,
        width: '100%',
        alignSelf: 'center',
        // marginTop: Platform.OS == 'ios' ? -20 : 50,
        height:'100%',
        // backgroundColor:'#f00'
    },
    Row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    Avatar: {
        height: 40,
        width: 40,
        borderRadius: 38,
        marginHorizontal: 15
    },
    Name: {
        fontSize: 16,
        fontWeight: '600',
        // fontFamily: Fonts.Messiri,
        // color: Colors().lblack,
        // width:'70%',
    },
    Profile: {
        fontSize: 12,
        fontWeight: '500',
        // fontFamily: Fonts.Messiri,
        // color: Colors().gray
    },
    Divider: {
        width: '70%',
        height: 2,
        // backgroundColor: Colors().gray,
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 30
    },
    Logout:{
        position: 'absolute',
        bottom: 40,
        right: 5
    },
    subContainer: {
        paddingHorizontal: 15,
        paddingVertical: 3,
        borderRadius: 30,
        backgroundColor: '#FDF7E6',
        borderColor: '#A57900',
        borderWidth: .3,
        marginRight: 10,
        width:90,
        justifyContent:'center',
        alignItems:'center',
        height:30
        
    },
    subText: {
        fontSize: 13,
        fontWeight: '400',
        color: '#A57900',
        fontFamily: 'Noto Sans'
    },
    statuesContainer: {
        paddingHorizontal: 15,
        paddingVertical: 3,
        borderRadius: 30,
        backgroundColor: '#E6FAFA',
        borderColor: '#00928E',
        borderWidth: .3,
        marginRight: 10,
        width:90,
        justifyContent:'center',
        alignItems:'center',
        height:30
    },
    statuesText: {
        fontSize: 13,
        fontWeight: '400',
        color: '#00928E',
        fontFamily: 'Noto Sans'
    },
});

export default styles