import { Button, Divider, Flex, Form, Input, InputNumber, Space } from "antd";
import Title from "antd/es/typography/Title";
import staticText from '@/app/static/home-text.json'

const RegisterForm = () => (
    <Form
        title="Đăng ký"
        name="basic"
        style={{ flex: 1 }}
        autoComplete="false"
    >
        <Title style={{ marginBottom: 20 }} level={2}> Đăng ký</Title>
        <p>
            {staticText.registerDescription}
        </p>
        <Divider />
        <Flex wrap="wrap" gap={10} justify={'space-between'} >
            <Form.Item
                style={{ flex: 2 }}
                name="name"
            >
                <Input size="large" placeholder="Tên" />
            </Form.Item>
            <Form.Item
                style={{ flex: 1.5 }}
                name="phone"
            >
                <InputNumber size="large" type="number" placeholder="Số điện thoại" controls={false} style={{ width: '100%' }} />
            </Form.Item>
        </Flex>
        <Form.Item
            name="email"
            required
        >
            <Input size="large" placeholder="Email của bạn" required allowClear />
        </Form.Item>
        <Form.Item
            name="password"
            required
        >
            <Input.Password size="large" placeholder="Mật khẩu" required allowClear />
        </Form.Item>
        <Form.Item
            name="confirmpassword"
            required
        >
            <Input.Password size="large" placeholder="Nhập lại mật khẩu" required allowClear />
        </Form.Item>
        <Form.Item >
            <Button type="primary" htmlType="submit" size="large" style={{ width: '100%' }}>
                Đăng ký
            </Button>
        </Form.Item>
    </Form>
)

export default RegisterForm