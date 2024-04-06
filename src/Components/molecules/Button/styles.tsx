import { StyleSheet } from "react-native";
import { appColors } from "theme";

export const styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: 50,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        backgroundColor: appColors.primary
    },
    text: {
        color: appColors.white,
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
        fontFamily: 'Noto Sans'
    },
    Loader: {
        height: 70,
        width: 100,
    }
});