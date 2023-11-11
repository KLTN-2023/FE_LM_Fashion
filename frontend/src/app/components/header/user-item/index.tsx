'use client'
import React, { useMemo } from 'react';
import { Dropdown, Input, Modal, Tag, message } from 'antd';
import type { MenuProps } from 'antd';
import { isEmpty, isNil } from 'rambda';
import { useRouter } from 'next/navigation';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import menuItem from '@/app/static/header-item.json';
import styles from './styles.module.scss';
import LoginModal from '../../login-modal/LoginModal';
import RegisterModal from '../../register-modal/RegisterModal';
// ----------------------------------------------
type MenuClickEvent = MenuProps['onClick'];
type Action = 'login' | 'register' | null
const { Search } = Input;
// ----------------------------------------------
function UserItem() {
    const router = useRouter();
    const [isLogin, setIsLogin] = React.useState<boolean>(false);
    const [isShowModel, setIsShowModel] = React.useState<boolean>(false);
    const [action, setAction] = React.useState<Action>()

    const items = isLogin ? [...menuItem.userMenuItem] : [...menuItem.guestMenuItem]


    const handleMenuClick: MenuClickEvent = (event) => {
        const { key } = event;
        const item = items.find((item) => item.key === key);
        switch (item?.link) {
            case 'login':
                setIsShowModel(true)
                setAction('login')
                break;
            case 'register':
                setIsShowModel(true)
                setAction('register')
                break;
            default:
                break;
        }
        // router.push(item?.link || '/');
    }
    const handleSearch = (value: string) => {
        if (isEmpty(value) || isNil(value))
            message.error('Please enter a search term');
        else 
            message.info(value)
    }
    const handleCloseModal = () => {
        setIsShowModel(false)
    }

    const menuList = {
        items,
        onClick: handleMenuClick
    };

    return (
        <div className={styles['user__container']}>
            <Search
                className={styles['user__search']}
                allowClear
                size='large'
                placeholder='Search'
                onSearch={handleSearch}
            />
            <div className={styles['user__item']}>
                <Dropdown menu={menuList} placement='bottom' overlayStyle={{ width: '160px' }}>
                    <UserOutlined />
                </Dropdown>
            </div>
            <ShoppingCartOutlined className={styles['user__cart']} />
            <Tag className={styles['user__tag']} color='white'>11</Tag>
            {action === 'login' && <LoginModal isShowModal={isShowModel} handleCloseModal={handleCloseModal} />}
            {action === 'register' && <RegisterModal isShowModal={isShowModel} handleCloseModal={handleCloseModal} />}
        </div >
    )
}

export default React.memo(UserItem);