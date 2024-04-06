import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { PLUSCONTAINER, PLUSTAB } from '../../assets/Svgs'
import Animated, { FadeIn, FadeOut, FadeOutUp } from 'react-native-reanimated'
import { RenderSvgIcon, TName } from '../../Components/atoms/svg'
import { useNavigation } from '@react-navigation/native'
import {  PrimaryParamListKeys } from '../types'
import { selectLang } from 'src/redux/lang'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

const PlusAbs = () => {
  const [isOpened, setIsOpened] = useState(false)
  const navigation = useNavigation<any>()
  const Item = ({ icon, title, nav = 'CreateVideo' }: { icon: TName; title: string; nav?: PrimaryParamListKeys }) => {
    const lang = useSelector(selectLang);

  const {t, i18n} = useTranslation();
    return (
      <TouchableOpacity
        style={styles.btnIconTitle}
        onPress={() => navigation.navigate(nav)}
      >
        <View style={styles.containerIcon}>
          <RenderSvgIcon icon={icon} />
        </View>
        <Text style={styles.text}>{t(title)}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.contianerPlus}>
      {isOpened &&
        <Animated.View
          entering={FadeIn}
        // exiting={FadeOutUp}
        >
          <PLUSCONTAINER
            // style={styles.contianerItems}
            style={{ marginBottom: -4 }}
          />
          <View style={styles.contianerItems}>
            <Item title='Video' icon='VIDEO' nav='CreateVideo'/>
            <Item title='Voice' icon='RECORD' nav='CreateVoice'/>
            <Item title='Photo' icon='PIC' nav="AddPhoto"/>
            <Item title='Live' icon='GOLIVE' />   
            <Item title='Poll' icon='POLL' nav="CreatePull"/>
          </View>

        </Animated.View>
      }
      <PLUSTAB onPress={() => setIsOpened(prev => !prev)} />
    </View>
  )
}

export default PlusAbs