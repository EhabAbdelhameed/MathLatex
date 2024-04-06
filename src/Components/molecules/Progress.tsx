import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { appColors } from '../../theme/appColors'
import { RenderSvgIcon } from '../atoms/svg'

const ProgressBar = ({
    persentage
}: {
    persentage?: any
}) => {
    return (
        <View style={styles.Container}>
            <View style={styles.Main}>
                <View style={[styles.selected, { width: `${persentage > 100 ? 100 : persentage}%`, }]}>
                    <RenderSvgIcon icon='RIGHTACCOUNT' style={styles.RenderSvgIcon} width={15} height={15} />
                </View>
            </View>
            <Text style={styles.Title}>{persentage > 100 ? 100 : persentage}%</Text>
        </View>
    )
}

export default ProgressBar


const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'space-between',
    },
    Main: {
        width: '85%',
        height: 9,
        backgroundColor: appColors.bg,
        borderRadius: 20
    },
    selected: {
        height: 9,
        backgroundColor: "rgba(0, 206, 200, 1)",
        borderRadius: 20
    },
    Row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    RenderSvgIcon: {
        position: 'absolute',
        right: 0,
        marginTop: -3,
        color:"rgba(0, 206, 200, 1)",
    },
    Title: {
        fontSize: 12,
        fontWeight: '400',
        color: appColors.black
    }
})