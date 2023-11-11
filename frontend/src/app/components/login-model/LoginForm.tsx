import { Button, Flex, Form, Input, InputNumber } from "antd";
import Title from "antd/es/typography/Title";
import staticText from '@/app/static/home-text.json'

const LoginForm = () => (
    <Form
        title="Đăng nhập"
        name="basic"
        style={{ flex: 1 }}
        autoComplete="false"
    >
        <Title style={{ marginBottom: 20 }} level={2}> Đăng nhập</Title>
        <p>
            {staticText.loginDescription}
        </p>
        <Flex wrap="wrap" gap={10} justify={'space-between'} style={{ marginTop: 20 }}>
            <Form.Item
                style={{ flex: 2 }}
                name="name"
            >
                <Input size="large" placeholder="Tên" />
            </Form.Item>
            <Form.Item
                style={{ flex: 1 }}
                name="phone"
            >
                <InputNumber size="large" type="number" placeholder="Số điện thoại" controls={false} style={{ width: '100%' }} />
            </Form.Item>
        </Flex>
        <Form.Item
            name="email"
            required
        >
            <Input size="large" placeholder="Email của bạn" required />
        </Form.Item>
        <Form.Item
            name="password"
            required
        >
            <Input.Password size="large" placeholder="Mật khẩu" required />
        </Form.Item>
        <Form.Item
            name="confirmpassword"
            required
        >
            <Input.Password size="large" placeholder="Nhập lại mật khẩu" required />
        </Form.Item>
        <Form.Item >
            <Button type="primary" htmlType="submit" size="large" style={{ width: '100%' }}>
                Đăng nhập
            </Button>
        </Form.Item>
    </Form>
)

export default LoginForm