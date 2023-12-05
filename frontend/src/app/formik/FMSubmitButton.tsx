import React from "react";
import { Button, Form } from "antd";
import { useFormikContext } from "formik";
// --------------------------------------------------------
type Props = {
    name?: string;
    text?: string
    type?: "text" | "link" | "default" | "primary" | "dashed" | undefined
    fieldStyle?: React.CSSProperties;
    formStyle?: React.CSSProperties;
}
// --------------------------------------------------------
const FMSubmitButton = ({ text, type, ...props }: Props) => {
    const { submitForm } = useFormikContext()

    return (
        <Form.Item style={props?.formStyle}>
            <Button
                style={{ width: '100%' }}
                type={type ? type : "primary"}
                htmlType="submit"
                size="large"
                onClick={() => submitForm()}
            >
                {text}
            </Button>
        </Form.Item>
    )
}

export default React.memo(FMSubmitButton)