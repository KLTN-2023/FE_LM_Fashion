import React from "react";
import { FormikProvider, useFormik } from "formik";
import { Button, Divider, Form } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import staticText from '@/app/static/home-text.json';
import { FMPasswordField, FMSubmitButton, FMTextField } from "@/app/formik";
import { LoginFormikProps, initialValues, createValidationSchema as validationSchema } from "./LoginFormCommon";
// --------------------------------------------------------
type LoginForm = {
    setAction: Function
}
// --------------------------------------------------------
const LoginForm = ({ setAction }: LoginForm) => {
    const onSubmit = (values: LoginFormikProps) => {
        console.log(values)
    }
    const formikBag = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
        validateOnChange: false,
        validateOnBlur: false
    })

    return (
        <FormikProvider value={formikBag}>
            <Form
                title="Đăng nhập"
                name="basic"
                style={{ flex: 1 }}
                autoComplete="false"
            >
                <Title style={{ marginBottom: 20 }} level={2}> Đăng nhập</Title>
                <Paragraph> {staticText.loginDescription} </Paragraph>
                <Divider />
                <FMTextField placeholder={'Email của bạn'} name={'email'} allowClear />
                <FMPasswordField placeholder={'Mật khẩu'} name={'password'} allowClear />
                <FMSubmitButton formStyle={{ marginTop: 40 }} text={'Đăng nhập'} />
                <Button style={{ width: '100%' }} size="large" >Quên mật khẩu</Button>
                <Button
                    style={{ paddingLeft: 0, marginTop: 10 }}
                    type="link"
                    onClick={() => setAction('register')}
                >
                    Chưa có tài khoản?&nbsp;&nbsp; Đăng ký ngay
                </Button>
            </Form>
        </FormikProvider>

    )
}

export default React.memo(LoginForm)