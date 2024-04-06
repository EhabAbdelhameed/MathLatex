import {StyleSheet} from 'react-native';
import {appColors} from '../../../theme/appColors';
import {appSizes} from '../../../theme/appSizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: appColors.appcolor,
  },
  UploadImage: {
    height: 64,
    width: 64,
    borderRadius: 64,
    borderWidth: 1,
    borderColor: appColors.White50,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.violt300,
  },
});

export default styles;
