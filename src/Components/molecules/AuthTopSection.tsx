import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import React from 'react';
import {appSizes} from '../../theme/appSizes';
import {appColors} from '../../theme/appColors';
import {RenderSvgIcon} from '../atoms/svg';

const AuthTopSection = ({
  title,
  subtitle,
  style,
  titleStyle,
  subTitleStyle,
}: {
  title: string;
  subtitle: string;
  style?:ViewStyle;
  titleStyle?:TextStyle;
  subTitleStyle?:TextStyle;
}) => {
  return (
    <View style={styles.loginTextContainer}>
      <View style={{width:32}}>
        {/* <RenderSvgIcon icon="ICON2CV" width={32} height={48} /> */}
      </View>
      <View style={[{alignItems:"center",justifyContent:'center'},{...style}]}>
        <Text style={[styles.loginText,{...titleStyle}]}>{title}</Text>
        <Text style={[styles.loginTextSub,{...subTitleStyle}]}>{subtitle}</Text>
      </View>
      <View>
        <RenderSvgIcon
          icon="ICONCV"
          width={40}
          height={48}
          style={styles.yellowIcon}
        />
      </View>
    </View>
  );
};

export default AuthTopSection;

const styles = StyleSheet.create({
  loginTextContainer: {
    marginTop: appSizes.spacing_x,
    flexDirection: 'row',
    flexBasis: 'auto',
    justifyContent: 'space-between',
    marginBottom: appSizes.spacing_m,
    fontFamily:'Noto Sans'
  },
  loginText: {
    color: appColors.textColor,
    fontSize: appSizes.font_xxxxxl-10,
    textAlign: 'center',
    fontWeight: '700',
    fontFamily:'Noto Sans'
  },
  loginTextSub: {
    color: appColors.textColor,
    fontSize: appSizes.font_xs-2,
    textAlign: 'center',
    // fontWeight: '100', 
    // width: appSizes.width * 0.6,
    lineHeight: 20,
    marginTop:5,
    fontFamily:'Noto Sans'
  },
  yellowIcon: {
    // marginTop: 5,
  },
});
