import { memo } from 'react'
import { useField } from 'formik'
import { Form, FormItemProps, Input } from 'antd'
// ----------------------------------------------------------------------

type InputFieldProps = {
    label?: string;
    name: string;
    placeholder?: string;
    allowClear?: boolean;
    type?: string;
    size?: 'large' | 'middle' | 'small';
    formStyle?: React.CSSProperties;
    fieldStyle?: React.CSSProperties;
    prefix?: React.ReactNode;
} & FormItemProps
// ----------------------------------------------------------------------

const InputField = ({ label, name, ...props }: InputFieldProps) => {
    const [field, meta] = useField({ name })


    return (
        <Form.Item
            help={meta.touched && meta.error}
            label={label}
            validateStatus={meta.touched && meta.error ? 'error' : 'success'}
            style={Object.assign({ marginBottom: 30 }, props?.formStyle)}
        >
            <Input
                prefix={props?.prefix}
                style={props?.fieldStyle}
                name={name}
                type={props?.type}
                size={props.size ? props.size : 'large'}
                value={meta.value}
                placeholder={props?.placeholder}
                allowClear={props?.allowClear}
                onChange={field.onChange}
                onBlur={field.onBlur}
            >
            </Input>
        </Form.Item >
    )
}
export default memo(InputField)