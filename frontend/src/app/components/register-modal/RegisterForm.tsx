import { useCallback } from "react";
import { Button, Divider, Flex, Form } from "antd";
import { FormikProvider, useFormik } from "formik";
import Title from "antd/es/typography/Title";
import staticText from '@/app/static/home-text.json'
import { FMSubmitButton, FMTextField, FMPasswordField } from "@/app/formik";
import Paragraph from "antd/es/typography/Paragraph";
import { RegisterFormikProps, initialValues, createValidationSchema } from "./RegisterFormCommon";
// --------------------------------------------------------
type RegisterForm = {
    setAction: Function
}
// --------------------------------------------------------
const RegisterForm = ({ setAction }: RegisterForm) => {
    const handleChangeAction = useCallback(() => {
        setAction('login')
    }, [])

    const onSubmit = useCallback((values: RegisterFormikProps) => {
        console.log(values)
    }, [])

    const fomrikBag = useFormik({
        initialValues,
        onSubmit,
        validationSchema: createValidationSchema,
        validateOnChange: false,
        validateOnBlur: false
    })

    return (
        <FormikProvider value={fomrikBag} >
            <Form
                title="Đăng ký" 
                autoComplete="false"
            >
                <Title style={{ marginBottom: 20 }} level={2}>Đăng ký</Title>
                <Paragraph>{staticText.registerDescription}</Paragraph>
                <Divider />
                <Flex wrap="wrap" gap={10} justify={'space-between'} >
                    <FMTextField placeholder={'Tên'} name={'name'} allowClear formStyle={{ flex: 2 }} />
                    <FMTextField placeholder={'Số điện thoại'} name={'phone'} allowClear formStyle={{ flex: 1.5 }} />
                </Flex>
                <FMTextField placeholder={'Email'} name={'email'} allowClear />
                <FMPasswordField placeholder={'Mật khẩu'} name={'password'} allowClear />
                <FMPasswordField placeholder={'Nhập lại mật khẩu'} name={'confirmPassword'} allowClear />
                <FMSubmitButton text={'Đăng ký'} />
                <Button
                    type={'link'} style={{ paddingLeft: 0 }}
                    onClick={handleChangeAction}>
                    Đã có tài khoản?&nbsp;&nbsp;Đăng nhập
                </Button>
            </Form>
        </FormikProvider>
    )
}

export default RegisterForm