import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {appColors} from '../../theme/appColors';
import LottieView from 'lottie-react-native';
import {ButtonLoader} from 'assets/lotties';

const Button = ({
  text,
  onPress,
  style,
  textStyle,
  loading,
  color,
}: {
  loading?: boolean;
  text: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  color?: string;
}) => {
  return (
    <TouchableOpacity
      disabled={loading}
      onPress={onPress}
      style={[styles.container, {...style}]}>
      {loading ? (
        <LottieView
          autoPlay
          source={ButtonLoader}
          style={{height: 70, width: 100}}
        />
      ) : (
        <Text style={[styles.text, {...textStyle}]}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.buttonColor,
    paddingVertical: 10,
    borderRadius: 16,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D63964',
  },
  text: {
    color: appColors.white,
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: 'Noto Sans',
  },
});
