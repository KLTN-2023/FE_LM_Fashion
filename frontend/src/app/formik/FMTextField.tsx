import { memo } from 'react'
import { useField } from 'formik'
import { Form, FormItemProps, Input } from 'antd'
// ----------------------------------------------------------------------

type Props = {
    label?: string;
    name: string;
    placeholder?: string;
    allowClear?: boolean;
    type?: string;
    size?: 'large' | 'middle' | 'small';
    formStyle?: React.CSSProperties;
    fieldStyle?: React.CSSProperties;
    prefix?: React.ReactNode;
} 
// ----------------------------------------------------------------------

const InputField = ({ label, name, ...props }: Props) => {
    const [field, meta] = useField({ name })

    return (
        <Form.Item
            help={meta.touched && meta.error}
            label={label}
            validateStatus={meta.touched && meta.error ? 'error' : 'success'}
            style={Object.assign({ marginBottom: 30 }, { ...props?.formStyle })}
        >
            <Input
                name={name}
                size={props.size ? props.size : 'large'}
                value={meta.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                {...props}
            >
            </Input>
        </Form.Item >
    )
}
export default memo(InputField)