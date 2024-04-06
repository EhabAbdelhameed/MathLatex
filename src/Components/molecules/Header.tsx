import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {RenderSvgIcon} from '../atoms/svg';
import {appColors} from '../../theme/appColors';

import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {MathLogo} from 'assets/Svgs';

const Header = ({
  Title,
  onPress = () => {},
}: {
  Title?: string;
  onPress?: () => void;
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        style={styles.Row}
        onPress={onPress}
        activeOpacity={0.8}>
        <RenderSvgIcon
          icon="ARROWBACK"
          width={18}
          height={18}
          color={appColors.White50}
        />
      </TouchableOpacity>
      {Title && <Text style={styles.Title}>{Title}</Text>}
     
      <MathLogo />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  Container: {
    // backgroundColor: appColors.bg,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  Row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width:38,
    height:38,
    borderRadius: 38 ,
    backgroundColor: '#462D80'
  },
  Title: {
    fontSize: 22,
    fontWeight: '700',
    color: appColors.White50,
    marginLeft: 10,
    fontFamily: 'Noto Sans',
  },
});
