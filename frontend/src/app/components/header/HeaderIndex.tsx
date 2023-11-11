'use client'
import { Layout } from 'antd';
import HeaderItem from './header-item/HeaderItemIndex';
import UserItem from './user-item/UserItemIndex';
import Logo from './logo/LogoIndex';
// ----------------------------------------------------------------------
const { Header } = Layout;

type HeaderItem = {
    key: number;
    label: string;
}

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 80,
    lineHeight: '80px',
    backgroundColor: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    zIndex: 100,
    top: 0,
    left: 0,
    width: '100%',
    paddingBottom: '0px!important',
    boxShadow: `0 2px 24px 0 rgb(0 0 0 / 15%)`,
    animation: `500ms ease-in-out 0s normal none 1 running fadeInDown`,

    
};
// -----------------------------------------------------------------------------
function CustomHeader() {

    return (
        <Header style={headerStyle}>
            <Logo />
            <HeaderItem />
            <UserItem />
        </Header>
    )
}

export default (CustomHeader);