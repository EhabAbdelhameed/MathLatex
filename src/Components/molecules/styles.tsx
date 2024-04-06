import { StyleSheet } from "react-native";
import { appColors } from "../../theme/appColors";
import { appSizes } from "../../theme/appSizes";

export const styles=StyleSheet.create({
    containerAvatar:{
        width:80,
        height:80,
    },
    avatar:{
        width:"100%",
        height:"100%",
        borderRadius:80,
    },
    activeContainer:{
        position:"absolute",
        bottom:"2%",
        right:"10%"
    },
    btnPicker:{
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        height: "100%",
    },
    textPicker:{
            color: appColors.black,
            fontSize: appSizes.font_m,
            fontWeight: '700',
        
    }
})