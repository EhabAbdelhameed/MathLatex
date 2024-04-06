import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { appSizes } from '../../theme/appSizes';
import { appColors } from '../../theme/appColors';
import { useTranslation } from 'react-i18next';
import { RenderSvgIcon } from '../atoms/svg';
import { useNavigation } from '@react-navigation/native';
import RNRestart from 'react-native-restart';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import LangSlice, { selectLang } from 'src/redux/lang';

const DonotHaveAccountSection = ({
  type = 'Sign up',
  noLang = false,
}: {
  type?: 'Sign up' | 'Log in';
  noLang?: boolean;
}) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const lang = useAppSelector(selectLang);
  const { t, i18n } = useTranslation();
  const _handleNavigation = () => {
    navigation.navigate(type == 'Sign up' ? 'signup' : 'login');
  };

  return (
    <View>
      <View style={[styles.signUpContainer]}>
        <View style={{ flexDirection: 'row', columnGap: 3 }}>
          {/* {lang === 'ar' ? (
            <Text style={styles.signUp} onPress={_handleNavigation}>
              {t(type)}
            </Text>
          ) : null} */}
          <Text style={styles.donot}>
            {type == 'Log in' ? t('alreadyHaveAccount') : t('dontHaveAccount')}
          </Text>
          <Text style={styles.signUp} onPress={_handleNavigation}>
            {t(type)}
          </Text>
          {/* {lang === 'en' ? (
            <Text style={styles.signUp} onPress={_handleNavigation}>
              {t(type)}
            </Text>
          ) : null} */}
        </View>
      </View>
      {!noLang ? (
        <>
          <TouchableOpacity
            onPress={() => {
              dispatch(LangSlice.chnageLang(lang === 'ar' ? 'en' : 'ar'));
              i18n.changeLanguage(lang === 'ar' ? 'en' : 'ar');
              setTimeout(() => {
                // RNRestart.Restart()
            }, 100)
            }}
            style={styles.languageContainer}>
            <RenderSvgIcon icon={'EGYPTFLAG'} />
            <Text style={styles.languageText}>
              {lang === 'en' ? 'العربية' : 'English'}
            </Text>
          </TouchableOpacity>
        </>
      ) : null}
    </View>
  );
};

export default DonotHaveAccountSection;

const styles = StyleSheet.create({
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    marginTop: appSizes.spacing_m,
  },
  donot: {
    color: '#0C0C0C',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Noto Sans',
  },
  signUp: {
    color: '#E8AB00',
    fontSize: 16,
    fontWeight: '500',
    textDecorationColor: '#E8AB00',
    textDecorationLine: 'underline',
    fontFamily: 'Noto Sans',
  },
  language: {
    color: '#000000',
    fontSize: 12,
    fontWeight: '400',
    marginTop: appSizes.spacing_m,
    textAlign: 'center',
    fontFamily: 'Noto Sans',
  },
  languageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginVertical: appSizes.spacing_m,
  },
  languageText: {
    color: appColors.textColor,
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Noto Sans',
  },
});
