import React, {useState} from 'react';
import {View, TouchableOpacity, TextInput, TextInputProps, Text} from 'react-native';
import {styles} from './styles';
import {ShowPassword, EyeOff, Right, Email} from 'assets/Svgs';
import { appColors } from 'theme';

const CustomInput = ({
  values,
  Label,
  handleChange,
  handleBlur,
  touched,
  errors,
  placeholder,
  secureTextEntry,
  maxLength,
  color,
  ...props
}: {
  Label?: any;
  values: any;
  handleChange: any;
  handleBlur?: any;
  touched?: any;
  errors?: any;
  secureTextEntry?: boolean;
  color?: any;
  maxLength?: number;
} & TextInputProps) => {
  const [secure, setSecure] = React.useState(true);
  
  return (
    <>
      <View
        style={[
          styles.Container,
          {
            borderColor:
              errors[Label] && touched[Label]
                ? 'red'
                :appColors.violt200,
          },
        ]}>
          <View style={styles.line}>
          <Text style={styles.label}>{Label=='confirmPassword'?'Password':Label}</Text>
             
              </View>
        <TextInput
          {...props}
          value={values[Label]}
          placeholder={placeholder}
          maxLength={maxLength}
          style={[styles.Input,{width:Label == 'Password'||Label == 'confirmPassword' ? '60%' : '80%'}]}
          placeholderTextColor={appColors.violt200}
         
          secureTextEntry={secureTextEntry ? secure : false}
          onChangeText={handleChange(Label)}
        />
        {/* {Label == 'Email' &&
          (errors[Label] == undefined && values[Label] != '' ? (
            <Right fill={'green'} width={24} height={24}/>
          ) : (
            <Email  width={24} height={24}/>
          ))} */}
        {secureTextEntry &&
          (secure ? (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setSecure(false)}>
              <ShowPassword  />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setSecure(true)}>
              <EyeOff width={24} height={24} />
            </TouchableOpacity>
          ))}
      </View>
    </>
  );
};

export default CustomInput;
