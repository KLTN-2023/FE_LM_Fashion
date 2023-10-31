'use client'
import React from 'react';
import { Dropdown, Input, Tag, message } from 'antd';
import type { MenuProps } from 'antd';
import { isEmpty, isNil } from 'rambda';
import { useRouter } from 'next/navigation';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import menuItem from '@/app/static/header-item.json';
import styles from './styles.module.scss';
// ----------------------------------------------
type MenuClickEvent = MenuProps['onClick'];
const { Search } = Input;
// ----------------------------------------------
function UserItem() {
    const router = useRouter();
    const items = [
        ...menuItem.userMenuItem
    ];

    const handleMenuClick: MenuClickEvent = (event) => {
        const { key } = event;
        const item = items.find((item) => item.key === key);
        router.push(item?.link || '/');
    }
    const handleSearch = (value: string) => {
        if (isEmpty(value) || isNil(value))
            message.error('Please enter a search term');
        else 
            message.info(value)
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
        </div >
    )
}

export default React.memo(UserItem);