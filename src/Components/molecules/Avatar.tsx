import { View, Text, Image, ViewStyle, ImageStyle, ImageBackground } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { RenderSvgIcon } from '../atoms/svg';
import { Avatar } from 'react-native-elements';

const AvatarIcon = (
  {
    imgUrl = '',
    style,
    imgStyle,
    noActive = false
  }: {
    imgUrl?: string | any;
    style?: ViewStyle;
    imgStyle?: ImageStyle;
    noActive?: boolean;
  }) => {

  return (
    <View style={[styles.containerAvatar, { ...style }]}>
      <ImageBackground
        imageStyle={[styles.avatar, { ...imgStyle }]}
        style={[styles.avatar, { ...imgStyle }]}
        source={imgUrl?.includes('http') ? { uri: imgUrl } : imgUrl}
      >
        {noActive ? null : <View style={styles.activeContainer}>
          <RenderSvgIcon
            icon='ACTIVE'
            width={12}
            height={12}
          />
        </View>}
      </ImageBackground>
      {/* <Avatar
        source={imgUrl.includes('http') ? { uri: imgUrl } : imgUrl}
        style={[styles.avatar, { ...imgStyle }]}
        rounded
        avatarStyle={[styles.avatar, { ...imgStyle }]}
      /> */}

    </View>
  )
}

export default AvatarIcon