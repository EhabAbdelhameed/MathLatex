import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {Form, Formik} from 'formik';
import Button from '../../../Components/molecules/Button';
import SocialCard from '../../../Components/molecules/SocialCard';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {LoginSchema} from 'src/Formik/schema';
import CustomInput from 'components/molecules/Input/CustomInput';
import {
  AppLogo,
  AppLogo1,
  Appel,
  Facebook,
  Google,
  Logo,
  Logo1,
  MathLogo,
  One,
  Star,
  ViewOne,
} from 'assets/Svgs';
import {appColors} from 'theme';
import { BlurView } from '@react-native-community/blur';
import { useAppDispatch } from 'src/redux/store';
import AuthThunks from 'src/redux/auth/thunks';
const Login = () => {
  const navigation = useNavigation<any>();
  const [loading, setLoading] = React.useState(false);
const dispatch=useAppDispatch()
  const _handleNavigate = () => {
    navigation.navigate('ForgetPassword');
  };
  const [index, setIndex] = React.useState(false);
  return (
    <SafeAreaView edges={['top']} style={[styles.container]}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={appColors.appcolor}
      />
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        keyboardShouldPersistTaps={'handled'}
        enableResetScrollToCoords={false}
        showsVerticalScrollIndicator={false}
        >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
            // marginBottom: 10,
            columnGap: 10,
          }}>
            
         <AppLogo1/>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            // marginBottom: 20,
            // columnGap: 10,
            gap: 10,
          }}>
          <Text
            style={{
              color: appColors.White50,
              fontSize: 40,
              fontFamily: 'Noto Sans',
              fontWeight: '700',
            }}>
            Login
          </Text>
          <Text
            style={{
              color: appColors.White50,
              fontSize: 14,
              fontFamily: 'Noto Sans',
              fontWeight: '400',
              marginBottom: 20,
              // marginTop: 10
            }}>
            Log in to compelet your mission
          </Text>
        </View>
        <Formik
          validationSchema={LoginSchema}
          initialValues={{Email: '', Password: ''}}
          onSubmit={values => {
            setLoading(true);
            
            const formdata = new FormData();
            formdata.append('email', values.Email);
            formdata.append('password', values.Password);
             console.log(values)
            dispatch(AuthThunks.doSignIn(formdata)).then((res: any) => {
              setLoading(false);
              // console.log('Verified ', Verified);
              // if (!Verified && signedUp) {
              //   navigation.navigate('Verification', {
              //     email: values.email,
              //     type: 'register',
              //   });
              // }
            });

          }}>
          {(props: any) => (
            <View style={{gap: 20}}>
              <CustomInput
                {...props}
                Label="Email"
                placeholder="Exampel@info.com"
              />
              <CustomInput
                {...props}
                Label={'Password'}
                secureTextEntry={true}
                placeholder="*********"
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  // marginTop: 10,
                  // marginBottom: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',

                    columnGap: 10,
                  }}>
                  <TouchableOpacity
                    onPress={() => setIndex(!index)}
                    style={styles.Circle}>
                    <View style={index ? styles.innerCircle : null} />
                  </TouchableOpacity>
                  <Text
                    style={[
                      styles.forgotPassword,
                      {textDecorationLine: 'none'},
                    ]}>
                    Remember me
                  </Text>
                </View>
                <Text style={styles.forgotPassword} onPress={_handleNavigate}>
                  Forgot password
                </Text>
              </View>

              <Button loading={loading} text={'Login'} onPress={props.handleSubmit} />
              <Button
                text={'Create a new account'}
                style={{backgroundColor: '#CDC3E6'}}
                textStyle={{color: appColors.violt800}}
                onPress={() => navigation.navigate('signup')}
              />
            </View>
          )}
        </Formik>
        <View style={styles.orContainer}>
          <View style={styles.line}></View>
          <Text style={styles.orText}>Or sign up By Social Media</Text>
          <View style={styles.line}></View>
        </View>
        <View>
          <View style={styles.socialContainer}>
            <View style={styles.innerSocialContainer}>
              <Google />
            </View>
            <View style={styles.innerSocialContainer}>
              <Facebook />
            </View>
            <View style={styles.innerSocialContainer}>
              <Appel />
            </View>
          </View>
        </View>
        <View style={{marginTop: 20, position: 'relative', marginBottom: 40}}>
          <View style={{marginLeft: 40}}>
            <ViewOne />
          </View>
          <MathLogo width={72} height={107} style={{position: 'absolute', top: 45}} />
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: '#FFF',
                borderRadius: 16,
                height: 5,
                width: 150,
                position: 'absolute',
                top: 30,
                right: 60,
              }}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;
