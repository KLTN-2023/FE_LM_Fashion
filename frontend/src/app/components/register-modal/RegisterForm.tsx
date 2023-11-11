import { Button, Divider, Flex, Form, Input, InputNumber } from "antd";
import { RegisterFormikProps, initialValues, createValidationSchema } from "./RegisterFormCommon";
import Title from "antd/es/typography/Title";
import staticText from '@/app/static/home-text.json'
import { FormikProvider, useFormik } from "formik";
import Paragraph from "../paragraph/Paragraph";
import { FMSubmitButton, FMTextField } from "@/app/formik";
import FMPasswordField from "@/app/formik/FMPasswordField";
// --------------------------------------------------------
type RegisterForm = {
    setAction: Function
}
// --------------------------------------------------------
const RegisterForm = ({ setAction }: RegisterForm) => {
    const handleChangeAction = () => {
        setAction('login')
    }
    const fomrikBag = useFormik({
        initialValues,
        onSubmit: (values: RegisterFormikProps) => {
            console.log(values)
        },
        validationSchema: createValidationSchema
    })

    return (
        <FormikProvider value={fomrikBag}>
            <Form
                title="Đăng ký" style={{ flex: 1 }}
                autoComplete="false"
            >
                <Title style={{ marginBottom: 20 }} level={2} > Đăng ký</Title>
                <Paragraph text={staticText.registerDescription} />
                <Divider />
                <Flex wrap="wrap" gap={10} justify={'space-between'} >
                    <FMTextField placeholder={'Tên'} name={'name'} allowClear formStyle={{ flex: 2 }} />
                    <FMTextField placeholder={'Số điện thoại'} name={'phone'} allowClear formStyle={{ flex: 1 }} />
                </Flex>
                <FMTextField placeholder={'Email'} name={'email'} allowClear />
                <FMPasswordField placeholder={'Mật khẩu'} name={'password'} allowClear />
                <FMPasswordField placeholder={'Nhập lại mật khẩu'} name={'confirmPassword'} allowClear />
                <FMSubmitButton context={'Đăng ký'} />
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