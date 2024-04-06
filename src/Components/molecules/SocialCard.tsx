import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RenderSvgIcon, TName} from '../atoms/svg';
import {appColors} from 'theme/appColors';
import {appSizes} from 'theme/appSizes';

const SocialCard = ({iconName}: {iconName: TName}) => {
  return (
    <View style={styles.container}>
      <RenderSvgIcon icon={iconName} color='#FFF'/>
      
    </View>
  );
};

export default SocialCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width:60,
    height:60,
    

    borderWidth: 1,
    borderColor: appColors.textColor,
   
    borderRadius: 60,
  
  
  },
  text: {
    fontSize: 17,
    fontWeight: '500',
    color: appColors.textColor,
    fontFamily:'Noto Sans'
  },
});
