'use client'
import { Layout } from 'antd';
import React from "react";
import HeaderItem from './header-item';
import Logo from './logo';
import UserItem from './user-item';

const { Header } = Layout;
type HeaderItem = {
    key: number;
    label: string;
}
// ----------------------------------------------------------------------
const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#001529',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

function CustomHeader() {


    return (
        <Header style={headerStyle}>
            <Logo />
            <HeaderItem />
            <UserItem />
            {/* <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={items}
            /> */}
        </Header>
    )
}

export default React.memo(CustomHeader);