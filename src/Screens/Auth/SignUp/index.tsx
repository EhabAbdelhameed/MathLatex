import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  StatusBar,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
} from 'react-native';

import styles from './styles';

// import Rectangle1Img from './../../../assets/images/Rectangle1.jpg';
// import Rectangle1Img2 from './../../../assets/images/Rectangle4.jpg';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {appColors} from '../../../theme/appColors';

import {SafeAreaView} from 'react-native-safe-area-context';

import {useNavigation} from '@react-navigation/native';
import {
  AppLogo,
  AppLogo1,
  EmpatyImage,
  Female,
  Logo,
  Logo1,
  Male,
  MathLogo,
  One,
  SignUpNote,
  ViewOne,
} from 'assets/Svgs';
import {Formik} from 'formik';
import CustomInput from 'components/molecules/Input/CustomInput';
import {LoginSchema, RegistSchema} from 'src/Formik/schema';
import Button from 'components/molecules/Button';
import DropdownComponent from './components/DropDown';
import countries from '../../../../contries';
import schools from '../../../../Schools';
import gradeLevels from '../../../../GradeLevel';
import AppThunks from 'src/redux/app/thunks';
import {useAppDispatch} from 'src/redux/store';
import AuthThunks from 'src/redux/auth/thunks';
import {useSelector} from 'react-redux';
import {launchImageLibrary} from 'react-native-image-picker';
import {selectCountries, selectLevels, selectSchools} from 'src/redux/auth';
import DocumentPicker from 'react-native-document-picker';
const SignUp = () => {
  const navigation = useNavigation<any>();
  const {width, height} = useWindowDimensions();
  const [index, setIndex] = React.useState<any>('');
  const [loading, setLoading] = React.useState(false);
  const dispatch = useAppDispatch();
  const Countries = useSelector(selectCountries);
  const Schools = useSelector(selectSchools);
  const Levels = useSelector(selectLevels);
  const [country_id, setCountry_id] = useState<any>('');
  const [school_id, setSchool_id] = useState<any>('');
  const [level_id, setLevel_id] = useState<any>('');
  const [source, setSource] = useState<any>([]);

  useEffect(() => {
    const renderFunction = () => {
      dispatch(AuthThunks.doGetCountries());

      dispatch(AuthThunks.doGetLevels());
    };

    return renderFunction;

    // Cleanup function to remove the listener when the component unmounts
  }, []);
  useEffect(() => {
    
 
      // dispatch(AuthThunks.doGetCountries());
      if (country_id && country_id !== '') {
        console.log("country_id", country_id);
      dispatch(AuthThunks.doGetSchools(country_id));
      }
      // dispatch(AuthThunks.doGetLevels());
  

 

    // Cleanup function to remove the listener when the component unmounts
  }, [navigation, country_id]);

  const pick = (props:any) => {
    launchImageLibrary({quality: 0.5, mediaType: 'photo'}).then((res: any) => {
      setSource(res?.assets);
      props?.setFieldValue('avatar', res?.assets[0]?.uri);
      // console.log(res);
    });
  };
  const UploadImageProfile = async (props:any) => {
    requestCameraPermission();
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });

      // The selected media is available in the result.uri
      // dispatch(setImageURL(result[0].uri));

      setSource(result);
      props?.setFieldValue('avatar', result[0]?.uri);
      
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled document picker');
      } else {
        console.error('DocumentPicker Error:', err);
      }
    }
  };
  async function requestCameraPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs access to your camera',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera permission granted');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }
  
  // console.log(height/3)
  return (
    <SafeAreaView edges={['top']} style={[styles.container]}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={appColors.appcolor}
      />
      <KeyboardAwareScrollView
        contentContainerStyle={
          {
            // paddingBottom: 0,
            // backgroundColor: appColors.bg,
          }
        }
        enableOnAndroid={true}
        keyboardShouldPersistTaps={'handled'}
        enableResetScrollToCoords={false}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
            // marginBottom: 10,
            columnGap: 10,
          }}>
          <AppLogo1 />
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
            Sign up
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
            Sign up to gain a super power
          </Text>
        </View>
        
        <Formik
          validationSchema={RegistSchema}
          initialValues={{
            Email: '',
            Password: '',
            Name: '',
            Country_id: '',
            School_id: '',
            Grade_id: '',
            gender:'',
            confirmPassword: '',
            avatar:'',
          }}
          onSubmit={values => {
           setLoading(true)
            const formdata = new FormData();
            formdata.append('email', values.Email);
            formdata.append('password', values.Password);
            formdata.append('name', values.Name);
            formdata.append('country_id', values.Country_id);
            formdata.append('school_id', values.School_id);
            formdata.append('grade_level_id', values.Grade_id);
            formdata.append('gender', values.gender);
            formdata.append('password_confirmation', values.confirmPassword);
          if(source.length!=0){
            formdata.append('avatar', {
              uri: source[0]?.uri,
              type: source[0]?.type,
              name:
                Platform.OS == 'ios'
                  ? source[0]?.fileName
                  : source[0]?.name,
            })
          } 
            console.log(JSON.stringify(formdata));
            dispatch(AuthThunks.doSignUp(formdata)).then((res: any) => {
              if (res?.meta?.requestStatus == 'fulfilled'){
                navigation.navigate('Verification', {email: values.Email,type:'signup'});
              }
              setLoading(false)
            })

          }}>
          {(props: any) => (

            <View style={{gap: 20}}>
              <View
          style={{
            flexDirection: 'row',
            gap: 15,
            // marginTop: 20,
            // marginBottom: 20,
          }}>
          <TouchableOpacity
            onPress={()=>Platform.OS == 'ios' ? pick(props) : UploadImageProfile(props)}
            style={[styles.UploadImage, {borderColor: props?.errors['avatar']&&props?.touched['avatar'] ? 'red' : appColors.White50}]}>
            {source == undefined || source?.length == 0 ? (
              <EmpatyImage />
            ) : (
              <Image
                source={{uri: source[0]?.uri}}
                style={{width: 64, height: 64, borderRadius: 64}}
                resizeMode="cover"
              />
            )}
          </TouchableOpacity>
          <View style={{justifyContent: 'center', gap: 5}}>
            <Text
              style={{
                color: appColors.White50,
                fontSize: 16,
                fontFamily: 'Noto Sans',
                fontWeight: '400',
                // marginBottom: 20,
                // marginTop: 10
              }}>
              Upload profile image
            </Text>
            <Text
              style={{
                color: appColors.White50,
                fontSize: 12,
                fontFamily: 'Noto Sans',
                fontWeight: '400',
                // marginBottom: 20,
                // marginTop: 10
              }}>
              form 1 mb to 3 mb
            </Text>
          </View>
        </View>
              
              <CustomInput {...props} Label="Name" placeholder="June Johns" />
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
              <CustomInput
                {...props}
                Label="confirmPassword"
                placeholder={'Confirm Password'}
                secureTextEntry={true}
              />
             
              <Text
                style={{
                  color:props?.errors['gender'] && props?.touched['gender'] ?'red' :appColors.White50,
                  fontSize: 18,
                  fontFamily: 'Noto Sans',
                  fontWeight: '400',
                  marginBottom: 20,
                  marginTop: 10,
                  
                }}>
                Gender
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                  marginTop: -30,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setIndex(0);
                    props?.setFieldValue('gender', 'female');
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                      alignContent: 'center',
                      opacity: index === 0 ? 0.3 : 1,
                      // backgroundColor: '#000',
                    }}>
                    <Female />
                    <Text
                      style={{
                        color: appColors.White50,
                        fontSize: 18,
                        fontFamily: 'Noto Sans',
                        fontWeight: '400',
                        marginBottom: 20,
                        // textAlign:'center'
                        marginTop: 25,
                      }}>
                      Female
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setIndex(1);
                    props?.setFieldValue('gender', 'male');
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                      alignContent: 'center',
                      opacity: index === 1 ? 0.3 : 1,
                      // backgroundColor: '#000',
                    }}>
                    <Male />
                    <Text
                      style={{
                        color: appColors.White50,
                        fontSize: 18,
                        fontFamily: 'Noto Sans',
                        fontWeight: '400',
                        marginBottom: 20,
                        marginTop: 25,
                      }}>
                      male
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <DropdownComponent
                DropdownArray={'Country'}
                data={Countries}
                setCountry_id={setCountry_id}
                props={props}
              />
              <DropdownComponent
                DropdownArray={'School Name'}
                data={Schools}
                setSchool_id={setSchool_id}
                props={props}
              />
              <DropdownComponent
                DropdownArray={'Grade Level'}
                data={Levels}
                setLevel_id={setLevel_id}
                props={props}
              />

              <Button
                text={'Create a new account'}
                onPress={props.handleSubmit}
                loading={loading}
              />
              {/* <TouchableOpacity onPress={() => navigation.navigate('login')} style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}> */}
              <TouchableOpacity
                onPress={() => navigation.navigate('Verification')}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: appColors.White50,
                    fontSize: 14,
                    fontWeight: '700',
                  }}>
                  Already have an account ? Log in
                </Text>
              </TouchableOpacity>
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
    </SafeAreaView>
  );
};

export default SignUp;
