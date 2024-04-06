import React, { useState } from 'react';
import { Input } from 'react-native-elements';
import { RenderSvgIcon, TName } from '../atoms/svg';
import { FormikProps } from 'formik';
import { Text, View, TouchableOpacity } from 'react-native';
import NewPicker from './PhonePicker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useAppSelector } from 'src/redux/store';
import { selectLang } from 'src/redux/lang';
const InputView = ({
  name,
  placeholder,

  iconName,
  secure = false,
  touched,
  errors,

  value,
  setSearchQuery,
  setSelectedCompanyName,
  ...props
}: {
  name: string;
  placeholder: string;
  props: FormikProps<any>;
  iconName?: TName;
  secure?: boolean;
  touched?: any;
  errors?: any;
  value?: any;
  setSearchQuery?: any;
  setSelectedCompanyName?: any;
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const lang = useAppSelector(selectLang);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Input
        keyboardType={name == 'phone' || name == 'otp' ? 'number-pad' : 'default'}
        placeholder={placeholder}
        secureTextEntry={showPassword ? !secure : secure}
        autoComplete="off"
        leftIcon={name == 'phone' ? <NewPicker props={props} /> : <View />}
        rightIcon={
          iconName ? (
            name == 'password' || name == 'confirmPassword' ? (
              <TouchableOpacity
                onPress={toggleShowPassword}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  // borderBottomWidth: 1,
                  // borderColor: 'black',
                  paddingVertical: 10,
                }}>
                {showPassword ?
                  <Icon
                    name={'eye-slash'}
                    size={15}
                    color="#B9B9B9"
                  /> : <RenderSvgIcon icon={iconName} width={16} height={16} />}
              </TouchableOpacity>
            ) : (
              <RenderSvgIcon icon={iconName} width={16} height={16} />
            )
          ) : (
            <View />
          )
        }
        onChangeText={props.handleChange(name)}
        value={props.values.name}
        onBlur={props.handleBlur(name)}
        style={{
          borderBottomWidth: 0,
        }}
        inputContainerStyle={{
          borderRadius: 16,
          borderColor: (errors[name] != undefined && touched[name] != undefined) ? 'red' : '#1D5EDD',
          borderWidth: 1,
          paddingHorizontal: 15,

          // paddingVertical: 4,

          // borderBottomWidth: 0.5,
        }}
        inputStyle={{
          fontSize: 14,
          textAlign: lang == 'ar' ? 'right' : 'left'
          //  color: 'red'
        }}
        placeholderTextColor={'#B9B9B9'}
        // inputStyle={{color:'red'}}
        containerStyle={{
          paddingHorizontal: 0,
          marginVertical: 1,
          height: 60,
        }}
        {...props}
      />
      {/* {errors[name] && touched[name] && (
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Text style={{color: 'red', fontSize: 14,marginBottom:10}}>{errors[name]}</Text>
        </View>
      )} */}
    </>
  );
};

export default InputView;
