import React from "react";
import { Divider, Flex, Image, Modal } from "antd";
import LoginForm from "./LoginForm";
import externalLink from '@/app/static/external-link.json'
type ModalProps = {
    isShowModal: boolean;
    handleCloseModal: Function
    setAction: Function
}
// --------------------------------------------------------
const LoginModal = ({ isShowModal, handleCloseModal, setAction }: ModalProps) => {
    return (
        <Modal open={isShowModal} footer={false} onCancel={() => handleCloseModal()} width={900}  >
            <Flex dir={'row'}>
                <Image
                    style={{ width: 400 }}
                    src={externalLink.loginFormImage}
                    preview={false}
                />
                <Divider type="vertical" style={{ height: 'inherit', flex: 0.05, border: 'none' }} />
                <LoginForm setAction={setAction} />
            </Flex>
        </Modal >
    )
}
export default React.memo(LoginModal)