import { StyleSheet } from 'react-native';
import { appColors, appSizes } from 'theme';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.appcolor,
  },
  cellRoot: {
    width: 67,
    height: 57,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: appColors.violt200,
    borderWidth: 1,
   
    opacity: 0.5,
    alignSelf: 'center',
    backgroundColor: '#281A49',
    // marginBottom:20,
    borderRadius:16
  },
  focusCell: {
    borderColor:'red',
    borderWidth: 2,
  },
  cellText: {
    color:appColors.White50,
    fontSize: 36,
    textAlign: 'center',
  },
resendCode:{
  color: appColors.White50,
  fontSize: 14,
  fontWeight: '400',
  // textAlign: 'center',
  // marginTop: appSizes.spacing_m,
  textDecorationLine:"underline",
  fontFamily:'Noto Sans'
},
});

export default styles;
