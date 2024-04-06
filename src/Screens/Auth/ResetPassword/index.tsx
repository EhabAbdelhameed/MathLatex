import {View, Text, Image, Alert, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {RenderSvgIcon} from 'components/atoms/svg';
import {Formik} from 'formik';

import Button from 'components/molecules/Button';

import AuthTopSection from 'components/molecules/AuthTopSection';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {appColors} from 'theme/appColors';
import {useNavigation, useRoute} from '@react-navigation/native';

import {SafeAreaView} from 'react-native-safe-area-context';

import {ForgetSchema, ResetSchema} from 'src/Formik/schema';
import {useSelector} from 'react-redux';
import CustomInput from 'components/molecules/Input/CustomInput';
import Header from 'components/molecules/Header';
import { useAppDispatch } from 'src/redux/store';
import AuthThunks from 'src/redux/auth/thunks';

const ResetPassword = () => {
  const navigation = useNavigation();
  const {email, otpValue}: any = useRoute().params;
  const dispatch = useAppDispatch();
  const [loading, setLoading] = React.useState(false);
  // const loading = useLoadingSelector(AuthThunks.doResetPassword());

  const _handleNavigate = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Header Title="Reset Password" onPress={_handleNavigate} />
      <View style={{paddingHorizontal: 20}}>
        <KeyboardAwareScrollView
          contentContainerStyle={{
            // alignItems: "center",
            // paddingBottom: 100,
            // backgroundColor: appColors.bg,
          }}
          enableOnAndroid={true}
          keyboardShouldPersistTaps={'handled'}
          enableResetScrollToCoords={false}
          showsVerticalScrollIndicator={false}>
          <Formik
            validationSchema={ResetSchema}
            initialValues={{Password: '', confirmPassword: ''}}
            onSubmit={values => {
              setLoading(true);
              const formData = new FormData();

              formData.append('email', email?.toLowerCase());
              formData.append('OTP', otpValue);

              formData.append('password', values.Password);
              formData.append('password_confirmation', values.confirmPassword);

              dispatch(AuthThunks.doResetPassword(formData)).then((res: any) => {
                if (res?.meta?.requestStatus == 'fulfilled'){
                  navigation.navigate('login');
                }
                setLoading(false)
              })
  
            }}>
            {(props: any) => (
              <View style={{marginTop: 20, gap: 20}}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    // marginTop: 20,
                    color: appColors.White50,
                  }}>
                  New password
                </Text>
                <CustomInput
                  {...props}
                  Label="Password"
                  placeholder={'********'}
                  secureTextEntry={true}
                />

                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    // marginTop: 20,
                    color: appColors.White50,
                  }}>
                  Confirm New password
                </Text>
                <CustomInput
                  {...props}
                  Label="confirmPassword"
                  placeholder={'********'}
                  secureTextEntry={true}
                />

                <Button text={'Save Change'} onPress={() => {}} />
              </View>
            )}
          </Formik>
        </KeyboardAwareScrollView>
      </View>

      <View
        style={{
          backgroundColor: '#FFF',
          borderRadius: 16,
          height: 5,
          width: 150,
          position: 'absolute',
          bottom: 1,
          left: 100,
    
        }}
      />
    </SafeAreaView>
  );
};

export default ResetPassword;
