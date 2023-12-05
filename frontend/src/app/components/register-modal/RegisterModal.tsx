import { Divider, Flex, Image, Modal } from "antd";
import React from "react";
import externalLink from '@/app/static/external-link.json'
import RegisterForm from "./RegisterForm";
type ModalProps = {
    isShowModal: boolean;
    handleCloseModal: Function;
    setAction: Function;
}
// --------------------------------------------------------
const RegisterModal = ({ isShowModal, handleCloseModal, setAction }: ModalProps) => {
    return (
        <Modal open={isShowModal} footer={false} onCancel={() => handleCloseModal()} width={900} >
            <Flex dir={'row'}>
                <Image 
                    style={{ flex: 1 }} preview={false}
                    src={externalLink.loginFormImage}
                />
                <Divider type="vertical" style={{ height: 'inherit', flex: 0.05, border: 'none' }} />
                <RegisterForm setAction={setAction} />
            </Flex>
        </Modal >
    )
}
export default React.memo(RegisterModal)