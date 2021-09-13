import React from "react"
import {Box, Flex} from "rebass";
import {Formik} from "formik";
import {API} from "../../shared/api";
import Layout from "../../components/Layout";
import theme from "../../shared/theme";
import Input from "../../components/Input";
import Button from "../../components/Button";
import {useRouter} from "next/router";

const messages = {
    username: {
        valid: 'Логин введен',
        invalid: 'Введите логин'
    },
    password: {
        valid: 'Пароль введен',
        invalid: 'Введите пароль'
    }
}


export default function Login() {
    const router = useRouter();

    function validate(values) {
        const errors = {};

        if (!values.username) {
            errors.username = messages.username.invalid;
        }

        if (!values.password) {
            errors.password = messages.password.invalid;
        }

        return errors;
    }

    function handleSubmit(values, {setSubmitting}) {

        API.loginByCredentials(values).then(res => {
            const payload = res.data
            payload.role = res.data.user.role

            router.push({pathname: "/auth", query: res.data})
        }).catch(res => {
        })
    }

    return (
        <Layout title={'Вход'}>
            <Flex theme={theme}
                  variant='login'
                  flexDirection='column'
                  alignItems='center'
                  justifyContent='center'>

                <Flex variant='login.box' theme={theme} flexDirection='column' alignItems='center'>
                    <Box as={'h1'} theme={theme} variant={'login.box.heading'}>Авторизация</Box>
                    <Box theme={theme} variant={'login.box.heading.sub'}>
                        Пожалуйста, введите свой логин и пароль, чтобы авторизоваться
                    </Box>
                    <Formik
                        initialValues={{username: '', password: ''}}
                        validate={validate}
                        onSubmit={handleSubmit}
                    >
                        {({
                              values,
                              errors,
                              touched,
                              handleChange,
                              handleBlur,
                              handleSubmit,
                              isSubmitting
                          }) => (
                            <Box as={'form'} theme={theme} variant={'login.box.form'} onSubmit={handleSubmit}>
                                <Box theme={theme} variant={'login.box.form.input'}>
                                    <Input
                                        type="text"
                                        name="username"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.username}
                                        placeholder='Введите логин'
                                        disabled={isSubmitting}
                                        error={errors.username && touched.username && errors.username}
                                        success={touched.username && !errors.username && messages.username.valid}
                                    />
                                </Box>
                                <Box theme={theme} variant={'login.box.form.input'}>
                                    <Input
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                        placeholder='Введите пароль'
                                        disabled={isSubmitting}
                                        error={errors.password && touched.password && errors.password}
                                        success={touched.password && !errors.password && messages.password.valid}
                                    />
                                </Box>
                                <Box theme={theme} variant={'login.box.form.submit'}>
                                    <Button size="xLarge" type="submit" disabled={isSubmitting}>Войти</Button>
                                </Box>
                            </Box>
                        )}
                    </Formik>
                </Flex>
            </Flex>
        </Layout>
    )
}