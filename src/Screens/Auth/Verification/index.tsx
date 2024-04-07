import {View, Text, Image, Alert, TouchableOpacity} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import styles from './styles';
import {RenderSvgIcon} from '../../../Components/atoms/svg';

import Button from '../../../Components/molecules/Button';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {appColors} from '../../../theme/appColors';

import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation, useRoute} from '@react-navigation/native';

import {useSelector} from 'react-redux';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {MathLogo, SignUpNote, Verfi} from 'assets/Svgs';
import Header from 'components/molecules/Header';
import AuthThunks from 'src/redux/auth/thunks';
import {useAppDispatch} from 'src/redux/store';
import { selectVerified } from 'src/redux/auth';

const Verification = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState('');
  const {email, type}: any = useRoute().params;
  const CELL_COUNT = 4;
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(59);
  const [otpValue, setOtpValue] = React.useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({ value, setValue });
  const Verified = useSelector(selectVerified);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

 

  const ActiveAccount = () => {

    setLoading(true);
    const formData = new FormData();
    formData.append('email', email);
    formData.append('OTP', value);
    console.log(value)
    setOtpValue(value);
    // formData.append('type', type == 'Forget' ? 'reset' : 'verify')
   console.log(formData)
    dispatch(AuthThunks.doVerifyOTP(formData)).then((res: any) => {
      if (res?.meta?.requestStatus == 'fulfilled'){
        if(type=='forget'){
          navigation.navigate('ResetPassword', {email, otpValue});
        }else{
          navigation.navigate('login');
        }
       
      }
      setLoading(false)
    })

  };

  const ResendOTP = () => {
    const formData = new FormData();
    formData.append('email', email?.toLowerCase());

    dispatch(AuthThunks.doResendCode(formData));
    setSeconds(59);
  };
  /* */
  const _handleNavigate = useCallback(() => {
    navigation.goBack();
  }, []);
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Header onPress={_handleNavigate} />
      <View style={{paddingHorizontal: 20}}>
        <KeyboardAwareScrollView
          contentContainerStyle={{
            // alignItems: "center",
            paddingBottom: 100,
            // backgroundColor: appColors.bg,
          }}
          enableOnAndroid={true}
          keyboardShouldPersistTaps={'handled'}
          enableResetScrollToCoords={false}
          showsVerticalScrollIndicator={false}>
          <View style={{}}>
            {/* <RenderSvgIcon
                icon="ARROWBACK"
                style={{transform:lang=='ar'?[{rotate: '180deg'}]:[{rotate: '0deg'}]}}
                width={30}
                height={30}
                color={appColors.primary}
              /> */}
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              // marginTop: 10,
            }}>
            <Verfi />
          </View>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text
              style={{
                fontSize: 40,
                fontWeight: '700',
                marginTop: 20,
                color: appColors.White50,
              }}>
              OTP Verification
            </Text>
            <View style={{paddingHorizontal: 10}}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  marginTop: 20,
                  color: appColors.White50,
                }}>
                We will send you a one time password on this
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                marginTop: 5,
                color: appColors.White50,
              }}>
              email address
            </Text>
          </View>

          <View style={{gap: 20}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
                marginTop: 20,
                color: appColors.White50,
              }}>
              Enter otp code
            </Text>
            <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={{}}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({index, symbol, isFocused}: any) => (
                <View
                  // onLayout={getCellOnLayoutHandler(index)}
                  key={index}
                  style={[styles.cellRoot, isFocused && styles.focusCell]}>
                  <Text style={styles.cellText}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                </View>
              )}
            />
            <View
              style={{
                flexDirection: 'row',
                // alignItems: 'center',
                // justifyContent: 'center',
              }}>
              <Text
                disabled={seconds != 0}
                onPress={() => ResendOTP()}
                style={styles.resendCode}>
                Resend the code
              </Text>
              {seconds != 0 && (
                <Text style={styles.resendCode}>
                  {minutes}:{seconds}
                </Text>
              )}
            </View>

            <Button
              loading={loading}
              text={'Verify'}
              onPress={() => ActiveAccount()}
            
            />
          </View>
          <View style={{marginTop: 20, position: 'relative', marginBottom: 50}}>
            <View style={{marginLeft: 40}}>
              <SignUpNote />
            </View>
            <MathLogo
              width={72}
              height={90}
              style={{position: 'absolute', top: 35}}
            />
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={{
                  backgroundColor: '#FFF',
                  borderRadius: 16,
                  height: 5,
                  width: 150,
                  position: 'absolute',
                  top: 40,
                  right: 60,
                }}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Verification;
