import React, {useState} from 'react';
import {
  Text,
  Dimensions,
  View,
  TouchableOpacity,
  Settings,
  Image,
  Platform,
} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
// import { Back, ContactUs, LogOut, Privcy } from 'assets/svgs';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {useAppDispatch} from 'src/redux/store';
import AuthSlice, {selectUser} from 'src/redux/auth';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {
  AVATAR,
  ArrowDown,
  ImageDrawer,
  LogOut,
  Packages,
  Setting,
} from 'assets/Svgs';
import {RenderSvgIcon} from 'components/atoms/svg';
// import {appColors} from 'theme/appColors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppThunks from 'src/redux/app/thunks';
import {SafeAreaView} from 'react-native-safe-area-context';
import LangSlice, {selectLang} from 'src/redux/lang';
import {useTranslation} from 'react-i18next';
import Modal from 'react-native-modal';
import {appColors} from 'theme/appColors';
import AuthThunks from 'src/redux/auth/thunks';
import {ActivityIndicator} from 'react-native';
import User from 'screens/App/Search/components/User';

const CustomSidebarMenu = (props: any) => {
  const {t, i18n} = useTranslation();
  const {height} = Dimensions.get('window');
  const dispatch = useAppDispatch();
  const [showReactionsModal, setShowReactionsModal] = useState(false);
  const [load, setLoad] = useState(false);
  const LogOutFun = () => {
    dispatch(AuthSlice.chnageisAuth(false));
    AsyncStorage.setItem('USER_TOKEN', '');
    AsyncStorage.setItem('USER_ACCESS_TOKEN', '');

    dispatch(AuthSlice.changeCurentData([]));
  };
  const navigation = useNavigation<any>();
  //   const dispatch = useAppDispatch();
  const USER = useSelector(selectUser);
 
  const lang = useSelector(selectLang);
  const deleteAccount = () => {
    setLoad(true);
    dispatch(AuthThunks.doDeleteAccount(USER?.user_id)).then(() => {
      setLoad(false);
      setShowReactionsModal(false);
      setTimeout(() => {
        dispatch(AuthSlice.logout());
        dispatch(AuthSlice.chnageisAuth(false));
        navigation.replace('auth');
      }, 500);
    });
  };
  // dispatch(LangSlice.chnageLang(lang === 'ar' ? 'en' : 'ar'))
  return (
    <SafeAreaView
      edges={['']}
      style={[styles.Container, {direction: lang == 'ar' ? 'rtl' : 'ltr'}]}>
      <DrawerContentScrollView {...props}>
        <LinearGradient
          start={{x: 1, y: 0}}
          end={{x: 0, y: 0}}
          colors={['#EDBC33', '#1D5EDD', '#00CEC8']}
          style={{
            width: '100%',
            height: 120,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            marginTop: Platform.OS == 'ios' ? -30 : -10,
            // position: 'absolute',
            // top: 0,
          }}></LinearGradient>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            marginTop: Platform.OS == 'ios' ? -50 : -50,
          }}>
          {USER?.avatar == null ? (
            <View
              style={{
                width: 96,
                height: 96,
                borderRadius: 96,
                // borderWidth: 1,
                // borderColor: '#DDD',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#E8EFFC',
              }}>
              <AVATAR height={48} width={48} />
            </View>
          ) : (
            <Image
              source={{uri: USER?.avatar}}
              style={{width: 96, height: 96, borderRadius: 96}}
              resizeMode="cover"
            />
          )}

          <View style={{marginTop: 10, flexDirection: 'row', columnGap: 5}}>
            <Text
              style={{
                fontSize: 22,
                color: '#000',
                fontWeight: '600',
                fontFamily: 'Noto Sans',
                textAlign: lang == 'ar' ? 'right' : 'left',
              }}>
              {USER?.name}
            </Text>
            <RenderSvgIcon
              icon="RIGHTACCOUNT"
              width={20}
              height={20}
              color={'#FFF'}
              style={{marginTop: 5}}
            />
          </View>
          {USER?.job_title == null ? null : (
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                fontFamily: 'Noto Sans',
                textAlign: lang == 'ar' ? 'right' : 'left',
              }}>
              {USER?.job_title}
            </Text>
          )}
          <View style={{flexDirection: 'row', marginTop: 15, columnGap: 10}}>
            <View style={styles.subContainer}>
              <Text style={styles.subText}>{t('premium')}</Text>
            </View>
            <View style={styles.statuesContainer}>
              <Text style={styles.statuesText}>{t('online')}</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() =>
              USER?.user_data?.user_type == 'company' ||
              USER?.user_data?.user_type == 'company_admin'
                ? navigation.navigate('ProfileCompanyScreen')
                : navigation.navigate('ProfileScreen')
            }
            style={{
              width: '80%',
              height: 50,
              backgroundColor: '#1D5EDD',
              marginTop: 15,
              borderRadius: 16,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{fontFamily: 'Noto Sans', fontSize: 18, color: '#FFF'}}>
              {t('View profile')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '80%',
              height: 50,
              backgroundColor: '#E8EFFC',
              marginTop: 15,
              borderRadius: 16,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              columnGap: 10,
            }}>
            <Text
              style={{
                fontFamily: 'Noto Sans',
                fontSize: 18,
                color: '#1D5EDD',
              }}>
              {t('Switch profile')}
            </Text>
            <ArrowDown />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              dispatch(LangSlice.chnageLang(lang === 'ar' ? 'en' : 'ar'))
            }
            style={{
              width: '80%',
              height: 50,
              backgroundColor: '#E8EFFC',
              marginTop: 15,
              borderRadius: 16,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              columnGap: 10,
            }}>
            <Text
              style={{
                fontFamily: 'Noto Sans',
                fontSize: 18,
                color: '#1D5EDD',
              }}>
              {t('Switch Language')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setShowReactionsModal(true)}
            style={{
              width: '80%',
              height: 50,
              backgroundColor: 'red',
              marginTop: 15,
              borderRadius: 16,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{fontFamily: 'Noto Sans', fontSize: 18, color: '#FFF'}}>
              {t('Delete account')}
            </Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>

      <View style={{position: 'absolute', bottom: 10}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            columnGap: 10,
            marginBottom: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Packages width={30} />
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Noto Sans',
              fontWeight: '500',
              color: '#0C275D',
              width: '50%',
            }}>
            {t('Packages')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            columnGap: 10,
            marginBottom: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Setting width={30} />
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Noto Sans',
              fontWeight: '500',
              color: '#0C275D',
              width: '50%',
            }}>
            {t('Settings')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={LogOutFun}
          style={{
            flexDirection: 'row',
            columnGap: 10,
            marginBottom: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <LogOut width={30} />
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Noto Sans',
              fontWeight: '500',
              color: '#0C275D',
              width: '50%',
            }}>
            {t('Log out')}
          </Text>
        </TouchableOpacity>
      </View>
      <Modal
        isVisible={showReactionsModal}
        onBackButtonPress={() => setShowReactionsModal(false)}
        onBackdropPress={() => setShowReactionsModal(false)}>
        <View
          style={{
            // marginHorizontal: 20,
            position: 'absolute',
            top: 300,
            right: 5,
            width: '100%',
            paddingHorizontal: 20,
            justifyContent: 'center',
            paddingVertical: 6,
            borderRadius: 16,

            backgroundColor: '#FFF',
          }}>
          <Text
            style={{
              fontSize: 20,
              color: '#191919',
              fontFamily: 'Noto Sans',
              fontWeight: '500',
            }}>
            {t('Are you sure to delete the account')}
          </Text>
          <View style={{flexDirection: 'row', columnGap: 10, marginTop: 20}}>
            <TouchableOpacity onPress={deleteAccount}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 20,
                backgroundColor: appColors.primary,
                paddingVertical: 8,
                borderRadius: 16,
                width: '50%',
              }}>
              {load ? (
                <ActivityIndicator color={'#FFF'} size={'small'} />
              ) : (
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Noto Sans',
                    fontWeight: '500',
                    color: '#FFF',
                  }}>
                  Yes
                </Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setShowReactionsModal(false)}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 20,
                backgroundColor: appColors.primary,
                paddingVertical: 8,
                borderRadius: 16,
                width: '50%',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Noto Sans',
                  fontWeight: '500',
                  color: '#FFF',
                }}>
                No
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default CustomSidebarMenu;
