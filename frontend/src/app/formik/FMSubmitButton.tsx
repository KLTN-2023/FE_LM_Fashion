import { Button, Form } from "antd"
import { useField, useFormikContext } from "formik"
import React from "react";
import { useCallback } from "react";
// --------------------------------------------------------
type SubmitButtonProps = {
    name?: string;
    context?: string
    type?: "text" | "link" | "default" | "primary" | "dashed" | undefined
    fieldStyle?: React.CSSProperties;
    formStyle?: React.CSSProperties;
}
// --------------------------------------------------------
const FMSubmitButton = ({ name, context, type,...props }: SubmitButtonProps) => {
    // const [field, meta] = useField({ name })
    const { submitForm, values } = useFormikContext()

    return (
        <Form.Item 
            style={props?.formStyle}
            >
            <Button
                style={{ width: '100%' }}
                type={type ? type : "primary"}
                htmlType="submit"
                size="large"
                onClick={() => submitForm()}
            >
                {context}
            </Button>
        </Form.Item>
    )
}

export default React.memo(FMSubmitButton)