import { memo } from 'react'
import { useField } from 'formik'
import { Form, FormItemProps, Input } from 'antd'

type InputFieldProps = {
    label?: string;
    name: string;
    placeholder?: string;
    allowClear?: boolean;
    size?: 'large' | 'middle' | 'small';
    formStyle?: React.CSSProperties;
    fieldStyle?: React.CSSProperties;
} & FormItemProps
// ----------------------------------------------------------------------

const PasswordField = ({ label, name, ...props }: InputFieldProps) => {
    const [field, meta] = useField({ name })

    return (
        <Form.Item
            help={meta.touched && meta.error}
            label={label}
            validateStatus={meta.touched && meta.error ? 'error' : 'success'}
            style={{ marginBottom: 30 }}
        >
            <Input.Password
                style={props?.fieldStyle}
                name={name}
                size={props.size ? props.size : 'large'}
                value={meta.value}
                placeholder={props?.placeholder}
                allowClear={props?.allowClear}
                onChange={field.onChange}
                onBlur={field.onBlur}
            >
            </Input.Password>
        </Form.Item >
    )
}
export default memo(PasswordField)