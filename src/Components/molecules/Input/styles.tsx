import { StyleSheet } from "react-native";
import { appColors } from "theme";

export const styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderRadius: 16,
        alignContent: 'center',
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap:10,
        // marginBottom:15
    },
    Input: {
        height: "100%",
        fontSize: 14,
        width: '60%',
        color: appColors.White50,
        

    },
    line:{
       paddingHorizontal:10,
        borderRightWidth:1,
        borderColor:'#947EC8',
        // backgroundColor:'red',
        // width:90
      
        // height:20,
        // width:'40%'
        
        // width:50
    },
    label:{
        fontSize:14,
        color:appColors.White50,
        fontFamily:'Noto Sans',
        fontWeight:'300'
    }
});