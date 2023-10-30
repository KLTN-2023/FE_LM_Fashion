import React from "react";
import { Avatar, Card, List, Skeleton, Space } from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from "@ant-design/icons";
import { ListItemLayout, ListSize } from "antd/es/list";
import Meta from "antd/es/card/Meta";
// -----------------------------------------------------------------------
const DEFAULT_PAGE_SIZE = 3



type ListDataProps = {
    itemLayout?: ListItemLayout | undefined
    size?: ListSize | undefined;
    onPagination: (page: number) => void;
    pageSize?: number
    className?: string;
    style?: React.CSSProperties;
}

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const Footer: React.FC = () => (
    <div>
        <b>CMS</b> cms part
    </div>
)
// -----------------------------------------------------------------------
const ListData: React.FC<ListDataProps> = ({ itemLayout, size, onPagination, pageSize, ...other }) => {
    const [loading, setLoading] = React.useState<boolean>(false)

    return (
        <List
            itemLayout={'horizontal'}
            pagination={{
                onChange: onPagination,
                pageSize: pageSize ? pageSize : DEFAULT_PAGE_SIZE
            }}
            size={size}
            dataSource={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
            footer={
                <Footer />
            }
            grid={{
                gutter: 16, column: 4, xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 6,
                xxl: 3,
            }}
            renderItem={(item) => (
                <List.Item>
                    <Card
                        actions={[
                            <SettingOutlined key="setting" />,
                            <EditOutlined key="edit" onClick={() => { setLoading(!loading) }} />,
                            <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Skeleton loading={loading} avatar active>
                            <Meta
                                avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />}
                                title="Card title"
                                description="This is the description"
                            />
                        </Skeleton>
                    </Card>
                </List.Item>

                // <List.Item
                //     key={item.title}
                //     actions={[
                //         <IconText icon={StarOutlined} text="String" key="list-vertical-star-o" />,
                //         <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />
                //     ]}
                //     extra={
                //         <img
                //             width={272}
                //             alt="logo"
                //             src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                //         />
                //     }
                // >
                //     <List.Item.Meta
                //         avatar={<Avatar src={item.avatar} />}
                //         title={<a href={item.title}>{item.title}</a>}
                //         description={'haha'}
                //     />
                //     {item.content}
                // </List.Item>
            )}
            style={{ ...other.style } &&
            {
                marginLeft: '50px!important',
                marginRight: '50px!important',
                marginTop: '50px!important',
                marginBottom: '50px!important',

            }}
            {...other}
        />
    )
}
export default React.memo(ListData)