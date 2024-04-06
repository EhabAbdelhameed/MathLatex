import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import React, {useRef, useState} from 'react';

import {CountryPicker} from 'react-native-country-codes-picker';

import {FormikProps} from 'formik';
import {appSizes} from '../../theme/appSizes';
import {RenderSvgIcon} from '../atoms/svg';
import {styles} from './styles';
export const deafultCode = {
  code: 'EG',
  dial_code: '+20',
  flag: '🇪🇬',
  name: {
    ar: 'مصر',
    bg: 'Египет',
    by: 'Егіпет',
    cn: '埃及',
    cz: 'Egypt',
    de: 'Ägypten',
    ee: 'Egiptus',
    el: 'Αίγυπτος',
    en: 'Egypt',
    es: 'Egipto',
    fr: 'Egypte',
    he: 'מצרים',
    it: 'Egitto',
    jp: 'エジプト',
    nl: 'Egypte',
    pl: 'Egipt',
    pt: 'Egipto',
    ro: 'Egipt',
    ru: 'Египет',
    ua: 'Єгипет',
    zh: '埃及',
  },
};
const NewPicker = ({
  props,
  setcode,
  index,
  setCodes,
  defaultCodes,
}: {
  props?: FormikProps<any>;
  setcode?: any;
  index?: any;
  defaultCodes?:any;
  setCodes?: (newCode: string) => void;
}) => {
    const [selectedCode, setSelectedCode] = useState<any>(
        defaultCodes ? defaultCodes : deafultCode
      );
  const [show, setShow] = useState(false);
  const pickerRef = useRef<any>();

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setShow(true);
        }}
        style={styles.btnPicker}>
        <Text style={styles.textPicker}>{selectedCode?.flag}</Text>
        {/* <Text
                    style={styles.textPicker}>
                    {selectedCode?.dial_code.slice(1, selectedCode?.dial_code - 1)}
                </Text> */}
        <View style={{transform: [{rotate: '180deg'}]}}>
          <RenderSvgIcon
            icon={'ARROWBACK'}
            color="#A0ACB6"
            width={18}
            style={{marginLeft: 5, marginRight: 0}}
          />
        </View>
        <CountryPicker
          show={show}
          onBackdropPress={() => setShow(false)}
          pickerButtonOnPress={item => {
            setSelectedCode(item);
            props?.setFieldValue('code', item);
            setShow(false);

            if (setcode) {
              props?.setFieldValue(`phones[${index}]["code"]`, item.dial_code);
              setcode(item.dial_code);
            }
            if (setCodes) {
                setCodes(item.dial_code);
              }
          }}
          lang={'en'}
          style={{
            itemsList: {height: appSizes.height * 0.7},
          }}
          enableModalAvoiding={false}
        />
      </TouchableOpacity>
    </View>
  );
};

export default NewPicker;
