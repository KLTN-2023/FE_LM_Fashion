import { isNaturalNumber } from '@/app/interactor/validation';
import * as Yup from 'yup';
// --------------------------------------------------------
type RegisterFormikProps = {
    name: string;
    email: string;
    password: string;
    phone: string;
    confirmPassword: string;
}
// --------------------------------------------------------
const initialValues: RegisterFormikProps = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
}

const createValidationSchema = () => {
    return Yup.object({
        name: Yup.string()
            .min(6, 'Name must be at least 6 characters')
            .required('Vui lòng nhập họ và tên'),
        email: Yup.string()
            .email('Email không hợp lệ')
            .required('Vui lòng nhập email'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Vui lòng nhập mật khẩu'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
            .required('Vui lòng nhập lại mật khẩu'),
        phone: Yup.string()
            .min(10, 'Số điện thoại không hợp lệ')
            .required('Vui lòng nhập số điện thoại')
            .test('isNumber', 'Số điện thoại không hợp lệ', (value) => {
                if (value) {
                    return !isNaturalNumber(value)
                }
                return false
            }),
    })
}

export { initialValues, createValidationSchema };
export type { RegisterFormikProps };
