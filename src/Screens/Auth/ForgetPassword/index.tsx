import {View, Text, Image, Alert, TouchableOpacity} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import styles from './styles';
import {RenderSvgIcon} from '../../../Components/atoms/svg';
import {Formik} from 'formik';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

import CustomInput from 'components/molecules/Input/CustomInput';
import {appColors} from 'theme';
import Button from 'components/molecules/Button';
import {ForgetSchema} from 'src/Formik/schema';
import Header from 'components/molecules/Header';
import {ForgetLogo, MathLogo, SignUpNote} from 'assets/Svgs';
import AuthThunks from 'src/redux/auth/thunks';
import {useAppDispatch} from 'src/redux/store';

const ForgetPassword = () => {
  const navigation = useNavigation<any>();
  const [email, setEmail] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const dispatch = useAppDispatch();
  // const loading = useLoadingSelector(AuthThunks.doResetPassword());
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
          <ForgetLogo />
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text
              style={{
                fontSize: 40,
                fontWeight: 'bold',
                marginTop: 20,
                color: appColors.White50,
              }}>
              Did you forget
            </Text>
            <Text
              style={{
                fontSize: 40,
                fontWeight: 'bold',
                marginTop: 2,
                color: appColors.White50,
              }}>
              {' '}
              your password ?
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '400',
                marginTop: 10,
                color: appColors.White50,
              }}>
              We will send you a one-time password on your email
            </Text>
          </View>
          <Formik
            validationSchema={ForgetSchema}
            initialValues={{Email: ''}}
            onSubmit={values => {
              setLoading(true);
              const formData = new FormData();
              formData.append('email', values.Email);
              setEmail(values.Email);
              dispatch(AuthThunks.doForgetPassword(formData)).then(
                (res: any) => {
                  if (res?.meta?.requestStatus == 'fulfilled') {
                    navigation.navigate('Verification', {
                      email: values.Email,
                      type: 'forget',
                    });
                  }
                  setLoading(false);
                },
              );
            }}>
            {(props: any) => (
              <View style={{marginTop: 20, gap: 20}}>
                <CustomInput
                  {...props}
                  Label="Email"
                  placeholder={'Exampel@info.com'}
                />
                <Button
                  loading={loading}
                  text={'Send'}
                  onPress={props.handleSubmit}
                />
              </View>
            )}
          </Formik>
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

export default ForgetPassword;
