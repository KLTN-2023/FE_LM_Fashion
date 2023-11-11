import { useCallback } from 'react';
import * as Yup from 'yup';
// --------------------------------------------------------
type LoginFormikProps = {
    email: string;
    password: string;
}
// --------------------------------------------------------
const initialValues: LoginFormikProps = {
    email: 'test@gmail.com',
    password: '123456789'
}

const createValidationSchema = () => {
    return Yup.object({
        email: Yup.string()
            .email('Email không hợp lệ')
            .required('Vui lòng nhập email'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Vui lòng nhập mật khẩu'),
    })
}

export { initialValues, createValidationSchema };
export type { LoginFormikProps };
