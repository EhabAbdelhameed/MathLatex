import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';

import {Dropdown} from 'react-native-element-dropdown';

import {ArrowDown, ArrowUP} from 'assets/Svgs';

import {appColors} from 'theme';

const DropdownComponent = ({
  DropdownArray,
  data,
  setCountry_id,
  setSchool_id,
  setLevel_id,
  props,
}: {
  DropdownArray: any;
  data: any;
  setCountry_id?: React.Dispatch<React.SetStateAction<any>>;
  setSchool_id?: React.Dispatch<React.SetStateAction<any>>;
  setLevel_id?: React.Dispatch<React.SetStateAction<any>>;
  props?: any;
}) => {
  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

 
  return (
    <View
      style={[
        styles.Container,
        {
          borderColor:
            DropdownArray == 'Country' &&
            props?.errors['Country_id'] &&
            props?.touched['Country_id']
              ? 'red'
              : DropdownArray == 'Grade Level' &&
                props?.errors['Grade_id'] &&
                props?.touched['Grade_id']
              ? 'red'
              :DropdownArray == 'School Name' && props?.errors['School_id'] && props?.touched['School_id'] 
              ? 'red'
              
              : appColors.violt200
        },
      ]}>
      <View style={[styles.line]}>
        <Text style={styles.label1}>{DropdownArray}</Text>
      </View>
      <Dropdown
        style={[
          styles.dropdown,
          isFocus && {borderColor: 'blue'},
          {
            width:
              DropdownArray == 'Country'
                ? '83%'
                : DropdownArray == 'Grade Level'
                ? '75%'
                : '70%',
            // backgroundColor: appColors.appcolor,
          },
        ]}
        containerStyle={{
          borderWidth: 1,
          borderRadius: 5,
          backgroundColor: appColors.appcolor,
          borderColor: appColors.violt200,
          width: '90%',
          position:'absolute',
          left:10,
          top:100

          
        }}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconColor={appColors.violt200}
        activeColor={appColors.violt200}
        placeholder={
          DropdownArray == 'Country' ? 'Select country' : 'Select item'
        }
        iconStyle={styles.iconStyle}
        data={data}
        itemTextStyle={{color: '#FFF'}}
        itemContainerStyle={{backgroundColor: appColors?.appcolor}}
        search
        maxHeight={300}
        labelField={DropdownArray == 'Country' ? 'name_en' : 'name'}
        valueField="id"
        searchPlaceholder="Search..."
        dropdownPosition={'auto'}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item: any) => {
          if (item && typeof item === 'object') {
            const itemId = item.id;
            if (DropdownArray === 'Country' && setCountry_id) {
              setCountry_id(itemId);
              props?.setFieldValue('Country_id', itemId);
            } else if (DropdownArray === 'Grade Level' && setLevel_id) {
              setLevel_id(itemId);
              props?.setFieldValue('Grade_id', itemId);
            } else if (DropdownArray === 'School Name' && setSchool_id) {
              setSchool_id(itemId);
              props?.setFieldValue('School_id', itemId);
            }
          }
          setIsFocus(false);
        }}
        renderRightIcon={() =>
          dropdownOpen ? (
            <ArrowUP width={24} height={24} />
          ) : (
            <ArrowDown width={24} height={24} />
          )
        }
        // Change modal background color
      />
    </View>
  );
};

export default DropdownComponent;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    // borderColor: 'gray',
    // borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: '80%',
    // backgroundColor: appColors.violt200,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 14,
    color: appColors.violt200,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: appColors.White50,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,

    color: appColors.White50,
    backgroundColor: appColors.appcolor,
    borderBottomWidth: 0.5,
    borderColor: appColors.violt200,
    borderWidth: 0,
  },
  Container: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: 16,
    alignContent: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 10,
    borderColor: appColors.violt200,
    // marginBottom:15
  },
  Input: {
    height: '100%',
    fontSize: 14,
    width: '60%',
    color: appColors.White50,
  },
  line: {
    paddingHorizontal: 10,
    borderRightWidth: 1,
    borderColor: '#947EC8',
    // backgroundColor:'red',
    // width:90

    // height:20,
    // width:'40%'

    // width:50
  },
  label1: {
    fontSize: 14,
    color: appColors.White50,
    fontFamily: 'Noto Sans',
    fontWeight: '300',
  },
});
