import { Text } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import { login_initial_values } from 'src/Formik/intialvalues'
import { LoginSchema } from 'src/Formik/schema'
import CustomInput from 'components/molecules/Input/CustomInput'
import styles from '../styles'
import { useNavigation } from '@react-navigation/native'
import CustomButton from 'components/molecules/Button/CustomButton'
import AuthThunks from 'src/redux/auth/thunks'
import { useAppDispatch, useAppSelector } from 'src/redux/store'
import { selectIsSignedUp, selectVerified } from 'src/redux/auth'

const Form = () => {
    const dispatch = useAppDispatch()
    const navigation = useNavigation<any>();
    const Verified = useAppSelector(selectVerified);
    const signedUp = useAppSelector(selectIsSignedUp);
    const [loading, setLoading] = React.useState(false);
    return (
        <Formik
            initialValues={login_initial_values}
            validationSchema={LoginSchema}
            onSubmit={values => {
                setLoading(true);
                const formdata = new FormData();
                formdata.append('email', values.email);
                formdata.append('password', values.password);

                dispatch(AuthThunks.doSignIn(formdata)).then((res: any) => {
                    setLoading(false);
                });
            }}>
            {props => (
                <>
                    <CustomInput
                        {...props}
                        Label={'email'}
                        placeholder="Write your email"
                    />
                    <CustomInput
                        {...props}
                        Label={'password'}
                        placeholder="Write your password"
                        secureTextEntry={true}
                    />
                    <Text style={styles.forgotPassword} onPress={() => navigation.navigate('ForgetPassword')}>Forgot password ?</Text>
                    <CustomButton
                        loading={loading}
                        text="Login"
                        onPress={props.handleSubmit}
                    />
                </>
            )
            }
        </Formik >
    )
}

export default Form