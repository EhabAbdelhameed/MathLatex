import React, { forwardRef } from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { Portal } from '@gorhom/portal';
import { appSizes } from '../../theme/appSizes';
import { appColors } from '../../theme/appColors';



const modalHeight = appSizes.height * 0.8;

const RNModal = (props: any, ref: any) => {
    const { renderModalHeader, renderModalFooter,height } = props;

    return (
        <Portal>
            <Modalize
                ref={ref}
                adjustToContentHeight={false}
                onHide
                HeaderComponent={renderModalHeader ? renderModalHeader() : null}
                FloatingComponent={
                    renderModalFooter
                        ? renderModalFooter()
                        : null
                }
                disableScrollIfPossible={true}
                // alwaysOpen={1000}
                FooterComponent={renderModalFooter ? renderModalFooter() : null}
                modalStyle={styles.modal}
                panGestureEnabled={false}
                keyboardAvoidingBehavior="height"
                // modalHeight={1000}
                modalHeight={height?height:appSizes.height*.5}
                avoidKeyboardLikeIOS={Platform.OS === 'ios'}
                // disableScrollIfPossible
                withReactModal={ true }
                withHandle={false}
                handlePosition={'inside'}
                scrollViewProps={{
                    keyboardShouldPersistTaps: 'handled',
                    scrollEnabled: true,
                    showsVerticalScrollIndicator: false,
                    contentContainerStyle: {
                        flex: 1,
                    },
                }}
                {...props}>
                {props.children}
            </Modalize>
        </Portal>
    );
};

const styles = StyleSheet.create({
    modal: {
        paddingTop: 16,
        backgroundColor: appColors.white,
        maxHeight:100
    },
});
export default forwardRef(RNModal);
