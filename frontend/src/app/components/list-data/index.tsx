import React from "react";
import { Card, Image, List, Skeleton } from "antd";
import { ListGridType, ListItemLayout, ListSize } from "antd/es/list";
import Meta from "antd/es/card/Meta";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from "@ant-design/icons";
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

const Footer: React.FC = () => (
    <div>
        <b>CMS</b> cms part
    </div>
)

const listGridStyle: ListGridType = {
    gutter: 46, column: 4, xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 4,
    xxl: 4,
}
const imageItem = "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/April2023/Ao_thun_cotton_in_Care_Share_moi-6.jpg"
// -----------------------------------------------------------------------
const ListData: React.FC<ListDataProps> = ({ itemLayout, size, onPagination, pageSize, ...other }) => {
    const [loading, setLoading] = React.useState<boolean>(false)

    return (
        <List
            style={{ ...other.style } &&
            {
                margin: '50px !important',
            }}
            itemLayout={itemLayout ? itemLayout : 'vertical'}
            pagination={{
                onChange: onPagination,
                pageSize: pageSize ? pageSize : DEFAULT_PAGE_SIZE
            }}
            size={size}
            dataSource={Array.from({ length: 16 }).map((_, i) => i)}
            grid={listGridStyle}    
            renderItem={(item) => (
                <List.Item style={{ marginBottom: 50 }}>
                    <Skeleton loading={loading} active avatar paragraph={{ rows: 6 }}>
                        <Card
                            cover={
                                <Image
                                    style={{
                                        margin: 'auto',
                                        imageRendering: '-webkit-optimize-contrast'
                                    }}
                                    src={imageItem} />
                            }
                            actions={[
                                <SettingOutlined key="setting" />,
                                <EditOutlined key="edit" onClick={() => { setLoading(!loading) }} />,
                                <EllipsisOutlined key="ellipsis" />,
                            ]}>
                            <Meta
                                title="Card title"
                                description="This is the description"
                            />
                        </Card>
                    </Skeleton>
                </List.Item>
            )}
            footer={<Footer />}
            {...other}
        />
    )
}
export default (ListData)