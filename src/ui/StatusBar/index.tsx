import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import React from 'react'
import { appColors } from '../../theme/appColors'


const CommonStatusBar = ({
    color,
    style
}:any) => {
    
    return (
        <View
            style={{
                backgroundColor:color?? appColors.white,
                height: Platform.OS === 'ios' ? 62 : 0,
                ...style
            }}>
            <StatusBar
                backgroundColor={appColors.white}
                barStyle="dark-content"
            />
        </View>
    )
}

export default CommonStatusBar

const styles = StyleSheet.create({})