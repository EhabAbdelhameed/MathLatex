import { StyleSheet } from "react-native";
import { appColors } from "../../theme/appColors";
import { appSizes } from "../../theme/appSizes";


export const styles = StyleSheet.create({
    tabContainer: {
        width: "100%",
        // height:"100%",
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        zIndex: 10000,
        backgroundColor: appColors.bg,
        height: 105,
        justifyContent: "space-around",
        paddingTop: 10,
        borderWidth: 1,
        borderBottomWidth: 0,
        borderColor: appColors.primary,
        borderRadius: appSizes.radius_l,
    },
    placeholder: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: appColors.green2,
        marginTop: 10
    },
    btn: {
        alignItems: "center",
        justifyContent: "center",
        height: 80
    },
    contianerPlus: {
        // backgroundColor:"#a00",
        position: "absolute",
        bottom: 80,
        zIndex: 100000,
        alignSelf: "center",
        alignItems: "center",
     
    },
    contianerItems: {
        // marginBottom: -4,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        position: "absolute",
        top: 18,
        paddingHorizontal:10,

    },
    containerIcon: {
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        borderRadius: appSizes.radius_l,
        backgroundColor: "#4A7EE4"
    },
    btnIconTitle: {
        // backgroundColor: appColors.white,
        alignItems: "center",
        rowGap: 4,
    },
    text:{
        color:appColors.white,
        fontSize:appSizes.font_xs,
        fontWeight:"400" 
    }
})