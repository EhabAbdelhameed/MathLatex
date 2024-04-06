import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {appColors} from '../../theme/appColors';

const RadioButton = ({checked}: {checked: boolean}) => {
  return (
    <View style={styles.radioContainer}>
      <View
        style={{
          ...styles.radioContainerInner,
          backgroundColor: checked ? appColors.primary : 'transparent',
        }}></View>
    </View>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  radioContainer: {
    width: 24,
    height: 24,
    padding: 3,
    borderColor: appColors.primary,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  radioContainerInner: {
    width: 15,
    height: 15,
    borderRadius: 50,
  },
});
