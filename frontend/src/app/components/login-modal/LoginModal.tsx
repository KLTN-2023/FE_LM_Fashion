import { Button, Divider, Flex, Image, Modal } from "antd";
import React from "react";
import LoginForm from "./LoginForm";
import externalLink from '@/app/static/external-link.json'
type ModalProps = {
    isShowModal: boolean;
    handleCloseModal: Function
}
// --------------------------------------------------------
const LoginModal = ({ isShowModal, handleCloseModal }: ModalProps) => {
    return (
        <Modal open={isShowModal} footer={false} onCancel={() => handleCloseModal()} width={800}  >
            <Flex dir={'row'}>
                <Image style={{ background: 'black', flex: 1, width: 300 }} src={externalLink.loginFormImage} />
                <Divider type="vertical" style={{ height: '100' }} />
                <LoginForm />
            </Flex>
        </Modal >
    )
}
export default React.memo(LoginModal)