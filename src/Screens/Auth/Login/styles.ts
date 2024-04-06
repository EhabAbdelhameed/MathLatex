import {StyleSheet} from 'react-native';
import {appColors} from 'theme/appColors';
import {appSizes} from 'theme/appSizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.appcolor,
    paddingHorizontal: 20,
  },

  forgotPassword: {
    color: appColors.violt200,
    fontSize: 13,
    fontWeight: '200',
    textAlign: 'center',
    marginBottom: appSizes.spacing_m,
    fontFamily: 'Noto Sans',
    textDecorationLine:'underline',
    textDecorationColor:appColors.violt200
  },
  orContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginTop: appSizes.spacing_m,
  },
  orText: {
    color: '#B9B9B9',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Noto Sans',
  },
  line: {
    width: 51,
    height: 1,
    backgroundColor: '#B9B9B9',
  },
  socialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 20,
  },
  innerSocialContainer: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#7F65BD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Circle: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    backgroundColor:appColors.violt200,
    borderWidth: 1,
    borderColor: '#56389D',
    alignItems: "center",
    justifyContent: "center",
    // marginTop:2,
  },
  innerCircle: {
    width: 13,
    height: 13,
    borderRadius: 13 ,
    backgroundColor: '#56389D',
  }
});

export default styles;
