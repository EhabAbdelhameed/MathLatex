import { useState } from "react"
import { styles } from "./styles"
import { Text, TouchableOpacity, View } from "react-native"
import { RenderSvgIcon } from "../../Components/atoms/svg"
import { appColors } from "../../theme/appColors"
import PlusAbs from "./Plus"

export function MyTabBar({ state, descriptors, navigation }:
    { state: any, descriptors: any, navigation: any }) {
    
    // const [isOpened, setIsOpened] = useState(false)
    // const [inHome, setInHome] = useState(true)
    // const [isOpenedAnimation, setIsOpenedAnimation] = useState(false)
    const Placholder = () => {
        return (
            <View
                style={styles.placeholder}
            />
        )
    }
 
    return (
        <>
            {/* <View style={{backgroundColor:"#a00",padding:10}}> */}
                <View style={styles.tabContainer}>
                    {state.routes.map((route: any, index: number) => {
                        const { options } = descriptors[route.key];
                        const isFocused = state.index === index;
                        const onPress = () => {
                            // setInHome(false)
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                                canPreventDefault: true,
                            });
                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate(route.name);
                            }
                        };
                        const onLongPress = () => {
                            navigation.emit({
                                type: 'tabLongPress',
                                target: route.key,
                            });
                        };
                        const Icon = () => {
                            if (route.name === 'Home' && isFocused) {
                                return <RenderSvgIcon icon="HOME" color={appColors.primary} />
                            } else if (route.name === "Home") {
                                return <RenderSvgIcon icon="HOME" color={appColors.purple} />
                            } else if (route.name === 'Camera' && isFocused) {
                                return <RenderSvgIcon icon="CAMERA" color={appColors.primary} />
                            } else if (route.name === "Camera") {
                                return <RenderSvgIcon icon="CAMERA" color={appColors.purple} />
                            } else if (route.name === 'Connections' && isFocused) {
                                return <RenderSvgIcon icon="CONNECTIONS" color={appColors.primary} />
                            } else if (route.name === "Connections") {
                                return <RenderSvgIcon icon="CONNECTIONS" color={appColors.purple} />
                            } else if (route.name === 'Calendar' && isFocused) {
                                return <RenderSvgIcon icon="CALENDAR" color={appColors.primary} />
                            } else if (route.name === "Calendar") {
                                return <RenderSvgIcon icon="CALENDAR" color={appColors.purple} />
                            } else if (route.name === 'Bag' && isFocused) {
                                return <RenderSvgIcon icon="BAG" color={appColors.primary} />
                            } else if (route.name === "Bag") {
                                return <RenderSvgIcon icon="BAG" color={appColors.purple} />
                            }
                        }
                        return (
                            <>
                                {
                                    <TouchableOpacity
                                        accessibilityRole="button"
                                        activeOpacity={1}
                                        accessibilityState={isFocused ? { selected: true } : {}}
                                        accessibilityLabel={options.tabBarAccessibilityLabel}
                                        testID={options.tabBarTestID}
                                        onPress={onPress}
                                        onLongPress={onLongPress}
                                        style={styles.btn}
                                    >
                                        <Icon />
                                        {isFocused && <Placholder />}
                                    </TouchableOpacity >
                                }
                            </>
                        );
                    })}

                </View>
                <PlusAbs/>

            {/* </View> */}
        </>
    );
}